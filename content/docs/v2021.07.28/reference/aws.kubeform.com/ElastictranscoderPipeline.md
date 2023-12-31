---
title: ElastictranscoderPipeline
menu:
  docs_v2021.07.28:
    identifier: elastictranscoderpipeline-aws.kubeform.com
    name: ElastictranscoderPipeline
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

## ElastictranscoderPipeline
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `ElastictranscoderPipeline` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ElastictranscoderPipelineSpec](#elastictranscoderpipelinespec)***||
| `status` | ***[ElastictranscoderPipelineStatus](#elastictranscoderpipelinestatus)***||
## ElastictranscoderPipelineSpec

Appears on:[ElastictranscoderPipeline](#elastictranscoderpipeline), [ElastictranscoderPipelineStatus](#elastictranscoderpipelinestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `arn` | ***string***| ***(Optional)*** |
| `awsKmsKeyArn` | ***string***| ***(Optional)*** |
| `contentConfig` | ***[[]ElastictranscoderPipelineSpecContentConfig](#elastictranscoderpipelinespeccontentconfig)***| ***(Optional)*** |
| `contentConfigPermissions` | ***[[]ElastictranscoderPipelineSpecContentConfigPermissions](#elastictranscoderpipelinespeccontentconfigpermissions)***| ***(Optional)*** |
| `inputBucket` | ***string***||
| `name` | ***string***| ***(Optional)*** |
| `notifications` | ***[[]ElastictranscoderPipelineSpecNotifications](#elastictranscoderpipelinespecnotifications)***| ***(Optional)*** |
| `outputBucket` | ***string***| ***(Optional)*** |
| `role` | ***string***||
| `thumbnailConfig` | ***[[]ElastictranscoderPipelineSpecThumbnailConfig](#elastictranscoderpipelinespecthumbnailconfig)***| ***(Optional)*** |
| `thumbnailConfigPermissions` | ***[[]ElastictranscoderPipelineSpecThumbnailConfigPermissions](#elastictranscoderpipelinespecthumbnailconfigpermissions)***| ***(Optional)*** |
## ElastictranscoderPipelineSpecContentConfig

Appears on:[ElastictranscoderPipelineSpec](#elastictranscoderpipelinespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `bucket` | ***string***| ***(Optional)*** |
| `storageClass` | ***string***| ***(Optional)*** |
## ElastictranscoderPipelineSpecContentConfigPermissions

Appears on:[ElastictranscoderPipelineSpec](#elastictranscoderpipelinespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `access` | ***[]string***| ***(Optional)*** |
| `grantee` | ***string***| ***(Optional)*** |
| `granteeType` | ***string***| ***(Optional)*** |
## ElastictranscoderPipelineSpecNotifications

Appears on:[ElastictranscoderPipelineSpec](#elastictranscoderpipelinespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `completed` | ***string***| ***(Optional)*** |
| `error` | ***string***| ***(Optional)*** |
| `progressing` | ***string***| ***(Optional)*** |
| `warning` | ***string***| ***(Optional)*** |
## ElastictranscoderPipelineSpecThumbnailConfig

Appears on:[ElastictranscoderPipelineSpec](#elastictranscoderpipelinespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `bucket` | ***string***| ***(Optional)*** |
| `storageClass` | ***string***| ***(Optional)*** |
## ElastictranscoderPipelineSpecThumbnailConfigPermissions

Appears on:[ElastictranscoderPipelineSpec](#elastictranscoderpipelinespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `access` | ***[]string***| ***(Optional)*** |
| `grantee` | ***string***| ***(Optional)*** |
| `granteeType` | ***string***| ***(Optional)*** |
## ElastictranscoderPipelineStatus

Appears on:[ElastictranscoderPipeline](#elastictranscoderpipeline)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ElastictranscoderPipelineSpec](#elastictranscoderpipelinespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[ElastictranscoderPipelineStatus](#elastictranscoderpipelinestatus)

---
