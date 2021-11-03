---
title: SqlFailoverGroup
menu:
  docs_v2021.10.29:
    identifier: sqlfailovergroup-azurerm.kubeform.com
    name: SqlFailoverGroup
    parent: azurerm.kubeform.com-reference
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

## SqlFailoverGroup
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `SqlFailoverGroup` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[SqlFailoverGroupSpec](#sqlfailovergroupspec)***||
| `status` | ***[SqlFailoverGroupStatus](#sqlfailovergroupstatus)***||
## Phase(`string` alias)

Appears on:[SqlFailoverGroupStatus](#sqlfailovergroupstatus)

## SqlFailoverGroupSpec

Appears on:[SqlFailoverGroup](#sqlfailovergroup), [SqlFailoverGroupStatus](#sqlfailovergroupstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `databases` | ***[]string***| ***(Optional)*** |
| `location` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `partnerServers` | ***[[]SqlFailoverGroupSpecPartnerServers](#sqlfailovergroupspecpartnerservers)***||
| `readWriteEndpointFailoverPolicy` | ***[[]SqlFailoverGroupSpecReadWriteEndpointFailoverPolicy](#sqlfailovergroupspecreadwriteendpointfailoverpolicy)***||
| `readonlyEndpointFailoverPolicy` | ***[[]SqlFailoverGroupSpecReadonlyEndpointFailoverPolicy](#sqlfailovergroupspecreadonlyendpointfailoverpolicy)***| ***(Optional)*** |
| `resourceGroupName` | ***string***||
| `role` | ***string***| ***(Optional)*** |
| `serverName` | ***string***||
| `tags` | ***map[string]string***| ***(Optional)*** |
## SqlFailoverGroupSpecPartnerServers

Appears on:[SqlFailoverGroupSpec](#sqlfailovergroupspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `ID` | ***string***||
| `location` | ***string***| ***(Optional)*** |
| `role` | ***string***| ***(Optional)*** |
## SqlFailoverGroupSpecReadWriteEndpointFailoverPolicy

Appears on:[SqlFailoverGroupSpec](#sqlfailovergroupspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `graceMinutes` | ***int64***| ***(Optional)*** |
| `mode` | ***string***||
## SqlFailoverGroupSpecReadonlyEndpointFailoverPolicy

Appears on:[SqlFailoverGroupSpec](#sqlfailovergroupspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `mode` | ***string***||
## SqlFailoverGroupStatus

Appears on:[SqlFailoverGroup](#sqlfailovergroup)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[SqlFailoverGroupSpec](#sqlfailovergroupspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
