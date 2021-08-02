---
title: Elb
menu:
  docs_v2021.08.02:
    identifier: elb-aws.kubeform.com
    name: Elb
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

## Elb
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `Elb` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ElbSpec](#elbspec)***||
| `status` | ***[ElbStatus](#elbstatus)***||
## ElbSpec

Appears on:[Elb](#elb), [ElbStatus](#elbstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `accessLogs` | ***[[]ElbSpecAccessLogs](#elbspecaccesslogs)***| ***(Optional)*** |
| `arn` | ***string***| ***(Optional)*** |
| `availabilityZones` | ***[]string***| ***(Optional)*** |
| `connectionDraining` | ***bool***| ***(Optional)*** |
| `connectionDrainingTimeout` | ***int64***| ***(Optional)*** |
| `crossZoneLoadBalancing` | ***bool***| ***(Optional)*** |
| `dnsName` | ***string***| ***(Optional)*** |
| `healthCheck` | ***[[]ElbSpecHealthCheck](#elbspechealthcheck)***| ***(Optional)*** |
| `idleTimeout` | ***int64***| ***(Optional)*** |
| `instances` | ***[]string***| ***(Optional)*** |
| `internal` | ***bool***| ***(Optional)*** |
| `listener` | ***[[]ElbSpecListener](#elbspeclistener)***||
| `name` | ***string***| ***(Optional)*** |
| `namePrefix` | ***string***| ***(Optional)*** |
| `securityGroups` | ***[]string***| ***(Optional)*** |
| `sourceSecurityGroup` | ***string***| ***(Optional)*** |
| `sourceSecurityGroupID` | ***string***| ***(Optional)*** |
| `subnets` | ***[]string***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
| `zoneID` | ***string***| ***(Optional)*** |
## ElbSpecAccessLogs

Appears on:[ElbSpec](#elbspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `bucket` | ***string***||
| `bucketPrefix` | ***string***| ***(Optional)*** |
| `enabled` | ***bool***| ***(Optional)*** |
| `interval` | ***int64***| ***(Optional)*** |
## ElbSpecHealthCheck

Appears on:[ElbSpec](#elbspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `healthyThreshold` | ***int64***||
| `interval` | ***int64***||
| `target` | ***string***||
| `timeout` | ***int64***||
| `unhealthyThreshold` | ***int64***||
## ElbSpecListener

Appears on:[ElbSpec](#elbspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `instancePort` | ***int64***||
| `instanceProtocol` | ***string***||
| `lbPort` | ***int64***||
| `lbProtocol` | ***string***||
| `sslCertificateID` | ***string***| ***(Optional)*** |
## ElbStatus

Appears on:[Elb](#elb)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ElbSpec](#elbspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[ElbStatus](#elbstatus)

---
