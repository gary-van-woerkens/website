---
title: GlueCatalogTable
menu:
  docs_v2022.05.11:
    identifier: gluecatalogtable-aws.kubeform.com
    name: GlueCatalogTable
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

## GlueCatalogTable
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `GlueCatalogTable` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-22.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[GlueCatalogTableSpec](#gluecatalogtablespec)***||
| `status` | ***[GlueCatalogTableStatus](#gluecatalogtablestatus)***||
## GlueCatalogTableSpec

Appears on:[GlueCatalogTable](#gluecatalogtable), [GlueCatalogTableStatus](#gluecatalogtablestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-22.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `catalogID` | ***string***| ***(Optional)*** |
| `databaseName` | ***string***||
| `description` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `owner` | ***string***| ***(Optional)*** |
| `parameters` | ***map[string]string***| ***(Optional)*** |
| `partitionKeys` | ***[[]GlueCatalogTableSpecPartitionKeys](#gluecatalogtablespecpartitionkeys)***| ***(Optional)*** |
| `retention` | ***int64***| ***(Optional)*** |
| `storageDescriptor` | ***[[]GlueCatalogTableSpecStorageDescriptor](#gluecatalogtablespecstoragedescriptor)***| ***(Optional)*** |
| `tableType` | ***string***| ***(Optional)*** |
| `viewExpandedText` | ***string***| ***(Optional)*** |
| `viewOriginalText` | ***string***| ***(Optional)*** |
## GlueCatalogTableSpecPartitionKeys

Appears on:[GlueCatalogTableSpec](#gluecatalogtablespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `comment` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `type` | ***string***| ***(Optional)*** |
## GlueCatalogTableSpecStorageDescriptor

Appears on:[GlueCatalogTableSpec](#gluecatalogtablespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `bucketColumns` | ***[]string***| ***(Optional)*** |
| `columns` | ***[[]GlueCatalogTableSpecStorageDescriptorColumns](#gluecatalogtablespecstoragedescriptorcolumns)***| ***(Optional)*** |
| `compressed` | ***bool***| ***(Optional)*** |
| `inputFormat` | ***string***| ***(Optional)*** |
| `location` | ***string***| ***(Optional)*** |
| `numberOfBuckets` | ***int64***| ***(Optional)*** |
| `outputFormat` | ***string***| ***(Optional)*** |
| `parameters` | ***map[string]string***| ***(Optional)*** |
| `serDeInfo` | ***[[]GlueCatalogTableSpecStorageDescriptorSerDeInfo](#gluecatalogtablespecstoragedescriptorserdeinfo)***| ***(Optional)*** |
| `skewedInfo` | ***[[]GlueCatalogTableSpecStorageDescriptorSkewedInfo](#gluecatalogtablespecstoragedescriptorskewedinfo)***| ***(Optional)*** |
| `sortColumns` | ***[[]GlueCatalogTableSpecStorageDescriptorSortColumns](#gluecatalogtablespecstoragedescriptorsortcolumns)***| ***(Optional)*** |
| `storedAsSubDirectories` | ***bool***| ***(Optional)*** |
## GlueCatalogTableSpecStorageDescriptorColumns

Appears on:[GlueCatalogTableSpecStorageDescriptor](#gluecatalogtablespecstoragedescriptor)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `comment` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `type` | ***string***| ***(Optional)*** |
## GlueCatalogTableSpecStorageDescriptorSerDeInfo

Appears on:[GlueCatalogTableSpecStorageDescriptor](#gluecatalogtablespecstoragedescriptor)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `name` | ***string***| ***(Optional)*** |
| `parameters` | ***map[string]string***| ***(Optional)*** |
| `serializationLibrary` | ***string***| ***(Optional)*** |
## GlueCatalogTableSpecStorageDescriptorSkewedInfo

Appears on:[GlueCatalogTableSpecStorageDescriptor](#gluecatalogtablespecstoragedescriptor)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `skewedColumnNames` | ***[]string***| ***(Optional)*** |
| `skewedColumnValueLocationMaps` | ***map[string]string***| ***(Optional)*** |
| `skewedColumnValues` | ***[]string***| ***(Optional)*** |
## GlueCatalogTableSpecStorageDescriptorSortColumns

Appears on:[GlueCatalogTableSpecStorageDescriptor](#gluecatalogtablespecstoragedescriptor)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `column` | ***string***||
| `sortOrder` | ***int64***||
## GlueCatalogTableStatus

Appears on:[GlueCatalogTable](#gluecatalogtable)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[GlueCatalogTableSpec](#gluecatalogtablespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[GlueCatalogTableStatus](#gluecatalogtablestatus)

---
