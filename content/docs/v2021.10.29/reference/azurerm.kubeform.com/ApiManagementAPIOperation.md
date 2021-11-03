---
title: ApiManagementAPIOperation
menu:
  docs_v2021.10.29:
    identifier: apimanagementapioperation-azurerm.kubeform.com
    name: ApiManagementAPIOperation
    parent: azurerm.kubeform.com-reference
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

## ApiManagementAPIOperation
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `ApiManagementAPIOperation` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ApiManagementAPIOperationSpec](#apimanagementapioperationspec)***||
| `status` | ***[ApiManagementAPIOperationStatus](#apimanagementapioperationstatus)***||
## ApiManagementAPIOperationSpec

Appears on:[ApiManagementAPIOperation](#apimanagementapioperation), [ApiManagementAPIOperationStatus](#apimanagementapioperationstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `apiManagementName` | ***string***||
| `apiName` | ***string***||
| `description` | ***string***| ***(Optional)*** |
| `displayName` | ***string***||
| `method` | ***string***||
| `operationID` | ***string***||
| `request` | ***[[]ApiManagementAPIOperationSpecRequest](#apimanagementapioperationspecrequest)***| ***(Optional)*** |
| `resourceGroupName` | ***string***||
| `response` | ***[[]ApiManagementAPIOperationSpecResponse](#apimanagementapioperationspecresponse)***| ***(Optional)*** |
| `templateParameter` | ***[[]ApiManagementAPIOperationSpecTemplateParameter](#apimanagementapioperationspectemplateparameter)***| ***(Optional)*** |
| `urlTemplate` | ***string***||
## ApiManagementAPIOperationSpecRequest

Appears on:[ApiManagementAPIOperationSpec](#apimanagementapioperationspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `description` | ***string***| ***(Optional)*** |
| `header` | ***[[]ApiManagementAPIOperationSpecRequestHeader](#apimanagementapioperationspecrequestheader)***| ***(Optional)*** |
| `queryParameter` | ***[[]ApiManagementAPIOperationSpecRequestQueryParameter](#apimanagementapioperationspecrequestqueryparameter)***| ***(Optional)*** |
| `representation` | ***[[]ApiManagementAPIOperationSpecRequestRepresentation](#apimanagementapioperationspecrequestrepresentation)***| ***(Optional)*** |
## ApiManagementAPIOperationSpecRequestHeader

Appears on:[ApiManagementAPIOperationSpecRequest](#apimanagementapioperationspecrequest)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `defaultValue` | ***string***| ***(Optional)*** |
| `description` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `required` | ***bool***||
| `type` | ***string***||
| `values` | ***[]string***| ***(Optional)*** |
## ApiManagementAPIOperationSpecRequestQueryParameter

Appears on:[ApiManagementAPIOperationSpecRequest](#apimanagementapioperationspecrequest)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `defaultValue` | ***string***| ***(Optional)*** |
| `description` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `required` | ***bool***||
| `type` | ***string***||
| `values` | ***[]string***| ***(Optional)*** |
## ApiManagementAPIOperationSpecRequestRepresentation

Appears on:[ApiManagementAPIOperationSpecRequest](#apimanagementapioperationspecrequest)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `contentType` | ***string***||
| `formParameter` | ***[[]ApiManagementAPIOperationSpecRequestRepresentationFormParameter](#apimanagementapioperationspecrequestrepresentationformparameter)***| ***(Optional)*** |
| `sample` | ***string***| ***(Optional)*** |
| `schemaID` | ***string***| ***(Optional)*** |
| `typeName` | ***string***| ***(Optional)*** |
## ApiManagementAPIOperationSpecRequestRepresentationFormParameter

Appears on:[ApiManagementAPIOperationSpecRequestRepresentation](#apimanagementapioperationspecrequestrepresentation)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `defaultValue` | ***string***| ***(Optional)*** |
| `description` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `required` | ***bool***||
| `type` | ***string***||
| `values` | ***[]string***| ***(Optional)*** |
## ApiManagementAPIOperationSpecResponse

Appears on:[ApiManagementAPIOperationSpec](#apimanagementapioperationspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `description` | ***string***| ***(Optional)*** |
| `header` | ***[[]ApiManagementAPIOperationSpecResponseHeader](#apimanagementapioperationspecresponseheader)***| ***(Optional)*** |
| `representation` | ***[[]ApiManagementAPIOperationSpecResponseRepresentation](#apimanagementapioperationspecresponserepresentation)***| ***(Optional)*** |
| `statusCode` | ***int64***||
## ApiManagementAPIOperationSpecResponseHeader

Appears on:[ApiManagementAPIOperationSpecResponse](#apimanagementapioperationspecresponse)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `defaultValue` | ***string***| ***(Optional)*** |
| `description` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `required` | ***bool***||
| `type` | ***string***||
| `values` | ***[]string***| ***(Optional)*** |
## ApiManagementAPIOperationSpecResponseRepresentation

Appears on:[ApiManagementAPIOperationSpecResponse](#apimanagementapioperationspecresponse)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `contentType` | ***string***||
| `formParameter` | ***[[]ApiManagementAPIOperationSpecResponseRepresentationFormParameter](#apimanagementapioperationspecresponserepresentationformparameter)***| ***(Optional)*** |
| `sample` | ***string***| ***(Optional)*** |
| `schemaID` | ***string***| ***(Optional)*** |
| `typeName` | ***string***| ***(Optional)*** |
## ApiManagementAPIOperationSpecResponseRepresentationFormParameter

Appears on:[ApiManagementAPIOperationSpecResponseRepresentation](#apimanagementapioperationspecresponserepresentation)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `defaultValue` | ***string***| ***(Optional)*** |
| `description` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `required` | ***bool***||
| `type` | ***string***||
| `values` | ***[]string***| ***(Optional)*** |
## ApiManagementAPIOperationSpecTemplateParameter

Appears on:[ApiManagementAPIOperationSpec](#apimanagementapioperationspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `defaultValue` | ***string***| ***(Optional)*** |
| `description` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `required` | ***bool***||
| `type` | ***string***||
| `values` | ***[]string***| ***(Optional)*** |
## ApiManagementAPIOperationStatus

Appears on:[ApiManagementAPIOperation](#apimanagementapioperation)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ApiManagementAPIOperationSpec](#apimanagementapioperationspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[ApiManagementAPIOperationStatus](#apimanagementapioperationstatus)

---
