---
title: Tag
menu:
  docs_v2021.07.28:
    identifier: tag-digitalocean.kubeform.com
    name: Tag
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

## Tag
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `digitalocean.kubeform.com/v1alpha1` |
|    `kind` | string | `Tag` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[TagSpec](#tagspec)***||
| `status` | ***[TagStatus](#tagstatus)***||
## Phase(`string` alias)

Appears on:[TagStatus](#tagstatus)

## TagSpec

Appears on:[Tag](#tag), [TagStatus](#tagstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `databasesCount` | ***int64***| ***(Optional)*** |
| `dropletsCount` | ***int64***| ***(Optional)*** |
| `imagesCount` | ***int64***| ***(Optional)*** |
| `name` | ***string***||
| `totalResourceCount` | ***int64***| ***(Optional)*** |
| `volumeSnapshotsCount` | ***int64***| ***(Optional)*** |
| `volumesCount` | ***int64***| ***(Optional)*** |
## TagStatus

Appears on:[Tag](#tag)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[TagSpec](#tagspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
