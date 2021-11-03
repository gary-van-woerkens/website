---
title: ApiGatewayMethodSettings
menu:
  docs_v2021.10.29:
    identifier: apigatewaymethodsettings-aws.kubeform.com
    name: ApiGatewayMethodSettings
    parent: aws.kubeform.com-reference
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

## ApiGatewayMethodSettings
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `ApiGatewayMethodSettings` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ApiGatewayMethodSettingsSpec](#apigatewaymethodsettingsspec)***||
| `status` | ***[ApiGatewayMethodSettingsStatus](#apigatewaymethodsettingsstatus)***||
## ApiGatewayMethodSettingsSpec

Appears on:[ApiGatewayMethodSettings](#apigatewaymethodsettings), [ApiGatewayMethodSettingsStatus](#apigatewaymethodsettingsstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `methodPath` | ***string***||
| `restAPIID` | ***string***||
| `settings` | ***[[]ApiGatewayMethodSettingsSpecSettings](#apigatewaymethodsettingsspecsettings)***||
| `stageName` | ***string***||
## ApiGatewayMethodSettingsSpecSettings

Appears on:[ApiGatewayMethodSettingsSpec](#apigatewaymethodsettingsspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `cacheDataEncrypted` | ***bool***| ***(Optional)*** |
| `cacheTtlInSeconds` | ***int64***| ***(Optional)*** |
| `cachingEnabled` | ***bool***| ***(Optional)*** |
| `dataTraceEnabled` | ***bool***| ***(Optional)*** |
| `loggingLevel` | ***string***| ***(Optional)*** |
| `metricsEnabled` | ***bool***| ***(Optional)*** |
| `requireAuthorizationForCacheControl` | ***bool***| ***(Optional)*** |
| `throttlingBurstLimit` | ***int64***| ***(Optional)*** |
| `throttlingRateLimit` | ***float64***| ***(Optional)*** |
| `unauthorizedCacheControlHeaderStrategy` | ***string***| ***(Optional)*** |
## ApiGatewayMethodSettingsStatus

Appears on:[ApiGatewayMethodSettings](#apigatewaymethodsettings)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ApiGatewayMethodSettingsSpec](#apigatewaymethodsettingsspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[ApiGatewayMethodSettingsStatus](#apigatewaymethodsettingsstatus)

---
