---
title: LightsailInstance
menu:
  docs_v2022.05.11:
    identifier: lightsailinstance-aws.kubeform.com
    name: LightsailInstance
    parent: aws.kubeform.com-reference
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

## LightsailInstance
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `LightsailInstance` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-22.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[LightsailInstanceSpec](#lightsailinstancespec)***||
| `status` | ***[LightsailInstanceStatus](#lightsailinstancestatus)***||
## LightsailInstanceSpec

Appears on:[LightsailInstance](#lightsailinstance), [LightsailInstanceStatus](#lightsailinstancestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-22.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `arn` | ***string***| ***(Optional)*** |
| `availabilityZone` | ***string***||
| `blueprintID` | ***string***||
| `bundleID` | ***string***||
| `cpuCount` | ***int64***| ***(Optional)*** |
| `createdAt` | ***string***| ***(Optional)*** |
| `ipv6Address` | ***string***| ***(Optional)*** |
| `isStaticIP` | ***bool***| ***(Optional)*** |
| `keyPairName` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `privateIPAddress` | ***string***| ***(Optional)*** |
| `publicIPAddress` | ***string***| ***(Optional)*** |
| `ramSize` | ***int64***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
| `userData` | ***string***| ***(Optional)*** |
| `username` | ***string***| ***(Optional)*** |
## LightsailInstanceStatus

Appears on:[LightsailInstance](#lightsailinstance)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[LightsailInstanceSpec](#lightsailinstancespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[LightsailInstanceStatus](#lightsailinstancestatus)

---
