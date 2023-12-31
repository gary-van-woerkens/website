---
title: PacketCapture
menu:
  docs_v2021.07.28:
    identifier: packetcapture-azurerm.kubeform.com
    name: PacketCapture
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

## PacketCapture
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `PacketCapture` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[PacketCaptureSpec](#packetcapturespec)***||
| `status` | ***[PacketCaptureStatus](#packetcapturestatus)***||
## PacketCaptureSpec

Appears on:[PacketCapture](#packetcapture), [PacketCaptureStatus](#packetcapturestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `filter` | ***[[]PacketCaptureSpecFilter](#packetcapturespecfilter)***| ***(Optional)*** |
| `maximumBytesPerPacket` | ***int64***| ***(Optional)*** |
| `maximumBytesPerSession` | ***int64***| ***(Optional)*** |
| `maximumCaptureDuration` | ***int64***| ***(Optional)*** |
| `name` | ***string***||
| `networkWatcherName` | ***string***||
| `resourceGroupName` | ***string***||
| `storageLocation` | ***[[]PacketCaptureSpecStorageLocation](#packetcapturespecstoragelocation)***||
| `targetResourceID` | ***string***||
## PacketCaptureSpecFilter

Appears on:[PacketCaptureSpec](#packetcapturespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `localIPAddress` | ***string***| ***(Optional)*** |
| `localPort` | ***string***| ***(Optional)*** |
| `protocol` | ***string***||
| `remoteIPAddress` | ***string***| ***(Optional)*** |
| `remotePort` | ***string***| ***(Optional)*** |
## PacketCaptureSpecStorageLocation

Appears on:[PacketCaptureSpec](#packetcapturespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `filePath` | ***string***| ***(Optional)*** |
| `storageAccountID` | ***string***| ***(Optional)*** |
| `storagePath` | ***string***| ***(Optional)*** |
## PacketCaptureStatus

Appears on:[PacketCapture](#packetcapture)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[PacketCaptureSpec](#packetcapturespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[PacketCaptureStatus](#packetcapturestatus)

---
