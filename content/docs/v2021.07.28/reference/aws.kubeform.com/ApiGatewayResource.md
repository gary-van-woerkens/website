---
title: ApiGatewayResource
menu:
  docs_v2021.07.28:
    identifier: apigatewayresource-aws.kubeform.com
    name: ApiGatewayResource
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

## ApiGatewayResource
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `ApiGatewayResource` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ApiGatewayResourceSpec](#apigatewayresourcespec)***||
| `status` | ***[ApiGatewayResourceStatus](#apigatewayresourcestatus)***||
## ApiGatewayResourceSpec

Appears on:[ApiGatewayResource](#apigatewayresource), [ApiGatewayResourceStatus](#apigatewayresourcestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `parentID` | ***string***||
| `path` | ***string***| ***(Optional)*** |
| `pathPart` | ***string***||
| `restAPIID` | ***string***||
## ApiGatewayResourceStatus

Appears on:[ApiGatewayResource](#apigatewayresource)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ApiGatewayResourceSpec](#apigatewayresourcespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[ApiGatewayResourceStatus](#apigatewayresourcestatus)

---
