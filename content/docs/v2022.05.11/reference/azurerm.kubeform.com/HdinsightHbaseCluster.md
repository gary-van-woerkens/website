---
title: HdinsightHbaseCluster
menu:
  docs_v2022.05.11:
    identifier: hdinsighthbasecluster-azurerm.kubeform.com
    name: HdinsightHbaseCluster
    parent: azurerm.kubeform.com-reference
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

## HdinsightHbaseCluster
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `HdinsightHbaseCluster` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-22.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[HdinsightHbaseClusterSpec](#hdinsighthbaseclusterspec)***||
| `status` | ***[HdinsightHbaseClusterStatus](#hdinsighthbaseclusterstatus)***||
## HdinsightHbaseClusterSpec

Appears on:[HdinsightHbaseCluster](#hdinsighthbasecluster), [HdinsightHbaseClusterStatus](#hdinsighthbaseclusterstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-22.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `secretRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-22.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#localobjectreference-v1-core)***||
| `clusterVersion` | ***string***||
| `componentVersion` | ***[[]HdinsightHbaseClusterSpecComponentVersion](#hdinsighthbaseclusterspeccomponentversion)***||
| `gateway` | ***[[]HdinsightHbaseClusterSpecGateway](#hdinsighthbaseclusterspecgateway)***||
| `httpsEndpoint` | ***string***| ***(Optional)*** |
| `location` | ***string***||
| `name` | ***string***||
| `resourceGroupName` | ***string***||
| `roles` | ***[[]HdinsightHbaseClusterSpecRoles](#hdinsighthbaseclusterspecroles)***||
| `sshEndpoint` | ***string***| ***(Optional)*** |
| `storageAccount` | ***[[]HdinsightHbaseClusterSpecStorageAccount](#hdinsighthbaseclusterspecstorageaccount)***| ***(Optional)*** |
| `storageAccountGen2` | ***[[]HdinsightHbaseClusterSpecStorageAccountGen2](#hdinsighthbaseclusterspecstorageaccountgen2)***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
| `tier` | ***string***||
## HdinsightHbaseClusterSpecComponentVersion

Appears on:[HdinsightHbaseClusterSpec](#hdinsighthbaseclusterspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `hbase` | ***string***||
## HdinsightHbaseClusterSpecGateway

Appears on:[HdinsightHbaseClusterSpec](#hdinsighthbaseclusterspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `enabled` | ***bool***||
| `username` | ***string***||
## HdinsightHbaseClusterSpecRoles

Appears on:[HdinsightHbaseClusterSpec](#hdinsighthbaseclusterspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `headNode` | ***[[]HdinsightHbaseClusterSpecRolesHeadNode](#hdinsighthbaseclusterspecrolesheadnode)***||
| `workerNode` | ***[[]HdinsightHbaseClusterSpecRolesWorkerNode](#hdinsighthbaseclusterspecrolesworkernode)***||
| `zookeeperNode` | ***[[]HdinsightHbaseClusterSpecRolesZookeeperNode](#hdinsighthbaseclusterspecroleszookeepernode)***||
## HdinsightHbaseClusterSpecRolesHeadNode

Appears on:[HdinsightHbaseClusterSpecRoles](#hdinsighthbaseclusterspecroles)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `sshKeys` | ***[]string***| ***(Optional)*** |
| `subnetID` | ***string***| ***(Optional)*** |
| `username` | ***string***||
| `virtualNetworkID` | ***string***| ***(Optional)*** |
| `vmSize` | ***string***||
## HdinsightHbaseClusterSpecRolesWorkerNode

Appears on:[HdinsightHbaseClusterSpecRoles](#hdinsighthbaseclusterspecroles)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `minInstanceCount` | ***int64***| ***(Optional)*** |
| `sshKeys` | ***[]string***| ***(Optional)*** |
| `subnetID` | ***string***| ***(Optional)*** |
| `targetInstanceCount` | ***int64***||
| `username` | ***string***||
| `virtualNetworkID` | ***string***| ***(Optional)*** |
| `vmSize` | ***string***||
## HdinsightHbaseClusterSpecRolesZookeeperNode

Appears on:[HdinsightHbaseClusterSpecRoles](#hdinsighthbaseclusterspecroles)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `sshKeys` | ***[]string***| ***(Optional)*** |
| `subnetID` | ***string***| ***(Optional)*** |
| `username` | ***string***||
| `virtualNetworkID` | ***string***| ***(Optional)*** |
| `vmSize` | ***string***||
## HdinsightHbaseClusterSpecStorageAccount

Appears on:[HdinsightHbaseClusterSpec](#hdinsighthbaseclusterspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `isDefault` | ***bool***||
| `storageContainerID` | ***string***||
## HdinsightHbaseClusterSpecStorageAccountGen2

Appears on:[HdinsightHbaseClusterSpec](#hdinsighthbaseclusterspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `filesystemID` | ***string***||
| `isDefault` | ***bool***||
| `managedIdentityResourceID` | ***string***||
| `storageResourceID` | ***string***||
## HdinsightHbaseClusterStatus

Appears on:[HdinsightHbaseCluster](#hdinsighthbasecluster)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[HdinsightHbaseClusterSpec](#hdinsighthbaseclusterspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[HdinsightHbaseClusterStatus](#hdinsighthbaseclusterstatus)

---
## Sensitive Values
| Name | Type | Description |
|------|------|-------------|
| `gateway.<index>.password` | ***string*** ||
| `roles.<index>.head_node.<index>.password` | ***string*** ||
| `roles.<index>.worker_node.<index>.password` | ***string*** ||
| `roles.<index>.zookeeper_node.<index>.password` | ***string*** ||
| `storage_account.<index>.storage_account_key` | ***string*** ||