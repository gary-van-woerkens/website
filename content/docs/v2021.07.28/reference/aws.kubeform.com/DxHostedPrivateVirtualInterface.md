---
title: DxHostedPrivateVirtualInterface
menu:
  docs_v2021.07.28:
    identifier: dxhostedprivatevirtualinterface-aws.kubeform.com
    name: DxHostedPrivateVirtualInterface
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

## DxHostedPrivateVirtualInterface
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `DxHostedPrivateVirtualInterface` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[DxHostedPrivateVirtualInterfaceSpec](#dxhostedprivatevirtualinterfacespec)***||
| `status` | ***[DxHostedPrivateVirtualInterfaceStatus](#dxhostedprivatevirtualinterfacestatus)***||
## DxHostedPrivateVirtualInterfaceSpec

Appears on:[DxHostedPrivateVirtualInterface](#dxhostedprivatevirtualinterface), [DxHostedPrivateVirtualInterfaceStatus](#dxhostedprivatevirtualinterfacestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `addressFamily` | ***string***||
| `amazonAddress` | ***string***| ***(Optional)*** |
| `arn` | ***string***| ***(Optional)*** |
| `awsDevice` | ***string***| ***(Optional)*** |
| `bgpAsn` | ***int64***||
| `bgpAuthKey` | ***string***| ***(Optional)*** |
| `connectionID` | ***string***||
| `customerAddress` | ***string***| ***(Optional)*** |
| `jumboFrameCapable` | ***bool***| ***(Optional)*** |
| `mtu` | ***int64***| ***(Optional)*** |
| `name` | ***string***||
| `ownerAccountID` | ***string***||
| `vlan` | ***int64***||
## DxHostedPrivateVirtualInterfaceStatus

Appears on:[DxHostedPrivateVirtualInterface](#dxhostedprivatevirtualinterface)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[DxHostedPrivateVirtualInterfaceSpec](#dxhostedprivatevirtualinterfacespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[DxHostedPrivateVirtualInterfaceStatus](#dxhostedprivatevirtualinterfacestatus)

---
