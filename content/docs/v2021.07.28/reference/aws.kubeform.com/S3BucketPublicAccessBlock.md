---
title: S3BucketPublicAccessBlock
menu:
  docs_v2021.07.28:
    identifier: s3bucketpublicaccessblock-aws.kubeform.com
    name: S3BucketPublicAccessBlock
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

## S3BucketPublicAccessBlock
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `S3BucketPublicAccessBlock` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[S3BucketPublicAccessBlockSpec](#s3bucketpublicaccessblockspec)***||
| `status` | ***[S3BucketPublicAccessBlockStatus](#s3bucketpublicaccessblockstatus)***||
## Phase(`string` alias)

Appears on:[S3BucketPublicAccessBlockStatus](#s3bucketpublicaccessblockstatus)

## S3BucketPublicAccessBlockSpec

Appears on:[S3BucketPublicAccessBlock](#s3bucketpublicaccessblock), [S3BucketPublicAccessBlockStatus](#s3bucketpublicaccessblockstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `blockPublicAcls` | ***bool***| ***(Optional)*** |
| `blockPublicPolicy` | ***bool***| ***(Optional)*** |
| `bucket` | ***string***||
| `ignorePublicAcls` | ***bool***| ***(Optional)*** |
| `restrictPublicBuckets` | ***bool***| ***(Optional)*** |
## S3BucketPublicAccessBlockStatus

Appears on:[S3BucketPublicAccessBlock](#s3bucketpublicaccessblock)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[S3BucketPublicAccessBlockSpec](#s3bucketpublicaccessblockspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
