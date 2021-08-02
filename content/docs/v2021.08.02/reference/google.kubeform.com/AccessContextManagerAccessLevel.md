---
title: AccessContextManagerAccessLevel
menu:
  docs_v2021.08.02:
    identifier: accesscontextmanageraccesslevel-google.kubeform.com
    name: AccessContextManagerAccessLevel
    parent: google.kubeform.com-reference
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

## AccessContextManagerAccessLevel
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `google.kubeform.com/v1alpha1` |
|    `kind` | string | `AccessContextManagerAccessLevel` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[AccessContextManagerAccessLevelSpec](#accesscontextmanageraccesslevelspec)***||
| `status` | ***[AccessContextManagerAccessLevelStatus](#accesscontextmanageraccesslevelstatus)***||
## AccessContextManagerAccessLevelSpec

Appears on:[AccessContextManagerAccessLevel](#accesscontextmanageraccesslevel), [AccessContextManagerAccessLevelStatus](#accesscontextmanageraccesslevelstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `basic` | ***[[]AccessContextManagerAccessLevelSpecBasic](#accesscontextmanageraccesslevelspecbasic)***| ***(Optional)*** |
| `description` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `parent` | ***string***||
| `title` | ***string***||
## AccessContextManagerAccessLevelSpecBasic

Appears on:[AccessContextManagerAccessLevelSpec](#accesscontextmanageraccesslevelspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `combiningFunction` | ***string***| ***(Optional)*** |
| `conditions` | ***[[]AccessContextManagerAccessLevelSpecBasicConditions](#accesscontextmanageraccesslevelspecbasicconditions)***||
## AccessContextManagerAccessLevelSpecBasicConditions

Appears on:[AccessContextManagerAccessLevelSpecBasic](#accesscontextmanageraccesslevelspecbasic)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `devicePolicy` | ***[[]AccessContextManagerAccessLevelSpecBasicConditionsDevicePolicy](#accesscontextmanageraccesslevelspecbasicconditionsdevicepolicy)***| ***(Optional)*** |
| `ipSubnetworks` | ***[]string***| ***(Optional)*** |
| `members` | ***[]string***| ***(Optional)*** |
| `negate` | ***bool***| ***(Optional)*** |
| `requiredAccessLevels` | ***[]string***| ***(Optional)*** |
## AccessContextManagerAccessLevelSpecBasicConditionsDevicePolicy

Appears on:[AccessContextManagerAccessLevelSpecBasicConditions](#accesscontextmanageraccesslevelspecbasicconditions)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `allowedDeviceManagementLevels` | ***[]string***| ***(Optional)*** |
| `allowedEncryptionStatuses` | ***[]string***| ***(Optional)*** |
| `osConstraints` | ***[[]AccessContextManagerAccessLevelSpecBasicConditionsDevicePolicyOsConstraints](#accesscontextmanageraccesslevelspecbasicconditionsdevicepolicyosconstraints)***| ***(Optional)*** |
| `requireScreenLock` | ***bool***| ***(Optional)*** |
## AccessContextManagerAccessLevelSpecBasicConditionsDevicePolicyOsConstraints

Appears on:[AccessContextManagerAccessLevelSpecBasicConditionsDevicePolicy](#accesscontextmanageraccesslevelspecbasicconditionsdevicepolicy)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `minimumVersion` | ***string***| ***(Optional)*** |
| `osType` | ***string***| ***(Optional)*** |
## AccessContextManagerAccessLevelStatus

Appears on:[AccessContextManagerAccessLevel](#accesscontextmanageraccesslevel)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[AccessContextManagerAccessLevelSpec](#accesscontextmanageraccesslevelspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[AccessContextManagerAccessLevelStatus](#accesscontextmanageraccesslevelstatus)

---
