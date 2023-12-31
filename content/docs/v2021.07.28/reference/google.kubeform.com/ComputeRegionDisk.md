---
title: ComputeRegionDisk
menu:
  docs_v2021.07.28:
    identifier: computeregiondisk-google.kubeform.com
    name: ComputeRegionDisk
    parent: google.kubeform.com-reference
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

## ComputeRegionDisk
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `google.kubeform.com/v1alpha1` |
|    `kind` | string | `ComputeRegionDisk` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ComputeRegionDiskSpec](#computeregiondiskspec)***||
| `status` | ***[ComputeRegionDiskStatus](#computeregiondiskstatus)***||
## ComputeRegionDiskSpec

Appears on:[ComputeRegionDisk](#computeregiondisk), [ComputeRegionDiskStatus](#computeregiondiskstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `creationTimestamp` | ***string***| ***(Optional)*** |
| `description` | ***string***| ***(Optional)*** |
| `diskEncryptionKey` | ***[[]ComputeRegionDiskSpecDiskEncryptionKey](#computeregiondiskspecdiskencryptionkey)***| ***(Optional)*** |
| `labelFingerprint` | ***string***| ***(Optional)*** |
| `labels` | ***map[string]string***| ***(Optional)*** |
| `lastAttachTimestamp` | ***string***| ***(Optional)*** |
| `lastDetachTimestamp` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `physicalBlockSizeBytes` | ***int64***| ***(Optional)*** |
| `project` | ***string***| ***(Optional)*** |
| `region` | ***string***| ***(Optional)*** |
| `replicaZones` | ***[]string***||
| `selfLink` | ***string***| ***(Optional)*** |
| `size` | ***int64***| ***(Optional)*** |
| `snapshot` | ***string***| ***(Optional)*** |
| `sourceSnapshotEncryptionKey` | ***[[]ComputeRegionDiskSpecSourceSnapshotEncryptionKey](#computeregiondiskspecsourcesnapshotencryptionkey)***| ***(Optional)*** |
| `sourceSnapshotID` | ***string***| ***(Optional)*** |
| `type` | ***string***| ***(Optional)*** |
| `users` | ***[]string***| ***(Optional)*** |
## ComputeRegionDiskSpecDiskEncryptionKey

Appears on:[ComputeRegionDiskSpec](#computeregiondiskspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `rawKey` | ***string***| ***(Optional)*** |
| `sha256` | ***string***| ***(Optional)*** |
## ComputeRegionDiskSpecSourceSnapshotEncryptionKey

Appears on:[ComputeRegionDiskSpec](#computeregiondiskspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `rawKey` | ***string***| ***(Optional)*** |
| `sha256` | ***string***| ***(Optional)*** |
## ComputeRegionDiskStatus

Appears on:[ComputeRegionDisk](#computeregiondisk)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ComputeRegionDiskSpec](#computeregiondiskspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[ComputeRegionDiskStatus](#computeregiondiskstatus)

---
