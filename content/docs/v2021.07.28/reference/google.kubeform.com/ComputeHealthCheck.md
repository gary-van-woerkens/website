---
title: ComputeHealthCheck
menu:
  docs_v2021.07.28:
    identifier: computehealthcheck-google.kubeform.com
    name: ComputeHealthCheck
    parent: google.kubeform.com-reference
    weight: 1
menu_name: docs_v2021.07.28
section_menu_id: reference
info:
  aws: v0.2.0
  azurerm: v0.2.0
  digitalocean: v0.2.0
  equinixmetal: v0.2.0
  google: v0.2.0
  installer: v2021.07.28
  linode: v0.2.0
  version: v2021.07.28
---

## ComputeHealthCheck
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `google.kubeform.com/v1alpha1` |
|    `kind` | string | `ComputeHealthCheck` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ComputeHealthCheckSpec](#computehealthcheckspec)***||
| `status` | ***[ComputeHealthCheckStatus](#computehealthcheckstatus)***||
## ComputeHealthCheckSpec

Appears on:[ComputeHealthCheck](#computehealthcheck), [ComputeHealthCheckStatus](#computehealthcheckstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `checkIntervalSec` | ***int64***| ***(Optional)*** |
| `creationTimestamp` | ***string***| ***(Optional)*** |
| `description` | ***string***| ***(Optional)*** |
| `healthyThreshold` | ***int64***| ***(Optional)*** |
| `http2HealthCheck` | ***[[]ComputeHealthCheckSpecHttp2HealthCheck](#computehealthcheckspechttp2healthcheck)***| ***(Optional)*** |
| `httpHealthCheck` | ***[[]ComputeHealthCheckSpecHttpHealthCheck](#computehealthcheckspechttphealthcheck)***| ***(Optional)*** |
| `httpsHealthCheck` | ***[[]ComputeHealthCheckSpecHttpsHealthCheck](#computehealthcheckspechttpshealthcheck)***| ***(Optional)*** |
| `name` | ***string***||
| `project` | ***string***| ***(Optional)*** |
| `selfLink` | ***string***| ***(Optional)*** |
| `sslHealthCheck` | ***[[]ComputeHealthCheckSpecSslHealthCheck](#computehealthcheckspecsslhealthcheck)***| ***(Optional)*** |
| `tcpHealthCheck` | ***[[]ComputeHealthCheckSpecTcpHealthCheck](#computehealthcheckspectcphealthcheck)***| ***(Optional)*** |
| `timeoutSec` | ***int64***| ***(Optional)*** |
| `type` | ***string***| ***(Optional)*** |
| `unhealthyThreshold` | ***int64***| ***(Optional)*** |
## ComputeHealthCheckSpecHttp2HealthCheck

Appears on:[ComputeHealthCheckSpec](#computehealthcheckspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `host` | ***string***| ***(Optional)*** |
| `port` | ***int64***| ***(Optional)*** |
| `portName` | ***string***| ***(Optional)*** |
| `portSpecification` | ***string***| ***(Optional)*** |
| `proxyHeader` | ***string***| ***(Optional)*** |
| `requestPath` | ***string***| ***(Optional)*** |
| `response` | ***string***| ***(Optional)*** |
## ComputeHealthCheckSpecHttpHealthCheck

Appears on:[ComputeHealthCheckSpec](#computehealthcheckspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `host` | ***string***| ***(Optional)*** |
| `port` | ***int64***| ***(Optional)*** |
| `portName` | ***string***| ***(Optional)*** |
| `portSpecification` | ***string***| ***(Optional)*** |
| `proxyHeader` | ***string***| ***(Optional)*** |
| `requestPath` | ***string***| ***(Optional)*** |
| `response` | ***string***| ***(Optional)*** |
## ComputeHealthCheckSpecHttpsHealthCheck

Appears on:[ComputeHealthCheckSpec](#computehealthcheckspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `host` | ***string***| ***(Optional)*** |
| `port` | ***int64***| ***(Optional)*** |
| `portName` | ***string***| ***(Optional)*** |
| `portSpecification` | ***string***| ***(Optional)*** |
| `proxyHeader` | ***string***| ***(Optional)*** |
| `requestPath` | ***string***| ***(Optional)*** |
| `response` | ***string***| ***(Optional)*** |
## ComputeHealthCheckSpecSslHealthCheck

Appears on:[ComputeHealthCheckSpec](#computehealthcheckspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `port` | ***int64***| ***(Optional)*** |
| `portName` | ***string***| ***(Optional)*** |
| `portSpecification` | ***string***| ***(Optional)*** |
| `proxyHeader` | ***string***| ***(Optional)*** |
| `request` | ***string***| ***(Optional)*** |
| `response` | ***string***| ***(Optional)*** |
## ComputeHealthCheckSpecTcpHealthCheck

Appears on:[ComputeHealthCheckSpec](#computehealthcheckspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `port` | ***int64***| ***(Optional)*** |
| `portName` | ***string***| ***(Optional)*** |
| `portSpecification` | ***string***| ***(Optional)*** |
| `proxyHeader` | ***string***| ***(Optional)*** |
| `request` | ***string***| ***(Optional)*** |
| `response` | ***string***| ***(Optional)*** |
## ComputeHealthCheckStatus

Appears on:[ComputeHealthCheck](#computehealthcheck)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ComputeHealthCheckSpec](#computehealthcheckspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[ComputeHealthCheckStatus](#computehealthcheckstatus)

---
