---
title: RecoveryReplicatedVm
menu:
  docs_v2021.07.21:
    identifier: recoveryreplicatedvm-azurerm.kubeform.com
    name: RecoveryReplicatedVm
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

## RecoveryReplicatedVm
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `RecoveryReplicatedVm` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[RecoveryReplicatedVmSpec](#recoveryreplicatedvmspec)***||
| `status` | ***[RecoveryReplicatedVmStatus](#recoveryreplicatedvmstatus)***||
## Phase(`string` alias)

Appears on:[RecoveryReplicatedVmStatus](#recoveryreplicatedvmstatus)

## RecoveryReplicatedVmSpec

Appears on:[RecoveryReplicatedVm](#recoveryreplicatedvm), [RecoveryReplicatedVmStatus](#recoveryreplicatedvmstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `managedDisk` | ***[[]RecoveryReplicatedVmSpecManagedDisk](#recoveryreplicatedvmspecmanageddisk)***| ***(Optional)*** |
| `name` | ***string***||
| `recoveryReplicationPolicyID` | ***string***||
| `recoveryVaultName` | ***string***||
| `resourceGroupName` | ***string***||
| `sourceRecoveryFabricName` | ***string***||
| `sourceRecoveryProtectionContainerName` | ***string***||
| `sourceVmID` | ***string***||
| `targetAvailabilitySetID` | ***string***| ***(Optional)*** |
| `targetRecoveryFabricID` | ***string***||
| `targetRecoveryProtectionContainerID` | ***string***||
| `targetResourceGroupID` | ***string***||
## RecoveryReplicatedVmSpecManagedDisk

Appears on:[RecoveryReplicatedVmSpec](#recoveryreplicatedvmspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `diskID` | ***string***||
| `stagingStorageAccountID` | ***string***||
| `targetDiskType` | ***string***||
| `targetReplicaDiskType` | ***string***||
| `targetResourceGroupID` | ***string***||
## RecoveryReplicatedVmStatus

Appears on:[RecoveryReplicatedVm](#recoveryreplicatedvm)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[RecoveryReplicatedVmSpec](#recoveryreplicatedvmspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---