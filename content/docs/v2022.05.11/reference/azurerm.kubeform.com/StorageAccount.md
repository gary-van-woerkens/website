---
title: StorageAccount
menu:
  docs_v2022.05.11:
    identifier: storageaccount-azurerm.kubeform.com
    name: StorageAccount
    parent: azurerm.kubeform.com-reference
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

## StorageAccount
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `StorageAccount` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-22.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[StorageAccountSpec](#storageaccountspec)***||
| `status` | ***[StorageAccountStatus](#storageaccountstatus)***||
## Phase(`string` alias)

Appears on:[StorageAccountStatus](#storageaccountstatus)

## StorageAccountSpec

Appears on:[StorageAccount](#storageaccount), [StorageAccountStatus](#storageaccountstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-22.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `secretRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-22.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#localobjectreference-v1-core)***||
| `accessTier` | ***string***| ***(Optional)*** |
| `accountEncryptionSource` | ***string***| ***(Optional)*** |
| `accountKind` | ***string***| ***(Optional)*** |
| `accountReplicationType` | ***string***||
| `accountTier` | ***string***||
| `accountType` | ***string***| ***(Optional)*** Deprecated|
| `blobProperties` | ***[[]StorageAccountSpecBlobProperties](#storageaccountspecblobproperties)***| ***(Optional)*** |
| `customDomain` | ***[[]StorageAccountSpecCustomDomain](#storageaccountspeccustomdomain)***| ***(Optional)*** |
| `enableAdvancedThreatProtection` | ***bool***| ***(Optional)*** Deprecated|
| `enableBlobEncryption` | ***bool***| ***(Optional)*** |
| `enableFileEncryption` | ***bool***| ***(Optional)*** |
| `enableHTTPSTrafficOnly` | ***bool***| ***(Optional)*** |
| `identity` | ***[[]StorageAccountSpecIdentity](#storageaccountspecidentity)***| ***(Optional)*** |
| `isHnsEnabled` | ***bool***| ***(Optional)*** |
| `location` | ***string***||
| `name` | ***string***||
| `networkRules` | ***[[]StorageAccountSpecNetworkRules](#storageaccountspecnetworkrules)***| ***(Optional)*** |
| `primaryBlobEndpoint` | ***string***| ***(Optional)*** |
| `primaryBlobHost` | ***string***| ***(Optional)*** |
| `primaryDfsEndpoint` | ***string***| ***(Optional)*** |
| `primaryDfsHost` | ***string***| ***(Optional)*** |
| `primaryFileEndpoint` | ***string***| ***(Optional)*** |
| `primaryFileHost` | ***string***| ***(Optional)*** |
| `primaryLocation` | ***string***| ***(Optional)*** |
| `primaryQueueEndpoint` | ***string***| ***(Optional)*** |
| `primaryQueueHost` | ***string***| ***(Optional)*** |
| `primaryTableEndpoint` | ***string***| ***(Optional)*** |
| `primaryTableHost` | ***string***| ***(Optional)*** |
| `primaryWebEndpoint` | ***string***| ***(Optional)*** |
| `primaryWebHost` | ***string***| ***(Optional)*** |
| `queueProperties` | ***[[]StorageAccountSpecQueueProperties](#storageaccountspecqueueproperties)***| ***(Optional)*** |
| `resourceGroupName` | ***string***||
| `secondaryBlobEndpoint` | ***string***| ***(Optional)*** |
| `secondaryBlobHost` | ***string***| ***(Optional)*** |
| `secondaryDfsEndpoint` | ***string***| ***(Optional)*** |
| `secondaryDfsHost` | ***string***| ***(Optional)*** |
| `secondaryFileEndpoint` | ***string***| ***(Optional)*** |
| `secondaryFileHost` | ***string***| ***(Optional)*** |
| `secondaryLocation` | ***string***| ***(Optional)*** |
| `secondaryQueueEndpoint` | ***string***| ***(Optional)*** |
| `secondaryQueueHost` | ***string***| ***(Optional)*** |
| `secondaryTableEndpoint` | ***string***| ***(Optional)*** |
| `secondaryTableHost` | ***string***| ***(Optional)*** |
| `secondaryWebEndpoint` | ***string***| ***(Optional)*** |
| `secondaryWebHost` | ***string***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
## StorageAccountSpecBlobProperties

Appears on:[StorageAccountSpec](#storageaccountspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `deleteRetentionPolicy` | ***[[]StorageAccountSpecBlobPropertiesDeleteRetentionPolicy](#storageaccountspecblobpropertiesdeleteretentionpolicy)***| ***(Optional)*** |
## StorageAccountSpecBlobPropertiesDeleteRetentionPolicy

Appears on:[StorageAccountSpecBlobProperties](#storageaccountspecblobproperties)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `days` | ***int64***| ***(Optional)*** |
## StorageAccountSpecCustomDomain

Appears on:[StorageAccountSpec](#storageaccountspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `name` | ***string***||
| `useSubdomain` | ***bool***| ***(Optional)*** |
## StorageAccountSpecIdentity

Appears on:[StorageAccountSpec](#storageaccountspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `principalID` | ***string***| ***(Optional)*** |
| `tenantID` | ***string***| ***(Optional)*** |
| `type` | ***string***||
## StorageAccountSpecNetworkRules

Appears on:[StorageAccountSpec](#storageaccountspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `bypass` | ***[]string***| ***(Optional)*** |
| `defaultAction` | ***string***||
| `ipRules` | ***[]string***| ***(Optional)*** |
| `virtualNetworkSubnetIDS` | ***[]string***| ***(Optional)*** |
## StorageAccountSpecQueueProperties

Appears on:[StorageAccountSpec](#storageaccountspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `corsRule` | ***[[]StorageAccountSpecQueuePropertiesCorsRule](#storageaccountspecqueuepropertiescorsrule)***| ***(Optional)*** |
| `hourMetrics` | ***[[]StorageAccountSpecQueuePropertiesHourMetrics](#storageaccountspecqueuepropertieshourmetrics)***| ***(Optional)*** |
| `logging` | ***[[]StorageAccountSpecQueuePropertiesLogging](#storageaccountspecqueuepropertieslogging)***| ***(Optional)*** |
| `minuteMetrics` | ***[[]StorageAccountSpecQueuePropertiesMinuteMetrics](#storageaccountspecqueuepropertiesminutemetrics)***| ***(Optional)*** |
## StorageAccountSpecQueuePropertiesCorsRule

Appears on:[StorageAccountSpecQueueProperties](#storageaccountspecqueueproperties)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `allowedHeaders` | ***[]string***||
| `allowedMethods` | ***[]string***||
| `allowedOrigins` | ***[]string***||
| `exposedHeaders` | ***[]string***||
| `maxAgeInSeconds` | ***int64***||
## StorageAccountSpecQueuePropertiesHourMetrics

Appears on:[StorageAccountSpecQueueProperties](#storageaccountspecqueueproperties)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `enabled` | ***bool***||
| `includeApis` | ***bool***| ***(Optional)*** |
| `retentionPolicyDays` | ***int64***| ***(Optional)*** |
| `version` | ***string***||
## StorageAccountSpecQueuePropertiesLogging

Appears on:[StorageAccountSpecQueueProperties](#storageaccountspecqueueproperties)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `delete` | ***bool***||
| `read` | ***bool***||
| `retentionPolicyDays` | ***int64***| ***(Optional)*** |
| `version` | ***string***||
| `write` | ***bool***||
## StorageAccountSpecQueuePropertiesMinuteMetrics

Appears on:[StorageAccountSpecQueueProperties](#storageaccountspecqueueproperties)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `enabled` | ***bool***||
| `includeApis` | ***bool***| ***(Optional)*** |
| `retentionPolicyDays` | ***int64***| ***(Optional)*** |
| `version` | ***string***||
## StorageAccountStatus

Appears on:[StorageAccount](#storageaccount)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[StorageAccountSpec](#storageaccountspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
## Sensitive Values
| Name | Type | Description |
|------|------|-------------|
| `primary_access_key` | ***string*** ||
| `primary_blob_connection_string` | ***string*** ||
| `primary_connection_string` | ***string*** ||
| `secondary_access_key` | ***string*** ||
| `secondary_blob_connection_string` | ***string*** ||
| `secondary_connection_string` | ***string*** ||
