---
title: DataFactoryDatasetSQLServerTable
menu:
  docs_v2021.08.02:
    identifier: datafactorydatasetsqlservertable-azurerm.kubeform.com
    name: DataFactoryDatasetSQLServerTable
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

## DataFactoryDatasetSQLServerTable
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `DataFactoryDatasetSQLServerTable` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[DataFactoryDatasetSQLServerTableSpec](#datafactorydatasetsqlservertablespec)***||
| `status` | ***[DataFactoryDatasetSQLServerTableStatus](#datafactorydatasetsqlservertablestatus)***||
## DataFactoryDatasetSQLServerTableSpec

Appears on:[DataFactoryDatasetSQLServerTable](#datafactorydatasetsqlservertable), [DataFactoryDatasetSQLServerTableStatus](#datafactorydatasetsqlservertablestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `additionalProperties` | ***map[string]string***| ***(Optional)*** |
| `annotations` | ***[]string***| ***(Optional)*** |
| `dataFactoryName` | ***string***||
| `description` | ***string***| ***(Optional)*** |
| `folder` | ***string***| ***(Optional)*** |
| `linkedServiceName` | ***string***||
| `name` | ***string***||
| `parameters` | ***map[string]string***| ***(Optional)*** |
| `resourceGroupName` | ***string***||
| `schemaColumn` | ***[[]DataFactoryDatasetSQLServerTableSpecSchemaColumn](#datafactorydatasetsqlservertablespecschemacolumn)***| ***(Optional)*** |
| `tableName` | ***string***| ***(Optional)*** |
## DataFactoryDatasetSQLServerTableSpecSchemaColumn

Appears on:[DataFactoryDatasetSQLServerTableSpec](#datafactorydatasetsqlservertablespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `description` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `type` | ***string***| ***(Optional)*** |
## DataFactoryDatasetSQLServerTableStatus

Appears on:[DataFactoryDatasetSQLServerTable](#datafactorydatasetsqlservertable)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[DataFactoryDatasetSQLServerTableSpec](#datafactorydatasetsqlservertablespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[DataFactoryDatasetSQLServerTableStatus](#datafactorydatasetsqlservertablestatus)

---
