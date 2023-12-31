---
title: LoggingBillingAccountExclusion
menu:
  docs_v2021.07.28:
    identifier: loggingbillingaccountexclusion-google.kubeform.com
    name: LoggingBillingAccountExclusion
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

## LoggingBillingAccountExclusion
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `google.kubeform.com/v1alpha1` |
|    `kind` | string | `LoggingBillingAccountExclusion` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[LoggingBillingAccountExclusionSpec](#loggingbillingaccountexclusionspec)***||
| `status` | ***[LoggingBillingAccountExclusionStatus](#loggingbillingaccountexclusionstatus)***||
## LoggingBillingAccountExclusionSpec

Appears on:[LoggingBillingAccountExclusion](#loggingbillingaccountexclusion), [LoggingBillingAccountExclusionStatus](#loggingbillingaccountexclusionstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `billingAccount` | ***string***||
| `description` | ***string***| ***(Optional)*** |
| `disabled` | ***bool***| ***(Optional)*** |
| `filter` | ***string***||
| `name` | ***string***||
## LoggingBillingAccountExclusionStatus

Appears on:[LoggingBillingAccountExclusion](#loggingbillingaccountexclusion)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[LoggingBillingAccountExclusionSpec](#loggingbillingaccountexclusionspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[LoggingBillingAccountExclusionStatus](#loggingbillingaccountexclusionstatus)

---
