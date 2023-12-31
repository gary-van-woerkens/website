---
title: ApiManagementProduct
menu:
  docs_v2021.07.28:
    identifier: apimanagementproduct-azurerm.kubeform.com
    name: ApiManagementProduct
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

## ApiManagementProduct
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `ApiManagementProduct` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ApiManagementProductSpec](#apimanagementproductspec)***||
| `status` | ***[ApiManagementProductStatus](#apimanagementproductstatus)***||
## ApiManagementProductSpec

Appears on:[ApiManagementProduct](#apimanagementproduct), [ApiManagementProductStatus](#apimanagementproductstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `apiManagementName` | ***string***||
| `approvalRequired` | ***bool***| ***(Optional)*** |
| `description` | ***string***| ***(Optional)*** |
| `displayName` | ***string***||
| `productID` | ***string***||
| `published` | ***bool***||
| `resourceGroupName` | ***string***||
| `subscriptionRequired` | ***bool***||
| `subscriptionsLimit` | ***int64***| ***(Optional)*** |
| `terms` | ***string***| ***(Optional)*** |
## ApiManagementProductStatus

Appears on:[ApiManagementProduct](#apimanagementproduct)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ApiManagementProductSpec](#apimanagementproductspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[ApiManagementProductStatus](#apimanagementproductstatus)

---
