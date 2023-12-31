---
title: ApiManagementSubscription
menu:
  docs_v2021.07.28:
    identifier: apimanagementsubscription-azurerm.kubeform.com
    name: ApiManagementSubscription
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

## ApiManagementSubscription
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `ApiManagementSubscription` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ApiManagementSubscriptionSpec](#apimanagementsubscriptionspec)***||
| `status` | ***[ApiManagementSubscriptionStatus](#apimanagementsubscriptionstatus)***||
## ApiManagementSubscriptionSpec

Appears on:[ApiManagementSubscription](#apimanagementsubscription), [ApiManagementSubscriptionStatus](#apimanagementsubscriptionstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `secretRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `apiManagementName` | ***string***||
| `displayName` | ***string***||
| `productID` | ***string***||
| `resourceGroupName` | ***string***||
| `state` | ***string***| ***(Optional)*** |
| `subscriptionID` | ***string***| ***(Optional)*** |
| `userID` | ***string***||
## ApiManagementSubscriptionStatus

Appears on:[ApiManagementSubscription](#apimanagementsubscription)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ApiManagementSubscriptionSpec](#apimanagementsubscriptionspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[ApiManagementSubscriptionStatus](#apimanagementsubscriptionstatus)

---
## Sensitive Values
| Name | Type | Description |
|------|------|-------------|
| `primary_key` | ***string*** ||
| `secondary_key` | ***string*** ||
