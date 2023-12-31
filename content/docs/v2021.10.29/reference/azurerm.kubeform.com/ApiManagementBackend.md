---
title: ApiManagementBackend
menu:
  docs_v2021.10.29:
    identifier: apimanagementbackend-azurerm.kubeform.com
    name: ApiManagementBackend
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

## ApiManagementBackend
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `ApiManagementBackend` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ApiManagementBackendSpec](#apimanagementbackendspec)***||
| `status` | ***[ApiManagementBackendStatus](#apimanagementbackendstatus)***||
## ApiManagementBackendSpec

Appears on:[ApiManagementBackend](#apimanagementbackend), [ApiManagementBackendStatus](#apimanagementbackendstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `secretRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `apiManagementName` | ***string***||
| `credentials` | ***[[]ApiManagementBackendSpecCredentials](#apimanagementbackendspeccredentials)***| ***(Optional)*** |
| `description` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `protocol` | ***string***||
| `proxy` | ***[[]ApiManagementBackendSpecProxy](#apimanagementbackendspecproxy)***| ***(Optional)*** |
| `resourceGroupName` | ***string***||
| `resourceID` | ***string***| ***(Optional)*** |
| `serviceFabricCluster` | ***[[]ApiManagementBackendSpecServiceFabricCluster](#apimanagementbackendspecservicefabriccluster)***| ***(Optional)*** |
| `title` | ***string***| ***(Optional)*** |
| `tls` | ***[[]ApiManagementBackendSpecTls](#apimanagementbackendspectls)***| ***(Optional)*** |
| `url` | ***string***||
## ApiManagementBackendSpecCredentials

Appears on:[ApiManagementBackendSpec](#apimanagementbackendspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `authorization` | ***[[]ApiManagementBackendSpecCredentialsAuthorization](#apimanagementbackendspeccredentialsauthorization)***| ***(Optional)*** |
| `certificate` | ***[]string***| ***(Optional)*** |
| `header` | ***map[string]string***| ***(Optional)*** |
| `query` | ***map[string]string***| ***(Optional)*** |
## ApiManagementBackendSpecCredentialsAuthorization

Appears on:[ApiManagementBackendSpecCredentials](#apimanagementbackendspeccredentials)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `parameter` | ***string***| ***(Optional)*** |
| `scheme` | ***string***| ***(Optional)*** |
## ApiManagementBackendSpecProxy

Appears on:[ApiManagementBackendSpec](#apimanagementbackendspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `url` | ***string***||
| `username` | ***string***||
## ApiManagementBackendSpecServiceFabricCluster

Appears on:[ApiManagementBackendSpec](#apimanagementbackendspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `clientCertificateThumbprint` | ***string***||
| `managementEndpoints` | ***[]string***||
| `maxPartitionResolutionRetries` | ***int64***||
| `serverCertificateThumbprints` | ***[]string***| ***(Optional)*** |
| `serverX509Name` | ***[[]ApiManagementBackendSpecServiceFabricClusterServerX509Name](#apimanagementbackendspecservicefabricclusterserverx509name)***| ***(Optional)*** |
## ApiManagementBackendSpecServiceFabricClusterServerX509Name

Appears on:[ApiManagementBackendSpecServiceFabricCluster](#apimanagementbackendspecservicefabriccluster)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `issuerCertificateThumbprint` | ***string***||
| `name` | ***string***||
## ApiManagementBackendSpecTls

Appears on:[ApiManagementBackendSpec](#apimanagementbackendspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `validateCertificateChain` | ***bool***| ***(Optional)*** |
| `validateCertificateName` | ***bool***| ***(Optional)*** |
## ApiManagementBackendStatus

Appears on:[ApiManagementBackend](#apimanagementbackend)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ApiManagementBackendSpec](#apimanagementbackendspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[ApiManagementBackendStatus](#apimanagementbackendstatus)

---
## Sensitive Values
| Name | Type | Description |
|------|------|-------------|
| `proxy.<index>.password` | ***string*** ||
