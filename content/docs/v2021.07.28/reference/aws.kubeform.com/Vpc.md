---
title: Vpc
menu:
  docs_v2021.07.28:
    identifier: vpc-aws.kubeform.com
    name: Vpc
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

## Vpc
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `Vpc` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[VpcSpec](#vpcspec)***||
| `status` | ***[VpcStatus](#vpcstatus)***||
## Phase(`string` alias)

Appears on:[VpcStatus](#vpcstatus)

## VpcSpec

Appears on:[Vpc](#vpc), [VpcStatus](#vpcstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `arn` | ***string***| ***(Optional)*** |
| `assignGeneratedIpv6CIDRBlock` | ***bool***| ***(Optional)*** |
| `cidrBlock` | ***string***||
| `defaultNetworkACLID` | ***string***| ***(Optional)*** |
| `defaultRouteTableID` | ***string***| ***(Optional)*** |
| `defaultSecurityGroupID` | ***string***| ***(Optional)*** |
| `dhcpOptionsID` | ***string***| ***(Optional)*** |
| `enableClassiclink` | ***bool***| ***(Optional)*** |
| `enableClassiclinkDNSSupport` | ***bool***| ***(Optional)*** |
| `enableDNSHostnames` | ***bool***| ***(Optional)*** |
| `enableDNSSupport` | ***bool***| ***(Optional)*** |
| `instanceTenancy` | ***string***| ***(Optional)*** |
| `ipv6AssociationID` | ***string***| ***(Optional)*** |
| `ipv6CIDRBlock` | ***string***| ***(Optional)*** |
| `mainRouteTableID` | ***string***| ***(Optional)*** |
| `ownerID` | ***string***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
## VpcStatus

Appears on:[Vpc](#vpc)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[VpcSpec](#vpcspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
