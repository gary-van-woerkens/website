---
title: CosmosdbMongoCollection
menu:
  docs_v2021.07.21:
    identifier: cosmosdbmongocollection-azurerm.kubeform.com
    name: CosmosdbMongoCollection
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v2021.07.21
section_menu_id: reference
info:
  aws: v0.1.1
  azurerm: v0.1.1
  digitalocean: v0.1.1
  equinixmetal: v0.1.0
  google: v0.1.1
  installer: v2021.07.21
  linode: v0.1.1
  version: v2021.07.21
---

## CosmosdbMongoCollection
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `CosmosdbMongoCollection` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[CosmosdbMongoCollectionSpec](#cosmosdbmongocollectionspec)***||
| `status` | ***[CosmosdbMongoCollectionStatus](#cosmosdbmongocollectionstatus)***||
## CosmosdbMongoCollectionSpec

Appears on:[CosmosdbMongoCollection](#cosmosdbmongocollection), [CosmosdbMongoCollectionStatus](#cosmosdbmongocollectionstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `accountName` | ***string***||
| `databaseName` | ***string***||
| `defaultTtlSeconds` | ***int64***| ***(Optional)*** |
| `indexes` | ***[[]CosmosdbMongoCollectionSpecIndexes](#cosmosdbmongocollectionspecindexes)***| ***(Optional)*** Deprecated|
| `name` | ***string***||
| `resourceGroupName` | ***string***||
| `shardKey` | ***string***| ***(Optional)*** |
| `throughput` | ***int64***| ***(Optional)*** |
## CosmosdbMongoCollectionSpecIndexes

Appears on:[CosmosdbMongoCollectionSpec](#cosmosdbmongocollectionspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `key` | ***string***||
| `unique` | ***bool***| ***(Optional)*** |
## CosmosdbMongoCollectionStatus

Appears on:[CosmosdbMongoCollection](#cosmosdbmongocollection)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[CosmosdbMongoCollectionSpec](#cosmosdbmongocollectionspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[CosmosdbMongoCollectionStatus](#cosmosdbmongocollectionstatus)

---