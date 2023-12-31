---
title: Ec2TransitGatewayRouteTablePropagation
menu:
  docs_v2021.07.28:
    identifier: ec2transitgatewayroutetablepropagation-aws.kubeform.com
    name: Ec2TransitGatewayRouteTablePropagation
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

## Ec2TransitGatewayRouteTablePropagation
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `Ec2TransitGatewayRouteTablePropagation` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[Ec2TransitGatewayRouteTablePropagationSpec](#ec2transitgatewayroutetablepropagationspec)***||
| `status` | ***[Ec2TransitGatewayRouteTablePropagationStatus](#ec2transitgatewayroutetablepropagationstatus)***||
## Ec2TransitGatewayRouteTablePropagationSpec

Appears on:[Ec2TransitGatewayRouteTablePropagation](#ec2transitgatewayroutetablepropagation), [Ec2TransitGatewayRouteTablePropagationStatus](#ec2transitgatewayroutetablepropagationstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `resourceID` | ***string***| ***(Optional)*** |
| `resourceType` | ***string***| ***(Optional)*** |
| `transitGatewayAttachmentID` | ***string***||
| `transitGatewayRouteTableID` | ***string***||
## Ec2TransitGatewayRouteTablePropagationStatus

Appears on:[Ec2TransitGatewayRouteTablePropagation](#ec2transitgatewayroutetablepropagation)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[Ec2TransitGatewayRouteTablePropagationSpec](#ec2transitgatewayroutetablepropagationspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[Ec2TransitGatewayRouteTablePropagationStatus](#ec2transitgatewayroutetablepropagationstatus)

---
