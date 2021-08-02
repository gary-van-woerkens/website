---
title: VpnServerConfiguration
menu:
  docs_v2021.08.02:
    identifier: vpnserverconfiguration-azurerm.kubeform.com
    name: VpnServerConfiguration
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v2021.08.02
section_menu_id: reference
info:
  alicloud: v0.3.0
  aws: v0.3.0
  azurerm: v0.3.0
  civo: v0.3.0
  datadog: v0.3.0
  digitalocean: v0.3.0
  dynatrace: v0.3.0
  ec: v0.3.0
  equinixmetal: v0.3.0
  google: v0.3.0
  grafana: v0.3.0
  hcloud: v0.3.0
  ibm: v0.3.0
  installer: v2021.08.02
  linode: v0.3.0
  mongodbatlas: v0.3.0
  newrelic: v0.3.0
  ovh: v0.3.0
  pagerduty: v0.3.0
  rediscloud: v0.3.0
  upcloud: v0.3.0
  version: v2021.08.02
  vsphere: v0.3.0
  vultr: v0.3.0
  wavefront: v0.3.0
---

## VpnServerConfiguration
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `VpnServerConfiguration` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[VpnServerConfigurationSpec](#vpnserverconfigurationspec)***||
| `status` | ***[VpnServerConfigurationStatus](#vpnserverconfigurationstatus)***||
## Phase(`string` alias)

Appears on:[VpnServerConfigurationStatus](#vpnserverconfigurationstatus)

## VpnServerConfigurationSpec

Appears on:[VpnServerConfiguration](#vpnserverconfiguration), [VpnServerConfigurationStatus](#vpnserverconfigurationstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `secretRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `azureActiveDirectoryAuthentication` | ***[[]VpnServerConfigurationSpecAzureActiveDirectoryAuthentication](#vpnserverconfigurationspecazureactivedirectoryauthentication)***| ***(Optional)*** |
| `clientRevokedCertificate` | ***[[]VpnServerConfigurationSpecClientRevokedCertificate](#vpnserverconfigurationspecclientrevokedcertificate)***| ***(Optional)*** |
| `clientRootCertificate` | ***[[]VpnServerConfigurationSpecClientRootCertificate](#vpnserverconfigurationspecclientrootcertificate)***| ***(Optional)*** |
| `ipsecPolicy` | ***[[]VpnServerConfigurationSpecIpsecPolicy](#vpnserverconfigurationspecipsecpolicy)***| ***(Optional)*** |
| `location` | ***string***||
| `name` | ***string***||
| `radiusServer` | ***[[]VpnServerConfigurationSpecRadiusServer](#vpnserverconfigurationspecradiusserver)***| ***(Optional)*** |
| `resourceGroupName` | ***string***||
| `tags` | ***map[string]string***| ***(Optional)*** |
| `vpnAuthenticationTypes` | ***[]string***||
| `vpnProtocols` | ***[]string***| ***(Optional)*** |
## VpnServerConfigurationSpecAzureActiveDirectoryAuthentication

Appears on:[VpnServerConfigurationSpec](#vpnserverconfigurationspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `audience` | ***string***||
| `issuer` | ***string***||
| `tenant` | ***string***||
## VpnServerConfigurationSpecClientRevokedCertificate

Appears on:[VpnServerConfigurationSpec](#vpnserverconfigurationspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `name` | ***string***||
| `thumbprint` | ***string***||
## VpnServerConfigurationSpecClientRootCertificate

Appears on:[VpnServerConfigurationSpec](#vpnserverconfigurationspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `name` | ***string***||
| `publicCertData` | ***string***||
## VpnServerConfigurationSpecIpsecPolicy

Appears on:[VpnServerConfigurationSpec](#vpnserverconfigurationspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `dhGroup` | ***string***||
| `ikeEncryption` | ***string***||
| `ikeIntegrity` | ***string***||
| `ipsecEncryption` | ***string***||
| `ipsecIntegrity` | ***string***||
| `pfsGroup` | ***string***||
| `saDataSizeKilobytes` | ***int64***||
| `saLifetimeSeconds` | ***int64***||
## VpnServerConfigurationSpecRadiusServer

Appears on:[VpnServerConfigurationSpec](#vpnserverconfigurationspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `address` | ***string***||
| `clientRootCertificate` | ***[[]VpnServerConfigurationSpecRadiusServerClientRootCertificate](#vpnserverconfigurationspecradiusserverclientrootcertificate)***| ***(Optional)*** |
| `serverRootCertificate` | ***[[]VpnServerConfigurationSpecRadiusServerServerRootCertificate](#vpnserverconfigurationspecradiusserverserverrootcertificate)***||
## VpnServerConfigurationSpecRadiusServerClientRootCertificate

Appears on:[VpnServerConfigurationSpecRadiusServer](#vpnserverconfigurationspecradiusserver)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `name` | ***string***||
| `thumbprint` | ***string***||
## VpnServerConfigurationSpecRadiusServerServerRootCertificate

Appears on:[VpnServerConfigurationSpecRadiusServer](#vpnserverconfigurationspecradiusserver)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `name` | ***string***||
| `publicCertData` | ***string***||
## VpnServerConfigurationStatus

Appears on:[VpnServerConfiguration](#vpnserverconfiguration)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[VpnServerConfigurationSpec](#vpnserverconfigurationspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
## Sensitive Values
| Name | Type | Description |
|------|------|-------------|
| `radius_server.<index>.secret` | ***string*** ||
