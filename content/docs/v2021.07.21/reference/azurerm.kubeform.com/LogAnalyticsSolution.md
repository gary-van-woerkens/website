---
title: LogAnalyticsSolution
menu:
  docs_v2021.07.21:
    identifier: loganalyticssolution-azurerm.kubeform.com
    name: LogAnalyticsSolution
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

## LogAnalyticsSolution
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `LogAnalyticsSolution` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[LogAnalyticsSolutionSpec](#loganalyticssolutionspec)***||
| `status` | ***[LogAnalyticsSolutionStatus](#loganalyticssolutionstatus)***||
## LogAnalyticsSolutionSpec

Appears on:[LogAnalyticsSolution](#loganalyticssolution), [LogAnalyticsSolutionStatus](#loganalyticssolutionstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `location` | ***string***||
| `plan` | ***[[]LogAnalyticsSolutionSpecPlan](#loganalyticssolutionspecplan)***||
| `resourceGroupName` | ***string***||
| `solutionName` | ***string***||
| `workspaceName` | ***string***||
| `workspaceResourceID` | ***string***||
## LogAnalyticsSolutionSpecPlan

Appears on:[LogAnalyticsSolutionSpec](#loganalyticssolutionspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `name` | ***string***| ***(Optional)*** |
| `product` | ***string***||
| `promotionCode` | ***string***| ***(Optional)*** |
| `publisher` | ***string***||
## LogAnalyticsSolutionStatus

Appears on:[LogAnalyticsSolution](#loganalyticssolution)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[LogAnalyticsSolutionSpec](#loganalyticssolutionspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[LogAnalyticsSolutionStatus](#loganalyticssolutionstatus)

---