---
title: Google
menu:
  docs_v2021.10.29:
    identifier: readme-google
    name: Overview
    parent: google-guides
    weight: 10
menu_name: docs_v2021.10.29
section_menu_id: guides
url: /docs/v2021.10.29/guides/google/
aliases:
- /docs/v2021.10.29/guides/google/README/
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

# Google

This guide will show you how to provision (Create, Update, Delete) a Google Storage Bucket using Kubeform.

> Examples used in this guide can be found [here](https://github.com/kubeform/kubeform/tree/{{< param "info.version" >}}/docs/examples/google).

At first, let's look at the `Terraform` configuration for a Google Storage Bucket below:

```
provider "google" {
    credentials = "json Credential"

    project = "Project Name"

    region = "us-central1"
}

resource "google_storage_bucket" "test1" {
    location = "EU"

    name = "bucket-test1"

    website = {
      main_page_suffix = "index.html"
      not_found_page = "404.html"
    }
}
```

Now, if we apply `terraform apply` this config will create a Google Storage Bucket. We'll create the exact configuration using Kubeform. The steps are given below:

## 1. Before You Begin

At first, you need to have a Kubernetes cluster, and the kubectl command-line tool must be configured to communicate with your cluster. If you do not already have a cluster, you can create one by using [kind](https://kind.sigs.k8s.io/docs/user/quick-start/).

Now, install Kubeform Google Cloud provider operator in your cluster following the steps [here](/docs/v2021.10.29/setup/README). To get a FREE license, please visit [here](https://license-issuer.appscode.com/?p=kubeform-community).

```bash
helm install kubeform-provider-google appscode/kubeform-provider-google \
  --namespace kubeform --create-namespace \
  --set-file kubeform-provider.license=/path/to/the/license.txt \
  --set crds.storage=true
```

To keep things isolated, this tutorial uses a separate namespace called `demo` throughout this tutorial.

```bash
$ kubectl create ns demo
namespace/demo created
```

## 2. Create Google Provider Secret

Then create the secret which is necessary for provisioning the Storage Bucket in Google.

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

Here we can see that, the `provider` field of the `stringData` of the secret is same as the field of the provider part in the terraform config file. The provider secret needs to be provided in json format, under the `provider` key. Save it in a file (eg. `provider-secret.yaml`) then apply it using kubectl command.

```bash
kubectl apply -f provider-secret.yaml
```

> **Note:** Here, key of the provider field of the stringData (eg. `"project"`, `"region"` etc.) must be in snake case format (same as the tf configuration file)

## 3. Create Google Storage Bucket

Now, we'll create the Google Storage Bucket CRD. The yaml is given below:

```yaml
apiVersion: storage.google.kubeform.com/v1alpha1
kind: Bucket
metadata:
  name: test1
  namespace: demo
spec:
  resource:
    name: bucket-test1
    location: EU
    forceDestroy: true
    website:
      mainPageSuffix: index.html
      notFoundPage: 404.html
  providerRef:
    name: google-provider-secret
  terminationPolicy: DoNotTerminate
```

Here, the `resource` field contains the Google Storage Bucket spec. Also, we can see that the provider secret is referenced using a field called `providerRef`.

> We can see a field named `terminationPolicy`, this is a feature of Kubeform. This field can have two values, `Delete` or `DoNotTerminate`. When the value of this field is set to `DoNotTerminate` then the resource won't get deleted even though we apply `kubectl delete` operation, this field needs to be set to `Delete` to delete the resource. It helps to avoid accidental deletion of the resource. We will see the use of this field in `Delete Google Storage Bucket` part later on this guide.

Save it in a file (eg. `google-storage-bucket.yaml`) then apply it using kubectl.

```bash
kubectl apply -f google-storage-bucket.yaml
```

After applying this command, the resource will be in `InProgress` phase until the cloud creates the resource. Once the cloud resource get created, the resource will be in `Current` phase which means we have successfully created the resource.

After successful creation of the resource, the resource state is available under `spec.state` section. This `spec.state` field maps the real world resource to the Kubeform resource. This field doesn't contain any sensitive field. Sensitive fields are stored in the secret specified in the `spec.secretRef` section. If no `secretRef` is specified, Kubeform will create one.

## 4. Update Google Storage Bucket

Now, we'll update the Bucket CRD. For updating the Bucket, we will modify the existing `google-storage-bucket.yaml`, we will use a different `name` (`bucket-test1-update`). The modified yaml is given below:

```yaml
apiVersion: storage.google.kubeform.com/v1alpha1
kind: Bucket
metadata:
  name: test1
  namespace: demo
spec:
  resource:
    name: bucket-test1-update
    location: EU
    forceDestroy: true
    website:
      mainPageSuffix: index.html
      notFoundPage: 404.html
  providerRef:
    name: google-provider-secret
  terminationPolicy: DoNotTerminate
```

Now, apply it using kubectl command.

```bash
kubectl apply -f google-storage-bucket.yaml
```

After that, existing Google Bucket will be first deleted and then created because `name` field is immutable. See below note!

> **Note:** Here, we have changed the `name` field which is Immutable, means if we change an immutable field then the resource will first get deleted and then created. But, there are some fields which are mutable, means changing those fields, resource will be only updated/changed. So, be careful!

## 5. Delete Google Storage Bucket

To delete the Google Storage Bucket just run:

```bash
kubectl delete -f google-storage-bucket.yaml
```

After applying this command we will get below error message, as we have set `terminationPolicy: DoNotTerminate`:

```text
Error from server (bucket "default/test1" can't be terminated. To delete, change spec.terminationPolicy to Delete): error when deleting "google-storage-bucket.yaml": admission webhook "bucket.storage.google.kubeform.com" denied the request: bucket "default/test1" can't be terminated. To delete, change spec.terminationPolicy to Delete
```

Let's change the `terminationPolicy` to `Delete` by using kubectl patch command.

```bash
kubectl patch -n demo bucket test1 -p '{"spec":{"terminationPolicy":"Delete"}}' --type="merge"
```

Now, we can delete the Bucket.

```bash
kubectl delete -f google-storage-bucket.yaml
```

After applying this command the resource will be in `Terminating` phase until the cloud resource get destroyed. Once the cloud resource get destroyed, the resource will get deleted successfully.
