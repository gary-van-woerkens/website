---
title: LoggingMetric
menu:
  docs_v2021.10.29:
    identifier: loggingmetric-google.kubeform.com
    name: LoggingMetric
    parent: google.kubeform.com-reference
    weight: 1
menu_name: docs_v2021.10.29
section_menu_id: reference
info:
  alicloud: v0.4.0
  aws: v0.4.0
  azurerm: v0.4.0
  civo: v0.4.0
  cli: v0.1.0
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

## LoggingMetric
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `google.kubeform.com/v1alpha1` |
|    `kind` | string | `LoggingMetric` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[LoggingMetricSpec](#loggingmetricspec)***||
| `status` | ***[LoggingMetricStatus](#loggingmetricstatus)***||
## LoggingMetricSpec

Appears on:[LoggingMetric](#loggingmetric), [LoggingMetricStatus](#loggingmetricstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `bucketOptions` | ***[[]LoggingMetricSpecBucketOptions](#loggingmetricspecbucketoptions)***| ***(Optional)*** |
| `description` | ***string***| ***(Optional)*** |
| `filter` | ***string***||
| `labelExtractors` | ***map[string]string***| ***(Optional)*** |
| `metricDescriptor` | ***[[]LoggingMetricSpecMetricDescriptor](#loggingmetricspecmetricdescriptor)***||
| `name` | ***string***||
| `project` | ***string***| ***(Optional)*** |
| `valueExtractor` | ***string***| ***(Optional)*** |
## LoggingMetricSpecBucketOptions

Appears on:[LoggingMetricSpec](#loggingmetricspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `explicitBuckets` | ***[[]LoggingMetricSpecBucketOptionsExplicitBuckets](#loggingmetricspecbucketoptionsexplicitbuckets)***| ***(Optional)*** |
| `exponentialBuckets` | ***[[]LoggingMetricSpecBucketOptionsExponentialBuckets](#loggingmetricspecbucketoptionsexponentialbuckets)***| ***(Optional)*** |
| `linearBuckets` | ***[[]LoggingMetricSpecBucketOptionsLinearBuckets](#loggingmetricspecbucketoptionslinearbuckets)***| ***(Optional)*** |
## LoggingMetricSpecBucketOptionsExplicitBuckets

Appears on:[LoggingMetricSpecBucketOptions](#loggingmetricspecbucketoptions)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `bounds` | ***[]float64***| ***(Optional)*** |
## LoggingMetricSpecBucketOptionsExponentialBuckets

Appears on:[LoggingMetricSpecBucketOptions](#loggingmetricspecbucketoptions)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `growthFactor` | ***int64***| ***(Optional)*** |
| `numFiniteBuckets` | ***int64***| ***(Optional)*** |
| `scale` | ***float64***| ***(Optional)*** |
## LoggingMetricSpecBucketOptionsLinearBuckets

Appears on:[LoggingMetricSpecBucketOptions](#loggingmetricspecbucketoptions)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `numFiniteBuckets` | ***int64***| ***(Optional)*** |
| `offset` | ***float64***| ***(Optional)*** |
| `width` | ***int64***| ***(Optional)*** |
## LoggingMetricSpecMetricDescriptor

Appears on:[LoggingMetricSpec](#loggingmetricspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `labels` | ***[[]LoggingMetricSpecMetricDescriptorLabels](#loggingmetricspecmetricdescriptorlabels)***| ***(Optional)*** |
| `metricKind` | ***string***||
| `unit` | ***string***| ***(Optional)*** |
| `valueType` | ***string***||
## LoggingMetricSpecMetricDescriptorLabels

Appears on:[LoggingMetricSpecMetricDescriptor](#loggingmetricspecmetricdescriptor)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `description` | ***string***| ***(Optional)*** |
| `key` | ***string***||
| `valueType` | ***string***| ***(Optional)*** |
## LoggingMetricStatus

Appears on:[LoggingMetric](#loggingmetric)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[LoggingMetricSpec](#loggingmetricspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[LoggingMetricStatus](#loggingmetricstatus)

---
