---
title: SsmAssociation
menu:
  docs_v2021.10.29:
    identifier: ssmassociation-aws.kubeform.com
    name: SsmAssociation
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2021.10.29
section_menu_id: reference
info:
  alicloud: v0.4.0
  aws: v0.4.0
  azurerm: v0.4.0
  civo: v0.4.0
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

## SsmAssociation
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `SsmAssociation` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[SsmAssociationSpec](#ssmassociationspec)***||
| `status` | ***[SsmAssociationStatus](#ssmassociationstatus)***||
## Phase(`string` alias)

Appears on:[SsmAssociationStatus](#ssmassociationstatus)

## SsmAssociationSpec

Appears on:[SsmAssociation](#ssmassociation), [SsmAssociationStatus](#ssmassociationstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `associationID` | ***string***| ***(Optional)*** |
| `associationName` | ***string***| ***(Optional)*** |
| `complianceSeverity` | ***string***| ***(Optional)*** |
| `documentVersion` | ***string***| ***(Optional)*** |
| `instanceID` | ***string***| ***(Optional)*** |
| `maxConcurrency` | ***string***| ***(Optional)*** |
| `maxErrors` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `outputLocation` | ***[[]SsmAssociationSpecOutputLocation](#ssmassociationspecoutputlocation)***| ***(Optional)*** |
| `parameters` | ***map[string]string***| ***(Optional)*** |
| `scheduleExpression` | ***string***| ***(Optional)*** |
| `targets` | ***[[]SsmAssociationSpecTargets](#ssmassociationspectargets)***| ***(Optional)*** |
## SsmAssociationSpecOutputLocation

Appears on:[SsmAssociationSpec](#ssmassociationspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `s3BucketName` | ***string***||
| `s3KeyPrefix` | ***string***| ***(Optional)*** |
## SsmAssociationSpecTargets

Appears on:[SsmAssociationSpec](#ssmassociationspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `key` | ***string***||
| `values` | ***[]string***||
## SsmAssociationStatus

Appears on:[SsmAssociation](#ssmassociation)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[SsmAssociationSpec](#ssmassociationspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
