---
title: DevTestLinuxVirtualMachine
menu:
  docs_v2021.07.28:
    identifier: devtestlinuxvirtualmachine-azurerm.kubeform.com
    name: DevTestLinuxVirtualMachine
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v2021.07.28
section_menu_id: reference
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

## DevTestLinuxVirtualMachine
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `DevTestLinuxVirtualMachine` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[DevTestLinuxVirtualMachineSpec](#devtestlinuxvirtualmachinespec)***||
| `status` | ***[DevTestLinuxVirtualMachineStatus](#devtestlinuxvirtualmachinestatus)***||
## DevTestLinuxVirtualMachineSpec

Appears on:[DevTestLinuxVirtualMachine](#devtestlinuxvirtualmachine), [DevTestLinuxVirtualMachineStatus](#devtestlinuxvirtualmachinestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `secretRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `allowClaim` | ***bool***| ***(Optional)*** |
| `disallowPublicIPAddress` | ***bool***| ***(Optional)*** |
| `fqdn` | ***string***| ***(Optional)*** |
| `galleryImageReference` | ***[[]DevTestLinuxVirtualMachineSpecGalleryImageReference](#devtestlinuxvirtualmachinespecgalleryimagereference)***||
| `inboundNATRule` | ***[[]DevTestLinuxVirtualMachineSpecInboundNATRule](#devtestlinuxvirtualmachinespecinboundnatrule)***| ***(Optional)*** |
| `labName` | ***string***||
| `labSubnetName` | ***string***||
| `labVirtualNetworkID` | ***string***||
| `location` | ***string***||
| `name` | ***string***||
| `notes` | ***string***| ***(Optional)*** |
| `resourceGroupName` | ***string***||
| `size` | ***string***||
| `sshKey` | ***string***| ***(Optional)*** |
| `storageType` | ***string***||
| `tags` | ***map[string]string***| ***(Optional)*** |
| `uniqueIdentifier` | ***string***| ***(Optional)*** |
| `username` | ***string***||
## DevTestLinuxVirtualMachineSpecGalleryImageReference

Appears on:[DevTestLinuxVirtualMachineSpec](#devtestlinuxvirtualmachinespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `offer` | ***string***||
| `publisher` | ***string***||
| `sku` | ***string***||
| `version` | ***string***||
## DevTestLinuxVirtualMachineSpecInboundNATRule

Appears on:[DevTestLinuxVirtualMachineSpec](#devtestlinuxvirtualmachinespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `backendPort` | ***int64***||
| `frontendPort` | ***int64***| ***(Optional)*** |
| `protocol` | ***string***||
## DevTestLinuxVirtualMachineStatus

Appears on:[DevTestLinuxVirtualMachine](#devtestlinuxvirtualmachine)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[DevTestLinuxVirtualMachineSpec](#devtestlinuxvirtualmachinespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[DevTestLinuxVirtualMachineStatus](#devtestlinuxvirtualmachinestatus)

---
## Sensitive Values
| Name | Type | Description |
|------|------|-------------|
| `password` | ***string*** ||
