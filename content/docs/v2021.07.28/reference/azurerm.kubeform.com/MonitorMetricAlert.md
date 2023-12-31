---
title: MonitorMetricAlert
menu:
  docs_v2021.07.28:
    identifier: monitormetricalert-azurerm.kubeform.com
    name: MonitorMetricAlert
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

## MonitorMetricAlert
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `MonitorMetricAlert` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[MonitorMetricAlertSpec](#monitormetricalertspec)***||
| `status` | ***[MonitorMetricAlertStatus](#monitormetricalertstatus)***||
## MonitorMetricAlertSpec

Appears on:[MonitorMetricAlert](#monitormetricalert), [MonitorMetricAlertStatus](#monitormetricalertstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `action` | ***[[]MonitorMetricAlertSpecAction](#monitormetricalertspecaction)***| ***(Optional)*** |
| `autoMitigate` | ***bool***| ***(Optional)*** |
| `criteria` | ***[[]MonitorMetricAlertSpecCriteria](#monitormetricalertspeccriteria)***||
| `description` | ***string***| ***(Optional)*** |
| `enabled` | ***bool***| ***(Optional)*** |
| `frequency` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `resourceGroupName` | ***string***||
| `scopes` | ***[]string***||
| `severity` | ***int64***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
| `windowSize` | ***string***| ***(Optional)*** |
## MonitorMetricAlertSpecAction

Appears on:[MonitorMetricAlertSpec](#monitormetricalertspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `actionGroupID` | ***string***||
| `webhookProperties` | ***map[string]string***| ***(Optional)*** |
## MonitorMetricAlertSpecCriteria

Appears on:[MonitorMetricAlertSpec](#monitormetricalertspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `aggregation` | ***string***||
| `dimension` | ***[[]MonitorMetricAlertSpecCriteriaDimension](#monitormetricalertspeccriteriadimension)***| ***(Optional)*** |
| `metricName` | ***string***||
| `metricNamespace` | ***string***||
| `operator` | ***string***||
| `threshold` | ***float64***||
## MonitorMetricAlertSpecCriteriaDimension

Appears on:[MonitorMetricAlertSpecCriteria](#monitormetricalertspeccriteria)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `name` | ***string***||
| `operator` | ***string***||
| `values` | ***[]string***||
## MonitorMetricAlertStatus

Appears on:[MonitorMetricAlert](#monitormetricalert)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[MonitorMetricAlertSpec](#monitormetricalertspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[MonitorMetricAlertStatus](#monitormetricalertstatus)

---
