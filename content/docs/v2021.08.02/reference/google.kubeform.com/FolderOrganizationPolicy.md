---
title: FolderOrganizationPolicy
menu:
  docs_v2021.08.02:
    identifier: folderorganizationpolicy-google.kubeform.com
    name: FolderOrganizationPolicy
    parent: google.kubeform.com-reference
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

## FolderOrganizationPolicy
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `google.kubeform.com/v1alpha1` |
|    `kind` | string | `FolderOrganizationPolicy` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[FolderOrganizationPolicySpec](#folderorganizationpolicyspec)***||
| `status` | ***[FolderOrganizationPolicyStatus](#folderorganizationpolicystatus)***||
## FolderOrganizationPolicySpec

Appears on:[FolderOrganizationPolicy](#folderorganizationpolicy), [FolderOrganizationPolicyStatus](#folderorganizationpolicystatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `booleanPolicy` | ***[[]FolderOrganizationPolicySpecBooleanPolicy](#folderorganizationpolicyspecbooleanpolicy)***| ***(Optional)*** |
| `constraint` | ***string***||
| `etag` | ***string***| ***(Optional)*** |
| `folder` | ***string***||
| `listPolicy` | ***[[]FolderOrganizationPolicySpecListPolicy](#folderorganizationpolicyspeclistpolicy)***| ***(Optional)*** |
| `restorePolicy` | ***[[]FolderOrganizationPolicySpecRestorePolicy](#folderorganizationpolicyspecrestorepolicy)***| ***(Optional)*** |
| `updateTime` | ***string***| ***(Optional)*** |
| `version` | ***int64***| ***(Optional)*** |
## FolderOrganizationPolicySpecBooleanPolicy

Appears on:[FolderOrganizationPolicySpec](#folderorganizationpolicyspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `enforced` | ***bool***||
## FolderOrganizationPolicySpecListPolicy

Appears on:[FolderOrganizationPolicySpec](#folderorganizationpolicyspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `allow` | ***[[]FolderOrganizationPolicySpecListPolicyAllow](#folderorganizationpolicyspeclistpolicyallow)***| ***(Optional)*** |
| `deny` | ***[[]FolderOrganizationPolicySpecListPolicyDeny](#folderorganizationpolicyspeclistpolicydeny)***| ***(Optional)*** |
| `inheritFromParent` | ***bool***| ***(Optional)*** |
| `suggestedValue` | ***string***| ***(Optional)*** |
## FolderOrganizationPolicySpecListPolicyAllow

Appears on:[FolderOrganizationPolicySpecListPolicy](#folderorganizationpolicyspeclistpolicy)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `all` | ***bool***| ***(Optional)*** |
| `values` | ***[]string***| ***(Optional)*** |
## FolderOrganizationPolicySpecListPolicyDeny

Appears on:[FolderOrganizationPolicySpecListPolicy](#folderorganizationpolicyspeclistpolicy)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `all` | ***bool***| ***(Optional)*** |
| `values` | ***[]string***| ***(Optional)*** |
## FolderOrganizationPolicySpecRestorePolicy

Appears on:[FolderOrganizationPolicySpec](#folderorganizationpolicyspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `default` | ***bool***||
## FolderOrganizationPolicyStatus

Appears on:[FolderOrganizationPolicy](#folderorganizationpolicy)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[FolderOrganizationPolicySpec](#folderorganizationpolicyspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[FolderOrganizationPolicyStatus](#folderorganizationpolicystatus)

---
