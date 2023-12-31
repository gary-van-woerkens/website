---
title: ServicebusQueue
menu:
  docs_v2021.07.28:
    identifier: servicebusqueue-azurerm.kubeform.com
    name: ServicebusQueue
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

## ServicebusQueue
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `ServicebusQueue` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ServicebusQueueSpec](#servicebusqueuespec)***||
| `status` | ***[ServicebusQueueStatus](#servicebusqueuestatus)***||
## Phase(`string` alias)

Appears on:[ServicebusQueueStatus](#servicebusqueuestatus)

## ServicebusQueueSpec

Appears on:[ServicebusQueue](#servicebusqueue), [ServicebusQueueStatus](#servicebusqueuestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `autoDeleteOnIdle` | ***string***| ***(Optional)*** |
| `deadLetteringOnMessageExpiration` | ***bool***| ***(Optional)*** |
| `defaultMessageTtl` | ***string***| ***(Optional)*** |
| `duplicateDetectionHistoryTimeWindow` | ***string***| ***(Optional)*** |
| `enableBatchedOperations` | ***bool***| ***(Optional)*** Deprecated|
| `enableExpress` | ***bool***| ***(Optional)*** |
| `enablePartitioning` | ***bool***| ***(Optional)*** |
| `location` | ***string***| ***(Optional)*** Deprecated|
| `lockDuration` | ***string***| ***(Optional)*** |
| `maxDeliveryCount` | ***int64***| ***(Optional)*** |
| `maxSizeInMegabytes` | ***int64***| ***(Optional)*** |
| `name` | ***string***||
| `namespaceName` | ***string***||
| `requiresDuplicateDetection` | ***bool***| ***(Optional)*** |
| `requiresSession` | ***bool***| ***(Optional)*** |
| `resourceGroupName` | ***string***||
| `supportOrdering` | ***bool***| ***(Optional)*** Deprecated|
## ServicebusQueueStatus

Appears on:[ServicebusQueue](#servicebusqueue)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ServicebusQueueSpec](#servicebusqueuespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
