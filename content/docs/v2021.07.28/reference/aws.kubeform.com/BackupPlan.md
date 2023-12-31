---
title: BackupPlan
menu:
  docs_v2021.07.28:
    identifier: backupplan-aws.kubeform.com
    name: BackupPlan
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

## BackupPlan
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `BackupPlan` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[BackupPlanSpec](#backupplanspec)***||
| `status` | ***[BackupPlanStatus](#backupplanstatus)***||
## BackupPlanSpec

Appears on:[BackupPlan](#backupplan), [BackupPlanStatus](#backupplanstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `arn` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `rule` | ***[[]BackupPlanSpecRule](#backupplanspecrule)***||
| `tags` | ***map[string]string***| ***(Optional)*** |
| `version` | ***string***| ***(Optional)*** |
## BackupPlanSpecRule

Appears on:[BackupPlanSpec](#backupplanspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `completionWindow` | ***int64***| ***(Optional)*** |
| `lifecycle` | ***[[]BackupPlanSpecRuleLifecycle](#backupplanspecrulelifecycle)***| ***(Optional)*** |
| `recoveryPointTags` | ***map[string]string***| ***(Optional)*** |
| `ruleName` | ***string***||
| `schedule` | ***string***| ***(Optional)*** |
| `startWindow` | ***int64***| ***(Optional)*** |
| `targetVaultName` | ***string***||
## BackupPlanSpecRuleLifecycle

Appears on:[BackupPlanSpecRule](#backupplanspecrule)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `coldStorageAfter` | ***int64***| ***(Optional)*** |
| `deleteAfter` | ***int64***| ***(Optional)*** |
## BackupPlanStatus

Appears on:[BackupPlan](#backupplan)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[BackupPlanSpec](#backupplanspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[BackupPlanStatus](#backupplanstatus)

---
