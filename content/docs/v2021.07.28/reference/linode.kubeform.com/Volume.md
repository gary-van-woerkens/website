---
title: Volume
menu:
  docs_v2021.07.28:
    identifier: volume-linode.kubeform.com
    name: Volume
    parent: linode.kubeform.com-reference
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

## Volume
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `linode.kubeform.com/v1alpha1` |
|    `kind` | string | `Volume` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[VolumeSpec](#volumespec)***||
| `status` | ***[VolumeStatus](#volumestatus)***||
## Phase(`string` alias)

Appears on:[VolumeStatus](#volumestatus)

## VolumeSpec

Appears on:[Volume](#volume), [VolumeStatus](#volumestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `filesystemPath` | ***string***| ***(Optional)*** The full filesystem path for the Volume based on the Volume's label. Path is /dev/disk/by-id/scsi-0Linode_Volume_ + Volume label.|
| `label` | ***string***|The label of the Linode Volume.|
| `linodeID` | ***int64***| ***(Optional)*** The Linode ID where the Volume should be attached.|
| `region` | ***string***|The region where this volume will be deployed.|
| `size` | ***int64***| ***(Optional)*** Size of the Volume in GB|
| `status` | ***string***| ***(Optional)*** The status of the volume, indicating the current readiness state.|
| `tags` | ***[]string***| ***(Optional)*** An array of tags applied to this object. Tags are for organizational purposes only.|
## VolumeStatus

Appears on:[Volume](#volume)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[VolumeSpec](#volumespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
