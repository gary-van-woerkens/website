---
title: GlueCrawler
menu:
  docs_v2022.05.11:
    identifier: gluecrawler-aws.kubeform.com
    name: GlueCrawler
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2022.05.11
section_menu_id: reference
info:
  alicloud: v0.5.0
  aws: v0.5.0
  azurerm: v0.5.0
  civo: v0.5.0
  cli: v0.2.0
  datadog: v0.5.0
  digitalocean: v0.5.0
  dynatrace: v0.5.0
  ec: v0.5.0
  equinixmetal: v0.5.0
  google: v0.5.0
  grafana: v0.5.0
  hcloud: v0.5.0
  ibm: v0.5.0
  installer: v2022.05.11
  linode: v0.5.0
  module: v0.1.0
  mongodbatlas: v0.5.0
  newrelic: v0.5.0
  oci: v0.5.0
  ovh: v0.5.0
  pagerduty: v0.5.0
  rediscloud: v0.5.0
  upcloud: v0.5.0
  version: v2022.05.11
  vsphere: v0.5.0
  vultr: v0.5.0
  wavefront: v0.5.0
---

## GlueCrawler
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `GlueCrawler` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-22.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[GlueCrawlerSpec](#gluecrawlerspec)***||
| `status` | ***[GlueCrawlerStatus](#gluecrawlerstatus)***||
## GlueCrawlerSpec

Appears on:[GlueCrawler](#gluecrawler), [GlueCrawlerStatus](#gluecrawlerstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-22.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `arn` | ***string***| ***(Optional)*** |
| `catalogTarget` | ***[[]GlueCrawlerSpecCatalogTarget](#gluecrawlerspeccatalogtarget)***| ***(Optional)*** |
| `classifiers` | ***[]string***| ***(Optional)*** |
| `configuration` | ***string***| ***(Optional)*** |
| `databaseName` | ***string***||
| `description` | ***string***| ***(Optional)*** |
| `dynamodbTarget` | ***[[]GlueCrawlerSpecDynamodbTarget](#gluecrawlerspecdynamodbtarget)***| ***(Optional)*** |
| `jdbcTarget` | ***[[]GlueCrawlerSpecJdbcTarget](#gluecrawlerspecjdbctarget)***| ***(Optional)*** |
| `name` | ***string***||
| `role` | ***string***||
| `s3Target` | ***[[]GlueCrawlerSpecS3Target](#gluecrawlerspecs3target)***| ***(Optional)*** |
| `schedule` | ***string***| ***(Optional)*** |
| `schemaChangePolicy` | ***[[]GlueCrawlerSpecSchemaChangePolicy](#gluecrawlerspecschemachangepolicy)***| ***(Optional)*** |
| `securityConfiguration` | ***string***| ***(Optional)*** |
| `tablePrefix` | ***string***| ***(Optional)*** |
## GlueCrawlerSpecCatalogTarget

Appears on:[GlueCrawlerSpec](#gluecrawlerspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `databaseName` | ***string***||
| `tables` | ***[]string***||
## GlueCrawlerSpecDynamodbTarget

Appears on:[GlueCrawlerSpec](#gluecrawlerspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `path` | ***string***||
## GlueCrawlerSpecJdbcTarget

Appears on:[GlueCrawlerSpec](#gluecrawlerspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `connectionName` | ***string***||
| `exclusions` | ***[]string***| ***(Optional)*** |
| `path` | ***string***||
## GlueCrawlerSpecS3Target

Appears on:[GlueCrawlerSpec](#gluecrawlerspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `exclusions` | ***[]string***| ***(Optional)*** |
| `path` | ***string***||
## GlueCrawlerSpecSchemaChangePolicy

Appears on:[GlueCrawlerSpec](#gluecrawlerspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `deleteBehavior` | ***string***| ***(Optional)*** |
| `updateBehavior` | ***string***| ***(Optional)*** |
## GlueCrawlerStatus

Appears on:[GlueCrawler](#gluecrawler)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[GlueCrawlerSpec](#gluecrawlerspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[GlueCrawlerStatus](#gluecrawlerstatus)

---
