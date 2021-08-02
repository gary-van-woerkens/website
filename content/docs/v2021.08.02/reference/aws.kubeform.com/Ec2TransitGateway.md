---
title: Ec2TransitGateway
menu:
  docs_v2021.08.02:
    identifier: ec2transitgateway-aws.kubeform.com
    name: Ec2TransitGateway
    parent: aws.kubeform.com-reference
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

## Ec2TransitGateway
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `Ec2TransitGateway` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[Ec2TransitGatewaySpec](#ec2transitgatewayspec)***||
| `status` | ***[Ec2TransitGatewayStatus](#ec2transitgatewaystatus)***||
## Ec2TransitGatewaySpec

Appears on:[Ec2TransitGateway](#ec2transitgateway), [Ec2TransitGatewayStatus](#ec2transitgatewaystatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `amazonSideAsn` | ***int64***| ***(Optional)*** |
| `arn` | ***string***| ***(Optional)*** |
| `associationDefaultRouteTableID` | ***string***| ***(Optional)*** |
| `autoAcceptSharedAttachments` | ***string***| ***(Optional)*** |
| `defaultRouteTableAssociation` | ***string***| ***(Optional)*** |
| `defaultRouteTablePropagation` | ***string***| ***(Optional)*** |
| `description` | ***string***| ***(Optional)*** |
| `dnsSupport` | ***string***| ***(Optional)*** |
| `ownerID` | ***string***| ***(Optional)*** |
| `propagationDefaultRouteTableID` | ***string***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
| `vpnEcmpSupport` | ***string***| ***(Optional)*** |
## Ec2TransitGatewayStatus

Appears on:[Ec2TransitGateway](#ec2transitgateway)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[Ec2TransitGatewaySpec](#ec2transitgatewayspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[Ec2TransitGatewayStatus](#ec2transitgatewaystatus)

---
