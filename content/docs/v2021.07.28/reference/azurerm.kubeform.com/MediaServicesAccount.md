---
title: MediaServicesAccount
menu:
  docs_v2021.07.28:
    identifier: mediaservicesaccount-azurerm.kubeform.com
    name: MediaServicesAccount
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

## MediaServicesAccount
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `MediaServicesAccount` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[MediaServicesAccountSpec](#mediaservicesaccountspec)***||
| `status` | ***[MediaServicesAccountStatus](#mediaservicesaccountstatus)***||
## MediaServicesAccountSpec

Appears on:[MediaServicesAccount](#mediaservicesaccount), [MediaServicesAccountStatus](#mediaservicesaccountstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `location` | ***string***||
| `name` | ***string***||
| `resourceGroupName` | ***string***||
| `storageAccount` | ***[[]MediaServicesAccountSpecStorageAccount](#mediaservicesaccountspecstorageaccount)***||
## MediaServicesAccountSpecStorageAccount

Appears on:[MediaServicesAccountSpec](#mediaservicesaccountspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `ID` | ***string***||
| `isPrimary` | ***bool***| ***(Optional)*** |
## MediaServicesAccountStatus

Appears on:[MediaServicesAccount](#mediaservicesaccount)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[MediaServicesAccountSpec](#mediaservicesaccountspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[MediaServicesAccountStatus](#mediaservicesaccountstatus)

---
