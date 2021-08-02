---
title: NetworkConnectionMonitor
menu:
  docs_v2021.08.02:
    identifier: networkconnectionmonitor-azurerm.kubeform.com
    name: NetworkConnectionMonitor
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

## NetworkConnectionMonitor
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `NetworkConnectionMonitor` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[NetworkConnectionMonitorSpec](#networkconnectionmonitorspec)***||
| `status` | ***[NetworkConnectionMonitorStatus](#networkconnectionmonitorstatus)***||
## NetworkConnectionMonitorSpec

Appears on:[NetworkConnectionMonitor](#networkconnectionmonitor), [NetworkConnectionMonitorStatus](#networkconnectionmonitorstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `autoStart` | ***bool***| ***(Optional)*** |
| `destination` | ***[[]NetworkConnectionMonitorSpecDestination](#networkconnectionmonitorspecdestination)***||
| `intervalInSeconds` | ***int64***| ***(Optional)*** |
| `location` | ***string***||
| `name` | ***string***||
| `networkWatcherName` | ***string***||
| `resourceGroupName` | ***string***||
| `source` | ***[[]NetworkConnectionMonitorSpecSource](#networkconnectionmonitorspecsource)***||
| `tags` | ***map[string]string***| ***(Optional)*** |
## NetworkConnectionMonitorSpecDestination

Appears on:[NetworkConnectionMonitorSpec](#networkconnectionmonitorspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `address` | ***string***| ***(Optional)*** |
| `port` | ***int64***||
| `virtualMachineID` | ***string***| ***(Optional)*** |
## NetworkConnectionMonitorSpecSource

Appears on:[NetworkConnectionMonitorSpec](#networkconnectionmonitorspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `port` | ***int64***| ***(Optional)*** |
| `virtualMachineID` | ***string***||
## NetworkConnectionMonitorStatus

Appears on:[NetworkConnectionMonitor](#networkconnectionmonitor)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[NetworkConnectionMonitorSpec](#networkconnectionmonitorspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[NetworkConnectionMonitorStatus](#networkconnectionmonitorstatus)

---
