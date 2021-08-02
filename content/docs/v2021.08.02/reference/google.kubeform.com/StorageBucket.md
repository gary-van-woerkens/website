---
title: StorageBucket
menu:
  docs_v2021.08.02:
    identifier: storagebucket-google.kubeform.com
    name: StorageBucket
    parent: google.kubeform.com-reference
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

## StorageBucket
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `google.kubeform.com/v1alpha1` |
|    `kind` | string | `StorageBucket` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[StorageBucketSpec](#storagebucketspec)***||
| `status` | ***[StorageBucketStatus](#storagebucketstatus)***||
## Phase(`string` alias)

Appears on:[StorageBucketStatus](#storagebucketstatus)

## StorageBucketSpec

Appears on:[StorageBucket](#storagebucket), [StorageBucketStatus](#storagebucketstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `bucketPolicyOnly` | ***bool***| ***(Optional)*** |
| `cors` | ***[[]StorageBucketSpecCors](#storagebucketspeccors)***| ***(Optional)*** |
| `encryption` | ***[[]StorageBucketSpecEncryption](#storagebucketspecencryption)***| ***(Optional)*** |
| `forceDestroy` | ***bool***| ***(Optional)*** |
| `labels` | ***map[string]string***| ***(Optional)*** |
| `lifecycleRule` | ***[[]StorageBucketSpecLifecycleRule](#storagebucketspeclifecyclerule)***| ***(Optional)*** |
| `location` | ***string***| ***(Optional)*** |
| `logging` | ***[[]StorageBucketSpecLogging](#storagebucketspeclogging)***| ***(Optional)*** |
| `name` | ***string***||
| `project` | ***string***| ***(Optional)*** |
| `requesterPays` | ***bool***| ***(Optional)*** |
| `retentionPolicy` | ***[[]StorageBucketSpecRetentionPolicy](#storagebucketspecretentionpolicy)***| ***(Optional)*** |
| `selfLink` | ***string***| ***(Optional)*** |
| `storageClass` | ***string***| ***(Optional)*** |
| `url` | ***string***| ***(Optional)*** |
| `versioning` | ***[[]StorageBucketSpecVersioning](#storagebucketspecversioning)***| ***(Optional)*** |
| `website` | ***[[]StorageBucketSpecWebsite](#storagebucketspecwebsite)***| ***(Optional)*** |
## StorageBucketSpecCors

Appears on:[StorageBucketSpec](#storagebucketspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `maxAgeSeconds` | ***int64***| ***(Optional)*** |
| `method` | ***[]string***| ***(Optional)*** |
| `origin` | ***[]string***| ***(Optional)*** |
| `responseHeader` | ***[]string***| ***(Optional)*** |
## StorageBucketSpecEncryption

Appears on:[StorageBucketSpec](#storagebucketspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `defaultKmsKeyName` | ***string***||
## StorageBucketSpecLifecycleRule

Appears on:[StorageBucketSpec](#storagebucketspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `action` | ***[[]StorageBucketSpecLifecycleRuleAction](#storagebucketspeclifecycleruleaction)***||
| `condition` | ***[[]StorageBucketSpecLifecycleRuleCondition](#storagebucketspeclifecyclerulecondition)***||
## StorageBucketSpecLifecycleRuleAction

Appears on:[StorageBucketSpecLifecycleRule](#storagebucketspeclifecyclerule)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `storageClass` | ***string***| ***(Optional)*** |
| `type` | ***string***||
## StorageBucketSpecLifecycleRuleCondition

Appears on:[StorageBucketSpecLifecycleRule](#storagebucketspeclifecyclerule)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `age` | ***int64***| ***(Optional)*** |
| `createdBefore` | ***string***| ***(Optional)*** |
| `isLive` | ***bool***| ***(Optional)*** Deprecated|
| `matchesStorageClass` | ***[]string***| ***(Optional)*** |
| `numNewerVersions` | ***int64***| ***(Optional)*** |
| `withState` | ***string***| ***(Optional)*** |
## StorageBucketSpecLogging

Appears on:[StorageBucketSpec](#storagebucketspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `logBucket` | ***string***||
| `logObjectPrefix` | ***string***| ***(Optional)*** |
## StorageBucketSpecRetentionPolicy

Appears on:[StorageBucketSpec](#storagebucketspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `isLocked` | ***bool***| ***(Optional)*** |
| `retentionPeriod` | ***int64***||
## StorageBucketSpecVersioning

Appears on:[StorageBucketSpec](#storagebucketspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `enabled` | ***bool***| ***(Optional)*** |
## StorageBucketSpecWebsite

Appears on:[StorageBucketSpec](#storagebucketspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `mainPageSuffix` | ***string***| ***(Optional)*** |
| `notFoundPage` | ***string***| ***(Optional)*** |
## StorageBucketStatus

Appears on:[StorageBucket](#storagebucket)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[StorageBucketSpec](#storagebucketspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
