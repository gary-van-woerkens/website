---
title: WorklinkFleet
menu:
  docs_v2021.07.28:
    identifier: worklinkfleet-aws.kubeform.com
    name: WorklinkFleet
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

## WorklinkFleet
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `WorklinkFleet` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[WorklinkFleetSpec](#worklinkfleetspec)***||
| `status` | ***[WorklinkFleetStatus](#worklinkfleetstatus)***||
## Phase(`string` alias)

Appears on:[WorklinkFleetStatus](#worklinkfleetstatus)

## WorklinkFleetSpec

Appears on:[WorklinkFleet](#worklinkfleet), [WorklinkFleetStatus](#worklinkfleetstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `arn` | ***string***| ***(Optional)*** |
| `auditStreamArn` | ***string***| ***(Optional)*** |
| `companyCode` | ***string***| ***(Optional)*** |
| `createdTime` | ***string***| ***(Optional)*** |
| `deviceCaCertificate` | ***string***| ***(Optional)*** |
| `displayName` | ***string***| ***(Optional)*** |
| `identityProvider` | ***[[]WorklinkFleetSpecIdentityProvider](#worklinkfleetspecidentityprovider)***| ***(Optional)*** |
| `lastUpdatedTime` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `network` | ***[[]WorklinkFleetSpecNetwork](#worklinkfleetspecnetwork)***| ***(Optional)*** |
| `optimizeForEndUserLocation` | ***bool***| ***(Optional)*** |
## WorklinkFleetSpecIdentityProvider

Appears on:[WorklinkFleetSpec](#worklinkfleetspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `samlMetadata` | ***string***||
| `type` | ***string***||
## WorklinkFleetSpecNetwork

Appears on:[WorklinkFleetSpec](#worklinkfleetspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `securityGroupIDS` | ***[]string***||
| `subnetIDS` | ***[]string***||
| `vpcID` | ***string***||
## WorklinkFleetStatus

Appears on:[WorklinkFleet](#worklinkfleet)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[WorklinkFleetSpec](#worklinkfleetspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
