---
title: VpnConnection
menu:
  docs_v2021.10.29:
    identifier: vpnconnection-aws.kubeform.com
    name: VpnConnection
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2021.10.29
section_menu_id: reference
info:
  alicloud: v0.4.0
  aws: v0.4.0
  azurerm: v0.4.0
  civo: v0.4.0
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

## VpnConnection
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `VpnConnection` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[VpnConnectionSpec](#vpnconnectionspec)***||
| `status` | ***[VpnConnectionStatus](#vpnconnectionstatus)***||
## Phase(`string` alias)

Appears on:[VpnConnectionStatus](#vpnconnectionstatus)

## VpnConnectionSpec

Appears on:[VpnConnection](#vpnconnection), [VpnConnectionStatus](#vpnconnectionstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `secretRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `customerGatewayConfiguration` | ***string***| ***(Optional)*** |
| `customerGatewayID` | ***string***||
| `routes` | ***[[]VpnConnectionSpecRoutes](#vpnconnectionspecroutes)***| ***(Optional)*** |
| `staticRoutesOnly` | ***bool***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
| `transitGatewayAttachmentID` | ***string***| ***(Optional)*** |
| `transitGatewayID` | ***string***| ***(Optional)*** |
| `tunnel1Address` | ***string***| ***(Optional)*** |
| `tunnel1BGPAsn` | ***string***| ***(Optional)*** |
| `tunnel1BGPHoldtime` | ***int64***| ***(Optional)*** |
| `tunnel1CgwInsideAddress` | ***string***| ***(Optional)*** |
| `tunnel1InsideCIDR` | ***string***| ***(Optional)*** |
| `tunnel1VgwInsideAddress` | ***string***| ***(Optional)*** |
| `tunnel2Address` | ***string***| ***(Optional)*** |
| `tunnel2BGPAsn` | ***string***| ***(Optional)*** |
| `tunnel2BGPHoldtime` | ***int64***| ***(Optional)*** |
| `tunnel2CgwInsideAddress` | ***string***| ***(Optional)*** |
| `tunnel2InsideCIDR` | ***string***| ***(Optional)*** |
| `tunnel2VgwInsideAddress` | ***string***| ***(Optional)*** |
| `type` | ***string***||
| `vgwTelemetry` | ***[[]VpnConnectionSpecVgwTelemetry](#vpnconnectionspecvgwtelemetry)***| ***(Optional)*** |
| `vpnGatewayID` | ***string***| ***(Optional)*** |
## VpnConnectionSpecRoutes

Appears on:[VpnConnectionSpec](#vpnconnectionspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `destinationCIDRBlock` | ***string***| ***(Optional)*** |
| `source` | ***string***| ***(Optional)*** |
| `state` | ***string***| ***(Optional)*** |
## VpnConnectionSpecVgwTelemetry

Appears on:[VpnConnectionSpec](#vpnconnectionspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `acceptedRouteCount` | ***int64***| ***(Optional)*** |
| `lastStatusChange` | ***string***| ***(Optional)*** |
| `outsideIPAddress` | ***string***| ***(Optional)*** |
| `status` | ***string***| ***(Optional)*** |
| `statusMessage` | ***string***| ***(Optional)*** |
## VpnConnectionStatus

Appears on:[VpnConnection](#vpnconnection)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[VpnConnectionSpec](#vpnconnectionspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
## Sensitive Values
| Name | Type | Description |
|------|------|-------------|
| `tunnel1_preshared_key` | ***string*** ||
| `tunnel2_preshared_key` | ***string*** ||
