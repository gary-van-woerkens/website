---
title: S3BucketNotification
menu:
  docs_v2021.10.29:
    identifier: s3bucketnotification-aws.kubeform.com
    name: S3BucketNotification
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2021.10.29
section_menu_id: reference
info:
  alicloud: v0.4.0
  aws: v0.4.0
  azurerm: v0.4.0
  civo: v0.4.0
  datadog: v0.4.0
  digitalocean: v0.4.0
  dynatrace: v0.4.0
  ec: v0.4.0
  equinixmetal: v0.4.0
  google: v0.4.0
  grafana: v0.4.0
  hcloud: v0.4.0
  ibm: v0.4.0
  installer: v2021.10.29
  linode: v0.4.0
  mongodbatlas: v0.4.0
  newrelic: v0.4.0
  oci: v0.4.0
  ovh: v0.4.0
  pagerduty: v0.4.0
  rediscloud: v0.4.0
  upcloud: v0.4.0
  version: v2021.10.29
  vsphere: v0.4.0
  vultr: v0.4.0
  wavefront: v0.4.0
---

## S3BucketNotification
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `S3BucketNotification` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[S3BucketNotificationSpec](#s3bucketnotificationspec)***||
| `status` | ***[S3BucketNotificationStatus](#s3bucketnotificationstatus)***||
## Phase(`string` alias)

Appears on:[S3BucketNotificationStatus](#s3bucketnotificationstatus)

## S3BucketNotificationSpec

Appears on:[S3BucketNotification](#s3bucketnotification), [S3BucketNotificationStatus](#s3bucketnotificationstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `bucket` | ***string***||
| `lambdaFunction` | ***[[]S3BucketNotificationSpecLambdaFunction](#s3bucketnotificationspeclambdafunction)***| ***(Optional)*** |
| `queue` | ***[[]S3BucketNotificationSpecQueue](#s3bucketnotificationspecqueue)***| ***(Optional)*** |
| `topic` | ***[[]S3BucketNotificationSpecTopic](#s3bucketnotificationspectopic)***| ***(Optional)*** |
## S3BucketNotificationSpecLambdaFunction

Appears on:[S3BucketNotificationSpec](#s3bucketnotificationspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `events` | ***[]string***||
| `filterPrefix` | ***string***| ***(Optional)*** |
| `filterSuffix` | ***string***| ***(Optional)*** |
| `ID` | ***string***| ***(Optional)*** |
| `lambdaFunctionArn` | ***string***| ***(Optional)*** |
## S3BucketNotificationSpecQueue

Appears on:[S3BucketNotificationSpec](#s3bucketnotificationspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `events` | ***[]string***||
| `filterPrefix` | ***string***| ***(Optional)*** |
| `filterSuffix` | ***string***| ***(Optional)*** |
| `ID` | ***string***| ***(Optional)*** |
| `queueArn` | ***string***||
## S3BucketNotificationSpecTopic

Appears on:[S3BucketNotificationSpec](#s3bucketnotificationspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `events` | ***[]string***||
| `filterPrefix` | ***string***| ***(Optional)*** |
| `filterSuffix` | ***string***| ***(Optional)*** |
| `ID` | ***string***| ***(Optional)*** |
| `topicArn` | ***string***||
## S3BucketNotificationStatus

Appears on:[S3BucketNotification](#s3bucketnotification)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[S3BucketNotificationSpec](#s3bucketnotificationspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
