---
title: WafRegexPatternSet
menu:
  docs_v2021.07.21:
    identifier: wafregexpatternset-aws.kubeform.com
    name: WafRegexPatternSet
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

## WafRegexPatternSet
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `WafRegexPatternSet` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[WafRegexPatternSetSpec](#wafregexpatternsetspec)***||
| `status` | ***[WafRegexPatternSetStatus](#wafregexpatternsetstatus)***||
## Phase(`string` alias)

Appears on:[WafRegexPatternSetStatus](#wafregexpatternsetstatus)

## WafRegexPatternSetSpec

Appears on:[WafRegexPatternSet](#wafregexpatternset), [WafRegexPatternSetStatus](#wafregexpatternsetstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `name` | ***string***||
| `regexPatternStrings` | ***[]string***| ***(Optional)*** |
## WafRegexPatternSetStatus

Appears on:[WafRegexPatternSet](#wafregexpatternset)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[WafRegexPatternSetSpec](#wafregexpatternsetspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---