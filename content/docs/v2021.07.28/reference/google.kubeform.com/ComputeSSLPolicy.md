---
title: ComputeSSLPolicy
menu:
  docs_v2021.07.28:
    identifier: computesslpolicy-google.kubeform.com
    name: ComputeSSLPolicy
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

## ComputeSSLPolicy
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `google.kubeform.com/v1alpha1` |
|    `kind` | string | `ComputeSSLPolicy` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ComputeSSLPolicySpec](#computesslpolicyspec)***||
| `status` | ***[ComputeSSLPolicyStatus](#computesslpolicystatus)***||
## ComputeSSLPolicySpec

Appears on:[ComputeSSLPolicy](#computesslpolicy), [ComputeSSLPolicyStatus](#computesslpolicystatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `creationTimestamp` | ***string***| ***(Optional)*** |
| `customFeatures` | ***[]string***| ***(Optional)*** |
| `description` | ***string***| ***(Optional)*** |
| `enabledFeatures` | ***[]string***| ***(Optional)*** |
| `fingerprint` | ***string***| ***(Optional)*** |
| `minTLSVersion` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `profile` | ***string***| ***(Optional)*** |
| `project` | ***string***| ***(Optional)*** |
| `selfLink` | ***string***| ***(Optional)*** |
## ComputeSSLPolicyStatus

Appears on:[ComputeSSLPolicy](#computesslpolicy)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ComputeSSLPolicySpec](#computesslpolicyspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[ComputeSSLPolicyStatus](#computesslpolicystatus)

---
