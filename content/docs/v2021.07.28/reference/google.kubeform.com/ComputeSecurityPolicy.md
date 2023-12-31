---
title: ComputeSecurityPolicy
menu:
  docs_v2021.07.28:
    identifier: computesecuritypolicy-google.kubeform.com
    name: ComputeSecurityPolicy
    parent: google.kubeform.com-reference
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

## ComputeSecurityPolicy
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `google.kubeform.com/v1alpha1` |
|    `kind` | string | `ComputeSecurityPolicy` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ComputeSecurityPolicySpec](#computesecuritypolicyspec)***||
| `status` | ***[ComputeSecurityPolicyStatus](#computesecuritypolicystatus)***||
## ComputeSecurityPolicySpec

Appears on:[ComputeSecurityPolicy](#computesecuritypolicy), [ComputeSecurityPolicyStatus](#computesecuritypolicystatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `description` | ***string***| ***(Optional)*** |
| `fingerprint` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `project` | ***string***| ***(Optional)*** |
| `rule` | ***[[]ComputeSecurityPolicySpecRule](#computesecuritypolicyspecrule)***| ***(Optional)*** |
| `selfLink` | ***string***| ***(Optional)*** |
## ComputeSecurityPolicySpecRule

Appears on:[ComputeSecurityPolicySpec](#computesecuritypolicyspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `action` | ***string***||
| `description` | ***string***| ***(Optional)*** |
| `match` | ***[[]ComputeSecurityPolicySpecRuleMatch](#computesecuritypolicyspecrulematch)***||
| `preview` | ***bool***| ***(Optional)*** |
| `priority` | ***int64***||
## ComputeSecurityPolicySpecRuleMatch

Appears on:[ComputeSecurityPolicySpecRule](#computesecuritypolicyspecrule)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `config` | ***[[]ComputeSecurityPolicySpecRuleMatchConfig](#computesecuritypolicyspecrulematchconfig)***||
| `versionedExpr` | ***string***||
## ComputeSecurityPolicySpecRuleMatchConfig

Appears on:[ComputeSecurityPolicySpecRuleMatch](#computesecuritypolicyspecrulematch)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `srcIPRanges` | ***[]string***||
## ComputeSecurityPolicyStatus

Appears on:[ComputeSecurityPolicy](#computesecuritypolicy)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ComputeSecurityPolicySpec](#computesecuritypolicyspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[ComputeSecurityPolicyStatus](#computesecuritypolicystatus)

---
