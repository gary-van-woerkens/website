---
title: WafregionalGeoMatchSet
menu:
  docs_v2021.07.28:
    identifier: wafregionalgeomatchset-aws.kubeform.com
    name: WafregionalGeoMatchSet
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

## WafregionalGeoMatchSet
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `WafregionalGeoMatchSet` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[WafregionalGeoMatchSetSpec](#wafregionalgeomatchsetspec)***||
| `status` | ***[WafregionalGeoMatchSetStatus](#wafregionalgeomatchsetstatus)***||
## Phase(`string` alias)

Appears on:[WafregionalGeoMatchSetStatus](#wafregionalgeomatchsetstatus)

## WafregionalGeoMatchSetSpec

Appears on:[WafregionalGeoMatchSet](#wafregionalgeomatchset), [WafregionalGeoMatchSetStatus](#wafregionalgeomatchsetstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `geoMatchConstraint` | ***[[]WafregionalGeoMatchSetSpecGeoMatchConstraint](#wafregionalgeomatchsetspecgeomatchconstraint)***| ***(Optional)*** |
| `name` | ***string***||
## WafregionalGeoMatchSetSpecGeoMatchConstraint

Appears on:[WafregionalGeoMatchSetSpec](#wafregionalgeomatchsetspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `type` | ***string***||
| `value` | ***string***||
## WafregionalGeoMatchSetStatus

Appears on:[WafregionalGeoMatchSet](#wafregionalgeomatchset)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[WafregionalGeoMatchSetSpec](#wafregionalgeomatchsetspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
