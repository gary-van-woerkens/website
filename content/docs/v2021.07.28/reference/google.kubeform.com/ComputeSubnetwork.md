---
title: ComputeSubnetwork
menu:
  docs_v2021.07.28:
    identifier: computesubnetwork-google.kubeform.com
    name: ComputeSubnetwork
    parent: google.kubeform.com-reference
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

## ComputeSubnetwork
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `google.kubeform.com/v1alpha1` |
|    `kind` | string | `ComputeSubnetwork` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ComputeSubnetworkSpec](#computesubnetworkspec)***||
| `status` | ***[ComputeSubnetworkStatus](#computesubnetworkstatus)***||
## ComputeSubnetworkSpec

Appears on:[ComputeSubnetwork](#computesubnetwork), [ComputeSubnetworkStatus](#computesubnetworkstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `creationTimestamp` | ***string***| ***(Optional)*** |
| `description` | ***string***| ***(Optional)*** |
| `enableFlowLogs` | ***bool***| ***(Optional)*** |
| `fingerprint` | ***string***| ***(Optional)*** |
| `gatewayAddress` | ***string***| ***(Optional)*** |
| `ipCIDRRange` | ***string***||
| `name` | ***string***||
| `network` | ***string***||
| `privateIPGoogleAccess` | ***bool***| ***(Optional)*** |
| `project` | ***string***| ***(Optional)*** |
| `region` | ***string***| ***(Optional)*** |
| `secondaryIPRange` | ***[[]ComputeSubnetworkSpecSecondaryIPRange](#computesubnetworkspecsecondaryiprange)***| ***(Optional)*** |
| `selfLink` | ***string***| ***(Optional)*** |
## ComputeSubnetworkSpecSecondaryIPRange

Appears on:[ComputeSubnetworkSpec](#computesubnetworkspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `ipCIDRRange` | ***string***||
| `rangeName` | ***string***||
## ComputeSubnetworkStatus

Appears on:[ComputeSubnetwork](#computesubnetwork)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ComputeSubnetworkSpec](#computesubnetworkspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[ComputeSubnetworkStatus](#computesubnetworkstatus)

---
