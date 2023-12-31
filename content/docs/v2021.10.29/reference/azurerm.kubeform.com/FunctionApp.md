---
title: FunctionApp
menu:
  docs_v2021.10.29:
    identifier: functionapp-azurerm.kubeform.com
    name: FunctionApp
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

## FunctionApp
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `FunctionApp` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[FunctionAppSpec](#functionappspec)***||
| `status` | ***[FunctionAppStatus](#functionappstatus)***||
## FunctionAppSpec

Appears on:[FunctionApp](#functionapp), [FunctionAppStatus](#functionappstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `secretRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `appServicePlanID` | ***string***||
| `appSettings` | ***map[string]string***| ***(Optional)*** |
| `authSettings` | ***[[]FunctionAppSpecAuthSettings](#functionappspecauthsettings)***| ***(Optional)*** |
| `clientAffinityEnabled` | ***bool***| ***(Optional)*** |
| `connectionString` | ***[[]FunctionAppSpecConnectionString](#functionappspecconnectionstring)***| ***(Optional)*** |
| `defaultHostname` | ***string***| ***(Optional)*** |
| `enableBuiltinLogging` | ***bool***| ***(Optional)*** |
| `enabled` | ***bool***| ***(Optional)*** |
| `httpsOnly` | ***bool***| ***(Optional)*** |
| `identity` | ***[[]FunctionAppSpecIdentity](#functionappspecidentity)***| ***(Optional)*** |
| `kind` | ***string***| ***(Optional)*** |
| `location` | ***string***||
| `name` | ***string***||
| `outboundIPAddresses` | ***string***| ***(Optional)*** |
| `possibleOutboundIPAddresses` | ***string***| ***(Optional)*** |
| `resourceGroupName` | ***string***||
| `siteConfig` | ***[[]FunctionAppSpecSiteConfig](#functionappspecsiteconfig)***| ***(Optional)*** |
| `siteCredential` | ***[[]FunctionAppSpecSiteCredential](#functionappspecsitecredential)***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
| `version` | ***string***| ***(Optional)*** |
## FunctionAppSpecAuthSettings

Appears on:[FunctionAppSpec](#functionappspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `activeDirectory` | ***[[]FunctionAppSpecAuthSettingsActiveDirectory](#functionappspecauthsettingsactivedirectory)***| ***(Optional)*** |
| `additionalLoginParams` | ***map[string]string***| ***(Optional)*** |
| `allowedExternalRedirectUrls` | ***[]string***| ***(Optional)*** |
| `defaultProvider` | ***string***| ***(Optional)*** |
| `enabled` | ***bool***||
| `facebook` | ***[[]FunctionAppSpecAuthSettingsFacebook](#functionappspecauthsettingsfacebook)***| ***(Optional)*** |
| `google` | ***[[]FunctionAppSpecAuthSettingsGoogle](#functionappspecauthsettingsgoogle)***| ***(Optional)*** |
| `issuer` | ***string***| ***(Optional)*** |
| `microsoft` | ***[[]FunctionAppSpecAuthSettingsMicrosoft](#functionappspecauthsettingsmicrosoft)***| ***(Optional)*** |
| `runtimeVersion` | ***string***| ***(Optional)*** |
| `tokenRefreshExtensionHours` | ***float64***| ***(Optional)*** |
| `tokenStoreEnabled` | ***bool***| ***(Optional)*** |
| `twitter` | ***[[]FunctionAppSpecAuthSettingsTwitter](#functionappspecauthsettingstwitter)***| ***(Optional)*** |
| `unauthenticatedClientAction` | ***string***| ***(Optional)*** |
## FunctionAppSpecAuthSettingsActiveDirectory

Appears on:[FunctionAppSpecAuthSettings](#functionappspecauthsettings)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `allowedAudiences` | ***[]string***| ***(Optional)*** |
| `clientID` | ***string***||
## FunctionAppSpecAuthSettingsFacebook

Appears on:[FunctionAppSpecAuthSettings](#functionappspecauthsettings)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `appID` | ***string***||
| `oauthScopes` | ***[]string***| ***(Optional)*** |
## FunctionAppSpecAuthSettingsGoogle

Appears on:[FunctionAppSpecAuthSettings](#functionappspecauthsettings)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `clientID` | ***string***||
| `oauthScopes` | ***[]string***| ***(Optional)*** |
## FunctionAppSpecAuthSettingsMicrosoft

Appears on:[FunctionAppSpecAuthSettings](#functionappspecauthsettings)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `clientID` | ***string***||
| `oauthScopes` | ***[]string***| ***(Optional)*** |
## FunctionAppSpecAuthSettingsTwitter

Appears on:[FunctionAppSpecAuthSettings](#functionappspecauthsettings)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `consumerKey` | ***string***||
## FunctionAppSpecConnectionString

Appears on:[FunctionAppSpec](#functionappspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `name` | ***string***||
| `type` | ***string***||
## FunctionAppSpecIdentity

Appears on:[FunctionAppSpec](#functionappspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `identityIDS` | ***[]string***| ***(Optional)*** |
| `principalID` | ***string***| ***(Optional)*** |
| `tenantID` | ***string***| ***(Optional)*** |
| `type` | ***string***||
## FunctionAppSpecSiteConfig

Appears on:[FunctionAppSpec](#functionappspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `alwaysOn` | ***bool***| ***(Optional)*** |
| `cors` | ***[[]FunctionAppSpecSiteConfigCors](#functionappspecsiteconfigcors)***| ***(Optional)*** |
| `ftpsState` | ***string***| ***(Optional)*** |
| `http2Enabled` | ***bool***| ***(Optional)*** |
| `ipRestriction` | ***[[]FunctionAppSpecSiteConfigIpRestriction](#functionappspecsiteconfigiprestriction)***| ***(Optional)*** |
| `linuxFxVersion` | ***string***| ***(Optional)*** |
| `minTLSVersion` | ***string***| ***(Optional)*** |
| `use32BitWorkerProcess` | ***bool***| ***(Optional)*** |
| `virtualNetworkName` | ***string***| ***(Optional)*** |
| `websocketsEnabled` | ***bool***| ***(Optional)*** |
## FunctionAppSpecSiteConfigCors

Appears on:[FunctionAppSpecSiteConfig](#functionappspecsiteconfig)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `allowedOrigins` | ***[]string***||
| `supportCredentials` | ***bool***| ***(Optional)*** |
## FunctionAppSpecSiteConfigIpRestriction

Appears on:[FunctionAppSpecSiteConfig](#functionappspecsiteconfig)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `ipAddress` | ***string***| ***(Optional)*** |
| `subnetID` | ***string***| ***(Optional)*** |
## FunctionAppSpecSiteCredential

Appears on:[FunctionAppSpec](#functionappspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `username` | ***string***| ***(Optional)*** |
## FunctionAppStatus

Appears on:[FunctionApp](#functionapp)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[FunctionAppSpec](#functionappspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[FunctionAppStatus](#functionappstatus)

---
## Sensitive Values
| Name | Type | Description |
|------|------|-------------|
| `auth_settings.<index>.active_directory.<index>.client_secret` | ***string*** ||
| `auth_settings.<index>.facebook.<index>.app_secret` | ***string*** ||
| `auth_settings.<index>.google.<index>.client_secret` | ***string*** ||
| `auth_settings.<index>.microsoft.<index>.client_secret` | ***string*** ||
| `auth_settings.<index>.twitter.<index>.consumer_secret` | ***string*** ||
| `connection_string.<index>.value` | ***string*** ||
| `site_credential.<index>.password` | ***string*** ||
| `storage_connection_string` | ***string*** ||
