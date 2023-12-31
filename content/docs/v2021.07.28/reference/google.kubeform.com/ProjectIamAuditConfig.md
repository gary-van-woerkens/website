---
title: ProjectIamAuditConfig
menu:
  docs_v2021.07.28:
    identifier: projectiamauditconfig-google.kubeform.com
    name: ProjectIamAuditConfig
    parent: google.kubeform.com-reference
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

## ProjectIamAuditConfig
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `google.kubeform.com/v1alpha1` |
|    `kind` | string | `ProjectIamAuditConfig` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ProjectIamAuditConfigSpec](#projectiamauditconfigspec)***||
| `status` | ***[ProjectIamAuditConfigStatus](#projectiamauditconfigstatus)***||
## Phase(`string` alias)

Appears on:[ProjectIamAuditConfigStatus](#projectiamauditconfigstatus)

## ProjectIamAuditConfigSpec

Appears on:[ProjectIamAuditConfig](#projectiamauditconfig), [ProjectIamAuditConfigStatus](#projectiamauditconfigstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `auditLogConfig` | ***[[]ProjectIamAuditConfigSpecAuditLogConfig](#projectiamauditconfigspecauditlogconfig)***||
| `etag` | ***string***| ***(Optional)*** |
| `project` | ***string***| ***(Optional)*** |
| `service` | ***string***||
## ProjectIamAuditConfigSpecAuditLogConfig

Appears on:[ProjectIamAuditConfigSpec](#projectiamauditconfigspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `exemptedMembers` | ***[]string***| ***(Optional)*** |
| `logType` | ***string***||
## ProjectIamAuditConfigStatus

Appears on:[ProjectIamAuditConfig](#projectiamauditconfig)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ProjectIamAuditConfigSpec](#projectiamauditconfigspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
