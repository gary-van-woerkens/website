---
title: DropletSnapshot
menu:
  docs_v2021.07.28:
    identifier: dropletsnapshot-digitalocean.kubeform.com
    name: DropletSnapshot
    parent: digitalocean.kubeform.com-reference
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

## DropletSnapshot
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `digitalocean.kubeform.com/v1alpha1` |
|    `kind` | string | `DropletSnapshot` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[DropletSnapshotSpec](#dropletsnapshotspec)***||
| `status` | ***[DropletSnapshotStatus](#dropletsnapshotstatus)***||
## DropletSnapshotSpec

Appears on:[DropletSnapshot](#dropletsnapshot), [DropletSnapshotStatus](#dropletsnapshotstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `createdAt` | ***string***| ***(Optional)*** |
| `dropletID` | ***string***||
| `minDiskSize` | ***int64***| ***(Optional)*** |
| `name` | ***string***||
| `regions` | ***[]string***| ***(Optional)*** |
| `size` | ***float64***| ***(Optional)*** |
## DropletSnapshotStatus

Appears on:[DropletSnapshot](#dropletsnapshot)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[DropletSnapshotSpec](#dropletsnapshotspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[DropletSnapshotStatus](#dropletsnapshotstatus)

---
