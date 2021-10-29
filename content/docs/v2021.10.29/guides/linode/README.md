---
title: Linode
menu:
  docs_v2021.10.29:
    identifier: readme-linode
    name: Overview
    parent: linode-guides
    weight: 1
menu_name: docs_v2021.10.29
section_menu_id: guides
url: /docs/v2021.10.29/guides/linode/
aliases:
- /docs/v2021.10.29/guides/linode/README/
info:
  alicloud: v0.4.0
  aws: v0.4.0
  azurerm: v0.4.0
  civo: v0.4.0
  datadog: v0.4.0
  digitalocean: v0.4.0
  dynatrace: v0.4.0
  ec: v0.4.0
  equinixmetal: v0.4.0
  google: v0.4.0
  grafana: v0.4.0
  hcloud: v0.4.0
  ibm: v0.4.0
  installer: v2021.10.29
  linode: v0.4.0
  mongodbatlas: v0.4.0
  newrelic: v0.4.0
  oci: v0.4.0
  ovh: v0.4.0
  pagerduty: v0.4.0
  rediscloud: v0.4.0
  upcloud: v0.4.0
  version: v2021.10.29
  vsphere: v0.4.0
  vultr: v0.4.0
  wavefront: v0.4.0
---

# Linode

This guide will show you how to provision (Create, Update, Delete) a Linode Instance using Kubeform.

