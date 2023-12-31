---
title: WafregionalRegexMatchSet
menu:
  docs_v2021.07.28:
    identifier: wafregionalregexmatchset-aws.kubeform.com
    name: WafregionalRegexMatchSet
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

## WafregionalRegexMatchSet
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `WafregionalRegexMatchSet` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[WafregionalRegexMatchSetSpec](#wafregionalregexmatchsetspec)***||
| `status` | ***[WafregionalRegexMatchSetStatus](#wafregionalregexmatchsetstatus)***||
## Phase(`string` alias)

Appears on:[WafregionalRegexMatchSetStatus](#wafregionalregexmatchsetstatus)

## WafregionalRegexMatchSetSpec

Appears on:[WafregionalRegexMatchSet](#wafregionalregexmatchset), [WafregionalRegexMatchSetStatus](#wafregionalregexmatchsetstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `name` | ***string***||
| `regexMatchTuple` | ***[[]WafregionalRegexMatchSetSpecRegexMatchTuple](#wafregionalregexmatchsetspecregexmatchtuple)***| ***(Optional)*** |
## WafregionalRegexMatchSetSpecRegexMatchTuple

Appears on:[WafregionalRegexMatchSetSpec](#wafregionalregexmatchsetspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `fieldToMatch` | ***[[]WafregionalRegexMatchSetSpecRegexMatchTupleFieldToMatch](#wafregionalregexmatchsetspecregexmatchtuplefieldtomatch)***||
| `regexPatternSetID` | ***string***||
| `textTransformation` | ***string***||
## WafregionalRegexMatchSetSpecRegexMatchTupleFieldToMatch

Appears on:[WafregionalRegexMatchSetSpecRegexMatchTuple](#wafregionalregexmatchsetspecregexmatchtuple)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `data` | ***string***| ***(Optional)*** |
| `type` | ***string***||
## WafregionalRegexMatchSetStatus

Appears on:[WafregionalRegexMatchSet](#wafregionalregexmatchset)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[WafregionalRegexMatchSetSpec](#wafregionalregexmatchsetspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
