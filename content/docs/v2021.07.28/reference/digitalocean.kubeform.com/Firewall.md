---
title: Firewall
menu:
  docs_v2021.07.28:
    identifier: firewall-digitalocean.kubeform.com
    name: Firewall
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

## Firewall
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `digitalocean.kubeform.com/v1alpha1` |
|    `kind` | string | `Firewall` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[FirewallSpec](#firewallspec)***||
| `status` | ***[FirewallStatus](#firewallstatus)***||
## FirewallSpec

Appears on:[Firewall](#firewall), [FirewallStatus](#firewallstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `createdAt` | ***string***| ***(Optional)*** |
| `dropletIDS` | ***[]int64***| ***(Optional)*** |
| `inboundRule` | ***[[]FirewallSpecInboundRule](#firewallspecinboundrule)***| ***(Optional)*** |
| `name` | ***string***||
| `outboundRule` | ***[[]FirewallSpecOutboundRule](#firewallspecoutboundrule)***| ***(Optional)*** |
| `pendingChanges` | ***[[]FirewallSpecPendingChanges](#firewallspecpendingchanges)***| ***(Optional)*** |
| `status` | ***string***| ***(Optional)*** |
| `tags` | ***[]string***| ***(Optional)*** |
## FirewallSpecInboundRule

Appears on:[FirewallSpec](#firewallspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `portRange` | ***string***| ***(Optional)*** |
| `protocol` | ***string***||
| `sourceAddresses` | ***[]string***| ***(Optional)*** |
| `sourceDropletIDS` | ***[]int64***| ***(Optional)*** |
| `sourceLoadBalancerUids` | ***[]string***| ***(Optional)*** |
| `sourceTags` | ***[]string***| ***(Optional)*** |
## FirewallSpecOutboundRule

Appears on:[FirewallSpec](#firewallspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `destinationAddresses` | ***[]string***| ***(Optional)*** |
| `destinationDropletIDS` | ***[]int64***| ***(Optional)*** |
| `destinationLoadBalancerUids` | ***[]string***| ***(Optional)*** |
| `destinationTags` | ***[]string***| ***(Optional)*** |
| `portRange` | ***string***| ***(Optional)*** |
| `protocol` | ***string***||
## FirewallSpecPendingChanges

Appears on:[FirewallSpec](#firewallspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `dropletID` | ***int64***| ***(Optional)*** |
| `removing` | ***bool***| ***(Optional)*** |
| `status` | ***string***| ***(Optional)*** |
## FirewallStatus

Appears on:[Firewall](#firewall)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[FirewallSpec](#firewallspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[FirewallStatus](#firewallstatus)

---
