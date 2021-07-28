---
title: QuicksightGroup
menu:
  docs_v2021.07.21:
    identifier: quicksightgroup-aws.kubeform.com
    name: QuicksightGroup
    parent: aws.kubeform.com-reference
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

## QuicksightGroup
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `QuicksightGroup` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[QuicksightGroupSpec](#quicksightgroupspec)***||
| `status` | ***[QuicksightGroupStatus](#quicksightgroupstatus)***||
## Phase(`string` alias)

Appears on:[QuicksightGroupStatus](#quicksightgroupstatus)

## QuicksightGroupSpec

Appears on:[QuicksightGroup](#quicksightgroup), [QuicksightGroupStatus](#quicksightgroupstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `arn` | ***string***| ***(Optional)*** |
| `awsAccountID` | ***string***| ***(Optional)*** |
| `description` | ***string***| ***(Optional)*** |
| `groupName` | ***string***||
| `namespace` | ***string***| ***(Optional)*** |
## QuicksightGroupStatus

Appears on:[QuicksightGroup](#quicksightgroup)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[QuicksightGroupSpec](#quicksightgroupspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---