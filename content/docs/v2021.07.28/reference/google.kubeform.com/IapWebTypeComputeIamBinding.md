---
title: IapWebTypeComputeIamBinding
menu:
  docs_v2021.07.28:
    identifier: iapwebtypecomputeiambinding-google.kubeform.com
    name: IapWebTypeComputeIamBinding
    parent: google.kubeform.com-reference
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

## IapWebTypeComputeIamBinding
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `google.kubeform.com/v1alpha1` |
|    `kind` | string | `IapWebTypeComputeIamBinding` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[IapWebTypeComputeIamBindingSpec](#iapwebtypecomputeiambindingspec)***||
| `status` | ***[IapWebTypeComputeIamBindingStatus](#iapwebtypecomputeiambindingstatus)***||
## IapWebTypeComputeIamBindingSpec

Appears on:[IapWebTypeComputeIamBinding](#iapwebtypecomputeiambinding), [IapWebTypeComputeIamBindingStatus](#iapwebtypecomputeiambindingstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `etag` | ***string***| ***(Optional)*** |
| `members` | ***[]string***||
| `project` | ***string***| ***(Optional)*** |
| `role` | ***string***||
## IapWebTypeComputeIamBindingStatus

Appears on:[IapWebTypeComputeIamBinding](#iapwebtypecomputeiambinding)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[IapWebTypeComputeIamBindingSpec](#iapwebtypecomputeiambindingspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[IapWebTypeComputeIamBindingStatus](#iapwebtypecomputeiambindingstatus)

---
