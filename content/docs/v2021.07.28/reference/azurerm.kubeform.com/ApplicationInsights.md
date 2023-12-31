---
title: ApplicationInsights
menu:
  docs_v2021.07.28:
    identifier: applicationinsights-azurerm.kubeform.com
    name: ApplicationInsights
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

## ApplicationInsights
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `ApplicationInsights` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ApplicationInsightsSpec](#applicationinsightsspec)***||
| `status` | ***[ApplicationInsightsStatus](#applicationinsightsstatus)***||
## ApplicationInsightsSpec

Appears on:[ApplicationInsights](#applicationinsights), [ApplicationInsightsStatus](#applicationinsightsstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `secretRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `appID` | ***string***| ***(Optional)*** |
| `applicationType` | ***string***||
| `dailyDataCapInGb` | ***float64***| ***(Optional)*** |
| `dailyDataCapNotificationsDisabled` | ***bool***| ***(Optional)*** |
| `location` | ***string***||
| `name` | ***string***||
| `resourceGroupName` | ***string***||
| `retentionInDays` | ***int64***| ***(Optional)*** |
| `samplingPercentage` | ***float64***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
## ApplicationInsightsStatus

Appears on:[ApplicationInsights](#applicationinsights)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ApplicationInsightsSpec](#applicationinsightsspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[ApplicationInsightsStatus](#applicationinsightsstatus)

---
## Sensitive Values
| Name | Type | Description |
|------|------|-------------|
| `instrumentation_key` | ***string*** ||
