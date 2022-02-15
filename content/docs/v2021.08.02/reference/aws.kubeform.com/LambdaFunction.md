---
title: LambdaFunction
menu:
  docs_v2021.08.02:
    identifier: lambdafunction-aws.kubeform.com
    name: LambdaFunction
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

## LambdaFunction
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `LambdaFunction` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[LambdaFunctionSpec](#lambdafunctionspec)***||
| `status` | ***[LambdaFunctionStatus](#lambdafunctionstatus)***||
## LambdaFunctionSpec

Appears on:[LambdaFunction](#lambdafunction), [LambdaFunctionStatus](#lambdafunctionstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `arn` | ***string***| ***(Optional)*** |
| `deadLetterConfig` | ***[[]LambdaFunctionSpecDeadLetterConfig](#lambdafunctionspecdeadletterconfig)***| ***(Optional)*** |
| `description` | ***string***| ***(Optional)*** |
| `environment` | ***[[]LambdaFunctionSpecEnvironment](#lambdafunctionspecenvironment)***| ***(Optional)*** |
| `filename` | ***string***| ***(Optional)*** |
| `functionName` | ***string***||
| `handler` | ***string***||
| `invokeArn` | ***string***| ***(Optional)*** |
| `kmsKeyArn` | ***string***| ***(Optional)*** |
| `lastModified` | ***string***| ***(Optional)*** |
| `layers` | ***[]string***| ***(Optional)*** |
| `memorySize` | ***int64***| ***(Optional)*** |
| `publish` | ***bool***| ***(Optional)*** |
| `qualifiedArn` | ***string***| ***(Optional)*** |
| `reservedConcurrentExecutions` | ***int64***| ***(Optional)*** |
| `role` | ***string***||
| `runtime` | ***string***||
| `s3Bucket` | ***string***| ***(Optional)*** |
| `s3Key` | ***string***| ***(Optional)*** |
| `s3ObjectVersion` | ***string***| ***(Optional)*** |
| `sourceCodeHash` | ***string***| ***(Optional)*** |
| `sourceCodeSize` | ***int64***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
| `timeout` | ***int64***| ***(Optional)*** |
| `tracingConfig` | ***[[]LambdaFunctionSpecTracingConfig](#lambdafunctionspectracingconfig)***| ***(Optional)*** |
| `version` | ***string***| ***(Optional)*** |
| `vpcConfig` | ***[[]LambdaFunctionSpecVpcConfig](#lambdafunctionspecvpcconfig)***| ***(Optional)*** |
## LambdaFunctionSpecDeadLetterConfig

Appears on:[LambdaFunctionSpec](#lambdafunctionspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `targetArn` | ***string***||
## LambdaFunctionSpecEnvironment

Appears on:[LambdaFunctionSpec](#lambdafunctionspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `variables` | ***map[string]string***| ***(Optional)*** |
## LambdaFunctionSpecTracingConfig

Appears on:[LambdaFunctionSpec](#lambdafunctionspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `mode` | ***string***||
## LambdaFunctionSpecVpcConfig

Appears on:[LambdaFunctionSpec](#lambdafunctionspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `securityGroupIDS` | ***[]string***||
| `subnetIDS` | ***[]string***||
| `vpcID` | ***string***| ***(Optional)*** |
## LambdaFunctionStatus

Appears on:[LambdaFunction](#lambdafunction)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[LambdaFunctionSpec](#lambdafunctionspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[LambdaFunctionStatus](#lambdafunctionstatus)

---