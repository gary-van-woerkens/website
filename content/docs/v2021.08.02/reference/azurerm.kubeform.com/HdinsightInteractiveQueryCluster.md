---
title: HdinsightInteractiveQueryCluster
menu:
  docs_v2021.08.02:
    identifier: hdinsightinteractivequerycluster-azurerm.kubeform.com
    name: HdinsightInteractiveQueryCluster
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

## HdinsightInteractiveQueryCluster
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `HdinsightInteractiveQueryCluster` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[HdinsightInteractiveQueryClusterSpec](#hdinsightinteractivequeryclusterspec)***||
| `status` | ***[HdinsightInteractiveQueryClusterStatus](#hdinsightinteractivequeryclusterstatus)***||
## HdinsightInteractiveQueryClusterSpec

Appears on:[HdinsightInteractiveQueryCluster](#hdinsightinteractivequerycluster), [HdinsightInteractiveQueryClusterStatus](#hdinsightinteractivequeryclusterstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `secretRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `clusterVersion` | ***string***||
| `componentVersion` | ***[[]HdinsightInteractiveQueryClusterSpecComponentVersion](#hdinsightinteractivequeryclusterspeccomponentversion)***||
| `gateway` | ***[[]HdinsightInteractiveQueryClusterSpecGateway](#hdinsightinteractivequeryclusterspecgateway)***||
| `httpsEndpoint` | ***string***| ***(Optional)*** |
| `location` | ***string***||
| `name` | ***string***||
| `resourceGroupName` | ***string***||
| `roles` | ***[[]HdinsightInteractiveQueryClusterSpecRoles](#hdinsightinteractivequeryclusterspecroles)***||
| `sshEndpoint` | ***string***| ***(Optional)*** |
| `storageAccount` | ***[[]HdinsightInteractiveQueryClusterSpecStorageAccount](#hdinsightinteractivequeryclusterspecstorageaccount)***| ***(Optional)*** |
| `storageAccountGen2` | ***[[]HdinsightInteractiveQueryClusterSpecStorageAccountGen2](#hdinsightinteractivequeryclusterspecstorageaccountgen2)***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
| `tier` | ***string***||
## HdinsightInteractiveQueryClusterSpecComponentVersion

Appears on:[HdinsightInteractiveQueryClusterSpec](#hdinsightinteractivequeryclusterspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `interactiveHive` | ***string***||
## HdinsightInteractiveQueryClusterSpecGateway

Appears on:[HdinsightInteractiveQueryClusterSpec](#hdinsightinteractivequeryclusterspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `enabled` | ***bool***||
| `username` | ***string***||
## HdinsightInteractiveQueryClusterSpecRoles

Appears on:[HdinsightInteractiveQueryClusterSpec](#hdinsightinteractivequeryclusterspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `headNode` | ***[[]HdinsightInteractiveQueryClusterSpecRolesHeadNode](#hdinsightinteractivequeryclusterspecrolesheadnode)***||
| `workerNode` | ***[[]HdinsightInteractiveQueryClusterSpecRolesWorkerNode](#hdinsightinteractivequeryclusterspecrolesworkernode)***||
| `zookeeperNode` | ***[[]HdinsightInteractiveQueryClusterSpecRolesZookeeperNode](#hdinsightinteractivequeryclusterspecroleszookeepernode)***||
## HdinsightInteractiveQueryClusterSpecRolesHeadNode

Appears on:[HdinsightInteractiveQueryClusterSpecRoles](#hdinsightinteractivequeryclusterspecroles)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `sshKeys` | ***[]string***| ***(Optional)*** |
| `subnetID` | ***string***| ***(Optional)*** |
| `username` | ***string***||
| `virtualNetworkID` | ***string***| ***(Optional)*** |
| `vmSize` | ***string***||
## HdinsightInteractiveQueryClusterSpecRolesWorkerNode

Appears on:[HdinsightInteractiveQueryClusterSpecRoles](#hdinsightinteractivequeryclusterspecroles)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `minInstanceCount` | ***int64***| ***(Optional)*** |
| `sshKeys` | ***[]string***| ***(Optional)*** |
| `subnetID` | ***string***| ***(Optional)*** |
| `targetInstanceCount` | ***int64***||
| `username` | ***string***||
| `virtualNetworkID` | ***string***| ***(Optional)*** |
| `vmSize` | ***string***||
## HdinsightInteractiveQueryClusterSpecRolesZookeeperNode

Appears on:[HdinsightInteractiveQueryClusterSpecRoles](#hdinsightinteractivequeryclusterspecroles)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `sshKeys` | ***[]string***| ***(Optional)*** |
| `subnetID` | ***string***| ***(Optional)*** |
| `username` | ***string***||
| `virtualNetworkID` | ***string***| ***(Optional)*** |
| `vmSize` | ***string***||
## HdinsightInteractiveQueryClusterSpecStorageAccount

Appears on:[HdinsightInteractiveQueryClusterSpec](#hdinsightinteractivequeryclusterspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `isDefault` | ***bool***||
| `storageContainerID` | ***string***||
## HdinsightInteractiveQueryClusterSpecStorageAccountGen2

Appears on:[HdinsightInteractiveQueryClusterSpec](#hdinsightinteractivequeryclusterspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `filesystemID` | ***string***||
| `isDefault` | ***bool***||
| `managedIdentityResourceID` | ***string***||
| `storageResourceID` | ***string***||
## HdinsightInteractiveQueryClusterStatus

Appears on:[HdinsightInteractiveQueryCluster](#hdinsightinteractivequerycluster)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[HdinsightInteractiveQueryClusterSpec](#hdinsightinteractivequeryclusterspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[HdinsightInteractiveQueryClusterStatus](#hdinsightinteractivequeryclusterstatus)

---
## Sensitive Values
| Name | Type | Description |
|------|------|-------------|
| `gateway.<index>.password` | ***string*** ||
| `roles.<index>.head_node.<index>.password` | ***string*** ||
| `roles.<index>.worker_node.<index>.password` | ***string*** ||
| `roles.<index>.zookeeper_node.<index>.password` | ***string*** ||
| `storage_account.<index>.storage_account_key` | ***string*** ||
