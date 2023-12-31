---
title: DynamodbTable
menu:
  docs_v2021.08.02:
    identifier: dynamodbtable-aws.kubeform.com
    name: DynamodbTable
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

## DynamodbTable
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `DynamodbTable` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[DynamodbTableSpec](#dynamodbtablespec)***||
| `status` | ***[DynamodbTableStatus](#dynamodbtablestatus)***||
## DynamodbTableSpec

Appears on:[DynamodbTable](#dynamodbtable), [DynamodbTableStatus](#dynamodbtablestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `arn` | ***string***| ***(Optional)*** |
| `attribute` | ***[[]DynamodbTableSpecAttribute](#dynamodbtablespecattribute)***||
| `billingMode` | ***string***| ***(Optional)*** |
| `globalSecondaryIndex` | ***[[]DynamodbTableSpecGlobalSecondaryIndex](#dynamodbtablespecglobalsecondaryindex)***| ***(Optional)*** |
| `hashKey` | ***string***||
| `localSecondaryIndex` | ***[[]DynamodbTableSpecLocalSecondaryIndex](#dynamodbtablespeclocalsecondaryindex)***| ***(Optional)*** |
| `name` | ***string***||
| `pointInTimeRecovery` | ***[[]DynamodbTableSpecPointInTimeRecovery](#dynamodbtablespecpointintimerecovery)***| ***(Optional)*** |
| `rangeKey` | ***string***| ***(Optional)*** |
| `readCapacity` | ***int64***| ***(Optional)*** |
| `serverSideEncryption` | ***[[]DynamodbTableSpecServerSideEncryption](#dynamodbtablespecserversideencryption)***| ***(Optional)*** |
| `streamArn` | ***string***| ***(Optional)*** |
| `streamEnabled` | ***bool***| ***(Optional)*** |
| `streamLabel` | ***string***| ***(Optional)*** |
| `streamViewType` | ***string***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
| `ttl` | ***[[]DynamodbTableSpecTtl](#dynamodbtablespecttl)***| ***(Optional)*** |
| `writeCapacity` | ***int64***| ***(Optional)*** |
## DynamodbTableSpecAttribute

Appears on:[DynamodbTableSpec](#dynamodbtablespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `name` | ***string***||
| `type` | ***string***||
## DynamodbTableSpecGlobalSecondaryIndex

Appears on:[DynamodbTableSpec](#dynamodbtablespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `hashKey` | ***string***||
| `name` | ***string***||
| `nonKeyAttributes` | ***[]string***| ***(Optional)*** |
| `projectionType` | ***string***||
| `rangeKey` | ***string***| ***(Optional)*** |
| `readCapacity` | ***int64***| ***(Optional)*** |
| `writeCapacity` | ***int64***| ***(Optional)*** |
## DynamodbTableSpecLocalSecondaryIndex

Appears on:[DynamodbTableSpec](#dynamodbtablespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `name` | ***string***||
| `nonKeyAttributes` | ***[]string***| ***(Optional)*** |
| `projectionType` | ***string***||
| `rangeKey` | ***string***||
## DynamodbTableSpecPointInTimeRecovery

Appears on:[DynamodbTableSpec](#dynamodbtablespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `enabled` | ***bool***||
## DynamodbTableSpecServerSideEncryption

Appears on:[DynamodbTableSpec](#dynamodbtablespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `enabled` | ***bool***||
## DynamodbTableSpecTtl

Appears on:[DynamodbTableSpec](#dynamodbtablespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `attributeName` | ***string***||
| `enabled` | ***bool***| ***(Optional)*** |
## DynamodbTableStatus

Appears on:[DynamodbTable](#dynamodbtable)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[DynamodbTableSpec](#dynamodbtablespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[DynamodbTableStatus](#dynamodbtablestatus)

---
