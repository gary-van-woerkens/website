---
title: ComputeInterconnectAttachment
menu:
  docs_v2021.10.29:
    identifier: computeinterconnectattachment-google.kubeform.com
    name: ComputeInterconnectAttachment
    parent: google.kubeform.com-reference
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

## ComputeInterconnectAttachment
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `google.kubeform.com/v1alpha1` |
|    `kind` | string | `ComputeInterconnectAttachment` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ComputeInterconnectAttachmentSpec](#computeinterconnectattachmentspec)***||
| `status` | ***[ComputeInterconnectAttachmentStatus](#computeinterconnectattachmentstatus)***||
## ComputeInterconnectAttachmentSpec

Appears on:[ComputeInterconnectAttachment](#computeinterconnectattachment), [ComputeInterconnectAttachmentStatus](#computeinterconnectattachmentstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `adminEnabled` | ***bool***| ***(Optional)*** |
| `bandwidth` | ***string***| ***(Optional)*** |
| `candidateSubnets` | ***[]string***| ***(Optional)*** |
| `cloudRouterIPAddress` | ***string***| ***(Optional)*** |
| `creationTimestamp` | ***string***| ***(Optional)*** |
| `customerRouterIPAddress` | ***string***| ***(Optional)*** |
| `description` | ***string***| ***(Optional)*** |
| `edgeAvailabilityDomain` | ***string***| ***(Optional)*** |
| `googleReferenceID` | ***string***| ***(Optional)*** |
| `interconnect` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `pairingKey` | ***string***| ***(Optional)*** |
| `partnerAsn` | ***string***| ***(Optional)*** |
| `privateInterconnectInfo` | ***[[]ComputeInterconnectAttachmentSpecPrivateInterconnectInfo](#computeinterconnectattachmentspecprivateinterconnectinfo)***| ***(Optional)*** |
| `project` | ***string***| ***(Optional)*** |
| `region` | ***string***| ***(Optional)*** |
| `router` | ***string***||
| `selfLink` | ***string***| ***(Optional)*** |
| `state` | ***string***| ***(Optional)*** |
| `type` | ***string***| ***(Optional)*** |
| `vlanTag8021q` | ***int64***| ***(Optional)*** |
## ComputeInterconnectAttachmentSpecPrivateInterconnectInfo

Appears on:[ComputeInterconnectAttachmentSpec](#computeinterconnectattachmentspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `tag8021q` | ***int64***| ***(Optional)*** |
## ComputeInterconnectAttachmentStatus

Appears on:[ComputeInterconnectAttachment](#computeinterconnectattachment)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ComputeInterconnectAttachmentSpec](#computeinterconnectattachmentspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[ComputeInterconnectAttachmentStatus](#computeinterconnectattachmentstatus)

---
