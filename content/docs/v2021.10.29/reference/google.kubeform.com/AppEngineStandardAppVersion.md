---
title: AppEngineStandardAppVersion
menu:
  docs_v2021.10.29:
    identifier: appenginestandardappversion-google.kubeform.com
    name: AppEngineStandardAppVersion
    parent: google.kubeform.com-reference
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

## AppEngineStandardAppVersion
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `google.kubeform.com/v1alpha1` |
|    `kind` | string | `AppEngineStandardAppVersion` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[AppEngineStandardAppVersionSpec](#appenginestandardappversionspec)***||
| `status` | ***[AppEngineStandardAppVersionStatus](#appenginestandardappversionstatus)***||
## AppEngineStandardAppVersionSpec

Appears on:[AppEngineStandardAppVersion](#appenginestandardappversion), [AppEngineStandardAppVersionStatus](#appenginestandardappversionstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `deployment` | ***[[]AppEngineStandardAppVersionSpecDeployment](#appenginestandardappversionspecdeployment)***| ***(Optional)*** |
| `entrypoint` | ***[[]AppEngineStandardAppVersionSpecEntrypoint](#appenginestandardappversionspecentrypoint)***| ***(Optional)*** |
| `envVariables` | ***map[string]string***| ***(Optional)*** |
| `handlers` | ***[[]AppEngineStandardAppVersionSpecHandlers](#appenginestandardappversionspechandlers)***| ***(Optional)*** |
| `libraries` | ***[[]AppEngineStandardAppVersionSpecLibraries](#appenginestandardappversionspeclibraries)***| ***(Optional)*** |
| `name` | ***string***| ***(Optional)*** |
| `noopOnDestroy` | ***bool***| ***(Optional)*** |
| `project` | ***string***| ***(Optional)*** |
| `runtime` | ***string***||
| `runtimeAPIVersion` | ***string***| ***(Optional)*** |
| `service` | ***string***| ***(Optional)*** |
| `threadsafe` | ***bool***| ***(Optional)*** |
| `versionID` | ***string***| ***(Optional)*** |
## AppEngineStandardAppVersionSpecDeployment

Appears on:[AppEngineStandardAppVersionSpec](#appenginestandardappversionspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `files` | ***[[]AppEngineStandardAppVersionSpecDeploymentFiles](#appenginestandardappversionspecdeploymentfiles)***| ***(Optional)*** |
| `zip` | ***[[]AppEngineStandardAppVersionSpecDeploymentZip](#appenginestandardappversionspecdeploymentzip)***| ***(Optional)*** |
## AppEngineStandardAppVersionSpecDeploymentFiles

Appears on:[AppEngineStandardAppVersionSpecDeployment](#appenginestandardappversionspecdeployment)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `name` | ***string***||
| `sha1Sum` | ***string***| ***(Optional)*** |
| `sourceURL` | ***string***| ***(Optional)*** |
## AppEngineStandardAppVersionSpecDeploymentZip

Appears on:[AppEngineStandardAppVersionSpecDeployment](#appenginestandardappversionspecdeployment)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `filesCount` | ***int64***| ***(Optional)*** |
| `sourceURL` | ***string***| ***(Optional)*** |
## AppEngineStandardAppVersionSpecEntrypoint

Appears on:[AppEngineStandardAppVersionSpec](#appenginestandardappversionspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `shell` | ***string***| ***(Optional)*** |
## AppEngineStandardAppVersionSpecHandlers

Appears on:[AppEngineStandardAppVersionSpec](#appenginestandardappversionspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `authFailAction` | ***string***| ***(Optional)*** |
| `login` | ***string***| ***(Optional)*** |
| `redirectHTTPResponseCode` | ***string***| ***(Optional)*** |
| `script` | ***[[]AppEngineStandardAppVersionSpecHandlersScript](#appenginestandardappversionspechandlersscript)***| ***(Optional)*** |
| `securityLevel` | ***string***| ***(Optional)*** |
| `staticFiles` | ***[[]AppEngineStandardAppVersionSpecHandlersStaticFiles](#appenginestandardappversionspechandlersstaticfiles)***| ***(Optional)*** |
| `urlRegex` | ***string***| ***(Optional)*** |
## AppEngineStandardAppVersionSpecHandlersScript

Appears on:[AppEngineStandardAppVersionSpecHandlers](#appenginestandardappversionspechandlers)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `scriptPath` | ***string***| ***(Optional)*** |
## AppEngineStandardAppVersionSpecHandlersStaticFiles

Appears on:[AppEngineStandardAppVersionSpecHandlers](#appenginestandardappversionspechandlers)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `applicationReadable` | ***bool***| ***(Optional)*** |
| `expiration` | ***string***| ***(Optional)*** |
| `httpHeaders` | ***map[string]string***| ***(Optional)*** |
| `mimeType` | ***string***| ***(Optional)*** |
| `path` | ***string***| ***(Optional)*** |
| `requireMatchingFile` | ***bool***| ***(Optional)*** |
| `uploadPathRegex` | ***string***| ***(Optional)*** |
## AppEngineStandardAppVersionSpecLibraries

Appears on:[AppEngineStandardAppVersionSpec](#appenginestandardappversionspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `name` | ***string***| ***(Optional)*** |
| `version` | ***string***| ***(Optional)*** |
## AppEngineStandardAppVersionStatus

Appears on:[AppEngineStandardAppVersion](#appenginestandardappversion)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[AppEngineStandardAppVersionSpec](#appenginestandardappversionspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[AppEngineStandardAppVersionStatus](#appenginestandardappversionstatus)

---
