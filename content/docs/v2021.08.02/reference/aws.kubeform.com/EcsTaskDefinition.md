---
title: EcsTaskDefinition
menu:
  docs_v2021.08.02:
    identifier: ecstaskdefinition-aws.kubeform.com
    name: EcsTaskDefinition
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

## EcsTaskDefinition
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `EcsTaskDefinition` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[EcsTaskDefinitionSpec](#ecstaskdefinitionspec)***||
| `status` | ***[EcsTaskDefinitionStatus](#ecstaskdefinitionstatus)***||
## EcsTaskDefinitionSpec

Appears on:[EcsTaskDefinition](#ecstaskdefinition), [EcsTaskDefinitionStatus](#ecstaskdefinitionstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `arn` | ***string***| ***(Optional)*** |
| `containerDefinitions` | ***string***||
| `cpu` | ***string***| ***(Optional)*** |
| `executionRoleArn` | ***string***| ***(Optional)*** |
| `family` | ***string***||
| `ipcMode` | ***string***| ***(Optional)*** |
| `memory` | ***string***| ***(Optional)*** |
| `networkMode` | ***string***| ***(Optional)*** |
| `pidMode` | ***string***| ***(Optional)*** |
| `placementConstraints` | ***[[]EcsTaskDefinitionSpecPlacementConstraints](#ecstaskdefinitionspecplacementconstraints)***| ***(Optional)*** |
| `proxyConfiguration` | ***[[]EcsTaskDefinitionSpecProxyConfiguration](#ecstaskdefinitionspecproxyconfiguration)***| ***(Optional)*** |
| `requiresCompatibilities` | ***[]string***| ***(Optional)*** |
| `revision` | ***int64***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
| `taskRoleArn` | ***string***| ***(Optional)*** |
| `volume` | ***[[]EcsTaskDefinitionSpecVolume](#ecstaskdefinitionspecvolume)***| ***(Optional)*** |
## EcsTaskDefinitionSpecPlacementConstraints

Appears on:[EcsTaskDefinitionSpec](#ecstaskdefinitionspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `expression` | ***string***| ***(Optional)*** |
| `type` | ***string***||
## EcsTaskDefinitionSpecProxyConfiguration

Appears on:[EcsTaskDefinitionSpec](#ecstaskdefinitionspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `containerName` | ***string***||
| `properties` | ***map[string]string***| ***(Optional)*** |
| `type` | ***string***| ***(Optional)*** |
## EcsTaskDefinitionSpecVolume

Appears on:[EcsTaskDefinitionSpec](#ecstaskdefinitionspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `dockerVolumeConfiguration` | ***[[]EcsTaskDefinitionSpecVolumeDockerVolumeConfiguration](#ecstaskdefinitionspecvolumedockervolumeconfiguration)***| ***(Optional)*** |
| `hostPath` | ***string***| ***(Optional)*** |
| `name` | ***string***||
## EcsTaskDefinitionSpecVolumeDockerVolumeConfiguration

Appears on:[EcsTaskDefinitionSpecVolume](#ecstaskdefinitionspecvolume)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `autoprovision` | ***bool***| ***(Optional)*** |
| `driver` | ***string***| ***(Optional)*** |
| `driverOpts` | ***map[string]string***| ***(Optional)*** |
| `labels` | ***map[string]string***| ***(Optional)*** |
| `scope` | ***string***| ***(Optional)*** |
## EcsTaskDefinitionStatus

Appears on:[EcsTaskDefinition](#ecstaskdefinition)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[EcsTaskDefinitionSpec](#ecstaskdefinitionspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[EcsTaskDefinitionStatus](#ecstaskdefinitionstatus)

---
