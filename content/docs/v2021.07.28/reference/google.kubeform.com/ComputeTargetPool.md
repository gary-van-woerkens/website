---
title: ComputeTargetPool
menu:
  docs_v2021.07.28:
    identifier: computetargetpool-google.kubeform.com
    name: ComputeTargetPool
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

## ComputeTargetPool
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `google.kubeform.com/v1alpha1` |
|    `kind` | string | `ComputeTargetPool` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ComputeTargetPoolSpec](#computetargetpoolspec)***||
| `status` | ***[ComputeTargetPoolStatus](#computetargetpoolstatus)***||
## ComputeTargetPoolSpec

Appears on:[ComputeTargetPool](#computetargetpool), [ComputeTargetPoolStatus](#computetargetpoolstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `backupPool` | ***string***| ***(Optional)*** |
| `description` | ***string***| ***(Optional)*** |
| `failoverRatio` | ***float64***| ***(Optional)*** |
| `healthChecks` | ***[]string***| ***(Optional)*** |
| `instances` | ***[]string***| ***(Optional)*** |
| `name` | ***string***||
| `project` | ***string***| ***(Optional)*** |
| `region` | ***string***| ***(Optional)*** |
| `selfLink` | ***string***| ***(Optional)*** |
| `sessionAffinity` | ***string***| ***(Optional)*** |
## ComputeTargetPoolStatus

Appears on:[ComputeTargetPool](#computetargetpool)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ComputeTargetPoolSpec](#computetargetpoolspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[ComputeTargetPoolStatus](#computetargetpoolstatus)

---
