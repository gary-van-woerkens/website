---
title: IapWebTypeAppEngineIamPolicy
menu:
  docs_v2021.07.28:
    identifier: iapwebtypeappengineiampolicy-google.kubeform.com
    name: IapWebTypeAppEngineIamPolicy
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

## IapWebTypeAppEngineIamPolicy
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `google.kubeform.com/v1alpha1` |
|    `kind` | string | `IapWebTypeAppEngineIamPolicy` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[IapWebTypeAppEngineIamPolicySpec](#iapwebtypeappengineiampolicyspec)***||
| `status` | ***[IapWebTypeAppEngineIamPolicyStatus](#iapwebtypeappengineiampolicystatus)***||
## IapWebTypeAppEngineIamPolicySpec

Appears on:[IapWebTypeAppEngineIamPolicy](#iapwebtypeappengineiampolicy), [IapWebTypeAppEngineIamPolicyStatus](#iapwebtypeappengineiampolicystatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `appID` | ***string***||
| `etag` | ***string***| ***(Optional)*** |
| `policyData` | ***string***||
| `project` | ***string***| ***(Optional)*** |
## IapWebTypeAppEngineIamPolicyStatus

Appears on:[IapWebTypeAppEngineIamPolicy](#iapwebtypeappengineiampolicy)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[IapWebTypeAppEngineIamPolicySpec](#iapwebtypeappengineiampolicyspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[IapWebTypeAppEngineIamPolicyStatus](#iapwebtypeappengineiampolicystatus)

---
