---
title: BotChannelMsTeams
menu:
  docs_v2021.07.28:
    identifier: botchannelmsteams-azurerm.kubeform.com
    name: BotChannelMsTeams
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

## BotChannelMsTeams
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `BotChannelMsTeams` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[BotChannelMsTeamsSpec](#botchannelmsteamsspec)***||
| `status` | ***[BotChannelMsTeamsStatus](#botchannelmsteamsstatus)***||
## BotChannelMsTeamsSpec

Appears on:[BotChannelMsTeams](#botchannelmsteams), [BotChannelMsTeamsStatus](#botchannelmsteamsstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `botName` | ***string***||
| `callingWebHook` | ***string***| ***(Optional)*** |
| `enableCalling` | ***bool***| ***(Optional)*** |
| `location` | ***string***||
| `resourceGroupName` | ***string***||
## BotChannelMsTeamsStatus

Appears on:[BotChannelMsTeams](#botchannelmsteams)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[BotChannelMsTeamsSpec](#botchannelmsteamsspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[BotChannelMsTeamsStatus](#botchannelmsteamsstatus)

---
