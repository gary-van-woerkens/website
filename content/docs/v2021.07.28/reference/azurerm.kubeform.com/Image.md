---
title: Image
menu:
  docs_v2021.07.28:
    identifier: image-azurerm.kubeform.com
    name: Image
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

## Image
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `Image` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ImageSpec](#imagespec)***||
| `status` | ***[ImageStatus](#imagestatus)***||
## ImageSpec

Appears on:[Image](#image), [ImageStatus](#imagestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `dataDisk` | ***[[]ImageSpecDataDisk](#imagespecdatadisk)***| ***(Optional)*** |
| `hyperVGeneration` | ***string***| ***(Optional)*** |
| `location` | ***string***||
| `name` | ***string***||
| `osDisk` | ***[[]ImageSpecOsDisk](#imagespecosdisk)***| ***(Optional)*** |
| `resourceGroupName` | ***string***||
| `sourceVirtualMachineID` | ***string***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
| `zoneResilient` | ***bool***| ***(Optional)*** |
## ImageSpecDataDisk

Appears on:[ImageSpec](#imagespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `blobURI` | ***string***| ***(Optional)*** |
| `caching` | ***string***| ***(Optional)*** |
| `lun` | ***int64***| ***(Optional)*** |
| `managedDiskID` | ***string***| ***(Optional)*** |
| `sizeGb` | ***int64***| ***(Optional)*** |
## ImageSpecOsDisk

Appears on:[ImageSpec](#imagespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `blobURI` | ***string***| ***(Optional)*** |
| `caching` | ***string***| ***(Optional)*** |
| `managedDiskID` | ***string***| ***(Optional)*** |
| `osState` | ***string***| ***(Optional)*** |
| `osType` | ***string***| ***(Optional)*** |
| `sizeGb` | ***int64***| ***(Optional)*** |
## ImageStatus

Appears on:[Image](#image)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ImageSpec](#imagespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[ImageStatus](#imagestatus)

---
