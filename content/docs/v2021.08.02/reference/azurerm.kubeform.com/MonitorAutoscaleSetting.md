---
title: MonitorAutoscaleSetting
menu:
  docs_v2021.08.02:
    identifier: monitorautoscalesetting-azurerm.kubeform.com
    name: MonitorAutoscaleSetting
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v2021.08.02
section_menu_id: reference
info:
  alicloud: v0.3.0
  aws: v0.3.0
  azurerm: v0.3.0
  civo: v0.3.0
  datadog: v0.3.0
  digitalocean: v0.3.0
  dynatrace: v0.3.0
  ec: v0.3.0
  equinixmetal: v0.3.0
  google: v0.3.0
  grafana: v0.3.0
  hcloud: v0.3.0
  ibm: v0.3.0
  installer: v2021.08.02
  linode: v0.3.0
  mongodbatlas: v0.3.0
  newrelic: v0.3.0
  ovh: v0.3.0
  pagerduty: v0.3.0
  rediscloud: v0.3.0
  upcloud: v0.3.0
  version: v2021.08.02
  vsphere: v0.3.0
  vultr: v0.3.0
  wavefront: v0.3.0
---

## MonitorAutoscaleSetting
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `MonitorAutoscaleSetting` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[MonitorAutoscaleSettingSpec](#monitorautoscalesettingspec)***||
| `status` | ***[MonitorAutoscaleSettingStatus](#monitorautoscalesettingstatus)***||
## MonitorAutoscaleSettingSpec

Appears on:[MonitorAutoscaleSetting](#monitorautoscalesetting), [MonitorAutoscaleSettingStatus](#monitorautoscalesettingstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `enabled` | ***bool***| ***(Optional)*** |
| `location` | ***string***||
| `name` | ***string***||
| `notification` | ***[[]MonitorAutoscaleSettingSpecNotification](#monitorautoscalesettingspecnotification)***| ***(Optional)*** |
| `profile` | ***[[]MonitorAutoscaleSettingSpecProfile](#monitorautoscalesettingspecprofile)***||
| `resourceGroupName` | ***string***||
| `tags` | ***map[string]string***| ***(Optional)*** |
| `targetResourceID` | ***string***||
## MonitorAutoscaleSettingSpecNotification

Appears on:[MonitorAutoscaleSettingSpec](#monitorautoscalesettingspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `email` | ***[[]MonitorAutoscaleSettingSpecNotificationEmail](#monitorautoscalesettingspecnotificationemail)***| ***(Optional)*** |
| `webhook` | ***[[]MonitorAutoscaleSettingSpecNotificationWebhook](#monitorautoscalesettingspecnotificationwebhook)***| ***(Optional)*** |
## MonitorAutoscaleSettingSpecNotificationEmail

Appears on:[MonitorAutoscaleSettingSpecNotification](#monitorautoscalesettingspecnotification)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `customEmails` | ***[]string***| ***(Optional)*** |
| `sendToSubscriptionAdministrator` | ***bool***| ***(Optional)*** |
| `sendToSubscriptionCoAdministrator` | ***bool***| ***(Optional)*** |
## MonitorAutoscaleSettingSpecNotificationWebhook

Appears on:[MonitorAutoscaleSettingSpecNotification](#monitorautoscalesettingspecnotification)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `properties` | ***map[string]string***| ***(Optional)*** |
| `serviceURI` | ***string***||
## MonitorAutoscaleSettingSpecProfile

Appears on:[MonitorAutoscaleSettingSpec](#monitorautoscalesettingspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `capacity` | ***[[]MonitorAutoscaleSettingSpecProfileCapacity](#monitorautoscalesettingspecprofilecapacity)***||
| `fixedDate` | ***[[]MonitorAutoscaleSettingSpecProfileFixedDate](#monitorautoscalesettingspecprofilefixeddate)***| ***(Optional)*** |
| `name` | ***string***||
| `recurrence` | ***[[]MonitorAutoscaleSettingSpecProfileRecurrence](#monitorautoscalesettingspecprofilerecurrence)***| ***(Optional)*** |
| `rule` | ***[[]MonitorAutoscaleSettingSpecProfileRule](#monitorautoscalesettingspecprofilerule)***| ***(Optional)*** |
## MonitorAutoscaleSettingSpecProfileCapacity

Appears on:[MonitorAutoscaleSettingSpecProfile](#monitorautoscalesettingspecprofile)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `default` | ***int64***||
| `maximum` | ***int64***||
| `minimum` | ***int64***||
## MonitorAutoscaleSettingSpecProfileFixedDate

Appears on:[MonitorAutoscaleSettingSpecProfile](#monitorautoscalesettingspecprofile)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `end` | ***string***||
| `start` | ***string***||
| `timezone` | ***string***| ***(Optional)*** |
## MonitorAutoscaleSettingSpecProfileRecurrence

Appears on:[MonitorAutoscaleSettingSpecProfile](#monitorautoscalesettingspecprofile)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `days` | ***[]string***||
| `hours` | ***[]int64***||
| `minutes` | ***[]int64***||
| `timezone` | ***string***| ***(Optional)*** |
## MonitorAutoscaleSettingSpecProfileRule

Appears on:[MonitorAutoscaleSettingSpecProfile](#monitorautoscalesettingspecprofile)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `metricTrigger` | ***[[]MonitorAutoscaleSettingSpecProfileRuleMetricTrigger](#monitorautoscalesettingspecprofilerulemetrictrigger)***||
| `scaleAction` | ***[[]MonitorAutoscaleSettingSpecProfileRuleScaleAction](#monitorautoscalesettingspecprofilerulescaleaction)***||
## MonitorAutoscaleSettingSpecProfileRuleMetricTrigger

Appears on:[MonitorAutoscaleSettingSpecProfileRule](#monitorautoscalesettingspecprofilerule)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `metricName` | ***string***||
| `metricResourceID` | ***string***||
| `operator` | ***string***||
| `statistic` | ***string***||
| `threshold` | ***float64***||
| `timeAggregation` | ***string***||
| `timeGrain` | ***string***||
| `timeWindow` | ***string***||
## MonitorAutoscaleSettingSpecProfileRuleScaleAction

Appears on:[MonitorAutoscaleSettingSpecProfileRule](#monitorautoscalesettingspecprofilerule)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `cooldown` | ***string***||
| `direction` | ***string***||
| `type` | ***string***||
| `value` | ***int64***||
## MonitorAutoscaleSettingStatus

Appears on:[MonitorAutoscaleSetting](#monitorautoscalesetting)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[MonitorAutoscaleSettingSpec](#monitorautoscalesettingspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[MonitorAutoscaleSettingStatus](#monitorautoscalesettingstatus)

---
