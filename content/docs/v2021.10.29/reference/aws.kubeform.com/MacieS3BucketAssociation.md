---
title: MacieS3BucketAssociation
menu:
  docs_v2021.10.29:
    identifier: macies3bucketassociation-aws.kubeform.com
    name: MacieS3BucketAssociation
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2021.10.29
section_menu_id: reference
info:
  alicloud: v0.4.0
  aws: v0.4.0
  azurerm: v0.4.0
  civo: v0.4.0
  cli: v0.1.0
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

## MacieS3BucketAssociation
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `MacieS3BucketAssociation` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[MacieS3BucketAssociationSpec](#macies3bucketassociationspec)***||
| `status` | ***[MacieS3BucketAssociationStatus](#macies3bucketassociationstatus)***||
## MacieS3BucketAssociationSpec

Appears on:[MacieS3BucketAssociation](#macies3bucketassociation), [MacieS3BucketAssociationStatus](#macies3bucketassociationstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `bucketName` | ***string***||
| `classificationType` | ***[[]MacieS3BucketAssociationSpecClassificationType](#macies3bucketassociationspecclassificationtype)***| ***(Optional)*** |
| `memberAccountID` | ***string***| ***(Optional)*** |
| `prefix` | ***string***| ***(Optional)*** |
## MacieS3BucketAssociationSpecClassificationType

Appears on:[MacieS3BucketAssociationSpec](#macies3bucketassociationspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `continuous` | ***string***| ***(Optional)*** |
| `oneTime` | ***string***| ***(Optional)*** |
## MacieS3BucketAssociationStatus

Appears on:[MacieS3BucketAssociation](#macies3bucketassociation)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[MacieS3BucketAssociationSpec](#macies3bucketassociationspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[MacieS3BucketAssociationStatus](#macies3bucketassociationstatus)

---