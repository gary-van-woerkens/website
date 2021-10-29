---
title: StorageManagementPolicy
menu:
  docs_v2021.10.29:
    identifier: storagemanagementpolicy-azurerm.kubeform.com
    name: StorageManagementPolicy
    parent: azurerm.kubeform.com-reference
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

## StorageManagementPolicy
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `StorageManagementPolicy` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[StorageManagementPolicySpec](#storagemanagementpolicyspec)***||
| `status` | ***[StorageManagementPolicyStatus](#storagemanagementpolicystatus)***||
## Phase(`string` alias)

Appears on:[StorageManagementPolicyStatus](#storagemanagementpolicystatus)

## StorageManagementPolicySpec

Appears on:[StorageManagementPolicy](#storagemanagementpolicy), [StorageManagementPolicyStatus](#storagemanagementpolicystatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `rule` | ***[[]StorageManagementPolicySpecRule](#storagemanagementpolicyspecrule)***| ***(Optional)*** |
| `storageAccountID` | ***string***||
## StorageManagementPolicySpecRule

Appears on:[StorageManagementPolicySpec](#storagemanagementpolicyspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `actions` | ***[[]StorageManagementPolicySpecRuleActions](#storagemanagementpolicyspecruleactions)***||
| `enabled` | ***bool***||
| `filters` | ***[[]StorageManagementPolicySpecRuleFilters](#storagemanagementpolicyspecrulefilters)***| ***(Optional)*** |
| `name` | ***string***||
## StorageManagementPolicySpecRuleActions

Appears on:[StorageManagementPolicySpecRule](#storagemanagementpolicyspecrule)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `baseBlob` | ***[[]StorageManagementPolicySpecRuleActionsBaseBlob](#storagemanagementpolicyspecruleactionsbaseblob)***| ***(Optional)*** |
| `snapshot` | ***[[]StorageManagementPolicySpecRuleActionsSnapshot](#storagemanagementpolicyspecruleactionssnapshot)***| ***(Optional)*** |
## StorageManagementPolicySpecRuleActionsBaseBlob

Appears on:[StorageManagementPolicySpecRuleActions](#storagemanagementpolicyspecruleactions)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `deleteAfterDaysSinceModificationGreaterThan` | ***int64***| ***(Optional)*** |
| `tierToArchiveAfterDaysSinceModificationGreaterThan` | ***int64***| ***(Optional)*** |
| `tierToCoolAfterDaysSinceModificationGreaterThan` | ***int64***| ***(Optional)*** |
## StorageManagementPolicySpecRuleActionsSnapshot

Appears on:[StorageManagementPolicySpecRuleActions](#storagemanagementpolicyspecruleactions)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `deleteAfterDaysSinceCreationGreaterThan` | ***int64***| ***(Optional)*** |
## StorageManagementPolicySpecRuleFilters

Appears on:[StorageManagementPolicySpecRule](#storagemanagementpolicyspecrule)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `blobTypes` | ***[]string***| ***(Optional)*** |
| `prefixMatch` | ***[]string***| ***(Optional)*** |
## StorageManagementPolicyStatus

Appears on:[StorageManagementPolicy](#storagemanagementpolicy)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[StorageManagementPolicySpec](#storagemanagementpolicyspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
