---
title: SagemakerNotebookInstance
menu:
  docs_v2021.07.28:
    identifier: sagemakernotebookinstance-aws.kubeform.com
    name: SagemakerNotebookInstance
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

## SagemakerNotebookInstance
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `SagemakerNotebookInstance` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[SagemakerNotebookInstanceSpec](#sagemakernotebookinstancespec)***||
| `status` | ***[SagemakerNotebookInstanceStatus](#sagemakernotebookinstancestatus)***||
## Phase(`string` alias)

Appears on:[SagemakerNotebookInstanceStatus](#sagemakernotebookinstancestatus)

## SagemakerNotebookInstanceSpec

Appears on:[SagemakerNotebookInstance](#sagemakernotebookinstance), [SagemakerNotebookInstanceStatus](#sagemakernotebookinstancestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `arn` | ***string***| ***(Optional)*** |
| `instanceType` | ***string***||
| `kmsKeyID` | ***string***| ***(Optional)*** |
| `lifecycleConfigName` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `roleArn` | ***string***||
| `securityGroups` | ***[]string***| ***(Optional)*** |
| `subnetID` | ***string***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
## SagemakerNotebookInstanceStatus

Appears on:[SagemakerNotebookInstance](#sagemakernotebookinstance)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[SagemakerNotebookInstanceSpec](#sagemakernotebookinstancespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
