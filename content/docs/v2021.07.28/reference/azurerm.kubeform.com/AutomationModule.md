---
title: AutomationModule
menu:
  docs_v2021.07.28:
    identifier: automationmodule-azurerm.kubeform.com
    name: AutomationModule
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

## AutomationModule
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `AutomationModule` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[AutomationModuleSpec](#automationmodulespec)***||
| `status` | ***[AutomationModuleStatus](#automationmodulestatus)***||
## AutomationModuleSpec

Appears on:[AutomationModule](#automationmodule), [AutomationModuleStatus](#automationmodulestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `automationAccountName` | ***string***||
| `moduleLink` | ***[[]AutomationModuleSpecModuleLink](#automationmodulespecmodulelink)***||
| `name` | ***string***||
| `resourceGroupName` | ***string***||
## AutomationModuleSpecModuleLink

Appears on:[AutomationModuleSpec](#automationmodulespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `hash` | ***[[]AutomationModuleSpecModuleLinkHash](#automationmodulespecmodulelinkhash)***| ***(Optional)*** |
| `uri` | ***string***||
## AutomationModuleSpecModuleLinkHash

Appears on:[AutomationModuleSpecModuleLink](#automationmodulespecmodulelink)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `algorithm` | ***string***||
| `value` | ***string***||
## AutomationModuleStatus

Appears on:[AutomationModule](#automationmodule)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[AutomationModuleSpec](#automationmodulespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[AutomationModuleStatus](#automationmodulestatus)

---
