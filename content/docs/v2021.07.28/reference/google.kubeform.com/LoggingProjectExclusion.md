---
title: LoggingProjectExclusion
menu:
  docs_v2021.07.28:
    identifier: loggingprojectexclusion-google.kubeform.com
    name: LoggingProjectExclusion
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

## LoggingProjectExclusion
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `google.kubeform.com/v1alpha1` |
|    `kind` | string | `LoggingProjectExclusion` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[LoggingProjectExclusionSpec](#loggingprojectexclusionspec)***||
| `status` | ***[LoggingProjectExclusionStatus](#loggingprojectexclusionstatus)***||
## LoggingProjectExclusionSpec

Appears on:[LoggingProjectExclusion](#loggingprojectexclusion), [LoggingProjectExclusionStatus](#loggingprojectexclusionstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `description` | ***string***| ***(Optional)*** |
| `disabled` | ***bool***| ***(Optional)*** |
| `filter` | ***string***||
| `name` | ***string***||
| `project` | ***string***| ***(Optional)*** |
## LoggingProjectExclusionStatus

Appears on:[LoggingProjectExclusion](#loggingprojectexclusion)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[LoggingProjectExclusionSpec](#loggingprojectexclusionspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[LoggingProjectExclusionStatus](#loggingprojectexclusionstatus)

---
