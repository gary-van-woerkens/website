---
title: HdinsightSparkCluster
menu:
  docs_v2021.07.28:
    identifier: hdinsightsparkcluster-azurerm.kubeform.com
    name: HdinsightSparkCluster
    parent: azurerm.kubeform.com-reference
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

## HdinsightSparkCluster
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `HdinsightSparkCluster` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[HdinsightSparkClusterSpec](#hdinsightsparkclusterspec)***||
| `status` | ***[HdinsightSparkClusterStatus](#hdinsightsparkclusterstatus)***||
## HdinsightSparkClusterSpec

Appears on:[HdinsightSparkCluster](#hdinsightsparkcluster), [HdinsightSparkClusterStatus](#hdinsightsparkclusterstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `secretRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `clusterVersion` | ***string***||
| `componentVersion` | ***[[]HdinsightSparkClusterSpecComponentVersion](#hdinsightsparkclusterspeccomponentversion)***||
| `gateway` | ***[[]HdinsightSparkClusterSpecGateway](#hdinsightsparkclusterspecgateway)***||
| `httpsEndpoint` | ***string***| ***(Optional)*** |
| `location` | ***string***||
| `name` | ***string***||
| `resourceGroupName` | ***string***||
| `roles` | ***[[]HdinsightSparkClusterSpecRoles](#hdinsightsparkclusterspecroles)***||
| `sshEndpoint` | ***string***| ***(Optional)*** |
| `storageAccount` | ***[[]HdinsightSparkClusterSpecStorageAccount](#hdinsightsparkclusterspecstorageaccount)***| ***(Optional)*** |
| `storageAccountGen2` | ***[[]HdinsightSparkClusterSpecStorageAccountGen2](#hdinsightsparkclusterspecstorageaccountgen2)***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
| `tier` | ***string***||
## HdinsightSparkClusterSpecComponentVersion

Appears on:[HdinsightSparkClusterSpec](#hdinsightsparkclusterspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `spark` | ***string***||
## HdinsightSparkClusterSpecGateway

Appears on:[HdinsightSparkClusterSpec](#hdinsightsparkclusterspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `enabled` | ***bool***||
| `username` | ***string***||
## HdinsightSparkClusterSpecRoles

Appears on:[HdinsightSparkClusterSpec](#hdinsightsparkclusterspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `headNode` | ***[[]HdinsightSparkClusterSpecRolesHeadNode](#hdinsightsparkclusterspecrolesheadnode)***||
| `workerNode` | ***[[]HdinsightSparkClusterSpecRolesWorkerNode](#hdinsightsparkclusterspecrolesworkernode)***||
| `zookeeperNode` | ***[[]HdinsightSparkClusterSpecRolesZookeeperNode](#hdinsightsparkclusterspecroleszookeepernode)***||
## HdinsightSparkClusterSpecRolesHeadNode

Appears on:[HdinsightSparkClusterSpecRoles](#hdinsightsparkclusterspecroles)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `sshKeys` | ***[]string***| ***(Optional)*** |
| `subnetID` | ***string***| ***(Optional)*** |
| `username` | ***string***||
| `virtualNetworkID` | ***string***| ***(Optional)*** |
| `vmSize` | ***string***||
## HdinsightSparkClusterSpecRolesWorkerNode

Appears on:[HdinsightSparkClusterSpecRoles](#hdinsightsparkclusterspecroles)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `minInstanceCount` | ***int64***| ***(Optional)*** |
| `sshKeys` | ***[]string***| ***(Optional)*** |
| `subnetID` | ***string***| ***(Optional)*** |
| `targetInstanceCount` | ***int64***||
| `username` | ***string***||
| `virtualNetworkID` | ***string***| ***(Optional)*** |
| `vmSize` | ***string***||
## HdinsightSparkClusterSpecRolesZookeeperNode

Appears on:[HdinsightSparkClusterSpecRoles](#hdinsightsparkclusterspecroles)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `sshKeys` | ***[]string***| ***(Optional)*** |
| `subnetID` | ***string***| ***(Optional)*** |
| `username` | ***string***||
| `virtualNetworkID` | ***string***| ***(Optional)*** |
| `vmSize` | ***string***||
## HdinsightSparkClusterSpecStorageAccount

Appears on:[HdinsightSparkClusterSpec](#hdinsightsparkclusterspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `isDefault` | ***bool***||
| `storageContainerID` | ***string***||
## HdinsightSparkClusterSpecStorageAccountGen2

Appears on:[HdinsightSparkClusterSpec](#hdinsightsparkclusterspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `filesystemID` | ***string***||
| `isDefault` | ***bool***||
| `managedIdentityResourceID` | ***string***||
| `storageResourceID` | ***string***||
## HdinsightSparkClusterStatus

Appears on:[HdinsightSparkCluster](#hdinsightsparkcluster)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[HdinsightSparkClusterSpec](#hdinsightsparkclusterspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[HdinsightSparkClusterStatus](#hdinsightsparkclusterstatus)

---
## Sensitive Values
| Name | Type | Description |
|------|------|-------------|
| `gateway.<index>.password` | ***string*** ||
| `roles.<index>.head_node.<index>.password` | ***string*** ||
| `roles.<index>.worker_node.<index>.password` | ***string*** ||
| `roles.<index>.zookeeper_node.<index>.password` | ***string*** ||
| `storage_account.<index>.storage_account_key` | ***string*** ||
