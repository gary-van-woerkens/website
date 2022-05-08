---
title: ComputeURLMap
menu:
  docs_v2022.05.11:
    identifier: computeurlmap-google.kubeform.com
    name: ComputeURLMap
    parent: google.kubeform.com-reference
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

## ComputeURLMap
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `google.kubeform.com/v1alpha1` |
|    `kind` | string | `ComputeURLMap` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-22.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ComputeURLMapSpec](#computeurlmapspec)***||
| `status` | ***[ComputeURLMapStatus](#computeurlmapstatus)***||
## ComputeURLMapSpec

Appears on:[ComputeURLMap](#computeurlmap), [ComputeURLMapStatus](#computeurlmapstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-22.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `creationTimestamp` | ***string***| ***(Optional)*** |
| `defaultService` | ***string***||
| `description` | ***string***| ***(Optional)*** |
| `fingerprint` | ***string***| ***(Optional)*** |
| `hostRule` | ***[[]ComputeURLMapSpecHostRule](#computeurlmapspechostrule)***| ***(Optional)*** |
| `mapID` | ***int64***| ***(Optional)*** |
| `name` | ***string***||
| `pathMatcher` | ***[[]ComputeURLMapSpecPathMatcher](#computeurlmapspecpathmatcher)***| ***(Optional)*** |
| `project` | ***string***| ***(Optional)*** |
| `selfLink` | ***string***| ***(Optional)*** |
| `test` | ***[[]ComputeURLMapSpecTest](#computeurlmapspectest)***| ***(Optional)*** |
## ComputeURLMapSpecHostRule

Appears on:[ComputeURLMapSpec](#computeurlmapspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `description` | ***string***| ***(Optional)*** |
| `hosts` | ***[]string***||
| `pathMatcher` | ***string***||
## ComputeURLMapSpecPathMatcher

Appears on:[ComputeURLMapSpec](#computeurlmapspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `defaultService` | ***string***||
| `description` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `pathRule` | ***[[]ComputeURLMapSpecPathMatcherPathRule](#computeurlmapspecpathmatcherpathrule)***| ***(Optional)*** |
## ComputeURLMapSpecPathMatcherPathRule

Appears on:[ComputeURLMapSpecPathMatcher](#computeurlmapspecpathmatcher)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `paths` | ***[]string***||
| `service` | ***string***||
## ComputeURLMapSpecTest

Appears on:[ComputeURLMapSpec](#computeurlmapspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `description` | ***string***| ***(Optional)*** |
| `host` | ***string***||
| `path` | ***string***||
| `service` | ***string***||
## ComputeURLMapStatus

Appears on:[ComputeURLMap](#computeurlmap)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ComputeURLMapSpec](#computeurlmapspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[ComputeURLMapStatus](#computeurlmapstatus)

---
