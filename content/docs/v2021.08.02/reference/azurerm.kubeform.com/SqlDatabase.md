---
title: SqlDatabase
menu:
  docs_v2021.08.02:
    identifier: sqldatabase-azurerm.kubeform.com
    name: SqlDatabase
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

## SqlDatabase
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `SqlDatabase` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[SqlDatabaseSpec](#sqldatabasespec)***||
| `status` | ***[SqlDatabaseStatus](#sqldatabasestatus)***||
## Phase(`string` alias)

Appears on:[SqlDatabaseStatus](#sqldatabasestatus)

## SqlDatabaseSpec

Appears on:[SqlDatabase](#sqldatabase), [SqlDatabaseStatus](#sqldatabasestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `secretRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `collation` | ***string***| ***(Optional)*** |
| `createMode` | ***string***| ***(Optional)*** |
| `creationDate` | ***string***| ***(Optional)*** |
| `defaultSecondaryLocation` | ***string***| ***(Optional)*** |
| `edition` | ***string***| ***(Optional)*** |
| `elasticPoolName` | ***string***| ***(Optional)*** |
| `encryption` | ***string***| ***(Optional)*** |
| `import` | ***[[]SqlDatabaseSpecImport](#sqldatabasespecimport)***| ***(Optional)*** |
| `location` | ***string***||
| `maxSizeBytes` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `readScale` | ***bool***| ***(Optional)*** |
| `requestedServiceObjectiveID` | ***string***| ***(Optional)*** |
| `requestedServiceObjectiveName` | ***string***| ***(Optional)*** |
| `resourceGroupName` | ***string***||
| `restorePointInTime` | ***string***| ***(Optional)*** |
| `serverName` | ***string***||
| `sourceDatabaseDeletionDate` | ***string***| ***(Optional)*** |
| `sourceDatabaseID` | ***string***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
| `threatDetectionPolicy` | ***[[]SqlDatabaseSpecThreatDetectionPolicy](#sqldatabasespecthreatdetectionpolicy)***| ***(Optional)*** |
## SqlDatabaseSpecImport

Appears on:[SqlDatabaseSpec](#sqldatabasespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `administratorLogin` | ***string***||
| `authenticationType` | ***string***||
| `operationMode` | ***string***| ***(Optional)*** |
| `storageKeyType` | ***string***||
| `storageURI` | ***string***||
## SqlDatabaseSpecThreatDetectionPolicy

Appears on:[SqlDatabaseSpec](#sqldatabasespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `disabledAlerts` | ***[]string***| ***(Optional)*** |
| `emailAccountAdmins` | ***string***| ***(Optional)*** |
| `emailAddresses` | ***[]string***| ***(Optional)*** |
| `retentionDays` | ***int64***| ***(Optional)*** |
| `state` | ***string***| ***(Optional)*** |
| `storageEndpoint` | ***string***| ***(Optional)*** |
| `useServerDefault` | ***string***| ***(Optional)*** |
## SqlDatabaseStatus

Appears on:[SqlDatabase](#sqldatabase)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[SqlDatabaseSpec](#sqldatabasespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
## Sensitive Values
| Name | Type | Description |
|------|------|-------------|
| `import.<index>.administrator_login_password` | ***string*** ||
| `import.<index>.storage_key` | ***string*** ||
| `threat_detection_policy.<index>.storage_account_access_key` | ***string*** ||
