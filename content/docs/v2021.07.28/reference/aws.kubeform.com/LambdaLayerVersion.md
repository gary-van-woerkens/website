---
title: LambdaLayerVersion
menu:
  docs_v2021.07.28:
    identifier: lambdalayerversion-aws.kubeform.com
    name: LambdaLayerVersion
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

## LambdaLayerVersion
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `LambdaLayerVersion` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[LambdaLayerVersionSpec](#lambdalayerversionspec)***||
| `status` | ***[LambdaLayerVersionStatus](#lambdalayerversionstatus)***||
## LambdaLayerVersionSpec

Appears on:[LambdaLayerVersion](#lambdalayerversion), [LambdaLayerVersionStatus](#lambdalayerversionstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `arn` | ***string***| ***(Optional)*** |
| `compatibleRuntimes` | ***[]string***| ***(Optional)*** |
| `createdDate` | ***string***| ***(Optional)*** |
| `description` | ***string***| ***(Optional)*** |
| `filename` | ***string***| ***(Optional)*** |
| `layerArn` | ***string***| ***(Optional)*** |
| `layerName` | ***string***||
| `licenseInfo` | ***string***| ***(Optional)*** |
| `s3Bucket` | ***string***| ***(Optional)*** |
| `s3Key` | ***string***| ***(Optional)*** |
| `s3ObjectVersion` | ***string***| ***(Optional)*** |
| `sourceCodeHash` | ***string***| ***(Optional)*** |
| `sourceCodeSize` | ***int64***| ***(Optional)*** |
| `version` | ***string***| ***(Optional)*** |
## LambdaLayerVersionStatus

Appears on:[LambdaLayerVersion](#lambdalayerversion)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[LambdaLayerVersionSpec](#lambdalayerversionspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[LambdaLayerVersionStatus](#lambdalayerversionstatus)

---
