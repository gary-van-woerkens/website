---
title: FirewallNetworkRuleCollection
menu:
  docs_v2021.07.28:
    identifier: firewallnetworkrulecollection-azurerm.kubeform.com
    name: FirewallNetworkRuleCollection
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

## FirewallNetworkRuleCollection
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `FirewallNetworkRuleCollection` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[FirewallNetworkRuleCollectionSpec](#firewallnetworkrulecollectionspec)***||
| `status` | ***[FirewallNetworkRuleCollectionStatus](#firewallnetworkrulecollectionstatus)***||
## FirewallNetworkRuleCollectionSpec

Appears on:[FirewallNetworkRuleCollection](#firewallnetworkrulecollection), [FirewallNetworkRuleCollectionStatus](#firewallnetworkrulecollectionstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `action` | ***string***||
| `azureFirewallName` | ***string***||
| `name` | ***string***||
| `priority` | ***int64***||
| `resourceGroupName` | ***string***||
| `rule` | ***[[]FirewallNetworkRuleCollectionSpecRule](#firewallnetworkrulecollectionspecrule)***||
## FirewallNetworkRuleCollectionSpecRule

Appears on:[FirewallNetworkRuleCollectionSpec](#firewallnetworkrulecollectionspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `description` | ***string***| ***(Optional)*** |
| `destinationAddresses` | ***[]string***||
| `destinationPorts` | ***[]string***||
| `name` | ***string***||
| `protocols` | ***[]string***||
| `sourceAddresses` | ***[]string***||
## FirewallNetworkRuleCollectionStatus

Appears on:[FirewallNetworkRuleCollection](#firewallnetworkrulecollection)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[FirewallNetworkRuleCollectionSpec](#firewallnetworkrulecollectionspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[FirewallNetworkRuleCollectionStatus](#firewallnetworkrulecollectionstatus)

---
