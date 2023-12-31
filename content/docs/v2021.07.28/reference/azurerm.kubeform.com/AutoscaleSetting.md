---
title: AutoscaleSetting
menu:
  docs_v2021.07.28:
    identifier: autoscalesetting-azurerm.kubeform.com
    name: AutoscaleSetting
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

## AutoscaleSetting
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `AutoscaleSetting` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[AutoscaleSettingSpec](#autoscalesettingspec)***||
| `status` | ***[AutoscaleSettingStatus](#autoscalesettingstatus)***||
## AutoscaleSettingSpec

Appears on:[AutoscaleSetting](#autoscalesetting), [AutoscaleSettingStatus](#autoscalesettingstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `enabled` | ***bool***| ***(Optional)*** |
| `location` | ***string***||
| `name` | ***string***||
| `notification` | ***[[]AutoscaleSettingSpecNotification](#autoscalesettingspecnotification)***| ***(Optional)*** |
| `profile` | ***[[]AutoscaleSettingSpecProfile](#autoscalesettingspecprofile)***||
| `resourceGroupName` | ***string***||
| `tags` | ***map[string]string***| ***(Optional)*** |
| `targetResourceID` | ***string***||
## AutoscaleSettingSpecNotification

Appears on:[AutoscaleSettingSpec](#autoscalesettingspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `email` | ***[[]AutoscaleSettingSpecNotificationEmail](#autoscalesettingspecnotificationemail)***| ***(Optional)*** |
| `webhook` | ***[[]AutoscaleSettingSpecNotificationWebhook](#autoscalesettingspecnotificationwebhook)***| ***(Optional)*** |
## AutoscaleSettingSpecNotificationEmail

Appears on:[AutoscaleSettingSpecNotification](#autoscalesettingspecnotification)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `customEmails` | ***[]string***| ***(Optional)*** |
| `sendToSubscriptionAdministrator` | ***bool***| ***(Optional)*** |
| `sendToSubscriptionCoAdministrator` | ***bool***| ***(Optional)*** |
## AutoscaleSettingSpecNotificationWebhook

Appears on:[AutoscaleSettingSpecNotification](#autoscalesettingspecnotification)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `properties` | ***map[string]string***| ***(Optional)*** |
| `serviceURI` | ***string***||
## AutoscaleSettingSpecProfile

Appears on:[AutoscaleSettingSpec](#autoscalesettingspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `capacity` | ***[[]AutoscaleSettingSpecProfileCapacity](#autoscalesettingspecprofilecapacity)***||
| `fixedDate` | ***[[]AutoscaleSettingSpecProfileFixedDate](#autoscalesettingspecprofilefixeddate)***| ***(Optional)*** |
| `name` | ***string***||
| `recurrence` | ***[[]AutoscaleSettingSpecProfileRecurrence](#autoscalesettingspecprofilerecurrence)***| ***(Optional)*** |
| `rule` | ***[[]AutoscaleSettingSpecProfileRule](#autoscalesettingspecprofilerule)***| ***(Optional)*** |
## AutoscaleSettingSpecProfileCapacity

Appears on:[AutoscaleSettingSpecProfile](#autoscalesettingspecprofile)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `default` | ***int64***||
| `maximum` | ***int64***||
| `minimum` | ***int64***||
## AutoscaleSettingSpecProfileFixedDate

Appears on:[AutoscaleSettingSpecProfile](#autoscalesettingspecprofile)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `end` | ***string***||
| `start` | ***string***||
| `timezone` | ***string***| ***(Optional)*** |
## AutoscaleSettingSpecProfileRecurrence

Appears on:[AutoscaleSettingSpecProfile](#autoscalesettingspecprofile)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `days` | ***[]string***||
| `hours` | ***[]int64***||
| `minutes` | ***[]int64***||
| `timezone` | ***string***| ***(Optional)*** |
## AutoscaleSettingSpecProfileRule

Appears on:[AutoscaleSettingSpecProfile](#autoscalesettingspecprofile)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `metricTrigger` | ***[[]AutoscaleSettingSpecProfileRuleMetricTrigger](#autoscalesettingspecprofilerulemetrictrigger)***||
| `scaleAction` | ***[[]AutoscaleSettingSpecProfileRuleScaleAction](#autoscalesettingspecprofilerulescaleaction)***||
## AutoscaleSettingSpecProfileRuleMetricTrigger

Appears on:[AutoscaleSettingSpecProfileRule](#autoscalesettingspecprofilerule)

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
## AutoscaleSettingSpecProfileRuleScaleAction

Appears on:[AutoscaleSettingSpecProfileRule](#autoscalesettingspecprofilerule)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `cooldown` | ***string***||
| `direction` | ***string***||
| `type` | ***string***||
| `value` | ***int64***||
## AutoscaleSettingStatus

Appears on:[AutoscaleSetting](#autoscalesetting)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[AutoscaleSettingSpec](#autoscalesettingspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[AutoscaleSettingStatus](#autoscalesettingstatus)

---
