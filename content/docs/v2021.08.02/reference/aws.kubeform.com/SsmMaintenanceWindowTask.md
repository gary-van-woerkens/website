---
title: SsmMaintenanceWindowTask
menu:
  docs_v2021.08.02:
    identifier: ssmmaintenancewindowtask-aws.kubeform.com
    name: SsmMaintenanceWindowTask
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

## SsmMaintenanceWindowTask
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `SsmMaintenanceWindowTask` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[SsmMaintenanceWindowTaskSpec](#ssmmaintenancewindowtaskspec)***||
| `status` | ***[SsmMaintenanceWindowTaskStatus](#ssmmaintenancewindowtaskstatus)***||
## Phase(`string` alias)

Appears on:[SsmMaintenanceWindowTaskStatus](#ssmmaintenancewindowtaskstatus)

## SsmMaintenanceWindowTaskSpec

Appears on:[SsmMaintenanceWindowTask](#ssmmaintenancewindowtask), [SsmMaintenanceWindowTaskStatus](#ssmmaintenancewindowtaskstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `secretRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `description` | ***string***| ***(Optional)*** |
| `loggingInfo` | ***[[]SsmMaintenanceWindowTaskSpecLoggingInfo](#ssmmaintenancewindowtaskspeclogginginfo)***| ***(Optional)*** Deprecated|
| `maxConcurrency` | ***string***||
| `maxErrors` | ***string***||
| `name` | ***string***| ***(Optional)*** |
| `priority` | ***int64***| ***(Optional)*** |
| `serviceRoleArn` | ***string***||
| `targets` | ***[[]SsmMaintenanceWindowTaskSpecTargets](#ssmmaintenancewindowtaskspectargets)***||
| `taskArn` | ***string***||
| `taskInvocationParameters` | ***[[]SsmMaintenanceWindowTaskSpecTaskInvocationParameters](#ssmmaintenancewindowtaskspectaskinvocationparameters)***| ***(Optional)*** |
| `taskParameters` | ***[[]SsmMaintenanceWindowTaskSpecTaskParameters](#ssmmaintenancewindowtaskspectaskparameters)***| ***(Optional)*** Deprecated|
| `taskType` | ***string***||
| `windowID` | ***string***||
## SsmMaintenanceWindowTaskSpecLoggingInfo

Appears on:[SsmMaintenanceWindowTaskSpec](#ssmmaintenancewindowtaskspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `s3BucketName` | ***string***||
| `s3BucketPrefix` | ***string***| ***(Optional)*** |
| `s3Region` | ***string***||
## SsmMaintenanceWindowTaskSpecTargets

Appears on:[SsmMaintenanceWindowTaskSpec](#ssmmaintenancewindowtaskspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `key` | ***string***||
| `values` | ***[]string***||
## SsmMaintenanceWindowTaskSpecTaskInvocationParameters

Appears on:[SsmMaintenanceWindowTaskSpec](#ssmmaintenancewindowtaskspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `automationParameters` | ***[[]SsmMaintenanceWindowTaskSpecTaskInvocationParametersAutomationParameters](#ssmmaintenancewindowtaskspectaskinvocationparametersautomationparameters)***| ***(Optional)*** |
| `lambdaParameters` | ***[[]SsmMaintenanceWindowTaskSpecTaskInvocationParametersLambdaParameters](#ssmmaintenancewindowtaskspectaskinvocationparameterslambdaparameters)***| ***(Optional)*** |
| `runCommandParameters` | ***[[]SsmMaintenanceWindowTaskSpecTaskInvocationParametersRunCommandParameters](#ssmmaintenancewindowtaskspectaskinvocationparametersruncommandparameters)***| ***(Optional)*** |
| `stepFunctionsParameters` | ***[[]SsmMaintenanceWindowTaskSpecTaskInvocationParametersStepFunctionsParameters](#ssmmaintenancewindowtaskspectaskinvocationparametersstepfunctionsparameters)***| ***(Optional)*** |
## SsmMaintenanceWindowTaskSpecTaskInvocationParametersAutomationParameters

Appears on:[SsmMaintenanceWindowTaskSpecTaskInvocationParameters](#ssmmaintenancewindowtaskspectaskinvocationparameters)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `documentVersion` | ***string***| ***(Optional)*** |
| `parameter` | ***[[]SsmMaintenanceWindowTaskSpecTaskInvocationParametersAutomationParametersParameter](#ssmmaintenancewindowtaskspectaskinvocationparametersautomationparametersparameter)***| ***(Optional)*** |
## SsmMaintenanceWindowTaskSpecTaskInvocationParametersAutomationParametersParameter

Appears on:[SsmMaintenanceWindowTaskSpecTaskInvocationParametersAutomationParameters](#ssmmaintenancewindowtaskspectaskinvocationparametersautomationparameters)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `name` | ***string***||
| `values` | ***[]string***||
## SsmMaintenanceWindowTaskSpecTaskInvocationParametersLambdaParameters

Appears on:[SsmMaintenanceWindowTaskSpecTaskInvocationParameters](#ssmmaintenancewindowtaskspectaskinvocationparameters)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `clientContext` | ***string***| ***(Optional)*** |
| `qualifier` | ***string***| ***(Optional)*** |
## SsmMaintenanceWindowTaskSpecTaskInvocationParametersRunCommandParameters

Appears on:[SsmMaintenanceWindowTaskSpecTaskInvocationParameters](#ssmmaintenancewindowtaskspectaskinvocationparameters)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `comment` | ***string***| ***(Optional)*** |
| `documentHash` | ***string***| ***(Optional)*** |
| `documentHashType` | ***string***| ***(Optional)*** |
| `notificationConfig` | ***[[]SsmMaintenanceWindowTaskSpecTaskInvocationParametersRunCommandParametersNotificationConfig](#ssmmaintenancewindowtaskspectaskinvocationparametersruncommandparametersnotificationconfig)***| ***(Optional)*** |
| `outputS3Bucket` | ***string***| ***(Optional)*** |
| `outputS3KeyPrefix` | ***string***| ***(Optional)*** |
| `parameter` | ***[[]SsmMaintenanceWindowTaskSpecTaskInvocationParametersRunCommandParametersParameter](#ssmmaintenancewindowtaskspectaskinvocationparametersruncommandparametersparameter)***| ***(Optional)*** |
| `serviceRoleArn` | ***string***| ***(Optional)*** |
| `timeoutSeconds` | ***int64***| ***(Optional)*** |
## SsmMaintenanceWindowTaskSpecTaskInvocationParametersRunCommandParametersNotificationConfig

Appears on:[SsmMaintenanceWindowTaskSpecTaskInvocationParametersRunCommandParameters](#ssmmaintenancewindowtaskspectaskinvocationparametersruncommandparameters)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `notificationArn` | ***string***| ***(Optional)*** |
| `notificationEvents` | ***[]string***| ***(Optional)*** |
| `notificationType` | ***string***| ***(Optional)*** |
## SsmMaintenanceWindowTaskSpecTaskInvocationParametersRunCommandParametersParameter

Appears on:[SsmMaintenanceWindowTaskSpecTaskInvocationParametersRunCommandParameters](#ssmmaintenancewindowtaskspectaskinvocationparametersruncommandparameters)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `name` | ***string***||
| `values` | ***[]string***||
## SsmMaintenanceWindowTaskSpecTaskInvocationParametersStepFunctionsParameters

Appears on:[SsmMaintenanceWindowTaskSpecTaskInvocationParameters](#ssmmaintenancewindowtaskspectaskinvocationparameters)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `name` | ***string***| ***(Optional)*** |
## SsmMaintenanceWindowTaskSpecTaskParameters

Appears on:[SsmMaintenanceWindowTaskSpec](#ssmmaintenancewindowtaskspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `name` | ***string***||
| `values` | ***[]string***||
## SsmMaintenanceWindowTaskStatus

Appears on:[SsmMaintenanceWindowTask](#ssmmaintenancewindowtask)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[SsmMaintenanceWindowTaskSpec](#ssmmaintenancewindowtaskspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
## Sensitive Values
| Name | Type | Description |
|------|------|-------------|
| `task_invocation_parameters.<index>.lambda_parameters.<index>.payload` | ***string*** ||
| `task_invocation_parameters.<index>.step_functions_parameters.<index>.input` | ***string*** ||
