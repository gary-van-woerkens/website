---
title: HdinsightRserverCluster
menu:
  docs_v2021.07.28:
    identifier: hdinsightrservercluster-azurerm.kubeform.com
    name: HdinsightRserverCluster
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

## HdinsightRserverCluster
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `HdinsightRserverCluster` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[HdinsightRserverClusterSpec](#hdinsightrserverclusterspec)***||
| `status` | ***[HdinsightRserverClusterStatus](#hdinsightrserverclusterstatus)***||
## HdinsightRserverClusterSpec

Appears on:[HdinsightRserverCluster](#hdinsightrservercluster), [HdinsightRserverClusterStatus](#hdinsightrserverclusterstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `secretRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `clusterVersion` | ***string***||
| `edgeSSHEndpoint` | ***string***| ***(Optional)*** |
| `gateway` | ***[[]HdinsightRserverClusterSpecGateway](#hdinsightrserverclusterspecgateway)***||
| `httpsEndpoint` | ***string***| ***(Optional)*** |
| `location` | ***string***||
| `name` | ***string***||
| `resourceGroupName` | ***string***||
| `roles` | ***[[]HdinsightRserverClusterSpecRoles](#hdinsightrserverclusterspecroles)***||
| `rstudio` | ***bool***||
| `sshEndpoint` | ***string***| ***(Optional)*** |
| `storageAccount` | ***[[]HdinsightRserverClusterSpecStorageAccount](#hdinsightrserverclusterspecstorageaccount)***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
| `tier` | ***string***||
## HdinsightRserverClusterSpecGateway

Appears on:[HdinsightRserverClusterSpec](#hdinsightrserverclusterspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `enabled` | ***bool***||
| `username` | ***string***||
## HdinsightRserverClusterSpecRoles

Appears on:[HdinsightRserverClusterSpec](#hdinsightrserverclusterspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `edgeNode` | ***[[]HdinsightRserverClusterSpecRolesEdgeNode](#hdinsightrserverclusterspecrolesedgenode)***||
| `headNode` | ***[[]HdinsightRserverClusterSpecRolesHeadNode](#hdinsightrserverclusterspecrolesheadnode)***||
| `workerNode` | ***[[]HdinsightRserverClusterSpecRolesWorkerNode](#hdinsightrserverclusterspecrolesworkernode)***||
| `zookeeperNode` | ***[[]HdinsightRserverClusterSpecRolesZookeeperNode](#hdinsightrserverclusterspecroleszookeepernode)***||
## HdinsightRserverClusterSpecRolesEdgeNode

Appears on:[HdinsightRserverClusterSpecRoles](#hdinsightrserverclusterspecroles)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `sshKeys` | ***[]string***| ***(Optional)*** |
| `subnetID` | ***string***| ***(Optional)*** |
| `username` | ***string***||
| `virtualNetworkID` | ***string***| ***(Optional)*** |
| `vmSize` | ***string***||
## HdinsightRserverClusterSpecRolesHeadNode

Appears on:[HdinsightRserverClusterSpecRoles](#hdinsightrserverclusterspecroles)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `sshKeys` | ***[]string***| ***(Optional)*** |
| `subnetID` | ***string***| ***(Optional)*** |
| `username` | ***string***||
| `virtualNetworkID` | ***string***| ***(Optional)*** |
| `vmSize` | ***string***||
## HdinsightRserverClusterSpecRolesWorkerNode

Appears on:[HdinsightRserverClusterSpecRoles](#hdinsightrserverclusterspecroles)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `minInstanceCount` | ***int64***| ***(Optional)*** |
| `sshKeys` | ***[]string***| ***(Optional)*** |
| `subnetID` | ***string***| ***(Optional)*** |
| `targetInstanceCount` | ***int64***||
| `username` | ***string***||
| `virtualNetworkID` | ***string***| ***(Optional)*** |
| `vmSize` | ***string***||
## HdinsightRserverClusterSpecRolesZookeeperNode

Appears on:[HdinsightRserverClusterSpecRoles](#hdinsightrserverclusterspecroles)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `sshKeys` | ***[]string***| ***(Optional)*** |
| `subnetID` | ***string***| ***(Optional)*** |
| `username` | ***string***||
| `virtualNetworkID` | ***string***| ***(Optional)*** |
| `vmSize` | ***string***||
## HdinsightRserverClusterSpecStorageAccount

Appears on:[HdinsightRserverClusterSpec](#hdinsightrserverclusterspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `isDefault` | ***bool***||
| `storageContainerID` | ***string***||
## HdinsightRserverClusterStatus

Appears on:[HdinsightRserverCluster](#hdinsightrservercluster)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[HdinsightRserverClusterSpec](#hdinsightrserverclusterspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[HdinsightRserverClusterStatus](#hdinsightrserverclusterstatus)

---
## Sensitive Values
| Name | Type | Description |
|------|------|-------------|
| `gateway.<index>.password` | ***string*** ||
| `roles.<index>.edge_node.<index>.password` | ***string*** ||
| `roles.<index>.head_node.<index>.password` | ***string*** ||
| `roles.<index>.worker_node.<index>.password` | ***string*** ||
| `roles.<index>.zookeeper_node.<index>.password` | ***string*** ||
| `storage_account.<index>.storage_account_key` | ***string*** ||
