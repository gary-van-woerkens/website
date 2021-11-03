---
title: Snapshot
menu:
  docs_v2021.10.29:
    identifier: snapshot-azurerm.kubeform.com
    name: Snapshot
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v2021.10.29
section_menu_id: reference
info:
  alicloud: v0.4.0
  aws: v0.4.0
  azurerm: v0.4.0
  civo: v0.4.0
  cli: v0.1.0
  datadog: v0.4.0
  digitalocean: v0.4.0
  dynatrace: v0.4.0
  ec: v0.4.0
  equinixmetal: v0.4.0
  google: v0.4.0
  grafana: v0.4.0
  hcloud: v0.4.0
  ibm: v0.4.0
  installer: v2021.10.29
  linode: v0.4.0
  mongodbatlas: v0.4.0
  newrelic: v0.4.0
  oci: v0.4.0
  ovh: v0.4.0
  pagerduty: v0.4.0
  rediscloud: v0.4.0
  upcloud: v0.4.0
  version: v2021.10.29
  vsphere: v0.4.0
  vultr: v0.4.0
  wavefront: v0.4.0
---

## Snapshot
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `Snapshot` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[SnapshotSpec](#snapshotspec)***||
| `status` | ***[SnapshotStatus](#snapshotstatus)***||
## Phase(`string` alias)

Appears on:[SnapshotStatus](#snapshotstatus)

## SnapshotSpec

Appears on:[Snapshot](#snapshot), [SnapshotStatus](#snapshotstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `createOption` | ***string***||
| `diskSizeGb` | ***int64***| ***(Optional)*** |
| `encryptionSettings` | ***[[]SnapshotSpecEncryptionSettings](#snapshotspecencryptionsettings)***| ***(Optional)*** |
| `location` | ***string***||
| `name` | ***string***||
| `resourceGroupName` | ***string***||
| `sourceResourceID` | ***string***| ***(Optional)*** |
| `sourceURI` | ***string***| ***(Optional)*** |
| `storageAccountID` | ***string***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
## SnapshotSpecEncryptionSettings

Appears on:[SnapshotSpec](#snapshotspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `diskEncryptionKey` | ***[[]SnapshotSpecEncryptionSettingsDiskEncryptionKey](#snapshotspecencryptionsettingsdiskencryptionkey)***| ***(Optional)*** |
| `enabled` | ***bool***||
| `keyEncryptionKey` | ***[[]SnapshotSpecEncryptionSettingsKeyEncryptionKey](#snapshotspecencryptionsettingskeyencryptionkey)***| ***(Optional)*** |
## SnapshotSpecEncryptionSettingsDiskEncryptionKey

Appears on:[SnapshotSpecEncryptionSettings](#snapshotspecencryptionsettings)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `secretURL` | ***string***||
| `sourceVaultID` | ***string***||
## SnapshotSpecEncryptionSettingsKeyEncryptionKey

Appears on:[SnapshotSpecEncryptionSettings](#snapshotspecencryptionsettings)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `keyURL` | ***string***||
| `sourceVaultID` | ***string***||
## SnapshotStatus

Appears on:[Snapshot](#snapshot)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[SnapshotSpec](#snapshotspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
