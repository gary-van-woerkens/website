---
title: CloudwatchEventTarget
menu:
  docs_v2022.05.11:
    identifier: cloudwatcheventtarget-aws.kubeform.com
    name: CloudwatchEventTarget
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

## CloudwatchEventTarget
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `CloudwatchEventTarget` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-22.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[CloudwatchEventTargetSpec](#cloudwatcheventtargetspec)***||
| `status` | ***[CloudwatchEventTargetStatus](#cloudwatcheventtargetstatus)***||
## CloudwatchEventTargetSpec

Appears on:[CloudwatchEventTarget](#cloudwatcheventtarget), [CloudwatchEventTargetStatus](#cloudwatcheventtargetstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-22.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `arn` | ***string***||
| `batchTarget` | ***[[]CloudwatchEventTargetSpecBatchTarget](#cloudwatcheventtargetspecbatchtarget)***| ***(Optional)*** |
| `ecsTarget` | ***[[]CloudwatchEventTargetSpecEcsTarget](#cloudwatcheventtargetspececstarget)***| ***(Optional)*** |
| `input` | ***string***| ***(Optional)*** |
| `inputPath` | ***string***| ***(Optional)*** |
| `inputTransformer` | ***[[]CloudwatchEventTargetSpecInputTransformer](#cloudwatcheventtargetspecinputtransformer)***| ***(Optional)*** |
| `kinesisTarget` | ***[[]CloudwatchEventTargetSpecKinesisTarget](#cloudwatcheventtargetspeckinesistarget)***| ***(Optional)*** |
| `roleArn` | ***string***| ***(Optional)*** |
| `rule` | ***string***||
| `runCommandTargets` | ***[[]CloudwatchEventTargetSpecRunCommandTargets](#cloudwatcheventtargetspecruncommandtargets)***| ***(Optional)*** |
| `sqsTarget` | ***[[]CloudwatchEventTargetSpecSqsTarget](#cloudwatcheventtargetspecsqstarget)***| ***(Optional)*** |
| `targetID` | ***string***| ***(Optional)*** |
## CloudwatchEventTargetSpecBatchTarget

Appears on:[CloudwatchEventTargetSpec](#cloudwatcheventtargetspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `arraySize` | ***int64***| ***(Optional)*** |
| `jobAttempts` | ***int64***| ***(Optional)*** |
| `jobDefinition` | ***string***||
| `jobName` | ***string***||
## CloudwatchEventTargetSpecEcsTarget

Appears on:[CloudwatchEventTargetSpec](#cloudwatcheventtargetspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `group` | ***string***| ***(Optional)*** |
| `launchType` | ***string***| ***(Optional)*** |
| `networkConfiguration` | ***[[]CloudwatchEventTargetSpecEcsTargetNetworkConfiguration](#cloudwatcheventtargetspececstargetnetworkconfiguration)***| ***(Optional)*** |
| `platformVersion` | ***string***| ***(Optional)*** |
| `taskCount` | ***int64***| ***(Optional)*** |
| `taskDefinitionArn` | ***string***||
## CloudwatchEventTargetSpecEcsTargetNetworkConfiguration

Appears on:[CloudwatchEventTargetSpecEcsTarget](#cloudwatcheventtargetspececstarget)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `assignPublicIP` | ***bool***| ***(Optional)*** |
| `securityGroups` | ***[]string***| ***(Optional)*** |
| `subnets` | ***[]string***||
## CloudwatchEventTargetSpecInputTransformer

Appears on:[CloudwatchEventTargetSpec](#cloudwatcheventtargetspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `inputPaths` | ***map[string]string***| ***(Optional)*** |
| `inputTemplate` | ***string***||
## CloudwatchEventTargetSpecKinesisTarget

Appears on:[CloudwatchEventTargetSpec](#cloudwatcheventtargetspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `partitionKeyPath` | ***string***| ***(Optional)*** |
## CloudwatchEventTargetSpecRunCommandTargets

Appears on:[CloudwatchEventTargetSpec](#cloudwatcheventtargetspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `key` | ***string***||
| `values` | ***[]string***||
## CloudwatchEventTargetSpecSqsTarget

Appears on:[CloudwatchEventTargetSpec](#cloudwatcheventtargetspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `messageGroupID` | ***string***| ***(Optional)*** |
## CloudwatchEventTargetStatus

Appears on:[CloudwatchEventTarget](#cloudwatcheventtarget)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[CloudwatchEventTargetSpec](#cloudwatcheventtargetspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[CloudwatchEventTargetStatus](#cloudwatcheventtargetstatus)

---
