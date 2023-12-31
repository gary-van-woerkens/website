---
title: PointToSiteVPNGateway
menu:
  docs_v2021.07.28:
    identifier: pointtositevpngateway-azurerm.kubeform.com
    name: PointToSiteVPNGateway
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

## PointToSiteVPNGateway
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `PointToSiteVPNGateway` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[PointToSiteVPNGatewaySpec](#pointtositevpngatewayspec)***||
| `status` | ***[PointToSiteVPNGatewayStatus](#pointtositevpngatewaystatus)***||
## Phase(`string` alias)

Appears on:[PointToSiteVPNGatewayStatus](#pointtositevpngatewaystatus)

## PointToSiteVPNGatewaySpec

Appears on:[PointToSiteVPNGateway](#pointtositevpngateway), [PointToSiteVPNGatewayStatus](#pointtositevpngatewaystatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `connectionConfiguration` | ***[[]PointToSiteVPNGatewaySpecConnectionConfiguration](#pointtositevpngatewayspecconnectionconfiguration)***||
| `location` | ***string***||
| `name` | ***string***||
| `resourceGroupName` | ***string***||
| `scaleUnit` | ***int64***||
| `tags` | ***map[string]string***| ***(Optional)*** |
| `virtualHubID` | ***string***||
| `vpnServerConfigurationID` | ***string***||
## PointToSiteVPNGatewaySpecConnectionConfiguration

Appears on:[PointToSiteVPNGatewaySpec](#pointtositevpngatewayspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `name` | ***string***||
| `vpnClientAddressPool` | ***[[]PointToSiteVPNGatewaySpecConnectionConfigurationVpnClientAddressPool](#pointtositevpngatewayspecconnectionconfigurationvpnclientaddresspool)***||
## PointToSiteVPNGatewaySpecConnectionConfigurationVpnClientAddressPool

Appears on:[PointToSiteVPNGatewaySpecConnectionConfiguration](#pointtositevpngatewayspecconnectionconfiguration)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `addressPrefixes` | ***[]string***||
## PointToSiteVPNGatewayStatus

Appears on:[PointToSiteVPNGateway](#pointtositevpngateway)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[PointToSiteVPNGatewaySpec](#pointtositevpngatewayspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
