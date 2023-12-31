---
title: IothubDpsSharedAccessPolicy
menu:
  docs_v2021.07.28:
    identifier: iothubdpssharedaccesspolicy-azurerm.kubeform.com
    name: IothubDpsSharedAccessPolicy
    parent: azurerm.kubeform.com-reference
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

## IothubDpsSharedAccessPolicy
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `IothubDpsSharedAccessPolicy` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[IothubDpsSharedAccessPolicySpec](#iothubdpssharedaccesspolicyspec)***||
| `status` | ***[IothubDpsSharedAccessPolicyStatus](#iothubdpssharedaccesspolicystatus)***||
## IothubDpsSharedAccessPolicySpec

Appears on:[IothubDpsSharedAccessPolicy](#iothubdpssharedaccesspolicy), [IothubDpsSharedAccessPolicyStatus](#iothubdpssharedaccesspolicystatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `secretRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `enrollmentRead` | ***bool***| ***(Optional)*** |
| `enrollmentWrite` | ***bool***| ***(Optional)*** |
| `iothubDpsName` | ***string***||
| `name` | ***string***||
| `registrationRead` | ***bool***| ***(Optional)*** |
| `registrationWrite` | ***bool***| ***(Optional)*** |
| `resourceGroupName` | ***string***||
| `serviceConfig` | ***bool***| ***(Optional)*** |
## IothubDpsSharedAccessPolicyStatus

Appears on:[IothubDpsSharedAccessPolicy](#iothubdpssharedaccesspolicy)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[IothubDpsSharedAccessPolicySpec](#iothubdpssharedaccesspolicyspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[IothubDpsSharedAccessPolicyStatus](#iothubdpssharedaccesspolicystatus)

---
## Sensitive Values
| Name | Type | Description |
|------|------|-------------|
| `primary_connection_string` | ***string*** ||
| `primary_key` | ***string*** ||
| `secondary_connection_string` | ***string*** ||
| `secondary_key` | ***string*** ||
