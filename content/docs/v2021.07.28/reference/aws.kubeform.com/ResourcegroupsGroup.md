---
title: ResourcegroupsGroup
menu:
  docs_v2021.07.28:
    identifier: resourcegroupsgroup-aws.kubeform.com
    name: ResourcegroupsGroup
    parent: aws.kubeform.com-reference
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

## ResourcegroupsGroup
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `ResourcegroupsGroup` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ResourcegroupsGroupSpec](#resourcegroupsgroupspec)***||
| `status` | ***[ResourcegroupsGroupStatus](#resourcegroupsgroupstatus)***||
## Phase(`string` alias)

Appears on:[ResourcegroupsGroupStatus](#resourcegroupsgroupstatus)

## ResourcegroupsGroupSpec

Appears on:[ResourcegroupsGroup](#resourcegroupsgroup), [ResourcegroupsGroupStatus](#resourcegroupsgroupstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `arn` | ***string***| ***(Optional)*** |
| `description` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `resourceQuery` | ***[[]ResourcegroupsGroupSpecResourceQuery](#resourcegroupsgroupspecresourcequery)***||
## ResourcegroupsGroupSpecResourceQuery

Appears on:[ResourcegroupsGroupSpec](#resourcegroupsgroupspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `query` | ***string***||
| `type` | ***string***| ***(Optional)*** |
## ResourcegroupsGroupStatus

Appears on:[ResourcegroupsGroup](#resourcegroupsgroup)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ResourcegroupsGroupSpec](#resourcegroupsgroupspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
