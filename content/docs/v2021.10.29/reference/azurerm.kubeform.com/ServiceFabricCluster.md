---
title: ServiceFabricCluster
menu:
  docs_v2021.10.29:
    identifier: servicefabriccluster-azurerm.kubeform.com
    name: ServiceFabricCluster
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

## ServiceFabricCluster
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `ServiceFabricCluster` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ServiceFabricClusterSpec](#servicefabricclusterspec)***||
| `status` | ***[ServiceFabricClusterStatus](#servicefabricclusterstatus)***||
## Phase(`string` alias)

Appears on:[ServiceFabricClusterStatus](#servicefabricclusterstatus)

## ServiceFabricClusterSpec

Appears on:[ServiceFabricCluster](#servicefabriccluster), [ServiceFabricClusterStatus](#servicefabricclusterstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `addOnFeatures` | ***[]string***| ***(Optional)*** |
| `azureActiveDirectory` | ***[[]ServiceFabricClusterSpecAzureActiveDirectory](#servicefabricclusterspecazureactivedirectory)***| ***(Optional)*** |
| `certificate` | ***[[]ServiceFabricClusterSpecCertificate](#servicefabricclusterspeccertificate)***| ***(Optional)*** |
| `certificateCommonNames` | ***[[]ServiceFabricClusterSpecCertificateCommonNames](#servicefabricclusterspeccertificatecommonnames)***| ***(Optional)*** |
| `clientCertificateThumbprint` | ***[[]ServiceFabricClusterSpecClientCertificateThumbprint](#servicefabricclusterspecclientcertificatethumbprint)***| ***(Optional)*** |
| `clusterCodeVersion` | ***string***| ***(Optional)*** |
| `clusterEndpoint` | ***string***| ***(Optional)*** |
| `diagnosticsConfig` | ***[[]ServiceFabricClusterSpecDiagnosticsConfig](#servicefabricclusterspecdiagnosticsconfig)***| ***(Optional)*** |
| `fabricSettings` | ***[[]ServiceFabricClusterSpecFabricSettings](#servicefabricclusterspecfabricsettings)***| ***(Optional)*** |
| `location` | ***string***||
| `managementEndpoint` | ***string***||
| `name` | ***string***||
| `nodeType` | ***[[]ServiceFabricClusterSpecNodeType](#servicefabricclusterspecnodetype)***||
| `reliabilityLevel` | ***string***||
| `resourceGroupName` | ***string***||
| `reverseProxyCertificate` | ***[[]ServiceFabricClusterSpecReverseProxyCertificate](#servicefabricclusterspecreverseproxycertificate)***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
| `upgradeMode` | ***string***||
| `vmImage` | ***string***||
## ServiceFabricClusterSpecAzureActiveDirectory

Appears on:[ServiceFabricClusterSpec](#servicefabricclusterspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `clientApplicationID` | ***string***||
| `clusterApplicationID` | ***string***||
| `tenantID` | ***string***||
## ServiceFabricClusterSpecCertificate

Appears on:[ServiceFabricClusterSpec](#servicefabricclusterspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `thumbprint` | ***string***||
| `thumbprintSecondary` | ***string***| ***(Optional)*** |
| `x509StoreName` | ***string***||
## ServiceFabricClusterSpecCertificateCommonNames

Appears on:[ServiceFabricClusterSpec](#servicefabricclusterspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `commonNames` | ***[[]ServiceFabricClusterSpecCertificateCommonNamesCommonNames](#servicefabricclusterspeccertificatecommonnamescommonnames)***||
| `x509StoreName` | ***string***||
## ServiceFabricClusterSpecCertificateCommonNamesCommonNames

Appears on:[ServiceFabricClusterSpecCertificateCommonNames](#servicefabricclusterspeccertificatecommonnames)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `certificateCommonName` | ***string***||
| `certificateIssuerThumbprint` | ***string***| ***(Optional)*** |
## ServiceFabricClusterSpecClientCertificateThumbprint

Appears on:[ServiceFabricClusterSpec](#servicefabricclusterspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `isAdmin` | ***bool***||
| `thumbprint` | ***string***||
## ServiceFabricClusterSpecDiagnosticsConfig

Appears on:[ServiceFabricClusterSpec](#servicefabricclusterspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `blobEndpoint` | ***string***||
| `protectedAccountKeyName` | ***string***||
| `queueEndpoint` | ***string***||
| `storageAccountName` | ***string***||
| `tableEndpoint` | ***string***||
## ServiceFabricClusterSpecFabricSettings

Appears on:[ServiceFabricClusterSpec](#servicefabricclusterspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `name` | ***string***||
| `parameters` | ***map[string]string***| ***(Optional)*** |
## ServiceFabricClusterSpecNodeType

Appears on:[ServiceFabricClusterSpec](#servicefabricclusterspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `applicationPorts` | ***[[]ServiceFabricClusterSpecNodeTypeApplicationPorts](#servicefabricclusterspecnodetypeapplicationports)***| ***(Optional)*** |
| `capacities` | ***map[string]string***| ***(Optional)*** |
| `clientEndpointPort` | ***int64***||
| `durabilityLevel` | ***string***| ***(Optional)*** |
| `ephemeralPorts` | ***[[]ServiceFabricClusterSpecNodeTypeEphemeralPorts](#servicefabricclusterspecnodetypeephemeralports)***| ***(Optional)*** |
| `httpEndpointPort` | ***int64***||
| `instanceCount` | ***int64***||
| `isPrimary` | ***bool***||
| `name` | ***string***||
| `placementProperties` | ***map[string]string***| ***(Optional)*** |
| `reverseProxyEndpointPort` | ***int64***| ***(Optional)*** |
## ServiceFabricClusterSpecNodeTypeApplicationPorts

Appears on:[ServiceFabricClusterSpecNodeType](#servicefabricclusterspecnodetype)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `endPort` | ***int64***||
| `startPort` | ***int64***||
## ServiceFabricClusterSpecNodeTypeEphemeralPorts

Appears on:[ServiceFabricClusterSpecNodeType](#servicefabricclusterspecnodetype)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `endPort` | ***int64***||
| `startPort` | ***int64***||
## ServiceFabricClusterSpecReverseProxyCertificate

Appears on:[ServiceFabricClusterSpec](#servicefabricclusterspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `thumbprint` | ***string***||
| `thumbprintSecondary` | ***string***| ***(Optional)*** |
| `x509StoreName` | ***string***||
## ServiceFabricClusterStatus

Appears on:[ServiceFabricCluster](#servicefabriccluster)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ServiceFabricClusterSpec](#servicefabricclusterspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
