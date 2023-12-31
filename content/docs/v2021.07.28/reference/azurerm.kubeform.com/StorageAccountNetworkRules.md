---
title: StorageAccountNetworkRules
menu:
  docs_v2021.07.28:
    identifier: storageaccountnetworkrules-azurerm.kubeform.com
    name: StorageAccountNetworkRules
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

## StorageAccountNetworkRules
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `StorageAccountNetworkRules` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[StorageAccountNetworkRulesSpec](#storageaccountnetworkrulesspec)***||
| `status` | ***[StorageAccountNetworkRulesStatus](#storageaccountnetworkrulesstatus)***||
## Phase(`string` alias)

Appears on:[StorageAccountNetworkRulesStatus](#storageaccountnetworkrulesstatus)

## StorageAccountNetworkRulesSpec

Appears on:[StorageAccountNetworkRules](#storageaccountnetworkrules), [StorageAccountNetworkRulesStatus](#storageaccountnetworkrulesstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `bypass` | ***[]string***| ***(Optional)*** |
| `defaultAction` | ***string***||
| `ipRules` | ***[]string***| ***(Optional)*** |
| `resourceGroupName` | ***string***||
| `storageAccountName` | ***string***||
| `virtualNetworkSubnetIDS` | ***[]string***| ***(Optional)*** |
## StorageAccountNetworkRulesStatus

Appears on:[StorageAccountNetworkRules](#storageaccountnetworkrules)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[StorageAccountNetworkRulesSpec](#storageaccountnetworkrulesspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
