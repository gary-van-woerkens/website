---
title: DirectoryServiceLogSubscription
menu:
  docs_v2021.07.21:
    identifier: directoryservicelogsubscription-aws.kubeform.com
    name: DirectoryServiceLogSubscription
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2021.07.21
section_menu_id: reference
info:
  aws: v0.1.1
  azurerm: v0.1.1
  digitalocean: v0.1.1
  equinixmetal: v0.1.0
  google: v0.1.1
  installer: v2021.07.21
  linode: v0.1.1
  version: v2021.07.21
---

## DirectoryServiceLogSubscription
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `DirectoryServiceLogSubscription` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[DirectoryServiceLogSubscriptionSpec](#directoryservicelogsubscriptionspec)***||
| `status` | ***[DirectoryServiceLogSubscriptionStatus](#directoryservicelogsubscriptionstatus)***||
## DirectoryServiceLogSubscriptionSpec

Appears on:[DirectoryServiceLogSubscription](#directoryservicelogsubscription), [DirectoryServiceLogSubscriptionStatus](#directoryservicelogsubscriptionstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `directoryID` | ***string***||
| `logGroupName` | ***string***||
## DirectoryServiceLogSubscriptionStatus

Appears on:[DirectoryServiceLogSubscription](#directoryservicelogsubscription)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[DirectoryServiceLogSubscriptionSpec](#directoryservicelogsubscriptionspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[DirectoryServiceLogSubscriptionStatus](#directoryservicelogsubscriptionstatus)

---