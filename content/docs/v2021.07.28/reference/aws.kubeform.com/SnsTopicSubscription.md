---
title: SnsTopicSubscription
menu:
  docs_v2021.07.28:
    identifier: snstopicsubscription-aws.kubeform.com
    name: SnsTopicSubscription
    parent: aws.kubeform.com-reference
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

## SnsTopicSubscription
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `SnsTopicSubscription` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[SnsTopicSubscriptionSpec](#snstopicsubscriptionspec)***||
| `status` | ***[SnsTopicSubscriptionStatus](#snstopicsubscriptionstatus)***||
## Phase(`string` alias)

Appears on:[SnsTopicSubscriptionStatus](#snstopicsubscriptionstatus)

## SnsTopicSubscriptionSpec

Appears on:[SnsTopicSubscription](#snstopicsubscription), [SnsTopicSubscriptionStatus](#snstopicsubscriptionstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `arn` | ***string***| ***(Optional)*** |
| `confirmationTimeoutInMinutes` | ***int64***| ***(Optional)*** |
| `deliveryPolicy` | ***string***| ***(Optional)*** |
| `endpoint` | ***string***||
| `endpointAutoConfirms` | ***bool***| ***(Optional)*** |
| `filterPolicy` | ***string***| ***(Optional)*** |
| `protocol` | ***string***||
| `rawMessageDelivery` | ***bool***| ***(Optional)*** |
| `topicArn` | ***string***||
## SnsTopicSubscriptionStatus

Appears on:[SnsTopicSubscription](#snstopicsubscription)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[SnsTopicSubscriptionSpec](#snstopicsubscriptionspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
