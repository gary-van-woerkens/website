---
title: Azure
menu:
  docs_v2022.05.11:
    identifier: readme-azure
    name: Overview
    parent: azure-guides
    weight: 10
menu_name: docs_v2022.05.11
section_menu_id: guides
url: /docs/v2022.05.11/guides/azure/
aliases:
- /docs/v2022.05.11/guides/azure/README/
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

# Azure

This guide will show you how to provision (Create, Update, Delete) an Azure Storage Container using Kubeform.

> Examples used in this guide can be found [here](https://github.com/kubeform/kubeform/tree/{{< param "info.version" >}}/docs/examples/azure).

At first, let's look at the `Terraform` configuration for an Azure Storage Container below:

```
provider "azurerm" {
  subscription_id = "Subscription ID"
  client_id       = "Client ID"
  client_secret   = "Client Secret"
  tenant_id       = "Tenant ID"
  features        = {}
}

resource "azurerm_storage_container" "test1" {
  name                 = "storage-container-test1"
  storage_account_name = "<STORAGE_ACCOUNT_NAME>"
}
```

Now, if we apply `terraform apply` this config will create an Azure Storage Container. We'll create the exact configuration using `kubeform`. The steps are given below:

## 1. Before You Begin

At first, you need to have a Kubernetes cluster, and the kubectl command-line tool must be configured to communicate with your cluster. If you do not already have a cluster, you can create one by using [kind](https://kind.sigs.k8s.io/docs/user/quick-start/).

Now, install Kubeform Microsoft Azure provider operator in your cluster following the steps [here](/docs/v2022.05.11/setup/README). To get a FREE license, please visit [here](https://license-issuer.appscode.com/?p=kubeform-community).

```bash
helm install kubeform-provider-azurerm appscode/kubeform-provider-azurerm \
  --namespace kubeform --create-namespace \
  --set-file kubeform-provider.license=/path/to/the/license.txt \
  --set crds.storage=true
```

To keep things isolated, this tutorial uses a separate namespace called `demo` throughout this tutorial.

```bash
$ kubectl create ns demo
namespace/demo created
```

## 2. Create Azure Provider Secret

Then create the secret which is necessary for provisioning the Storage Container in Azure.

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: azure-provider-secret
  namespace: demo
stringData:
  provider: |
    {
      "subscription_id": "<AZURE_SUBSCRIPTION_ID>",
      "client_id": "AZURE_CLIENT_ID",
      "client_secret": "AZURE_CLIENT_SECRET",
      "tenant_id": "AZURE_TENANT_ID",
      "features": {}
    }
```

Here we can see that, the `provider` field of the `stringData` of the secret is same as the field of the provider part in the terraform config file. The provider secret needs to be provided in json format, under the `provider` key. Save it in a file (eg. `provider-secret.yaml`) then apply it using kubectl.

```bash
kubectl apply -f provider-secret.yaml
```

> **Note:** Here, key of the provider field of the stringData (eg. `"client_id"`, `"tenant_id"` etc.) must be in snake case format (same as the tf configuration file)

## 3. Create Azure Storage Container

Now, we'll create the Azure Storage Container CRD. The yaml is given below:

```yaml
apiVersion: storage.azurerm.kubeform.com/v1alpha1
kind: Container
metadata:
  name: test1
  namespace: demo
spec:
  resource:
    name: storage-container-test1
    storageAccountName: <STORAGE_ACCOUNT_NAME>
  providerRef:
    name: azure-provider-secret
  terminationPolicy: DoNotTerminate
```

Here, the `resource` field contains the Azure Storage Container spec. Also, we can see that the provider secret is referenced using a field called `providerRef`.

> We can see a field named `terminationPolicy`, this is a feature of Kubeform. This field can have two values, `Delete` or `DoNotTerminate`. When the value of this field is set to `DoNotTerminate` then the resource won't get deleted even though we apply `kubectl delete` operation, this field needs to be set to `Delete` to delete the resource. It helps to avoid accidental deletion of the resource. We will see the use of this field in `Delete Azure Storage Container` part later on this guide.

Save it in a file (eg. `azure-storage-container.yaml`) then apply it using kubectl.

```bash
kubectl apply -f azure-storage-container.yaml
```

After applying this command, the resource will be in `InProgress` phase until the cloud creates the resource. Once the cloud resource get created, the resource will be in `Current` phase which means we have successfully created the resource.

After successful creation of the resource, the resource state is available under `spec.state` section. This `spec.state` field maps the real world resource to the Kubeform resource. This field doesn't contain any sensitive field. Sensitive fields are stored in the secret specified in the `spec.secretRef` section. If no `secretRef` is specified, Kubeform will create one.

## 4. Update Azure Storage Container

Now, we'll update the Storage Container CRD. For updating the Storage Container, we will modify the existing `azure-storage-container.yaml`, we will use a different `name` (`storage-container-test1-update`). The modified yaml is given below:

```yaml
apiVersion: storage.azurerm.kubeform.com/v1alpha1
kind: Container
metadata:
  name: test1
  namespace: demo
spec:
  resource:
    name: storage-container-test1-update
    storageAccountName: <STORAGE_ACCOUNT_NAME>
  providerRef:
    name: azure-provider-secret
  terminationPolicy: DoNotTerminate
```

Now, apply it using kubectl command.

```bash
kubectl apply -f azure-storage-container.yaml
```

After that, existing Azure Storage Container will be first deleted and then created because `name` field is immutable. See below note!

> **Note:** Here, we have changed the `name` field which is Immutable, means if we change an immutable field then the resource will first get deleted and then created. But, there are some fields which are mutable, means changing those fields, resource will be only updated/changed. So, be careful!

## 5. Delete Azure Storage Container

To delete the Azure Storage Container just run:

```bash
kubectl delete -f azure-storage-container.yaml
```

After applying this command we will get below error message, as we have set `terminationPolicy: DoNotTerminate`:

```text
Error from server (container "default/test1" can't be terminated. To delete, change spec.terminationPolicy to Delete): error when deleting "azure-storage-container.yaml": admission webhook "container.storage.azurerm.kubeform.com" denied the request: container "default/test1" can't be terminated. To delete, change spec.terminationPolicy to Delete
```

Let's change the `terminationPolicy` to `Delete` by using kubectl patch command.

```bash
kubectl patch -n demo container test1 -p '{"spec":{"terminationPolicy":"Delete"}}' --type="merge"
```

Now, we can delete the Storage Container.

```bash
kubectl delete -f azure-storage-container.yaml
```

After applying this command the resource will be in `Terminating` phase until the cloud resource get destroyed. Once the cloud resource get destroyed, the resource will get deleted successfully.
