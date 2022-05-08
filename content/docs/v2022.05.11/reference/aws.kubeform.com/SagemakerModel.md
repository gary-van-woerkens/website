---
title: SagemakerModel
menu:
  docs_v2022.05.11:
    identifier: sagemakermodel-aws.kubeform.com
    name: SagemakerModel
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

## SagemakerModel
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `SagemakerModel` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-22.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[SagemakerModelSpec](#sagemakermodelspec)***||
| `status` | ***[SagemakerModelStatus](#sagemakermodelstatus)***||
## Phase(`string` alias)

Appears on:[SagemakerModelStatus](#sagemakermodelstatus)

## SagemakerModelSpec

Appears on:[SagemakerModel](#sagemakermodel), [SagemakerModelStatus](#sagemakermodelstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-22.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `arn` | ***string***| ***(Optional)*** |
| `container` | ***[[]SagemakerModelSpecContainer](#sagemakermodelspeccontainer)***| ***(Optional)*** |
| `enableNetworkIsolation` | ***bool***| ***(Optional)*** |
| `executionRoleArn` | ***string***||
| `name` | ***string***| ***(Optional)*** |
| `primaryContainer` | ***[[]SagemakerModelSpecPrimaryContainer](#sagemakermodelspecprimarycontainer)***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
| `vpcConfig` | ***[[]SagemakerModelSpecVpcConfig](#sagemakermodelspecvpcconfig)***| ***(Optional)*** |
## SagemakerModelSpecContainer

Appears on:[SagemakerModelSpec](#sagemakermodelspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `containerHostname` | ***string***| ***(Optional)*** |
| `environment` | ***map[string]string***| ***(Optional)*** |
| `image` | ***string***||
| `modelDataURL` | ***string***| ***(Optional)*** |
## SagemakerModelSpecPrimaryContainer

Appears on:[SagemakerModelSpec](#sagemakermodelspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `containerHostname` | ***string***| ***(Optional)*** |
| `environment` | ***map[string]string***| ***(Optional)*** |
| `image` | ***string***||
| `modelDataURL` | ***string***| ***(Optional)*** |
## SagemakerModelSpecVpcConfig

Appears on:[SagemakerModelSpec](#sagemakermodelspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `securityGroupIDS` | ***[]string***||
| `subnets` | ***[]string***||
## SagemakerModelStatus

Appears on:[SagemakerModel](#sagemakermodel)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[SagemakerModelSpec](#sagemakermodelspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
