---
title: DataprocCluster
menu:
  docs_v2022.05.11:
    identifier: dataproccluster-google.kubeform.com
    name: DataprocCluster
    parent: google.kubeform.com-reference
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

## DataprocCluster
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `google.kubeform.com/v1alpha1` |
|    `kind` | string | `DataprocCluster` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-22.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[DataprocClusterSpec](#dataprocclusterspec)***||
| `status` | ***[DataprocClusterStatus](#dataprocclusterstatus)***||
## DataprocClusterSpec

Appears on:[DataprocCluster](#dataproccluster), [DataprocClusterStatus](#dataprocclusterstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-22.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `clusterConfig` | ***[[]DataprocClusterSpecClusterConfig](#dataprocclusterspecclusterconfig)***| ***(Optional)*** |
| `labels` | ***map[string]string***| ***(Optional)*** |
| `name` | ***string***||
| `project` | ***string***| ***(Optional)*** |
| `region` | ***string***| ***(Optional)*** |
## DataprocClusterSpecClusterConfig

Appears on:[DataprocClusterSpec](#dataprocclusterspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `bucket` | ***string***| ***(Optional)*** |
| `encryptionConfig` | ***[[]DataprocClusterSpecClusterConfigEncryptionConfig](#dataprocclusterspecclusterconfigencryptionconfig)***| ***(Optional)*** |
| `gceClusterConfig` | ***[[]DataprocClusterSpecClusterConfigGceClusterConfig](#dataprocclusterspecclusterconfiggceclusterconfig)***| ***(Optional)*** |
| `initializationAction` | ***[[]DataprocClusterSpecClusterConfigInitializationAction](#dataprocclusterspecclusterconfiginitializationaction)***| ***(Optional)*** |
| `masterConfig` | ***[[]DataprocClusterSpecClusterConfigMasterConfig](#dataprocclusterspecclusterconfigmasterconfig)***| ***(Optional)*** |
| `preemptibleWorkerConfig` | ***[[]DataprocClusterSpecClusterConfigPreemptibleWorkerConfig](#dataprocclusterspecclusterconfigpreemptibleworkerconfig)***| ***(Optional)*** |
| `softwareConfig` | ***[[]DataprocClusterSpecClusterConfigSoftwareConfig](#dataprocclusterspecclusterconfigsoftwareconfig)***| ***(Optional)*** |
| `stagingBucket` | ***string***| ***(Optional)*** |
| `workerConfig` | ***[[]DataprocClusterSpecClusterConfigWorkerConfig](#dataprocclusterspecclusterconfigworkerconfig)***| ***(Optional)*** |
## DataprocClusterSpecClusterConfigEncryptionConfig

Appears on:[DataprocClusterSpecClusterConfig](#dataprocclusterspecclusterconfig)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `kmsKeyName` | ***string***||
## DataprocClusterSpecClusterConfigGceClusterConfig

Appears on:[DataprocClusterSpecClusterConfig](#dataprocclusterspecclusterconfig)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `internalIPOnly` | ***bool***| ***(Optional)*** |
| `metadata` | ***map[string]string***| ***(Optional)*** |
| `network` | ***string***| ***(Optional)*** |
| `serviceAccount` | ***string***| ***(Optional)*** |
| `serviceAccountScopes` | ***[]string***| ***(Optional)*** |
| `subnetwork` | ***string***| ***(Optional)*** |
| `tags` | ***[]string***| ***(Optional)*** |
| `zone` | ***string***| ***(Optional)*** |
## DataprocClusterSpecClusterConfigInitializationAction

Appears on:[DataprocClusterSpecClusterConfig](#dataprocclusterspecclusterconfig)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `script` | ***string***||
| `timeoutSec` | ***int64***| ***(Optional)*** |
## DataprocClusterSpecClusterConfigMasterConfig

Appears on:[DataprocClusterSpecClusterConfig](#dataprocclusterspecclusterconfig)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `accelerators` | ***[[]DataprocClusterSpecClusterConfigMasterConfigAccelerators](#dataprocclusterspecclusterconfigmasterconfigaccelerators)***| ***(Optional)*** |
| `diskConfig` | ***[[]DataprocClusterSpecClusterConfigMasterConfigDiskConfig](#dataprocclusterspecclusterconfigmasterconfigdiskconfig)***| ***(Optional)*** |
| `imageURI` | ***string***| ***(Optional)*** |
| `instanceNames` | ***[]string***| ***(Optional)*** |
| `machineType` | ***string***| ***(Optional)*** |
| `numInstances` | ***int64***| ***(Optional)*** |
## DataprocClusterSpecClusterConfigMasterConfigAccelerators

Appears on:[DataprocClusterSpecClusterConfigMasterConfig](#dataprocclusterspecclusterconfigmasterconfig)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `acceleratorCount` | ***int64***||
| `acceleratorType` | ***string***||
## DataprocClusterSpecClusterConfigMasterConfigDiskConfig

Appears on:[DataprocClusterSpecClusterConfigMasterConfig](#dataprocclusterspecclusterconfigmasterconfig)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `bootDiskSizeGb` | ***int64***| ***(Optional)*** |
| `bootDiskType` | ***string***| ***(Optional)*** |
| `numLocalSsds` | ***int64***| ***(Optional)*** |
## DataprocClusterSpecClusterConfigPreemptibleWorkerConfig

Appears on:[DataprocClusterSpecClusterConfig](#dataprocclusterspecclusterconfig)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `diskConfig` | ***[[]DataprocClusterSpecClusterConfigPreemptibleWorkerConfigDiskConfig](#dataprocclusterspecclusterconfigpreemptibleworkerconfigdiskconfig)***| ***(Optional)*** |
| `instanceNames` | ***[]string***| ***(Optional)*** |
| `numInstances` | ***int64***| ***(Optional)*** |
## DataprocClusterSpecClusterConfigPreemptibleWorkerConfigDiskConfig

Appears on:[DataprocClusterSpecClusterConfigPreemptibleWorkerConfig](#dataprocclusterspecclusterconfigpreemptibleworkerconfig)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `bootDiskSizeGb` | ***int64***| ***(Optional)*** |
| `bootDiskType` | ***string***| ***(Optional)*** |
| `numLocalSsds` | ***int64***| ***(Optional)*** |
## DataprocClusterSpecClusterConfigSoftwareConfig

Appears on:[DataprocClusterSpecClusterConfig](#dataprocclusterspecclusterconfig)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `imageVersion` | ***string***| ***(Optional)*** |
| `optionalComponents` | ***[]string***| ***(Optional)*** |
| `overrideProperties` | ***map[string]string***| ***(Optional)*** |
| `properties` | ***map[string]string***| ***(Optional)*** |
## DataprocClusterSpecClusterConfigWorkerConfig

Appears on:[DataprocClusterSpecClusterConfig](#dataprocclusterspecclusterconfig)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `accelerators` | ***[[]DataprocClusterSpecClusterConfigWorkerConfigAccelerators](#dataprocclusterspecclusterconfigworkerconfigaccelerators)***| ***(Optional)*** |
| `diskConfig` | ***[[]DataprocClusterSpecClusterConfigWorkerConfigDiskConfig](#dataprocclusterspecclusterconfigworkerconfigdiskconfig)***| ***(Optional)*** |
| `imageURI` | ***string***| ***(Optional)*** |
| `instanceNames` | ***[]string***| ***(Optional)*** |
| `machineType` | ***string***| ***(Optional)*** |
| `numInstances` | ***int64***| ***(Optional)*** |
## DataprocClusterSpecClusterConfigWorkerConfigAccelerators

Appears on:[DataprocClusterSpecClusterConfigWorkerConfig](#dataprocclusterspecclusterconfigworkerconfig)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `acceleratorCount` | ***int64***||
| `acceleratorType` | ***string***||
## DataprocClusterSpecClusterConfigWorkerConfigDiskConfig

Appears on:[DataprocClusterSpecClusterConfigWorkerConfig](#dataprocclusterspecclusterconfigworkerconfig)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `bootDiskSizeGb` | ***int64***| ***(Optional)*** |
| `bootDiskType` | ***string***| ***(Optional)*** |
| `numLocalSsds` | ***int64***| ***(Optional)*** |
## DataprocClusterStatus

Appears on:[DataprocCluster](#dataproccluster)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[DataprocClusterSpec](#dataprocclusterspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[DataprocClusterStatus](#dataprocclusterstatus)

---
