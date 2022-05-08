---
title: Vpc
menu:
  docs_v2022.05.11:
    identifier: vpc-digitalocean.kubeform.com
    name: Vpc
    parent: digitalocean.kubeform.com-reference
    weight: 1
menu_name: docs_v2022.05.11
section_menu_id: reference
info:
  alicloud: v0.5.0
  aws: v0.5.0
  azurerm: v0.5.0
  civo: v0.5.0
  cli: v0.2.0
  datadog: v0.5.0
  digitalocean: v0.5.0
  dynatrace: v0.5.0
  ec: v0.5.0
  equinixmetal: v0.5.0
  google: v0.5.0
  grafana: v0.5.0
  hcloud: v0.5.0
  ibm: v0.5.0
  installer: v2022.05.11
  linode: v0.5.0
  module: v0.1.0
  mongodbatlas: v0.5.0
  newrelic: v0.5.0
  oci: v0.5.0
  ovh: v0.5.0
  pagerduty: v0.5.0
  rediscloud: v0.5.0
  upcloud: v0.5.0
  version: v2022.05.11
  vsphere: v0.5.0
  vultr: v0.5.0
  wavefront: v0.5.0
---

## Vpc
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `digitalocean.kubeform.com/v1alpha1` |
|    `kind` | string | `Vpc` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-22.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[VpcSpec](#vpcspec)***||
| `status` | ***[VpcStatus](#vpcstatus)***||
## Phase(`string` alias)

Appears on:[VpcStatus](#vpcstatus)

## VpcSpec

Appears on:[Vpc](#vpc), [VpcStatus](#vpcstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-22.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `createdAt` | ***string***| ***(Optional)*** The date and time of when the VPC was created|
| `default` | ***bool***| ***(Optional)*** Whether or not the VPC is the default one for the region|
| `description` | ***string***| ***(Optional)*** A free-form description for the VPC|
| `ipRange` | ***string***| ***(Optional)*** The range of IP addresses for the VPC in CIDR notation|
| `name` | ***string***|The name of the VPC|
| `region` | ***string***|DigitalOcean region slug for the VPC's location|
| `urn` | ***string***| ***(Optional)*** The uniform resource name (URN) for the VPC|
## VpcStatus

Appears on:[Vpc](#vpc)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[VpcSpec](#vpcspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
