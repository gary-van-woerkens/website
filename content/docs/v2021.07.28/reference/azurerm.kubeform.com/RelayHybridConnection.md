---
title: RelayHybridConnection
menu:
  docs_v2021.07.28:
    identifier: relayhybridconnection-azurerm.kubeform.com
    name: RelayHybridConnection
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

## RelayHybridConnection
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `RelayHybridConnection` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[RelayHybridConnectionSpec](#relayhybridconnectionspec)***||
| `status` | ***[RelayHybridConnectionStatus](#relayhybridconnectionstatus)***||
## Phase(`string` alias)

Appears on:[RelayHybridConnectionStatus](#relayhybridconnectionstatus)

## RelayHybridConnectionSpec

Appears on:[RelayHybridConnection](#relayhybridconnection), [RelayHybridConnectionStatus](#relayhybridconnectionstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `name` | ***string***||
| `relayNamespaceName` | ***string***||
| `requiresClientAuthorization` | ***bool***| ***(Optional)*** |
| `resourceGroupName` | ***string***||
| `userMetadata` | ***string***| ***(Optional)*** |
## RelayHybridConnectionStatus

Appears on:[RelayHybridConnection](#relayhybridconnection)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[RelayHybridConnectionSpec](#relayhybridconnectionspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