> Examples used in this guide can be found [here](https://github.com/kubeform/kubeform/tree/{{< param "info.version" >}}/docs/examples/linode).

At first, let's look at the `Terraform` configuration for a Linode Instance below:

```
provider "linode" {
    token = "LINODE_API_TOKEN"
}

resource "linode_instance" "test1" {
    image = "linode/ubuntu18.04"

    label = "instance-test1"

    region = "us-east"

    root_pass = "TestPassWord@123"
}
```

Now, if we apply `terraform apply` this config will create a Linode Instance. We'll create the exact configuration using Kubeform. The steps are given below:

## 1. Before You Begin

At first, you need to have a Kubernetes cluster, and the kubectl command-line tool must be configured to communicate with your cluster. If you do not already have a cluster, you can create one by using [kind](https://kind.sigs.k8s.io/docs/user/quick-start/).

Now, install Kubeform Linode provider operator in your cluster following the steps [here](/docs/v2021.10.29/setup/README). To get a FREE license, please visit [here](https://license-issuer.appscode.com/?p=kubeform-community).

```bash
helm install kubeform-provider-linode appscode/kubeform-provider-linode \
  --namespace kubeform --create-namespace \
  --set-file kubeform-provider.license=/path/to/the/license.txt \
  --set crds.instance=true
```

To keep things isolated, this tutorial uses a separate namespace called `demo` throughout this tutorial.

```bash
$ kubectl create ns demo
namespace/demo created
```

## 2. Create Linode Provider Secret

Then create the secret which is necessary for provisioning the Instance in Linode.

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: linode-provider-secret
  namespace: demo
stringData:
  provider: |
    {
        "token": "LINODE_API_TOKEN"
    }

```

Here we can see that, the `provider` field of the `stringData` of the secret is same as the field of the provider part in the terraform config file. The provider secret needs to be provided in json format, under the `provider` key. Save it in a file (eg. `provider-secret.yaml`) then apply it using kubectl command.

```bash
kubectl apply -f provider-secret.yaml
```

> **Note:** Here, key of the provider field of the stringData (eg. `"token"`) must be in snake case format (same as the tf configuration file)

## 3. Create Secrets for Sensitive Data

If we look at the terraform config, we can see that there is a field called `root_pass`. This is a sensitive field. So, we should not use these kinds of sensitive values directly in the yaml. We'll create a secret to store the sensitive values like this:

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: linode-sensitive-secret
  namespace: demo
stringData:
  input: |
    {
        "root_pass": "TestPassWord@123"
    }
```

Here, sensitive secret needs to be provided in json format, under the `input` key. We'll reference this secret from the Instance CRD. Save it in a file (eg. `sensitive-secret.yaml`) then apply it using kubectl command.

```bash
kubectl apply -f sensitive-secret.yaml
```

> **Note:** Here, key of input field of the stringData (eg. `"root_pass"`) must be in snake case format (same as the tf configuration file)

## 4. Create Instance

Now, we'll create the Instance CRD. The yaml is given below:

```yaml
apiVersion: instance.linode.kubeform.com/v1alpha1
kind: Instance
metadata:
  name: test1
  namespace: demo
spec:
  resource:
    region: us-east
    image: linode/ubuntu18.04
    label: instance-test1
  providerRef:
    name: linode-provider-secret
  secretRef:
    name: linode-sensitive-secret
  terminationPolicy: DoNotTerminate
```

Here, the `resource` field contains the Linode Instance spec. Also, we can see that the provider secret is referenced using a field called `providerRef` and the sensitive value secret is referenced using a field called `secretRef`. 

> We can see a field named `terminationPolicy`, this is a feature of Kubeform. This field can have two values, `Delete` or `DoNotTerminate`. When the value of this field is set to `DoNotTerminate` then the Instance won't get deleted even though we apply `kubectl delete` operation, this field needs to be set to `Delete` to delete the Instance. It helps to avoid accidental deletion of the resource. We will see the use of this field in `Delete Instance` part later on this guide.

Save it in a file (eg. `linode-instance.yaml`) then apply it using kubectl.

```bash
kubectl apply -f linode-instance.yaml
```

After applying this command, the resource will be in `InProgress` phase until the cloud creates the resource. Once the cloud resource get created, the resource will be in `Current` phase which means we have successfully created the resource.

After successful creation of the resource, the resource state is available under `spec.state` section. This `spec.state` field maps the real world resource to the Kubeform resource. This field doesn't contain any sensitive field. Sensitive fields are stored in the secret specified in the `spec.secretRef` section. If no `secretRef` is specified, Kubeform will create one.

## 5. Update Instance

Now, we'll update the Instance CRD. For updating the Instance, we will modify the existing `linode-instnace.yaml`, we will use a different `label` (`instance-test1-update`). The modified yaml is given below:

```yaml
apiVersion: instance.linode.kubeform.com/v1alpha1
kind: Instance
metadata:
  name: test1
  namespace: demo
spec:
  resource:
    region: us-east
    image: linode/ubuntu18.04
    label: instance-test1-update
  providerRef:
    name: linode-provider-secret
  secretRef:
    name: linode-sensitive-secret
  terminationPolicy: DoNotTerminate
```

Now, apply it using kubectl command.

```bash
kubectl apply -f linode-instance.yaml
```

After that, existing Linode Instance will be updated!

> **Note:** Here, we have changed the `label` field which is mutable, means if we change a mutable field it will get updated/changed only. But, there are some fields which are immutable, means changing those fields, resource will first get deleted and then again recreated. So, be careful!

## 6. Delete Instance

To delete the Instance just run:

```bash
kubectl delete -f linode-instance.yaml
```

After applying this command we will get below error message, as we have set `terminationPolicy: DoNotTerminate`:

```text
Error from server (instance "default/test1" can't be terminated. To delete, change spec.terminationPolicy to Delete): error when deleting "linode-instance.yaml": admission webhook "instance.instance.linode.kubeform.com" denied the request: instance "default/test1" can't be terminated. To delete, change spec.terminationPolicy to Delete
```

Let's change the `terminationPolicy` to `Delete` by using kubectl patch command.

```bash
kubectl patch -n demo instance test1 -p '{"spec":{"terminationPolicy":"Delete"}}' --type="merge"
```

Now, we can delete the Instance.

```bash
kubectl delete -f linode-instance.yaml
```

After applying this command the resource will be in `Terminating` phase until the cloud resource get destroyed. Once the cloud resource get destroyed, the resource will get deleted successfully.
