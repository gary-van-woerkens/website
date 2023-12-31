---
title: SesIdentityPolicy
menu:
  docs_v2021.07.28:
    identifier: sesidentitypolicy-aws.kubeform.com
    name: SesIdentityPolicy
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

## SesIdentityPolicy
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `SesIdentityPolicy` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[SesIdentityPolicySpec](#sesidentitypolicyspec)***||
| `status` | ***[SesIdentityPolicyStatus](#sesidentitypolicystatus)***||
## Phase(`string` alias)

Appears on:[SesIdentityPolicyStatus](#sesidentitypolicystatus)

## SesIdentityPolicySpec

Appears on:[SesIdentityPolicy](#sesidentitypolicy), [SesIdentityPolicyStatus](#sesidentitypolicystatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `identity` | ***string***||
| `name` | ***string***||
| `policy` | ***string***||
## SesIdentityPolicyStatus

Appears on:[SesIdentityPolicy](#sesidentitypolicy)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[SesIdentityPolicySpec](#sesidentitypolicyspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
