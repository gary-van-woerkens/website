---
title: CloudSchedulerJob
menu:
  docs_v2021.10.29:
    identifier: cloudschedulerjob-google.kubeform.com
    name: CloudSchedulerJob
    parent: google.kubeform.com-reference
    weight: 1
menu_name: docs_v2021.10.29
section_menu_id: reference
info:
  alicloud: v0.4.0
  aws: v0.4.0
  azurerm: v0.4.0
  civo: v0.4.0
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

## CloudSchedulerJob
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `google.kubeform.com/v1alpha1` |
|    `kind` | string | `CloudSchedulerJob` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[CloudSchedulerJobSpec](#cloudschedulerjobspec)***||
| `status` | ***[CloudSchedulerJobStatus](#cloudschedulerjobstatus)***||
## CloudSchedulerJobSpec

Appears on:[CloudSchedulerJob](#cloudschedulerjob), [CloudSchedulerJobStatus](#cloudschedulerjobstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `appEngineHTTPTarget` | ***[[]CloudSchedulerJobSpecAppEngineHTTPTarget](#cloudschedulerjobspecappenginehttptarget)***| ***(Optional)*** |
| `description` | ***string***| ***(Optional)*** |
| `httpTarget` | ***[[]CloudSchedulerJobSpecHttpTarget](#cloudschedulerjobspechttptarget)***| ***(Optional)*** |
| `name` | ***string***||
| `project` | ***string***| ***(Optional)*** |
| `pubsubTarget` | ***[[]CloudSchedulerJobSpecPubsubTarget](#cloudschedulerjobspecpubsubtarget)***| ***(Optional)*** |
| `region` | ***string***| ***(Optional)*** |
| `retryConfig` | ***[[]CloudSchedulerJobSpecRetryConfig](#cloudschedulerjobspecretryconfig)***| ***(Optional)*** |
| `schedule` | ***string***| ***(Optional)*** |
| `timeZone` | ***string***| ***(Optional)*** |
## CloudSchedulerJobSpecAppEngineHTTPTarget

Appears on:[CloudSchedulerJobSpec](#cloudschedulerjobspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `appEngineRouting` | ***[[]CloudSchedulerJobSpecAppEngineHTTPTargetAppEngineRouting](#cloudschedulerjobspecappenginehttptargetappenginerouting)***| ***(Optional)*** |
| `body` | ***string***| ***(Optional)*** |
| `headers` | ***map[string]string***| ***(Optional)*** |
| `httpMethod` | ***string***| ***(Optional)*** |
| `relativeURI` | ***string***||
## CloudSchedulerJobSpecAppEngineHTTPTargetAppEngineRouting

Appears on:[CloudSchedulerJobSpecAppEngineHTTPTarget](#cloudschedulerjobspecappenginehttptarget)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `instance` | ***string***| ***(Optional)*** |
| `service` | ***string***| ***(Optional)*** |
| `version` | ***string***| ***(Optional)*** |
## CloudSchedulerJobSpecHttpTarget

Appears on:[CloudSchedulerJobSpec](#cloudschedulerjobspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `body` | ***string***| ***(Optional)*** |
| `headers` | ***map[string]string***| ***(Optional)*** |
| `httpMethod` | ***string***| ***(Optional)*** |
| `oauthToken` | ***[[]CloudSchedulerJobSpecHttpTargetOauthToken](#cloudschedulerjobspechttptargetoauthtoken)***| ***(Optional)*** |
| `oidcToken` | ***[[]CloudSchedulerJobSpecHttpTargetOidcToken](#cloudschedulerjobspechttptargetoidctoken)***| ***(Optional)*** |
| `uri` | ***string***||
## CloudSchedulerJobSpecHttpTargetOauthToken

Appears on:[CloudSchedulerJobSpecHttpTarget](#cloudschedulerjobspechttptarget)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `scope` | ***string***| ***(Optional)*** |
| `serviceAccountEmail` | ***string***| ***(Optional)*** |
## CloudSchedulerJobSpecHttpTargetOidcToken

Appears on:[CloudSchedulerJobSpecHttpTarget](#cloudschedulerjobspechttptarget)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `audience` | ***string***| ***(Optional)*** |
| `serviceAccountEmail` | ***string***| ***(Optional)*** |
## CloudSchedulerJobSpecPubsubTarget

Appears on:[CloudSchedulerJobSpec](#cloudschedulerjobspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `attributes` | ***map[string]string***| ***(Optional)*** |
| `data` | ***string***| ***(Optional)*** |
| `topicName` | ***string***||
## CloudSchedulerJobSpecRetryConfig

Appears on:[CloudSchedulerJobSpec](#cloudschedulerjobspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `maxBackoffDuration` | ***string***| ***(Optional)*** |
| `maxDoublings` | ***int64***| ***(Optional)*** |
| `maxRetryDuration` | ***string***| ***(Optional)*** |
| `minBackoffDuration` | ***string***| ***(Optional)*** |
| `retryCount` | ***int64***| ***(Optional)*** |
## CloudSchedulerJobStatus

Appears on:[CloudSchedulerJob](#cloudschedulerjob)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[CloudSchedulerJobSpec](#cloudschedulerjobspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[CloudSchedulerJobStatus](#cloudschedulerjobstatus)

---
