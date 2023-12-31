---
title: DatabaseFirewall
menu:
  docs_v2021.07.28:
    identifier: databasefirewall-digitalocean.kubeform.com
    name: DatabaseFirewall
    parent: digitalocean.kubeform.com-reference
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

## DatabaseFirewall
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `digitalocean.kubeform.com/v1alpha1` |
|    `kind` | string | `DatabaseFirewall` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[DatabaseFirewallSpec](#databasefirewallspec)***||
| `status` | ***[DatabaseFirewallStatus](#databasefirewallstatus)***||
## DatabaseFirewallSpec

Appears on:[DatabaseFirewall](#databasefirewall), [DatabaseFirewallStatus](#databasefirewallstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `clusterID` | ***string***||
| `rule` | ***[[]DatabaseFirewallSpecRule](#databasefirewallspecrule)***||
## DatabaseFirewallSpecRule

Appears on:[DatabaseFirewallSpec](#databasefirewallspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `createdAt` | ***string***| ***(Optional)*** |
| `type` | ***string***||
| `uuid` | ***string***| ***(Optional)*** |
| `value` | ***string***||
## DatabaseFirewallStatus

Appears on:[DatabaseFirewall](#databasefirewall)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[DatabaseFirewallSpec](#databasefirewallspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[DatabaseFirewallStatus](#databasefirewallstatus)

---
