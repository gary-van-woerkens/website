---
title: FilestoreInstance
menu:
  docs_v2021.07.28:
    identifier: filestoreinstance-google.kubeform.com
    name: FilestoreInstance
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

## FilestoreInstance
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `google.kubeform.com/v1alpha1` |
|    `kind` | string | `FilestoreInstance` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[FilestoreInstanceSpec](#filestoreinstancespec)***||
| `status` | ***[FilestoreInstanceStatus](#filestoreinstancestatus)***||
## FilestoreInstanceSpec

Appears on:[FilestoreInstance](#filestoreinstance), [FilestoreInstanceStatus](#filestoreinstancestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `createTime` | ***string***| ***(Optional)*** |
| `description` | ***string***| ***(Optional)*** |
| `etag` | ***string***| ***(Optional)*** |
| `fileShares` | ***[[]FilestoreInstanceSpecFileShares](#filestoreinstancespecfileshares)***||
| `labels` | ***map[string]string***| ***(Optional)*** |
| `name` | ***string***||
| `networks` | ***[[]FilestoreInstanceSpecNetworks](#filestoreinstancespecnetworks)***||
| `project` | ***string***| ***(Optional)*** |
| `tier` | ***string***||
| `zone` | ***string***||
## FilestoreInstanceSpecFileShares

Appears on:[FilestoreInstanceSpec](#filestoreinstancespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `capacityGb` | ***int64***||
| `name` | ***string***||
## FilestoreInstanceSpecNetworks

Appears on:[FilestoreInstanceSpec](#filestoreinstancespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `ipAddresses` | ***[]string***| ***(Optional)*** |
| `modes` | ***[]string***||
| `network` | ***string***||
| `reservedIPRange` | ***string***| ***(Optional)*** |
## FilestoreInstanceStatus

Appears on:[FilestoreInstance](#filestoreinstance)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[FilestoreInstanceSpec](#filestoreinstancespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[FilestoreInstanceStatus](#filestoreinstancestatus)

---
