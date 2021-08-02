---
title: Route53Zone
menu:
  docs_v2021.08.02:
    identifier: route53zone-aws.kubeform.com
    name: Route53Zone
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

## Route53Zone
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `Route53Zone` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[Route53ZoneSpec](#route53zonespec)***||
| `status` | ***[Route53ZoneStatus](#route53zonestatus)***||
## Phase(`string` alias)

Appears on:[Route53ZoneStatus](#route53zonestatus)

## Route53ZoneSpec

Appears on:[Route53Zone](#route53zone), [Route53ZoneStatus](#route53zonestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `comment` | ***string***| ***(Optional)*** |
| `delegationSetID` | ***string***| ***(Optional)*** |
| `forceDestroy` | ***bool***| ***(Optional)*** |
| `name` | ***string***||
| `nameServers` | ***[]string***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
| `vpc` | ***[[]Route53ZoneSpecVpc](#route53zonespecvpc)***| ***(Optional)*** |
| `zoneID` | ***string***| ***(Optional)*** |
## Route53ZoneSpecVpc

Appears on:[Route53ZoneSpec](#route53zonespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `vpcID` | ***string***||
| `vpcRegion` | ***string***| ***(Optional)*** |
## Route53ZoneStatus

Appears on:[Route53Zone](#route53zone)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[Route53ZoneSpec](#route53zonespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
