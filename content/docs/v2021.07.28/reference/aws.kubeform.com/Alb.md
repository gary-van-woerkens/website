---
title: Alb
menu:
  docs_v2021.07.28:
    identifier: alb-aws.kubeform.com
    name: Alb
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

## Alb
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `Alb` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[AlbSpec](#albspec)***||
| `status` | ***[AlbStatus](#albstatus)***||
## AlbSpec

Appears on:[Alb](#alb), [AlbStatus](#albstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `accessLogs` | ***[[]AlbSpecAccessLogs](#albspecaccesslogs)***| ***(Optional)*** |
| `arn` | ***string***| ***(Optional)*** |
| `arnSuffix` | ***string***| ***(Optional)*** |
| `dnsName` | ***string***| ***(Optional)*** |
| `enableCrossZoneLoadBalancing` | ***bool***| ***(Optional)*** |
| `enableDeletionProtection` | ***bool***| ***(Optional)*** |
| `enableHttp2` | ***bool***| ***(Optional)*** |
| `idleTimeout` | ***int64***| ***(Optional)*** |
| `internal` | ***bool***| ***(Optional)*** |
| `ipAddressType` | ***string***| ***(Optional)*** |
| `loadBalancerType` | ***string***| ***(Optional)*** |
| `name` | ***string***| ***(Optional)*** |
| `namePrefix` | ***string***| ***(Optional)*** |
| `securityGroups` | ***[]string***| ***(Optional)*** |
| `subnetMapping` | ***[[]AlbSpecSubnetMapping](#albspecsubnetmapping)***| ***(Optional)*** |
| `subnets` | ***[]string***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
| `vpcID` | ***string***| ***(Optional)*** |
| `zoneID` | ***string***| ***(Optional)*** |
## AlbSpecAccessLogs

Appears on:[AlbSpec](#albspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `bucket` | ***string***||
| `enabled` | ***bool***| ***(Optional)*** |
| `prefix` | ***string***| ***(Optional)*** |
## AlbSpecSubnetMapping

Appears on:[AlbSpec](#albspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `allocationID` | ***string***| ***(Optional)*** |
| `subnetID` | ***string***||
## AlbStatus

Appears on:[Alb](#alb)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[AlbSpec](#albspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[AlbStatus](#albstatus)

---
