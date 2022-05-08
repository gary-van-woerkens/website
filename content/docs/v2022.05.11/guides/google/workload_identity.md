---
title: Google
menu:
  docs_v2022.05.11:
    identifier: workload-identity-google
    name: Workload Identity
    parent: google-guides
    weight: 12
menu_name: docs_v2022.05.11
section_menu_id: guides
url: /docs/v2022.05.11/guides/google/workload_identity/
aliases:
- /docs/v2022.05.11/guides/google/workload_identity/
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

# GKE Workload Identity

This guide will show you how to enable and configure Workload Identity on your Google Kubernetes Engine (GKE) clusters and Kubeform so that you can use Workload Identity feature in Kubeform.

>  Workload Identity allows workloads in your GKE clusters to impersonate Identity and Access Management (IAM) service accounts to access Google Cloud services.

## 1. Before You Begin

- Before you begin, make sure you have performed the following tasks:  
    - At first, you need to have a GKE cluster, and the kubectl command-line tool must be configured to communicate with your cluster, to create/update GKE cluster see in the below `Enable Workload Identity` section's doc.
    - Ensure that you have enabled the Google Kubernetes Engine API.
    - Ensure that you have installed the Google Cloud CLI.
    - Set up the default Google Cloud CLI settings for your project by using one of the following methods:
        - Use `gcloud init`, if you want to be walked through setting project defaults.
        - Use `gcloud config`, to individually set your project ID, zone, and region.
    - Ensure that you have enabled the IAM Service Account Credentials API.   
    
    **Note:** For the above settings you can follow Official Google [doc](https://cloud.google.com/kubernetes-engine/docs/how-to/workload-identity#before_you_begin)

## 2. Enable Workload Identity

You can enable Workload Identity on clusters and node pools using the `Google Cloud CLI` or the `Google Cloud Console`.

Workload Identity must be enabled at the cluster level before you can enable Workload Identity on node pools.

**Note:** For enabling workload identity in your cluster follow this Google Official [doc](https://cloud.google.com/kubernetes-engine/docs/how-to/workload-identity#enable)

## 3. Install Kubeform Google Provider

Now, install Kubeform Google Cloud provider operator in your cluster following the steps [here](/docs/v2022.05.11/setup/README). To get a FREE license, please visit [here](https://license-issuer.appscode.com/?p=kubeform-community).

```bash
$ helm install kubeform-provider-google appscode/kubeform-provider-google \
  --namespace kubeform --create-namespace \
  --set-file kubeform-provider.license=/path/to/the/license.txt \
  --set crds.storage=true \
  --set-string kubeform-provider.nodeSelector."iam\.gke\.io/gke-metadata-server-enabled"="true"
```

## 4. Configure Kubeform to use Workload Identity

After enabling Workload Identity, you should configure the Kubeform to authenticate to Google Cloud using Workload Identity.  

For doing that follow below steps:

- Get credentials for your cluster by:
```bash
$ gcloud container clusters get-credentials CLUSTER_NAME
```  
> Replace `CLUSTER_NAME` with the name of your cluster that has Workload Identity enabled.

- Create an IAM service account for Kubeform or use an existing IAM service account instead. You can use any IAM service account in any project in your organization.   

To create a new IAM service account using gcloud CLI, run the following command:
```bash
$ gcloud iam service-accounts create GSA_NAME \
     --project=GSA_PROJECT
```

> Replace the following:  
    `GSA_NAME`: the name of the new IAM service account.  
    `GSA_PROJECT`: the project ID of the Google Cloud project for your IAM service account.

- Ensure that your IAM service account has the roles you need.  

You can grant additional roles using the following command:
```bash
$ gcloud projects add-iam-policy-binding PROJECT_ID \
     --member "serviceAccount:GSA_NAME@GSA_PROJECT.iam.gserviceaccount.com" \
     --role "ROLE_NAME"
```

> Replace the following:   
    `PROJECT_ID`: your Google Cloud project ID.  
    `GSA_NAME`: the name of your IAM service account.  
    `GSA_PROJECT`: the project ID of the Google Cloud project of your IAM service account.  
    `ROLE_NAME`: the IAM role to assign to your service account, like `roles/spanner.viewer`.  

- Allow the Kubernetes service account to impersonate the IAM service account by adding an IAM policy binding between the two service accounts. This binding allows the Kubernetes service account to act as the IAM service account.
```bash
$ gcloud iam service-accounts add-iam-policy-binding GSA_NAME@GSA_PROJECT.iam.gserviceaccount.com \
     --role roles/iam.workloadIdentityUser \
     --member "serviceAccount:PROJECT_ID.svc.id.goog[NAMESPACE/KSA_NAME]"
```

> Replace the following:  
    `GSA_NAME`: the name of your IAM service account.   
    `GSA_PROJECT`: the project ID of the Google Cloud project of your IAM service account.   
    `PROJECT_ID`: your Google Cloud project ID.  
    `NAMESPACE`: Kubeform operator namespace     
    `KSA_NAME`: Kubeform operator used Kubernetes Service Account     
   
- Annotate the Kubeform Google Operator used Kubernetes service account with the email address of the IAM service account.
```bash
$ kubectl annotate serviceaccount KSA_NAME \
     --namespace NAMESPACE \
     iam.gke.io/gcp-service-account=GSA_NAME@GSA_PROJECT.iam.gserviceaccount.com
```
**Note:** This annotation by itself does not grant access to impersonate the IAM service account. If the IAM binding does not exist, the Pod will not be able to use the IAM service account.

- Also can add Annotations on Kubeform Google Operator used Kubernetes service account using `helm upgrade` command, for that use below command:
```bash
$ helm upgrade <kubeform-google-operator-helm-chart-release-name> appscode/kubeform-provider-google --reuse-values --namespace <kubeform-google-operator-namespace> \
        --set-string kubeform-provider.serviceAccount.annotations."iam\.gke\.io/gcp-service-account"="GSA_NAME@GSA_PROJECT.iam.gserviceaccount.com"
```

## 5. Create Provider Secret

Now, We don't need to provide `credentials` in the Provider Secret to manage `GCP` resources using `Kubeform` operator from `GKE` cluster. This is the Google provider secret which is used for creating any resources in GCP using Kubeform.
```yaml
apiVersion: v1
kind: Secret
metadata:
  name: google-provider-secret
  namespace: demo
stringData:
  provider: |
    {
      "project": "PROJECT_NAME",
      "region": "REGION_NAME"
    }
```

If you don't use Workload Identity then you need to give `credentials`, like:
```yaml
apiVersion: v1
kind: Secret
metadata:
  name: google-provider-secret
  namespace: demo
stringData:
  provider: |
    {
      "credentials": "GOOGLE_JSON_CREDENTIALS",
      "project": "PROJECT_NAME",
      "region": "REGION_NAME"
    }
```

Now, you can create, update or delete any GCP resources using Workload Identity in Kubeform. 

> Please refer to this [doc](/docs/v2022.05.11/guides/google/README) for a hands-on demo how you need to manage GCP resources using Kubeform.