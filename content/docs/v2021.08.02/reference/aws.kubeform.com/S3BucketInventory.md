---
title: S3BucketInventory
menu:
  docs_v2021.08.02:
    identifier: s3bucketinventory-aws.kubeform.com
    name: S3BucketInventory
    parent: aws.kubeform.com-reference
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

## S3BucketInventory
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `S3BucketInventory` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[S3BucketInventorySpec](#s3bucketinventoryspec)***||
| `status` | ***[S3BucketInventoryStatus](#s3bucketinventorystatus)***||
## Phase(`string` alias)

Appears on:[S3BucketInventoryStatus](#s3bucketinventorystatus)

## S3BucketInventorySpec

Appears on:[S3BucketInventory](#s3bucketinventory), [S3BucketInventoryStatus](#s3bucketinventorystatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `bucket` | ***string***||
| `destination` | ***[[]S3BucketInventorySpecDestination](#s3bucketinventoryspecdestination)***||
| `enabled` | ***bool***| ***(Optional)*** |
| `filter` | ***[[]S3BucketInventorySpecFilter](#s3bucketinventoryspecfilter)***| ***(Optional)*** |
| `includedObjectVersions` | ***string***||
| `name` | ***string***||
| `optionalFields` | ***[]string***| ***(Optional)*** |
| `schedule` | ***[[]S3BucketInventorySpecSchedule](#s3bucketinventoryspecschedule)***||
## S3BucketInventorySpecDestination

Appears on:[S3BucketInventorySpec](#s3bucketinventoryspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `bucket` | ***[[]S3BucketInventorySpecDestinationBucket](#s3bucketinventoryspecdestinationbucket)***||
## S3BucketInventorySpecDestinationBucket

Appears on:[S3BucketInventorySpecDestination](#s3bucketinventoryspecdestination)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `accountID` | ***string***| ***(Optional)*** |
| `bucketArn` | ***string***||
| `encryption` | ***[[]S3BucketInventorySpecDestinationBucketEncryption](#s3bucketinventoryspecdestinationbucketencryption)***| ***(Optional)*** |
| `format` | ***string***||
| `prefix` | ***string***| ***(Optional)*** |
## S3BucketInventorySpecDestinationBucketEncryption

Appears on:[S3BucketInventorySpecDestinationBucket](#s3bucketinventoryspecdestinationbucket)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `sseKms` | ***[[]S3BucketInventorySpecDestinationBucketEncryptionSseKms](#s3bucketinventoryspecdestinationbucketencryptionssekms)***| ***(Optional)*** |
| `sseS3` | ***[[]S3BucketInventorySpecDestinationBucketEncryptionSseS3](#s3bucketinventoryspecdestinationbucketencryptionsses3)***| ***(Optional)*** |
## S3BucketInventorySpecDestinationBucketEncryptionSseKms

Appears on:[S3BucketInventorySpecDestinationBucketEncryption](#s3bucketinventoryspecdestinationbucketencryption)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `keyID` | ***string***||
## S3BucketInventorySpecDestinationBucketEncryptionSseS3

Appears on:[S3BucketInventorySpecDestinationBucketEncryption](#s3bucketinventoryspecdestinationbucketencryption)

## S3BucketInventorySpecFilter

Appears on:[S3BucketInventorySpec](#s3bucketinventoryspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `prefix` | ***string***| ***(Optional)*** |
## S3BucketInventorySpecSchedule

Appears on:[S3BucketInventorySpec](#s3bucketinventoryspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `frequency` | ***string***||
## S3BucketInventoryStatus

Appears on:[S3BucketInventory](#s3bucketinventory)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[S3BucketInventorySpec](#s3bucketinventoryspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
