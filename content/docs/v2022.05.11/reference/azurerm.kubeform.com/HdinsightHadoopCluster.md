---
title: HdinsightHadoopCluster
menu:
  docs_v2022.05.11:
    identifier: hdinsighthadoopcluster-azurerm.kubeform.com
    name: HdinsightHadoopCluster
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

## HdinsightHadoopCluster
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `HdinsightHadoopCluster` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-22.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[HdinsightHadoopClusterSpec](#hdinsighthadoopclusterspec)***||
| `status` | ***[HdinsightHadoopClusterStatus](#hdinsighthadoopclusterstatus)***||
## HdinsightHadoopClusterSpec

Appears on:[HdinsightHadoopCluster](#hdinsighthadoopcluster), [HdinsightHadoopClusterStatus](#hdinsighthadoopclusterstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-22.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `secretRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-22.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#localobjectreference-v1-core)***||
| `clusterVersion` | ***string***||
| `componentVersion` | ***[[]HdinsightHadoopClusterSpecComponentVersion](#hdinsighthadoopclusterspeccomponentversion)***||
| `gateway` | ***[[]HdinsightHadoopClusterSpecGateway](#hdinsighthadoopclusterspecgateway)***||
| `httpsEndpoint` | ***string***| ***(Optional)*** |
| `location` | ***string***||
| `name` | ***string***||
| `resourceGroupName` | ***string***||
| `roles` | ***[[]HdinsightHadoopClusterSpecRoles](#hdinsighthadoopclusterspecroles)***||
| `sshEndpoint` | ***string***| ***(Optional)*** |
| `storageAccount` | ***[[]HdinsightHadoopClusterSpecStorageAccount](#hdinsighthadoopclusterspecstorageaccount)***| ***(Optional)*** |
| `storageAccountGen2` | ***[[]HdinsightHadoopClusterSpecStorageAccountGen2](#hdinsighthadoopclusterspecstorageaccountgen2)***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
| `tier` | ***string***||
## HdinsightHadoopClusterSpecComponentVersion

Appears on:[HdinsightHadoopClusterSpec](#hdinsighthadoopclusterspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `hadoop` | ***string***||
## HdinsightHadoopClusterSpecGateway

Appears on:[HdinsightHadoopClusterSpec](#hdinsighthadoopclusterspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `enabled` | ***bool***||
| `username` | ***string***||
## HdinsightHadoopClusterSpecRoles

Appears on:[HdinsightHadoopClusterSpec](#hdinsighthadoopclusterspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `edgeNode` | ***[[]HdinsightHadoopClusterSpecRolesEdgeNode](#hdinsighthadoopclusterspecrolesedgenode)***| ***(Optional)*** |
| `headNode` | ***[[]HdinsightHadoopClusterSpecRolesHeadNode](#hdinsighthadoopclusterspecrolesheadnode)***||
| `workerNode` | ***[[]HdinsightHadoopClusterSpecRolesWorkerNode](#hdinsighthadoopclusterspecrolesworkernode)***||
| `zookeeperNode` | ***[[]HdinsightHadoopClusterSpecRolesZookeeperNode](#hdinsighthadoopclusterspecroleszookeepernode)***||
## HdinsightHadoopClusterSpecRolesEdgeNode

Appears on:[HdinsightHadoopClusterSpecRoles](#hdinsighthadoopclusterspecroles)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `installScriptAction` | ***[[]HdinsightHadoopClusterSpecRolesEdgeNodeInstallScriptAction](#hdinsighthadoopclusterspecrolesedgenodeinstallscriptaction)***||
| `targetInstanceCount` | ***int64***||
| `vmSize` | ***string***||
## HdinsightHadoopClusterSpecRolesEdgeNodeInstallScriptAction

Appears on:[HdinsightHadoopClusterSpecRolesEdgeNode](#hdinsighthadoopclusterspecrolesedgenode)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `name` | ***string***||
| `uri` | ***string***||
## HdinsightHadoopClusterSpecRolesHeadNode

Appears on:[HdinsightHadoopClusterSpecRoles](#hdinsighthadoopclusterspecroles)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `sshKeys` | ***[]string***| ***(Optional)*** |
| `subnetID` | ***string***| ***(Optional)*** |
| `username` | ***string***||
| `virtualNetworkID` | ***string***| ***(Optional)*** |
| `vmSize` | ***string***||
## HdinsightHadoopClusterSpecRolesWorkerNode

Appears on:[HdinsightHadoopClusterSpecRoles](#hdinsighthadoopclusterspecroles)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `minInstanceCount` | ***int64***| ***(Optional)*** |
| `sshKeys` | ***[]string***| ***(Optional)*** |
| `subnetID` | ***string***| ***(Optional)*** |
| `targetInstanceCount` | ***int64***||
| `username` | ***string***||
| `virtualNetworkID` | ***string***| ***(Optional)*** |
| `vmSize` | ***string***||
## HdinsightHadoopClusterSpecRolesZookeeperNode

Appears on:[HdinsightHadoopClusterSpecRoles](#hdinsighthadoopclusterspecroles)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `sshKeys` | ***[]string***| ***(Optional)*** |
| `subnetID` | ***string***| ***(Optional)*** |
| `username` | ***string***||
| `virtualNetworkID` | ***string***| ***(Optional)*** |
| `vmSize` | ***string***||
## HdinsightHadoopClusterSpecStorageAccount

Appears on:[HdinsightHadoopClusterSpec](#hdinsighthadoopclusterspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `isDefault` | ***bool***||
| `storageContainerID` | ***string***||
## HdinsightHadoopClusterSpecStorageAccountGen2

Appears on:[HdinsightHadoopClusterSpec](#hdinsighthadoopclusterspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `filesystemID` | ***string***||
| `isDefault` | ***bool***||
| `managedIdentityResourceID` | ***string***||
| `storageResourceID` | ***string***||
## HdinsightHadoopClusterStatus

Appears on:[HdinsightHadoopCluster](#hdinsighthadoopcluster)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[HdinsightHadoopClusterSpec](#hdinsighthadoopclusterspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[HdinsightHadoopClusterStatus](#hdinsighthadoopclusterstatus)

---
## Sensitive Values
| Name | Type | Description |
|------|------|-------------|
| `gateway.<index>.password` | ***string*** ||
| `roles.<index>.head_node.<index>.password` | ***string*** ||
| `roles.<index>.worker_node.<index>.password` | ***string*** ||
| `roles.<index>.zookeeper_node.<index>.password` | ***string*** ||
| `storage_account.<index>.storage_account_key` | ***string*** ||
