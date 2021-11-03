---
title: AppautoscalingScheduledAction
menu:
  docs_v2021.10.29:
    identifier: appautoscalingscheduledaction-aws.kubeform.com
    name: AppautoscalingScheduledAction
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2021.10.29
section_menu_id: reference
info:
  alicloud: v0.4.0
  aws: v0.4.0
  azurerm: v0.4.0
  civo: v0.4.0
  cli: v0.1.0
  datadog: v0.4.0
  digitalocean: v0.4.0
  dynatrace: v0.4.0
  ec: v0.4.0
  equinixmetal: v0.4.0
  google: v0.4.0
  grafana: v0.4.0
  hcloud: v0.4.0
  ibm: v0.4.0
  installer: v2021.10.29
  linode: v0.4.0
  mongodbatlas: v0.4.0
  newrelic: v0.4.0
  oci: v0.4.0
  ovh: v0.4.0
  pagerduty: v0.4.0
  rediscloud: v0.4.0
  upcloud: v0.4.0
  version: v2021.10.29
  vsphere: v0.4.0
  vultr: v0.4.0
  wavefront: v0.4.0
---

## AppautoscalingScheduledAction
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `AppautoscalingScheduledAction` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[AppautoscalingScheduledActionSpec](#appautoscalingscheduledactionspec)***||
| `status` | ***[AppautoscalingScheduledActionStatus](#appautoscalingscheduledactionstatus)***||
## AppautoscalingScheduledActionSpec

Appears on:[AppautoscalingScheduledAction](#appautoscalingscheduledaction), [AppautoscalingScheduledActionStatus](#appautoscalingscheduledactionstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `arn` | ***string***| ***(Optional)*** |
| `endTime` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `resourceID` | ***string***||
| `scalableDimension` | ***string***| ***(Optional)*** |
| `scalableTargetAction` | ***[[]AppautoscalingScheduledActionSpecScalableTargetAction](#appautoscalingscheduledactionspecscalabletargetaction)***| ***(Optional)*** |
| `schedule` | ***string***| ***(Optional)*** |
| `serviceNamespace` | ***string***||
| `startTime` | ***string***| ***(Optional)*** |
## AppautoscalingScheduledActionSpecScalableTargetAction

Appears on:[AppautoscalingScheduledActionSpec](#appautoscalingscheduledactionspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `maxCapacity` | ***int64***| ***(Optional)*** |
| `minCapacity` | ***int64***| ***(Optional)*** |
## AppautoscalingScheduledActionStatus

Appears on:[AppautoscalingScheduledAction](#appautoscalingscheduledaction)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[AppautoscalingScheduledActionSpec](#appautoscalingscheduledactionspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[AppautoscalingScheduledActionStatus](#appautoscalingscheduledactionstatus)

---
