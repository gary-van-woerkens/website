---
title: ApiGatewayStage
menu:
  docs_v2022.05.11:
    identifier: apigatewaystage-aws.kubeform.com
    name: ApiGatewayStage
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

## ApiGatewayStage
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `ApiGatewayStage` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-22.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ApiGatewayStageSpec](#apigatewaystagespec)***||
| `status` | ***[ApiGatewayStageStatus](#apigatewaystagestatus)***||
## ApiGatewayStageSpec

Appears on:[ApiGatewayStage](#apigatewaystage), [ApiGatewayStageStatus](#apigatewaystagestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-22.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `accessLogSettings` | ***[[]ApiGatewayStageSpecAccessLogSettings](#apigatewaystagespecaccesslogsettings)***| ***(Optional)*** |
| `cacheClusterEnabled` | ***bool***| ***(Optional)*** |
| `cacheClusterSize` | ***string***| ***(Optional)*** |
| `clientCertificateID` | ***string***| ***(Optional)*** |
| `deploymentID` | ***string***||
| `description` | ***string***| ***(Optional)*** |
| `documentationVersion` | ***string***| ***(Optional)*** |
| `executionArn` | ***string***| ***(Optional)*** |
| `invokeURL` | ***string***| ***(Optional)*** |
| `restAPIID` | ***string***||
| `stageName` | ***string***||
| `tags` | ***map[string]string***| ***(Optional)*** |
| `variables` | ***map[string]string***| ***(Optional)*** |
| `xrayTracingEnabled` | ***bool***| ***(Optional)*** |
## ApiGatewayStageSpecAccessLogSettings

Appears on:[ApiGatewayStageSpec](#apigatewaystagespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `destinationArn` | ***string***||
| `format` | ***string***||
## ApiGatewayStageStatus

Appears on:[ApiGatewayStage](#apigatewaystage)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ApiGatewayStageSpec](#apigatewaystagespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[ApiGatewayStageStatus](#apigatewaystagestatus)

---
