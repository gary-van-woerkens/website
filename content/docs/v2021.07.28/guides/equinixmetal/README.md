---
title: Equinix Metal
menu:
  docs_v2021.07.28:
    identifier: readme-equinixmetal
    name: Overview
    parent: equinixmetal-guides
    weight: 10
menu_name: docs_v2021.07.28
section_menu_id: guides
url: /docs/v2021.07.28/guides/equinixmetal/
aliases:
- /docs/v2021.07.28/guides/equinixmetal/README/
info:
  aws: v0.2.0
  azurerm: v0.2.0
  digitalocean: v0.2.0
  equinixmetal: v0.2.0
  google: v0.2.0
  installer: v2021.07.28
  linode: v0.2.0
  version: v2021.07.28
---

# Equinix Metal

This guide will show you how to provision (Create, Update, Delete) an Equinix Metal Device using Kubeform.

> Examples used in this guide can be found [here](https://github.com/kubeform/kubeform/tree/{{< param "info.version" >}}/docs/examples/equinixmetal).

At first, let's look at the `Terraform` configuration for an Equinix Metal Device below:

```
provider "metal" {
    auth_token = "<equinix-metal-auth-token>"
}

resource "metal_device" "test" {
  hostname         = "terraform-test"
  plan             = "c3.small.x86"
  metro            = "sv"
  operating_system = "ubuntu_20_04"
  billing_cycle    = "hourly"
  project_id       = local.project_id
}
```

Now, if we apply `terraform apply` this config will create an Equinix Metal Device. We'll create the exact configuration using Kubeform. The steps are given below:

## 1. Create CRD:

At first, create the CRD of Equinix Metal Device using the following kubectl command:

```console
$ kubectl apply -f https://raw.githubusercontent.com/kubeform/provider-equinixmetal-api/master/crds/device.equinixmetal.kubeform.com_devices.yaml
```

## 2. Create Equinix Metal Provider Secret

Then create the secret which is necessary for provisioning the Device in Equinix Metal.

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: em-secret
stringData:
  provider: |
    {
        "auth_token": "<equinixmetal-auth-token>"
    }
```

Here we can see that, the `provider` field of the `stringData` of the secret is same as the field of the provider part in the terraform config file. The provider secret needs to be provided in json format, under the `provider` key. Save it in a file (eg. `provider-secret.yaml`) then apply it using kubectl command.

```console
$ kubectl apply -f provider-secret.yaml
```

> **Note:** Here, key of the provider field of the stringData (eg. `"auth_token"` etc.) must be in snake case format (same as the tf configuration file)

## 3. Create Equinix Metal Device

Now, we'll create the Equinix Metal Device CRD. The yaml is given below:

```yaml
apiVersion: device.equinixmetal.kubeform.com/v1alpha1
kind: Device
metadata:
  name: test
spec:
  updatePolicy: Destroy
  resource:
    hostname: "kubeform-test"
    plan: "c3.small.x86"
    metro: "sv"
    operatingSystem: "ubuntu_20_10"
    billingCycle: "hourly"
    projectID: "<your-project-id>"
  providerRef:
    name: em-secret
```

Here, the `resource` field contains the Equinix Metal Device spec. Also, we can see that the provider secret is referenced using a field called `providerRef`.

> We can see a field named `terminationPolicy`, this is a feature of kubeform. This field can have two values, `Delete` or `DoNotTerminate`. When the value of this field is set to `DoNotTerminate` then the resource won't get deleted even though we apply `kubectl delete` operation, this field needs to be set to `Delete` to delete the resource. It helps to avoid accidental deletion of the resource. We will see the use of this field in `Delete Equinix Metal Device` part later on this guide. 

Save it in a file (eg. `equinixmetal-device.yaml`) then apply it using kubectl.

```console
$ kubectl apply -f equinixmetal-device.yaml
```

After applying this command, the resource will be in `InProgress` phase until the cloud creates the resource. Once the cloud resource get created, the resource will be in `Current` phase which means we have successfully created the resource.

After successful creation of the resource, the resource state is available under `spec.state` section. This `spec.state` field maps the real world resource to the kubeform resource. This field doesn't contain any sensitive field. Sensitive fields are stored in the secret specified in the `spec.secretRef` section. If no `secretRef` is specified, kubeform will create one.


## 4. Update Equinix Metal Device

Now, we'll update the Device CRD. For updating the Device, we will modify the existing `equinixmetal-device.yaml`, we will use a different `hostname` (`kubeform-test-updated`). The modified yaml is given below:

```yaml
apiVersion: device.equinixmetal.kubeform.com/v1alpha1
kind: Device
metadata:
  name: test
spec:
  updatePolicy: Destroy
  resource:
    hostname: "kubeform-test-updated"
    plan: "c3.small.x86"
    metro: "sv"
    operatingSystem: "ubuntu_20_10"
    billingCycle: "hourly"
    projectID: "<your-project-id>"
  providerRef:
    name: em-secret
```

Now, apply it using kubectl command.

```console
$ kubectl apply -f equinixmetal-device.yaml
```

After that, existing Equinix Metal Device will be updated!

## 5. Delete Equinix Metal Device

To delete the Equinix Metal Device just run:

```console
$ kubectl delete -f equinixmetal-device.yaml
```

After applying this command we will get below error message, as we have set `terminationPolicy: DoNotTerminate`:

```text
Error from server (device "default/test" can't be terminated. To delete, change spec.terminationPolicy to Delete): error when deleting "equinixmetal-device.yaml": admission webhook "device.equinixmetal.kubeform.com" denied the request: device "default/test" can't be terminated. To delete, change spec.terminationPolicy to Delete
```

Let's change the `terminationPolicy` to `Delete` by using kubectl patch command.

```console
$ kubectl patch -n default device test -p '{"spec":{"terminationPolicy":"Delete"}}' --type="merge"
```

Now, we can delete the Device.

```console
$ kubectl delete -f equinixmetal-device.yaml
```

After applying this command the resource will be in `Terminating` phase until the cloud resource get destroyed. Once the cloud resource get destroyed, the resource will get deleted successfully. 
