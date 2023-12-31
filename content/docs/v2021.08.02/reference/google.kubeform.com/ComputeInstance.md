---
title: ComputeInstance
menu:
  docs_v2021.08.02:
    identifier: computeinstance-google.kubeform.com
    name: ComputeInstance
    parent: google.kubeform.com-reference
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

## ComputeInstance
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `google.kubeform.com/v1alpha1` |
|    `kind` | string | `ComputeInstance` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ComputeInstanceSpec](#computeinstancespec)***||
| `status` | ***[ComputeInstanceStatus](#computeinstancestatus)***||
## ComputeInstanceSpec

Appears on:[ComputeInstance](#computeinstance), [ComputeInstanceStatus](#computeinstancestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `secretRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `allowStoppingForUpdate` | ***bool***| ***(Optional)*** |
| `attachedDisk` | ***[[]ComputeInstanceSpecAttachedDisk](#computeinstancespecattacheddisk)***| ***(Optional)*** |
| `bootDisk` | ***[[]ComputeInstanceSpecBootDisk](#computeinstancespecbootdisk)***||
| `canIPForward` | ***bool***| ***(Optional)*** |
| `cpuPlatform` | ***string***| ***(Optional)*** |
| `deletionProtection` | ***bool***| ***(Optional)*** |
| `description` | ***string***| ***(Optional)*** |
| `guestAccelerator` | ***[[]ComputeInstanceSpecGuestAccelerator](#computeinstancespecguestaccelerator)***| ***(Optional)*** |
| `hostname` | ***string***| ***(Optional)*** |
| `instanceID` | ***string***| ***(Optional)*** |
| `labelFingerprint` | ***string***| ***(Optional)*** |
| `labels` | ***map[string]string***| ***(Optional)*** |
| `machineType` | ***string***||
| `metadata` | ***map[string]string***| ***(Optional)*** |
| `metadataFingerprint` | ***string***| ***(Optional)*** |
| `metadataStartupScript` | ***string***| ***(Optional)*** |
| `minCPUPlatform` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `networkInterface` | ***[[]ComputeInstanceSpecNetworkInterface](#computeinstancespecnetworkinterface)***||
| `project` | ***string***| ***(Optional)*** |
| `scheduling` | ***[[]ComputeInstanceSpecScheduling](#computeinstancespecscheduling)***| ***(Optional)*** |
| `scratchDisk` | ***[[]ComputeInstanceSpecScratchDisk](#computeinstancespecscratchdisk)***| ***(Optional)*** |
| `selfLink` | ***string***| ***(Optional)*** |
| `serviceAccount` | ***[[]ComputeInstanceSpecServiceAccount](#computeinstancespecserviceaccount)***| ***(Optional)*** |
| `shieldedInstanceConfig` | ***[[]ComputeInstanceSpecShieldedInstanceConfig](#computeinstancespecshieldedinstanceconfig)***| ***(Optional)*** |
| `tags` | ***[]string***| ***(Optional)*** |
| `tagsFingerprint` | ***string***| ***(Optional)*** |
| `zone` | ***string***| ***(Optional)*** |
## ComputeInstanceSpecAttachedDisk

Appears on:[ComputeInstanceSpec](#computeinstancespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `deviceName` | ***string***| ***(Optional)*** |
| `diskEncryptionKeySha256` | ***string***| ***(Optional)*** |
| `kmsKeySelfLink` | ***string***| ***(Optional)*** |
| `mode` | ***string***| ***(Optional)*** |
| `source` | ***string***||
## ComputeInstanceSpecBootDisk

Appears on:[ComputeInstanceSpec](#computeinstancespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `autoDelete` | ***bool***| ***(Optional)*** |
| `deviceName` | ***string***| ***(Optional)*** |
| `diskEncryptionKeySha256` | ***string***| ***(Optional)*** |
| `initializeParams` | ***[[]ComputeInstanceSpecBootDiskInitializeParams](#computeinstancespecbootdiskinitializeparams)***| ***(Optional)*** |
| `kmsKeySelfLink` | ***string***| ***(Optional)*** |
| `mode` | ***string***| ***(Optional)*** |
| `source` | ***string***| ***(Optional)*** |
## ComputeInstanceSpecBootDiskInitializeParams

Appears on:[ComputeInstanceSpecBootDisk](#computeinstancespecbootdisk)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `image` | ***string***| ***(Optional)*** |
| `labels` | ***map[string]string***| ***(Optional)*** |
| `size` | ***int64***| ***(Optional)*** |
| `type` | ***string***| ***(Optional)*** |
## ComputeInstanceSpecGuestAccelerator

Appears on:[ComputeInstanceSpec](#computeinstancespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `count` | ***int64***||
| `type` | ***string***||
## ComputeInstanceSpecNetworkInterface

Appears on:[ComputeInstanceSpec](#computeinstancespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `accessConfig` | ***[[]ComputeInstanceSpecNetworkInterfaceAccessConfig](#computeinstancespecnetworkinterfaceaccessconfig)***| ***(Optional)*** |
| `aliasIPRange` | ***[[]ComputeInstanceSpecNetworkInterfaceAliasIPRange](#computeinstancespecnetworkinterfacealiasiprange)***| ***(Optional)*** |
| `name` | ***string***| ***(Optional)*** |
| `network` | ***string***| ***(Optional)*** |
| `networkIP` | ***string***| ***(Optional)*** |
| `subnetwork` | ***string***| ***(Optional)*** |
| `subnetworkProject` | ***string***| ***(Optional)*** |
## ComputeInstanceSpecNetworkInterfaceAccessConfig

Appears on:[ComputeInstanceSpecNetworkInterface](#computeinstancespecnetworkinterface)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `natIP` | ***string***| ***(Optional)*** |
| `networkTier` | ***string***| ***(Optional)*** |
| `publicPtrDomainName` | ***string***| ***(Optional)*** |
## ComputeInstanceSpecNetworkInterfaceAliasIPRange

Appears on:[ComputeInstanceSpecNetworkInterface](#computeinstancespecnetworkinterface)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `ipCIDRRange` | ***string***||
| `subnetworkRangeName` | ***string***| ***(Optional)*** |
## ComputeInstanceSpecScheduling

Appears on:[ComputeInstanceSpec](#computeinstancespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `automaticRestart` | ***bool***| ***(Optional)*** |
| `nodeAffinities` | ***[[]ComputeInstanceSpecSchedulingNodeAffinities](#computeinstancespecschedulingnodeaffinities)***| ***(Optional)*** |
| `onHostMaintenance` | ***string***| ***(Optional)*** |
| `preemptible` | ***bool***| ***(Optional)*** |
## ComputeInstanceSpecSchedulingNodeAffinities

Appears on:[ComputeInstanceSpecScheduling](#computeinstancespecscheduling)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `key` | ***string***||
| `operator` | ***string***||
| `values` | ***[]string***||
## ComputeInstanceSpecScratchDisk

Appears on:[ComputeInstanceSpec](#computeinstancespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `interface` | ***string***| ***(Optional)*** |
## ComputeInstanceSpecServiceAccount

Appears on:[ComputeInstanceSpec](#computeinstancespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `email` | ***string***| ***(Optional)*** |
| `scopes` | ***[]string***||
## ComputeInstanceSpecShieldedInstanceConfig

Appears on:[ComputeInstanceSpec](#computeinstancespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `enableIntegrityMonitoring` | ***bool***| ***(Optional)*** |
| `enableSecureBoot` | ***bool***| ***(Optional)*** |
| `enableVtpm` | ***bool***| ***(Optional)*** |
## ComputeInstanceStatus

Appears on:[ComputeInstance](#computeinstance)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ComputeInstanceSpec](#computeinstancespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[ComputeInstanceStatus](#computeinstancestatus)

---
## Sensitive Values
| Name | Type | Description |
|------|------|-------------|
| `attached_disk.<index>.disk_encryption_key_raw` | ***string*** ||
| `boot_disk.<index>.disk_encryption_key_raw` | ***string*** ||
