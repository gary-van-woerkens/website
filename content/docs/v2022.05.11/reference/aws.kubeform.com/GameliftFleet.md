---
title: GameliftFleet
menu:
  docs_v2022.05.11:
    identifier: gameliftfleet-aws.kubeform.com
    name: GameliftFleet
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

## GameliftFleet
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `GameliftFleet` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-22.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[GameliftFleetSpec](#gameliftfleetspec)***||
| `status` | ***[GameliftFleetStatus](#gameliftfleetstatus)***||
## GameliftFleetSpec

Appears on:[GameliftFleet](#gameliftfleet), [GameliftFleetStatus](#gameliftfleetstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-22.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `arn` | ***string***| ***(Optional)*** |
| `buildID` | ***string***||
| `description` | ***string***| ***(Optional)*** |
| `ec2InboundPermission` | ***[[]GameliftFleetSpecEc2InboundPermission](#gameliftfleetspecec2inboundpermission)***| ***(Optional)*** |
| `ec2InstanceType` | ***string***||
| `logPaths` | ***[]string***| ***(Optional)*** |
| `metricGroups` | ***[]string***| ***(Optional)*** |
| `name` | ***string***||
| `newGameSessionProtectionPolicy` | ***string***| ***(Optional)*** |
| `operatingSystem` | ***string***| ***(Optional)*** |
| `resourceCreationLimitPolicy` | ***[[]GameliftFleetSpecResourceCreationLimitPolicy](#gameliftfleetspecresourcecreationlimitpolicy)***| ***(Optional)*** |
| `runtimeConfiguration` | ***[[]GameliftFleetSpecRuntimeConfiguration](#gameliftfleetspecruntimeconfiguration)***| ***(Optional)*** |
## GameliftFleetSpecEc2InboundPermission

Appears on:[GameliftFleetSpec](#gameliftfleetspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `fromPort` | ***int64***||
| `ipRange` | ***string***||
| `protocol` | ***string***||
| `toPort` | ***int64***||
## GameliftFleetSpecResourceCreationLimitPolicy

Appears on:[GameliftFleetSpec](#gameliftfleetspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `newGameSessionsPerCreator` | ***int64***| ***(Optional)*** |
| `policyPeriodInMinutes` | ***int64***| ***(Optional)*** |
## GameliftFleetSpecRuntimeConfiguration

Appears on:[GameliftFleetSpec](#gameliftfleetspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `gameSessionActivationTimeoutSeconds` | ***int64***| ***(Optional)*** |
| `maxConcurrentGameSessionActivations` | ***int64***| ***(Optional)*** |
| `serverProcess` | ***[[]GameliftFleetSpecRuntimeConfigurationServerProcess](#gameliftfleetspecruntimeconfigurationserverprocess)***| ***(Optional)*** |
## GameliftFleetSpecRuntimeConfigurationServerProcess

Appears on:[GameliftFleetSpecRuntimeConfiguration](#gameliftfleetspecruntimeconfiguration)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `concurrentExecutions` | ***int64***||
| `launchPath` | ***string***||
| `parameters` | ***string***| ***(Optional)*** |
## GameliftFleetStatus

Appears on:[GameliftFleet](#gameliftfleet)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[GameliftFleetSpec](#gameliftfleetspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[GameliftFleetStatus](#gameliftfleetstatus)

---
