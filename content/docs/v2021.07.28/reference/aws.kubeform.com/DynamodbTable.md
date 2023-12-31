---
title: DynamodbTable
menu:
  docs_v2021.07.28:
    identifier: dynamodbtable-aws.kubeform.com
    name: DynamodbTable
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
