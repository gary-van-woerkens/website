---
title: AppmeshRoute
menu:
  docs_v2021.07.28:
    identifier: appmeshroute-aws.kubeform.com
    name: AppmeshRoute
    parent: aws.kubeform.com-reference
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

## AppmeshRoute
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `AppmeshRoute` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[AppmeshRouteSpec](#appmeshroutespec)***||
| `status` | ***[AppmeshRouteStatus](#appmeshroutestatus)***||
## AppmeshRouteSpec

Appears on:[AppmeshRoute](#appmeshroute), [AppmeshRouteStatus](#appmeshroutestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `arn` | ***string***| ***(Optional)*** |
| `createdDate` | ***string***| ***(Optional)*** |
| `lastUpdatedDate` | ***string***| ***(Optional)*** |
| `meshName` | ***string***||
| `name` | ***string***||
| `spec` | ***[[]AppmeshRouteSpecSpec](#appmeshroutespecspec)***||
| `tags` | ***map[string]string***| ***(Optional)*** |
| `virtualRouterName` | ***string***||
## AppmeshRouteSpecSpec

Appears on:[AppmeshRouteSpec](#appmeshroutespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `httpRoute` | ***[[]AppmeshRouteSpecSpecHttpRoute](#appmeshroutespecspechttproute)***| ***(Optional)*** |
| `tcpRoute` | ***[[]AppmeshRouteSpecSpecTcpRoute](#appmeshroutespecspectcproute)***| ***(Optional)*** |
## AppmeshRouteSpecSpecHttpRoute

Appears on:[AppmeshRouteSpecSpec](#appmeshroutespecspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `action` | ***[[]AppmeshRouteSpecSpecHttpRouteAction](#appmeshroutespecspechttprouteaction)***||
| `match` | ***[[]AppmeshRouteSpecSpecHttpRouteMatch](#appmeshroutespecspechttproutematch)***||
## AppmeshRouteSpecSpecHttpRouteAction

Appears on:[AppmeshRouteSpecSpecHttpRoute](#appmeshroutespecspechttproute)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `weightedTarget` | ***[[]AppmeshRouteSpecSpecHttpRouteActionWeightedTarget](#appmeshroutespecspechttprouteactionweightedtarget)***||
## AppmeshRouteSpecSpecHttpRouteActionWeightedTarget

Appears on:[AppmeshRouteSpecSpecHttpRouteAction](#appmeshroutespecspechttprouteaction)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `virtualNode` | ***string***||
| `weight` | ***int64***||
## AppmeshRouteSpecSpecHttpRouteMatch

Appears on:[AppmeshRouteSpecSpecHttpRoute](#appmeshroutespecspechttproute)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `prefix` | ***string***||
## AppmeshRouteSpecSpecTcpRoute

Appears on:[AppmeshRouteSpecSpec](#appmeshroutespecspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `action` | ***[[]AppmeshRouteSpecSpecTcpRouteAction](#appmeshroutespecspectcprouteaction)***||
## AppmeshRouteSpecSpecTcpRouteAction

Appears on:[AppmeshRouteSpecSpecTcpRoute](#appmeshroutespecspectcproute)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `weightedTarget` | ***[[]AppmeshRouteSpecSpecTcpRouteActionWeightedTarget](#appmeshroutespecspectcprouteactionweightedtarget)***||
## AppmeshRouteSpecSpecTcpRouteActionWeightedTarget

Appears on:[AppmeshRouteSpecSpecTcpRouteAction](#appmeshroutespecspectcprouteaction)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `virtualNode` | ***string***||
| `weight` | ***int64***||
## AppmeshRouteStatus

Appears on:[AppmeshRoute](#appmeshroute)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[AppmeshRouteSpec](#appmeshroutespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[AppmeshRouteStatus](#appmeshroutestatus)

---
