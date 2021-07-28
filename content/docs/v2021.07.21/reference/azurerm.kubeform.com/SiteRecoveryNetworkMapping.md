---
title: SiteRecoveryNetworkMapping
menu:
  docs_v2021.07.21:
    identifier: siterecoverynetworkmapping-azurerm.kubeform.com
    name: SiteRecoveryNetworkMapping
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v2021.07.21
section_menu_id: reference
info:
  aws: v0.1.1
  azurerm: v0.1.1
  digitalocean: v0.1.1
  equinixmetal: v0.1.0
  google: v0.1.1
  installer: v2021.07.21
  linode: v0.1.1
  version: v2021.07.21
---

## SiteRecoveryNetworkMapping
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `SiteRecoveryNetworkMapping` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[SiteRecoveryNetworkMappingSpec](#siterecoverynetworkmappingspec)***||
| `status` | ***[SiteRecoveryNetworkMappingStatus](#siterecoverynetworkmappingstatus)***||
## Phase(`string` alias)

Appears on:[SiteRecoveryNetworkMappingStatus](#siterecoverynetworkmappingstatus)

## SiteRecoveryNetworkMappingSpec

Appears on:[SiteRecoveryNetworkMapping](#siterecoverynetworkmapping), [SiteRecoveryNetworkMappingStatus](#siterecoverynetworkmappingstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `name` | ***string***||
| `recoveryVaultName` | ***string***||
| `resourceGroupName` | ***string***||
| `sourceNetworkID` | ***string***||
| `sourceRecoveryFabricName` | ***string***||
| `targetNetworkID` | ***string***||
| `targetRecoveryFabricName` | ***string***||
## SiteRecoveryNetworkMappingStatus

Appears on:[SiteRecoveryNetworkMapping](#siterecoverynetworkmapping)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[SiteRecoveryNetworkMappingSpec](#siterecoverynetworkmappingspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---