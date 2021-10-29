---
title: MonitorActionGroup
menu:
  docs_v2021.10.29:
    identifier: monitoractiongroup-azurerm.kubeform.com
    name: MonitorActionGroup
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v2021.10.29
section_menu_id: reference
info:
  alicloud: v0.4.0
  aws: v0.4.0
  azurerm: v0.4.0
  civo: v0.4.0
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

## MonitorActionGroup
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `MonitorActionGroup` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[MonitorActionGroupSpec](#monitoractiongroupspec)***||
| `status` | ***[MonitorActionGroupStatus](#monitoractiongroupstatus)***||
## MonitorActionGroupSpec

Appears on:[MonitorActionGroup](#monitoractiongroup), [MonitorActionGroupStatus](#monitoractiongroupstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `armRoleReceiver` | ***[[]MonitorActionGroupSpecArmRoleReceiver](#monitoractiongroupspecarmrolereceiver)***| ***(Optional)*** |
| `automationRunbookReceiver` | ***[[]MonitorActionGroupSpecAutomationRunbookReceiver](#monitoractiongroupspecautomationrunbookreceiver)***| ***(Optional)*** |
| `azureAppPushReceiver` | ***[[]MonitorActionGroupSpecAzureAppPushReceiver](#monitoractiongroupspecazureapppushreceiver)***| ***(Optional)*** |
| `azureFunctionReceiver` | ***[[]MonitorActionGroupSpecAzureFunctionReceiver](#monitoractiongroupspecazurefunctionreceiver)***| ***(Optional)*** |
| `emailReceiver` | ***[[]MonitorActionGroupSpecEmailReceiver](#monitoractiongroupspecemailreceiver)***| ***(Optional)*** |
| `enabled` | ***bool***| ***(Optional)*** |
| `itsmReceiver` | ***[[]MonitorActionGroupSpecItsmReceiver](#monitoractiongroupspecitsmreceiver)***| ***(Optional)*** |
| `logicAppReceiver` | ***[[]MonitorActionGroupSpecLogicAppReceiver](#monitoractiongroupspeclogicappreceiver)***| ***(Optional)*** |
| `name` | ***string***||
| `resourceGroupName` | ***string***||
| `shortName` | ***string***||
| `smsReceiver` | ***[[]MonitorActionGroupSpecSmsReceiver](#monitoractiongroupspecsmsreceiver)***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
| `voiceReceiver` | ***[[]MonitorActionGroupSpecVoiceReceiver](#monitoractiongroupspecvoicereceiver)***| ***(Optional)*** |
| `webhookReceiver` | ***[[]MonitorActionGroupSpecWebhookReceiver](#monitoractiongroupspecwebhookreceiver)***| ***(Optional)*** |
## MonitorActionGroupSpecArmRoleReceiver

Appears on:[MonitorActionGroupSpec](#monitoractiongroupspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `name` | ***string***||
| `roleID` | ***string***||
| `useCommonAlertSchema` | ***bool***| ***(Optional)*** |
## MonitorActionGroupSpecAutomationRunbookReceiver

Appears on:[MonitorActionGroupSpec](#monitoractiongroupspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `automationAccountID` | ***string***||
| `isGlobalRunbook` | ***bool***||
| `name` | ***string***||
| `runbookName` | ***string***||
| `serviceURI` | ***string***||
| `useCommonAlertSchema` | ***bool***| ***(Optional)*** |
| `webhookResourceID` | ***string***||
## MonitorActionGroupSpecAzureAppPushReceiver

Appears on:[MonitorActionGroupSpec](#monitoractiongroupspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `emailAddress` | ***string***||
| `name` | ***string***||
## MonitorActionGroupSpecAzureFunctionReceiver

Appears on:[MonitorActionGroupSpec](#monitoractiongroupspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `functionAppResourceID` | ***string***||
| `functionName` | ***string***||
| `httpTriggerURL` | ***string***||
| `name` | ***string***||
| `useCommonAlertSchema` | ***bool***| ***(Optional)*** |
## MonitorActionGroupSpecEmailReceiver

Appears on:[MonitorActionGroupSpec](#monitoractiongroupspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `emailAddress` | ***string***||
| `name` | ***string***||
| `useCommonAlertSchema` | ***bool***| ***(Optional)*** |
## MonitorActionGroupSpecItsmReceiver

Appears on:[MonitorActionGroupSpec](#monitoractiongroupspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `connectionID` | ***string***||
| `name` | ***string***||
| `region` | ***string***||
| `ticketConfiguration` | ***string***||
| `workspaceID` | ***string***||
## MonitorActionGroupSpecLogicAppReceiver

Appears on:[MonitorActionGroupSpec](#monitoractiongroupspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `callbackURL` | ***string***||
| `name` | ***string***||
| `resourceID` | ***string***||
| `useCommonAlertSchema` | ***bool***| ***(Optional)*** |
## MonitorActionGroupSpecSmsReceiver

Appears on:[MonitorActionGroupSpec](#monitoractiongroupspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `countryCode` | ***string***||
| `name` | ***string***||
| `phoneNumber` | ***string***||
## MonitorActionGroupSpecVoiceReceiver

Appears on:[MonitorActionGroupSpec](#monitoractiongroupspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `countryCode` | ***string***||
| `name` | ***string***||
| `phoneNumber` | ***string***||
## MonitorActionGroupSpecWebhookReceiver

Appears on:[MonitorActionGroupSpec](#monitoractiongroupspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `name` | ***string***||
| `serviceURI` | ***string***||
| `useCommonAlertSchema` | ***bool***| ***(Optional)*** |
## MonitorActionGroupStatus

Appears on:[MonitorActionGroup](#monitoractiongroup)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[MonitorActionGroupSpec](#monitoractiongroupspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[MonitorActionGroupStatus](#monitoractiongroupstatus)

---
