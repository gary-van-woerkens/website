---
title: StreamAnalyticsOutputEventhub
menu:
  docs_v2021.07.21:
    identifier: streamanalyticsoutputeventhub-azurerm.kubeform.com
    name: StreamAnalyticsOutputEventhub
    parent: azurerm.kubeform.com-reference
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

## StreamAnalyticsOutputEventhub
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `StreamAnalyticsOutputEventhub` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[StreamAnalyticsOutputEventhubSpec](#streamanalyticsoutputeventhubspec)***||
| `status` | ***[StreamAnalyticsOutputEventhubStatus](#streamanalyticsoutputeventhubstatus)***||
## Phase(`string` alias)

Appears on:[StreamAnalyticsOutputEventhubStatus](#streamanalyticsoutputeventhubstatus)

## StreamAnalyticsOutputEventhubSpec

Appears on:[StreamAnalyticsOutputEventhub](#streamanalyticsoutputeventhub), [StreamAnalyticsOutputEventhubStatus](#streamanalyticsoutputeventhubstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `secretRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `eventhubName` | ***string***||
| `name` | ***string***||
| `resourceGroupName` | ***string***||
| `serialization` | ***[[]StreamAnalyticsOutputEventhubSpecSerialization](#streamanalyticsoutputeventhubspecserialization)***||
| `servicebusNamespace` | ***string***||
| `sharedAccessPolicyName` | ***string***||
| `streamAnalyticsJobName` | ***string***||
## StreamAnalyticsOutputEventhubSpecSerialization

Appears on:[StreamAnalyticsOutputEventhubSpec](#streamanalyticsoutputeventhubspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `encoding` | ***string***| ***(Optional)*** |
| `fieldDelimiter` | ***string***| ***(Optional)*** |
| `format` | ***string***| ***(Optional)*** |
| `type` | ***string***||
## StreamAnalyticsOutputEventhubStatus

Appears on:[StreamAnalyticsOutputEventhub](#streamanalyticsoutputeventhub)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[StreamAnalyticsOutputEventhubSpec](#streamanalyticsoutputeventhubspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
## Sensitive Values
| Name | Type | Description |
|------|------|-------------|
| `shared_access_policy_key` | ***string*** ||