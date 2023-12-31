---
title: Iothub
menu:
  docs_v2021.08.02:
    identifier: iothub-azurerm.kubeform.com
    name: Iothub
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v2021.08.02
section_menu_id: reference
info:
  alicloud: v0.3.0
  aws: v0.3.0
  azurerm: v0.3.0
  civo: v0.3.0
  datadog: v0.3.0
  digitalocean: v0.3.0
  dynatrace: v0.3.0
  ec: v0.3.0
  equinixmetal: v0.3.0
  google: v0.3.0
  grafana: v0.3.0
  hcloud: v0.3.0
  ibm: v0.3.0
  installer: v2021.08.02
  linode: v0.3.0
  mongodbatlas: v0.3.0
  newrelic: v0.3.0
  ovh: v0.3.0
  pagerduty: v0.3.0
  rediscloud: v0.3.0
  upcloud: v0.3.0
  version: v2021.08.02
  vsphere: v0.3.0
  vultr: v0.3.0
  wavefront: v0.3.0
---

## Iothub
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `Iothub` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[IothubSpec](#iothubspec)***||
| `status` | ***[IothubStatus](#iothubstatus)***||
## IothubSpec

Appears on:[Iothub](#iothub), [IothubStatus](#iothubstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `secretRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `endpoint` | ***[[]IothubSpecEndpoint](#iothubspecendpoint)***| ***(Optional)*** |
| `eventHubEventsEndpoint` | ***string***| ***(Optional)*** |
| `eventHubEventsPath` | ***string***| ***(Optional)*** |
| `eventHubOperationsEndpoint` | ***string***| ***(Optional)*** |
| `eventHubOperationsPath` | ***string***| ***(Optional)*** |
| `eventHubPartitionCount` | ***int64***| ***(Optional)*** |
| `eventHubRetentionInDays` | ***int64***| ***(Optional)*** |
| `fallbackRoute` | ***[[]IothubSpecFallbackRoute](#iothubspecfallbackroute)***| ***(Optional)*** |
| `fileUpload` | ***[[]IothubSpecFileUpload](#iothubspecfileupload)***| ***(Optional)*** |
| `hostname` | ***string***| ***(Optional)*** |
| `ipFilterRule` | ***[[]IothubSpecIpFilterRule](#iothubspecipfilterrule)***| ***(Optional)*** |
| `location` | ***string***||
| `name` | ***string***||
| `resourceGroupName` | ***string***||
| `route` | ***[[]IothubSpecRoute](#iothubspecroute)***| ***(Optional)*** |
| `sharedAccessPolicy` | ***[[]IothubSpecSharedAccessPolicy](#iothubspecsharedaccesspolicy)***| ***(Optional)*** |
| `sku` | ***[[]IothubSpecSku](#iothubspecsku)***||
| `tags` | ***map[string]string***| ***(Optional)*** |
| `type` | ***string***| ***(Optional)*** |
## IothubSpecEndpoint

Appears on:[IothubSpec](#iothubspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `batchFrequencyInSeconds` | ***int64***| ***(Optional)*** |
| `containerName` | ***string***| ***(Optional)*** |
| `encoding` | ***string***| ***(Optional)*** |
| `fileNameFormat` | ***string***| ***(Optional)*** |
| `maxChunkSizeInBytes` | ***int64***| ***(Optional)*** |
| `name` | ***string***||
| `type` | ***string***||
## IothubSpecFallbackRoute

Appears on:[IothubSpec](#iothubspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `condition` | ***string***| ***(Optional)*** |
| `enabled` | ***bool***| ***(Optional)*** |
| `endpointNames` | ***[]string***| ***(Optional)*** |
| `source` | ***string***| ***(Optional)*** |
## IothubSpecFileUpload

Appears on:[IothubSpec](#iothubspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `containerName` | ***string***||
| `defaultTtl` | ***string***| ***(Optional)*** |
| `lockDuration` | ***string***| ***(Optional)*** |
| `maxDeliveryCount` | ***int64***| ***(Optional)*** |
| `notifications` | ***bool***| ***(Optional)*** |
| `sasTtl` | ***string***| ***(Optional)*** |
## IothubSpecIpFilterRule

Appears on:[IothubSpec](#iothubspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `action` | ***string***||
| `ipMask` | ***string***||
| `name` | ***string***||
## IothubSpecRoute

Appears on:[IothubSpec](#iothubspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `condition` | ***string***| ***(Optional)*** |
| `enabled` | ***bool***||
| `endpointNames` | ***[]string***||
| `name` | ***string***||
| `source` | ***string***||
## IothubSpecSharedAccessPolicy

Appears on:[IothubSpec](#iothubspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `keyName` | ***string***| ***(Optional)*** |
| `permissions` | ***string***| ***(Optional)*** |
## IothubSpecSku

Appears on:[IothubSpec](#iothubspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `capacity` | ***int64***||
| `name` | ***string***||
| `tier` | ***string***| ***(Optional)*** Deprecated|
## IothubStatus

Appears on:[Iothub](#iothub)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[IothubSpec](#iothubspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[IothubStatus](#iothubstatus)

---
## Sensitive Values
| Name | Type | Description |
|------|------|-------------|
| `endpoint.<index>.connection_string` | ***string*** ||
| `file_upload.<index>.connection_string` | ***string*** ||
| `shared_access_policy.<index>.primary_key` | ***string*** ||
| `shared_access_policy.<index>.secondary_key` | ***string*** ||
