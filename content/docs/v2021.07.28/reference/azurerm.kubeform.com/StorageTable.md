---
title: StorageTable
menu:
  docs_v2021.07.28:
    identifier: storagetable-azurerm.kubeform.com
    name: StorageTable
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

## StorageTable
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `StorageTable` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[StorageTableSpec](#storagetablespec)***||
| `status` | ***[StorageTableStatus](#storagetablestatus)***||
## Phase(`string` alias)

Appears on:[StorageTableStatus](#storagetablestatus)

## StorageTableSpec

Appears on:[StorageTable](#storagetable), [StorageTableStatus](#storagetablestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `acl` | ***[[]StorageTableSpecAcl](#storagetablespecacl)***| ***(Optional)*** |
| `name` | ***string***||
| `resourceGroupName` | ***string***| ***(Optional)*** Deprecated|
| `storageAccountName` | ***string***||
## StorageTableSpecAcl

Appears on:[StorageTableSpec](#storagetablespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `accessPolicy` | ***[[]StorageTableSpecAclAccessPolicy](#storagetablespecaclaccesspolicy)***| ***(Optional)*** |
| `ID` | ***string***||
## StorageTableSpecAclAccessPolicy

Appears on:[StorageTableSpecAcl](#storagetablespecacl)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `expiry` | ***string***||
| `permissions` | ***string***||
| `start` | ***string***||
## StorageTableStatus

Appears on:[StorageTable](#storagetable)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[StorageTableSpec](#storagetablespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
