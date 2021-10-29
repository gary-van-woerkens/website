---
title: DigitalOcean
menu:
  docs_v2021.10.29:
    identifier: readme-digitalocean
    name: Overview
    parent: digitalocean-guides
    weight: 10
menu_name: docs_v2021.10.29
section_menu_id: guides
url: /docs/v2021.10.29/guides/digitalocean/
aliases:
- /docs/v2021.10.29/guides/digitalocean/README/
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

# DigitalOcean

This guide will show you how to provision (Create, Update, Delete) a DigitalOcean Droplet using Kubeform.

> Examples used in this guide can be found [here](https://github.com/kubeform/kubeform/tree/{{< param "info.version" >}}/docs/examples/digitalocean).

At first, let's look at the `Terraform` configuration for a DigitalOcean Droplet below:

```
provider "digitalocean" {
    token = "DigitalOcean Token"
}

resource "digitalocean_droplet" "test1" {
    image = "ubuntu-18-04-x64"

    name = "droplet-test1"

    region = "nyc2"

    size = "s-1vcpu-1gb"
}
```

Now, if we apply `terraform apply` this config will create a DigitalOcean Droplet. We'll create the exact configuration using Kubeform. The steps are given below:

## 1. Before You Begin

At first, you need to have a Kubernetes cluster, and the kubectl command-line tool must be configured to communicate with your cluster. If you do not already have a cluster, you can create one by using [kind](https://kind.sigs.k8s.io/docs/user/quick-start/).

Now, install Kubeform Digitalocean provider operator in your cluster following the steps [here](/docs/v2021.10.29/setup/README). To get a FREE license, please visit [here](https://license-issuer.appscode.com/?p=kubeform-community).

```bash
helm install kubeform-provider-digitalocean appscode/kubeform-provider-digitalocean \
  --namespace kubeform --create-namespace \
  --set-file kubeform-provider.license=/path/to/the/license.txt \
  --set crds.droplet=true
```

To keep things isolated, this tutorial uses a separate namespace called `demo` throughout this tutorial.

```bash
$ kubectl create ns demo
namespace/demo created
```

## 2. Create DigitalOcean Provider Secret

Then create the secret which is necessary for provisioning the Droplet in DigitalOcean.

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: do-secret
  namespace: demo
stringData:
  provider: |
    {
        "token": "DigitalOcean Token"
    }
```

Here we can see that, the `provider` field of the `stringData` of the secret is same as the field of the provider part in the terraform config file. The provider secret needs to be provided in json format, under the `provider` key. Save it in a file (eg. `provider-secret.yaml`) then apply it using kubectl command.

```bash
kubectl apply -f provider-secret.yaml
```

> **Note:** Here, key of the provider field of the stringData (eg. `"token"`) must be in snake case format (same as the tf configuration file)

## 3. Create DigitalOcean Droplet

Now, we'll create the DigitalOcean Droplet CRD. The yaml is given below:

```yaml
apiVersion: droplet.digitalocean.kubeform.com/v1alpha1
kind: Droplet
metadata:
  name: test1
  namespace: demo
spec:
  resource:
    name: droplet-test1
    image: ubuntu-18-04-x64
    region: nyc2
    size: s-1vcpu-1gb
  providerRef:
    name: do-secret
  terminationPolicy: DoNotTerminate
```

Here, the `resource` field contains the DigitalOcean Droplet spec. Also, we can see that the provider secret is referenced using a field called `providerRef`.

> We can see a field named `terminationPolicy`, this is a feature of Kubeform. This field can have two values, `Delete` or `DoNotTerminate`. When the value of this field is set to `DoNotTerminate` then the Droplet won't get deleted even though we apply `kubectl delete` operation, this field needs to be set to `Delete` to delete the Droplet. It helps to avoid accidental deletion of the resource. We will see the use of this field in `Delete DigitalOcean Droplet` part later on this guide.

Save it in a file (eg. `digitalocean-droplet.yaml`) then apply it using kubectl command.

```bash
kubectl apply -f digitalocean-droplet.yaml
```

After applying this command, the resource will be in `InProgress` phase until the cloud creates the resource. Once the cloud resource get created, the resource will be in `Current` phase which means we have successfully created the resource.

After successful creation of the resource, the resource state is available under `spec.state` section. This `spec.state` field maps the real world resource to the Kubeform resource. This field doesn't contain any sensitive field. Sensitive fields are stored in the secret specified in the `spec.secretRef` section. If no `secretRef` is specified, Kubeform will create one.

## 4. Update DigitalOcean Droplet

Now, we'll update the Droplet CRD. For updating the Droplet, we will modify the existing `digitalocean-droplet.yaml`, we will use a different `name` (`droplet-test1-update`). The modified yaml is given below:

```yaml
apiVersion: droplet.digitalocean.kubeform.com/v1alpha1
kind: Droplet
metadata:
  name: test1
  namespace: demo
spec:
  resource:
    name: droplet-test1-update
    image: ubuntu-18-04-x64
    region: nyc2
    size: s-1vcpu-1gb
  providerRef:
    name: do-secret
  terminationPolicy: DoNotTerminate
```

Now, apply it using kubectl command.

```bash
kubectl apply -f digitalocean-droplet.yaml
```

After that, existing DigitalOcean Droplet will be updated!

> **Note:** Here, we have changed the `name` field which is mutable, means if we change a mutable field it will get updated/changed only. But, there are some fields which are immutable, means changing those fields, resource will first get deleted and then again recreated. So, be careful!

## 5. Delete DigitalOcean Droplet

To delete the DigitalOcean Droplet just run:

```bash
kubectl delete -f digitalocean-droplet.yaml
```

After applying this command we will get below error message, as we have set `terminationPolicy: DoNotTerminate`:

```text
Error from server (droplet "default/test1" can't be terminated. To delete, change spec.terminationPolicy to Delete): error when deleting "digitalocean-droplet.yaml": admission webhook "droplet.droplet.digitalocean.kubeform.com" denied the request: droplet "default/test1" can't be terminated. To delete, change spec.terminationPolicy to Delete
```

Let's change the `terminationPolicy` to `Delete` by using kubectl patch command.

```bash
kubectl patch -n demo droplet test1 -p '{"spec":{"terminationPolicy":"Delete"}}' --type="merge"
```

Now, we can delete the Droplet.

```bash
kubectl delete -f digitalocean-droplet.yaml
```

After applying this command the resource will be in `Terminating` phase until the cloud resource get destroyed. Once the cloud resource get destroyed, the resource will get deleted successfully.
