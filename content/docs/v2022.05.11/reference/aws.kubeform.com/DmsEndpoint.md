---
title: DmsEndpoint
menu:
  docs_v2022.05.11:
    identifier: dmsendpoint-aws.kubeform.com
    name: DmsEndpoint
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2022.05.11
section_menu_id: reference
info:
  alicloud: v0.5.0
  aws: v0.5.0
  azurerm: v0.5.0
  civo: v0.5.0
  cli: v0.2.0
  datadog: v0.5.0
  digitalocean: v0.5.0
  dynatrace: v0.5.0
  ec: v0.5.0
  equinixmetal: v0.5.0
  google: v0.5.0
  grafana: v0.5.0
  hcloud: v0.5.0
  ibm: v0.5.0
  installer: v2022.05.11
  linode: v0.5.0
  module: v0.1.0
  mongodbatlas: v0.5.0
  newrelic: v0.5.0
  oci: v0.5.0
  ovh: v0.5.0
  pagerduty: v0.5.0
  rediscloud: v0.5.0
  upcloud: v0.5.0
  version: v2022.05.11
  vsphere: v0.5.0
  vultr: v0.5.0
  wavefront: v0.5.0
---

## DmsEndpoint
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `DmsEndpoint` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-22.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[DmsEndpointSpec](#dmsendpointspec)***||
| `status` | ***[DmsEndpointStatus](#dmsendpointstatus)***||
## DmsEndpointSpec

Appears on:[DmsEndpoint](#dmsendpoint), [DmsEndpointStatus](#dmsendpointstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-22.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `secretRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-22.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#localobjectreference-v1-core)***||
| `certificateArn` | ***string***| ***(Optional)*** |
| `databaseName` | ***string***| ***(Optional)*** |
| `endpointArn` | ***string***| ***(Optional)*** |
| `endpointID` | ***string***||
| `endpointType` | ***string***||
| `engineName` | ***string***||
| `extraConnectionAttributes` | ***string***| ***(Optional)*** |
| `kmsKeyArn` | ***string***| ***(Optional)*** |
| `mongodbSettings` | ***[[]DmsEndpointSpecMongodbSettings](#dmsendpointspecmongodbsettings)***| ***(Optional)*** |
| `port` | ***int64***| ***(Optional)*** |
| `s3Settings` | ***[[]DmsEndpointSpecS3Settings](#dmsendpointspecs3settings)***| ***(Optional)*** |
| `serverName` | ***string***| ***(Optional)*** |
| `serviceAccessRole` | ***string***| ***(Optional)*** |
| `sslMode` | ***string***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
| `username` | ***string***| ***(Optional)*** |
## DmsEndpointSpecMongodbSettings

Appears on:[DmsEndpointSpec](#dmsendpointspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `authMechanism` | ***string***| ***(Optional)*** |
| `authSource` | ***string***| ***(Optional)*** |
| `authType` | ***string***| ***(Optional)*** |
| `docsToInvestigate` | ***string***| ***(Optional)*** |
| `extractDocID` | ***string***| ***(Optional)*** |
| `nestingLevel` | ***string***| ***(Optional)*** |
## DmsEndpointSpecS3Settings

Appears on:[DmsEndpointSpec](#dmsendpointspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `bucketFolder` | ***string***| ***(Optional)*** |
| `bucketName` | ***string***| ***(Optional)*** |
| `compressionType` | ***string***| ***(Optional)*** |
| `csvDelimiter` | ***string***| ***(Optional)*** |
| `csvRowDelimiter` | ***string***| ***(Optional)*** |
| `externalTableDefinition` | ***string***| ***(Optional)*** |
| `serviceAccessRoleArn` | ***string***| ***(Optional)*** |
## DmsEndpointStatus

Appears on:[DmsEndpoint](#dmsendpoint)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[DmsEndpointSpec](#dmsendpointspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[DmsEndpointStatus](#dmsendpointstatus)

---
## Sensitive Values
| Name | Type | Description |
|------|------|-------------|
| `password` | ***string*** ||
