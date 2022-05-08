---
title: AWS
menu:
  docs_v2022.05.11:
    identifier: irsa-aws
    name: IAM Roles for Service Accounts (IRSA)
    parent: aws-guides
    weight: 12
menu_name: docs_v2022.05.11
section_menu_id: guides
url: /docs/v2022.05.11/guides/aws/iam_roles_for_serviceaccounts/
aliases:
- /docs/v2022.05.11/guides/aws/iam_roles_for_serviceaccounts/
info:
  alicloud: v0.5.0
  aws: v0.5.0
  azurerm: v0.5.0
  civo: v0.5.0
  cli: v0.2.0
  datadog: v0.5.0
  digitalocean: v0.5.0
  dynatrace: v0.5.0
  ec: v0.5.0
  equinixmetal: v0.5.0
  google: v0.5.0
  grafana: v0.5.0
  hcloud: v0.5.0
  ibm: v0.5.0
  installer: v2022.05.11
  linode: v0.5.0
  module: v0.1.0
  mongodbatlas: v0.5.0
  newrelic: v0.5.0
  oci: v0.5.0
  ovh: v0.5.0
  pagerduty: v0.5.0
  rediscloud: v0.5.0
  upcloud: v0.5.0
  version: v2022.05.11
  vsphere: v0.5.0
  vultr: v0.5.0
  wavefront: v0.5.0
---

# EKS IAM Roles for Service Accounts

This guide will show you how to enable and configure IAM roles for service accounts(IRSA) on your AWS EKS clusters and Kubeform so that you can use IRSA feature in Kubeform.

> You can associate an IAM role with a Kubernetes service account. This service account can provide AWS permissions to the containers in any pod that uses that service account.

## 1. Before You Begin

- Before you begin, make sure you have performed the following tasks:    
    - Ensure that you have installed and configured `aws` CLI   
    - Ensure that you have installed `eksctl` CLI

## 2. Create EKS Cluster

At first, you need to create an AWS EKS cluster. Let's use below yaml for creating an AWS EKS cluster:
```yaml
apiVersion: eksctl.io/v1alpha5
kind: ClusterConfig

metadata:
  name: eks-demo
  region: us-east-2

nodeGroups:
  - name: ng-1
    instanceType: t3.medium
    desiredCapacity: 3
```

Save it in a file (eg. `simple-eks.yaml`) then apply it using `eksctl` to create the cluster.

```bash
$ eksctl create cluster -f simple-eks.yaml
```

## 3. Create an IAM OIDC provider for your cluster

Your cluster has an OpenID Connect issuer URL associated with it. To use IAM roles for service accounts, an IAM OIDC provider must exist for your cluster.

You can create an OIDC provider for your cluster using `eksctl`.  

To check and create an IAM OIDC identity provider for your cluster with `eksctl` follow below steps:

- Determine whether you have an existing `IAM OIDC` provider for your cluster.
```bash
$ aws eks describe-cluster --name <cluster_name> --query "cluster.identity.oidc.issuer" --output text
```
Example Output: 
```
https://oidc.eks.region-code.amazonaws.com/id/EXAMPLED539D4633E53DE1B71EXAMPLE
```

- List the IAM OIDC providers in your account. Replace `EXAMPLED539D4633E53DE1B71EXAMPLE` with the value returned from the previous command.
```bash
$ aws iam list-open-id-connect-providers | grep EXAMPLED539D4633E53DE1B71EXAMPLE
```
Example output:
```
"Arn": "arn:aws:iam::111122223333:oidc-provider/oidc.eks.region-code.amazonaws.com/id/EXAMPLED539D4633E53DE1B71EXAMPLE"
```

If output is returned from the previous command, then you already have a provider for your cluster. If no output is returned, then you must create an IAM OIDC provider.

- Create an IAM OIDC identity provider for your cluster with the following command. Replace `my-cluster` with your own value.
```bash
$ eksctl utils associate-iam-oidc-provider --cluster my-cluster --approve
```



## 4. Install Kubeform AWS provider operator in the cluster

Now, install Kubeform AWS provider operator in your cluster following the steps [here](/docs/v2022.05.11/setup/README). To get a FREE license, please visit [here](https://license-issuer.appscode.com/?p=kubeform-community).

```bash
helm install kubeform-provider-aws appscode/kubeform-provider-aws \
  --namespace kubeform --create-namespace \
  --set-file kubeform-provider.license=/path/to/the/license.txt \
  --set crds.s3=true
```

## 5. Creating an IAM role and policy for your service account

You must create an IAM policy that specifies the permissions that you would like the containers in your pods to have.

You must also create an IAM role for your Kubernetes service accounts to use before you associate it with a service account.

Create an IAM policy and Role for service account  
> Follow the official AWS [doc](https://docs.aws.amazon.com/eks/latest/userguide/create-service-account-iam-policy-and-role.html) for creating IAM Policy and Role


## 6. Associate an IAM role to a service account

- In Kubernetes, you define the IAM role to associate with a service account in your cluster by adding the following annotation to the service account.
```yaml
apiVersion: v1
kind: ServiceAccount
metadata:
  annotations:
    eks.amazonaws.com/role-arn: arn:aws:iam::account-id:role/iam-role-name
```

- Use the following command to annotate your service account with the `ARN` of the IAM role that you want to use with your service account. Replace `service-account-namespace` with the Kubernetes namespace of your service account, `service-account-name` with the name of your existing Kubernetes service account. Replace `account-id` with your AWS account ID and `iam-role-name` with the name of your existing AWS Identity and Access Management (IAM) role.
```bash
$ kubectl annotate serviceaccount -n service-account-namespace service-account-name \
     eks.amazonaws.com/role-arn=arn:aws:iam::account-id:role/iam-role-name
```

- Also can upgrade it using `helm upgrade` command, for that use below command:
```bash
$ helm upgrade <kubeform-aws-operator-helm-chart-release-name> appscode/kubeform-provider-aws --reuse-values --namespace <kubeform-aws-operator-namespace> \
        --set-string kubeform-provider.serviceAccount.annotations."eks\.amazonaws\.com/role-arn"="arn:aws:iam::account-id:role/iam-role-name"
```


## 7. Create Provider Secret

Now, We don't need to provide AWS `access_key` and `secret_key` in the Provider Secret to manage `AWS` resources using `Kubeform` from `EKS` cluster. This is the AWS provider secret which is used for creating any resources in AWS using Kubeform.
```yaml
apiVersion: v1
kind: Secret
metadata:
  name: aws-provider-secret
  namespace: demo
stringData:
  provider: |
    {
        "region": "<REGION_NAME>"
    }
```

If you don't use IRSA then you need to give `access_key` and `secret_key` of AWS provider, like:
```yaml
apiVersion: v1
kind: Secret
metadata:
  name: aws-provider-secret
  namespace: demo
stringData:
  provider: |
    {
        "region": "<REGION_NAME>",
        "access_key": "<ACCESS_KEY>",
        "secret_key": "<SECRET_KEY>"
    }
```

Now, you can create, update or delete any AWS resources using IRSA in Kubeform.

> Please refer to this [doc](/docs/v2022.05.11/guides/aws/README) for a hands-on demo how you need to manage AWS resources using Kubeform.