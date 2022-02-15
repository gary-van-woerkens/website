---
title: Cloudtrail
menu:
  docs_v2021.10.29:
    identifier: cloudtrail-aws.kubeform.com
    name: Cloudtrail
    parent: aws.kubeform.com-reference
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

## Cloudtrail
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `Cloudtrail` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[CloudtrailSpec](#cloudtrailspec)***||
| `status` | ***[CloudtrailStatus](#cloudtrailstatus)***||
## CloudtrailSpec

Appears on:[Cloudtrail](#cloudtrail), [CloudtrailStatus](#cloudtrailstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `arn` | ***string***| ***(Optional)*** |
| `cloudWatchLogsGroupArn` | ***string***| ***(Optional)*** |
| `cloudWatchLogsRoleArn` | ***string***| ***(Optional)*** |
| `enableLogFileValidation` | ***bool***| ***(Optional)*** |
| `enableLogging` | ***bool***| ***(Optional)*** |
| `eventSelector` | ***[[]CloudtrailSpecEventSelector](#cloudtrailspeceventselector)***| ***(Optional)*** |
| `homeRegion` | ***string***| ***(Optional)*** |
| `includeGlobalServiceEvents` | ***bool***| ***(Optional)*** |
| `isMultiRegionTrail` | ***bool***| ***(Optional)*** |
| `isOrganizationTrail` | ***bool***| ***(Optional)*** |
| `kmsKeyID` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `s3BucketName` | ***string***||
| `s3KeyPrefix` | ***string***| ***(Optional)*** |
| `snsTopicName` | ***string***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
## CloudtrailSpecEventSelector

Appears on:[CloudtrailSpec](#cloudtrailspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `dataResource` | ***[[]CloudtrailSpecEventSelectorDataResource](#cloudtrailspeceventselectordataresource)***| ***(Optional)*** |
| `includeManagementEvents` | ***bool***| ***(Optional)*** |
| `readWriteType` | ***string***| ***(Optional)*** |
## CloudtrailSpecEventSelectorDataResource

Appears on:[CloudtrailSpecEventSelector](#cloudtrailspeceventselector)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `type` | ***string***||
| `values` | ***[]string***||
## CloudtrailStatus

Appears on:[Cloudtrail](#cloudtrail)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[CloudtrailSpec](#cloudtrailspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[CloudtrailStatus](#cloudtrailstatus)

---