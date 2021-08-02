---
title: PrivateLinkEndpoint
menu:
  docs_v2021.08.02:
    identifier: privatelinkendpoint-azurerm.kubeform.com
    name: PrivateLinkEndpoint
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v2021.08.02
section_menu_id: reference
info:
  alicloud: v0.3.0
  aws: v0.3.0
  azurerm: v0.3.0
  civo: v0.3.0
  datadog: v0.3.0
  digitalocean: v0.3.0
  dynatrace: v0.3.0
  ec: v0.3.0
  equinixmetal: v0.3.0
  google: v0.3.0
  grafana: v0.3.0
  hcloud: v0.3.0
  ibm: v0.3.0
  installer: v2021.08.02
  linode: v0.3.0
  mongodbatlas: v0.3.0
  newrelic: v0.3.0
  ovh: v0.3.0
  pagerduty: v0.3.0
  rediscloud: v0.3.0
  upcloud: v0.3.0
  version: v2021.08.02
  vsphere: v0.3.0
  vultr: v0.3.0
  wavefront: v0.3.0
---

## PrivateLinkEndpoint
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `PrivateLinkEndpoint` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[PrivateLinkEndpointSpec](#privatelinkendpointspec)***||
| `status` | ***[PrivateLinkEndpointStatus](#privatelinkendpointstatus)***||
## Phase(`string` alias)

Appears on:[PrivateLinkEndpointStatus](#privatelinkendpointstatus)

## PrivateLinkEndpointSpec

Appears on:[PrivateLinkEndpoint](#privatelinkendpoint), [PrivateLinkEndpointStatus](#privatelinkendpointstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `location` | ***string***||
| `name` | ***string***||
| `privateServiceConnection` | ***[[]PrivateLinkEndpointSpecPrivateServiceConnection](#privatelinkendpointspecprivateserviceconnection)***||
| `resourceGroupName` | ***string***||
| `subnetID` | ***string***||
## PrivateLinkEndpointSpecPrivateServiceConnection

Appears on:[PrivateLinkEndpointSpec](#privatelinkendpointspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `isManualConnection` | ***bool***||
| `name` | ***string***||
| `privateConnectionResourceID` | ***string***||
| `requestMessage` | ***string***| ***(Optional)*** |
| `subresourceNames` | ***[]string***| ***(Optional)*** |
## PrivateLinkEndpointStatus

Appears on:[PrivateLinkEndpoint](#privatelinkendpoint)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[PrivateLinkEndpointSpec](#privatelinkendpointspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
