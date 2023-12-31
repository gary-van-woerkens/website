---
title: SqlDatabaseInstance
menu:
  docs_v2022.05.11:
    identifier: sqldatabaseinstance-google.kubeform.com
    name: SqlDatabaseInstance
    parent: google.kubeform.com-reference
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

## SqlDatabaseInstance
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `google.kubeform.com/v1alpha1` |
|    `kind` | string | `SqlDatabaseInstance` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-22.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[SqlDatabaseInstanceSpec](#sqldatabaseinstancespec)***||
| `status` | ***[SqlDatabaseInstanceStatus](#sqldatabaseinstancestatus)***||
## Phase(`string` alias)

Appears on:[SqlDatabaseInstanceStatus](#sqldatabaseinstancestatus)

## SqlDatabaseInstanceSpec

Appears on:[SqlDatabaseInstance](#sqldatabaseinstance), [SqlDatabaseInstanceStatus](#sqldatabaseinstancestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-22.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `secretRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-22.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#localobjectreference-v1-core)***||
| `connectionName` | ***string***| ***(Optional)*** |
| `databaseVersion` | ***string***| ***(Optional)*** |
| `firstIPAddress` | ***string***| ***(Optional)*** |
| `ipAddress` | ***[[]SqlDatabaseInstanceSpecIpAddress](#sqldatabaseinstancespecipaddress)***| ***(Optional)*** |
| `masterInstanceName` | ***string***| ***(Optional)*** |
| `name` | ***string***| ***(Optional)*** |
| `privateIPAddress` | ***string***| ***(Optional)*** |
| `project` | ***string***| ***(Optional)*** |
| `publicIPAddress` | ***string***| ***(Optional)*** |
| `region` | ***string***| ***(Optional)*** |
| `replicaConfiguration` | ***[[]SqlDatabaseInstanceSpecReplicaConfiguration](#sqldatabaseinstancespecreplicaconfiguration)***| ***(Optional)*** |
| `selfLink` | ***string***| ***(Optional)*** |
| `serverCaCert` | ***[[]SqlDatabaseInstanceSpecServerCaCert](#sqldatabaseinstancespecservercacert)***| ***(Optional)*** |
| `serviceAccountEmailAddress` | ***string***| ***(Optional)*** |
| `settings` | ***[[]SqlDatabaseInstanceSpecSettings](#sqldatabaseinstancespecsettings)***||
## SqlDatabaseInstanceSpecIpAddress

Appears on:[SqlDatabaseInstanceSpec](#sqldatabaseinstancespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `ipAddress` | ***string***| ***(Optional)*** |
| `timeToRetire` | ***string***| ***(Optional)*** |
| `type` | ***string***| ***(Optional)*** |
## SqlDatabaseInstanceSpecReplicaConfiguration

Appears on:[SqlDatabaseInstanceSpec](#sqldatabaseinstancespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `caCertificate` | ***string***| ***(Optional)*** |
| `clientCertificate` | ***string***| ***(Optional)*** |
| `clientKey` | ***string***| ***(Optional)*** |
| `connectRetryInterval` | ***int64***| ***(Optional)*** |
| `dumpFilePath` | ***string***| ***(Optional)*** |
| `failoverTarget` | ***bool***| ***(Optional)*** |
| `masterHeartbeatPeriod` | ***int64***| ***(Optional)*** |
| `sslCipher` | ***string***| ***(Optional)*** |
| `username` | ***string***| ***(Optional)*** |
| `verifyServerCertificate` | ***bool***| ***(Optional)*** |
## SqlDatabaseInstanceSpecServerCaCert

Appears on:[SqlDatabaseInstanceSpec](#sqldatabaseinstancespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `cert` | ***string***| ***(Optional)*** |
| `commonName` | ***string***| ***(Optional)*** |
| `createTime` | ***string***| ***(Optional)*** |
| `expirationTime` | ***string***| ***(Optional)*** |
| `sha1Fingerprint` | ***string***| ***(Optional)*** |
## SqlDatabaseInstanceSpecSettings

Appears on:[SqlDatabaseInstanceSpec](#sqldatabaseinstancespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `activationPolicy` | ***string***| ***(Optional)*** |
| `authorizedGaeApplications` | ***[]string***| ***(Optional)*** |
| `availabilityType` | ***string***| ***(Optional)*** |
| `backupConfiguration` | ***[[]SqlDatabaseInstanceSpecSettingsBackupConfiguration](#sqldatabaseinstancespecsettingsbackupconfiguration)***| ***(Optional)*** |
| `crashSafeReplication` | ***bool***| ***(Optional)*** |
| `databaseFlags` | ***[[]SqlDatabaseInstanceSpecSettingsDatabaseFlags](#sqldatabaseinstancespecsettingsdatabaseflags)***| ***(Optional)*** |
| `diskAutoresize` | ***bool***| ***(Optional)*** |
| `diskSize` | ***int64***| ***(Optional)*** |
| `diskType` | ***string***| ***(Optional)*** |
| `ipConfiguration` | ***[[]SqlDatabaseInstanceSpecSettingsIpConfiguration](#sqldatabaseinstancespecsettingsipconfiguration)***| ***(Optional)*** |
| `locationPreference` | ***[[]SqlDatabaseInstanceSpecSettingsLocationPreference](#sqldatabaseinstancespecsettingslocationpreference)***| ***(Optional)*** |
| `maintenanceWindow` | ***[[]SqlDatabaseInstanceSpecSettingsMaintenanceWindow](#sqldatabaseinstancespecsettingsmaintenancewindow)***| ***(Optional)*** |
| `pricingPlan` | ***string***| ***(Optional)*** |
| `replicationType` | ***string***| ***(Optional)*** |
| `tier` | ***string***||
| `userLabels` | ***map[string]string***| ***(Optional)*** |
| `version` | ***int64***| ***(Optional)*** |
## SqlDatabaseInstanceSpecSettingsBackupConfiguration

Appears on:[SqlDatabaseInstanceSpecSettings](#sqldatabaseinstancespecsettings)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `binaryLogEnabled` | ***bool***| ***(Optional)*** |
| `enabled` | ***bool***| ***(Optional)*** |
| `startTime` | ***string***| ***(Optional)*** |
## SqlDatabaseInstanceSpecSettingsDatabaseFlags

Appears on:[SqlDatabaseInstanceSpecSettings](#sqldatabaseinstancespecsettings)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `name` | ***string***| ***(Optional)*** |
| `value` | ***string***| ***(Optional)*** |
## SqlDatabaseInstanceSpecSettingsIpConfiguration

Appears on:[SqlDatabaseInstanceSpecSettings](#sqldatabaseinstancespecsettings)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `authorizedNetworks` | ***[[]SqlDatabaseInstanceSpecSettingsIpConfigurationAuthorizedNetworks](#sqldatabaseinstancespecsettingsipconfigurationauthorizednetworks)***| ***(Optional)*** |
| `ipv4Enabled` | ***bool***| ***(Optional)*** |
| `privateNetwork` | ***string***| ***(Optional)*** |
| `requireSSL` | ***bool***| ***(Optional)*** |
## SqlDatabaseInstanceSpecSettingsIpConfigurationAuthorizedNetworks

Appears on:[SqlDatabaseInstanceSpecSettingsIpConfiguration](#sqldatabaseinstancespecsettingsipconfiguration)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `expirationTime` | ***string***| ***(Optional)*** |
| `name` | ***string***| ***(Optional)*** |
| `value` | ***string***| ***(Optional)*** |
## SqlDatabaseInstanceSpecSettingsLocationPreference

Appears on:[SqlDatabaseInstanceSpecSettings](#sqldatabaseinstancespecsettings)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `followGaeApplication` | ***string***| ***(Optional)*** |
| `zone` | ***string***| ***(Optional)*** |
## SqlDatabaseInstanceSpecSettingsMaintenanceWindow

Appears on:[SqlDatabaseInstanceSpecSettings](#sqldatabaseinstancespecsettings)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `day` | ***int64***| ***(Optional)*** |
| `hour` | ***int64***| ***(Optional)*** |
| `updateTrack` | ***string***| ***(Optional)*** |
## SqlDatabaseInstanceStatus

Appears on:[SqlDatabaseInstance](#sqldatabaseinstance)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[SqlDatabaseInstanceSpec](#sqldatabaseinstancespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
## Sensitive Values
| Name | Type | Description |
|------|------|-------------|
| `replica_configuration.<index>.password` | ***string*** ||
