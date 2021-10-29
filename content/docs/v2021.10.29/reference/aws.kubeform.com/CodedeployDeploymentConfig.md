---
title: CodedeployDeploymentConfig
menu:
  docs_v2021.10.29:
    identifier: codedeploydeploymentconfig-aws.kubeform.com
    name: CodedeployDeploymentConfig
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2021.10.29
section_menu_id: reference
info:
  alicloud: v0.4.0
  aws: v0.4.0
  azurerm: v0.4.0
  civo: v0.4.0
  datadog: v0.4.0
  digitalocean: v0.4.0
  dynatrace: v0.4.0
  ec: v0.4.0
  equinixmetal: v0.4.0
  google: v0.4.0
  grafana: v0.4.0
  hcloud: v0.4.0
  ibm: v0.4.0
  installer: v2021.10.29
  linode: v0.4.0
  mongodbatlas: v0.4.0
  newrelic: v0.4.0
  oci: v0.4.0
  ovh: v0.4.0
  pagerduty: v0.4.0
  rediscloud: v0.4.0
  upcloud: v0.4.0
  version: v2021.10.29
  vsphere: v0.4.0
  vultr: v0.4.0
  wavefront: v0.4.0
---

## CodedeployDeploymentConfig
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `CodedeployDeploymentConfig` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[CodedeployDeploymentConfigSpec](#codedeploydeploymentconfigspec)***||
| `status` | ***[CodedeployDeploymentConfigStatus](#codedeploydeploymentconfigstatus)***||
## CodedeployDeploymentConfigSpec

Appears on:[CodedeployDeploymentConfig](#codedeploydeploymentconfig), [CodedeployDeploymentConfigStatus](#codedeploydeploymentconfigstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `computePlatform` | ***string***| ***(Optional)*** |
| `deploymentConfigID` | ***string***| ***(Optional)*** |
| `deploymentConfigName` | ***string***||
| `minimumHealthyHosts` | ***[[]CodedeployDeploymentConfigSpecMinimumHealthyHosts](#codedeploydeploymentconfigspecminimumhealthyhosts)***| ***(Optional)*** |
| `trafficRoutingConfig` | ***[[]CodedeployDeploymentConfigSpecTrafficRoutingConfig](#codedeploydeploymentconfigspectrafficroutingconfig)***| ***(Optional)*** |
## CodedeployDeploymentConfigSpecMinimumHealthyHosts

Appears on:[CodedeployDeploymentConfigSpec](#codedeploydeploymentconfigspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `type` | ***string***| ***(Optional)*** |
| `value` | ***int64***| ***(Optional)*** |
## CodedeployDeploymentConfigSpecTrafficRoutingConfig

Appears on:[CodedeployDeploymentConfigSpec](#codedeploydeploymentconfigspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `timeBasedCanary` | ***[[]CodedeployDeploymentConfigSpecTrafficRoutingConfigTimeBasedCanary](#codedeploydeploymentconfigspectrafficroutingconfigtimebasedcanary)***| ***(Optional)*** |
| `timeBasedLinear` | ***[[]CodedeployDeploymentConfigSpecTrafficRoutingConfigTimeBasedLinear](#codedeploydeploymentconfigspectrafficroutingconfigtimebasedlinear)***| ***(Optional)*** |
| `type` | ***string***| ***(Optional)*** |
## CodedeployDeploymentConfigSpecTrafficRoutingConfigTimeBasedCanary

Appears on:[CodedeployDeploymentConfigSpecTrafficRoutingConfig](#codedeploydeploymentconfigspectrafficroutingconfig)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `interval` | ***int64***| ***(Optional)*** |
| `percentage` | ***int64***| ***(Optional)*** |
## CodedeployDeploymentConfigSpecTrafficRoutingConfigTimeBasedLinear

Appears on:[CodedeployDeploymentConfigSpecTrafficRoutingConfig](#codedeploydeploymentconfigspectrafficroutingconfig)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `interval` | ***int64***| ***(Optional)*** |
| `percentage` | ***int64***| ***(Optional)*** |
## CodedeployDeploymentConfigStatus

Appears on:[CodedeployDeploymentConfig](#codedeploydeploymentconfig)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[CodedeployDeploymentConfigSpec](#codedeploydeploymentconfigspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[CodedeployDeploymentConfigStatus](#codedeploydeploymentconfigstatus)

---
