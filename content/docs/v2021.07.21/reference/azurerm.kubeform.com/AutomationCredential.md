---
title: AutomationCredential
menu:
  docs_v2021.07.21:
    identifier: automationcredential-azurerm.kubeform.com
    name: AutomationCredential
    parent: azurerm.kubeform.com-reference
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

## AutomationCredential
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `AutomationCredential` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[AutomationCredentialSpec](#automationcredentialspec)***||
| `status` | ***[AutomationCredentialStatus](#automationcredentialstatus)***||
## AutomationCredentialSpec

Appears on:[AutomationCredential](#automationcredential), [AutomationCredentialStatus](#automationcredentialstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `secretRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `accountName` | ***string***| ***(Optional)*** Deprecated|
| `automationAccountName` | ***string***| ***(Optional)*** |
| `description` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `resourceGroupName` | ***string***||
| `username` | ***string***||
## AutomationCredentialStatus

Appears on:[AutomationCredential](#automationcredential)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[AutomationCredentialSpec](#automationcredentialspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[AutomationCredentialStatus](#automationcredentialstatus)

---
## Sensitive Values
| Name | Type | Description |
|------|------|-------------|
| `password` | ***string*** ||