---
title: AppmeshVirtualNode
menu:
  docs_v2022.05.11:
    identifier: appmeshvirtualnode-aws.kubeform.com
    name: AppmeshVirtualNode
    parent: aws.kubeform.com-reference
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

## AppmeshVirtualNode
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `AppmeshVirtualNode` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-22.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[AppmeshVirtualNodeSpec](#appmeshvirtualnodespec)***||
| `status` | ***[AppmeshVirtualNodeStatus](#appmeshvirtualnodestatus)***||
## AppmeshVirtualNodeSpec

Appears on:[AppmeshVirtualNode](#appmeshvirtualnode), [AppmeshVirtualNodeStatus](#appmeshvirtualnodestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-22.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `arn` | ***string***| ***(Optional)*** |
| `createdDate` | ***string***| ***(Optional)*** |
| `lastUpdatedDate` | ***string***| ***(Optional)*** |
| `meshName` | ***string***||
| `name` | ***string***||
| `spec` | ***[[]AppmeshVirtualNodeSpecSpec](#appmeshvirtualnodespecspec)***||
| `tags` | ***map[string]string***| ***(Optional)*** |
## AppmeshVirtualNodeSpecSpec

Appears on:[AppmeshVirtualNodeSpec](#appmeshvirtualnodespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `backend` | ***[[]AppmeshVirtualNodeSpecSpecBackend](#appmeshvirtualnodespecspecbackend)***| ***(Optional)*** |
| `listener` | ***[[]AppmeshVirtualNodeSpecSpecListener](#appmeshvirtualnodespecspeclistener)***| ***(Optional)*** |
| `logging` | ***[[]AppmeshVirtualNodeSpecSpecLogging](#appmeshvirtualnodespecspeclogging)***| ***(Optional)*** |
| `serviceDiscovery` | ***[[]AppmeshVirtualNodeSpecSpecServiceDiscovery](#appmeshvirtualnodespecspecservicediscovery)***| ***(Optional)*** |
## AppmeshVirtualNodeSpecSpecBackend

Appears on:[AppmeshVirtualNodeSpecSpec](#appmeshvirtualnodespecspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `virtualService` | ***[[]AppmeshVirtualNodeSpecSpecBackendVirtualService](#appmeshvirtualnodespecspecbackendvirtualservice)***| ***(Optional)*** |
## AppmeshVirtualNodeSpecSpecBackendVirtualService

Appears on:[AppmeshVirtualNodeSpecSpecBackend](#appmeshvirtualnodespecspecbackend)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `virtualServiceName` | ***string***||
## AppmeshVirtualNodeSpecSpecListener

Appears on:[AppmeshVirtualNodeSpecSpec](#appmeshvirtualnodespecspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `healthCheck` | ***[[]AppmeshVirtualNodeSpecSpecListenerHealthCheck](#appmeshvirtualnodespecspeclistenerhealthcheck)***| ***(Optional)*** |
| `portMapping` | ***[[]AppmeshVirtualNodeSpecSpecListenerPortMapping](#appmeshvirtualnodespecspeclistenerportmapping)***||
## AppmeshVirtualNodeSpecSpecListenerHealthCheck

Appears on:[AppmeshVirtualNodeSpecSpecListener](#appmeshvirtualnodespecspeclistener)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `healthyThreshold` | ***int64***||
| `intervalMillis` | ***int64***||
| `path` | ***string***| ***(Optional)*** |
| `port` | ***int64***| ***(Optional)*** |
| `protocol` | ***string***||
| `timeoutMillis` | ***int64***||
| `unhealthyThreshold` | ***int64***||
## AppmeshVirtualNodeSpecSpecListenerPortMapping

Appears on:[AppmeshVirtualNodeSpecSpecListener](#appmeshvirtualnodespecspeclistener)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `port` | ***int64***||
| `protocol` | ***string***||
## AppmeshVirtualNodeSpecSpecLogging

Appears on:[AppmeshVirtualNodeSpecSpec](#appmeshvirtualnodespecspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `accessLog` | ***[[]AppmeshVirtualNodeSpecSpecLoggingAccessLog](#appmeshvirtualnodespecspecloggingaccesslog)***| ***(Optional)*** |
## AppmeshVirtualNodeSpecSpecLoggingAccessLog

Appears on:[AppmeshVirtualNodeSpecSpecLogging](#appmeshvirtualnodespecspeclogging)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `file` | ***[[]AppmeshVirtualNodeSpecSpecLoggingAccessLogFile](#appmeshvirtualnodespecspecloggingaccesslogfile)***| ***(Optional)*** |
## AppmeshVirtualNodeSpecSpecLoggingAccessLogFile

Appears on:[AppmeshVirtualNodeSpecSpecLoggingAccessLog](#appmeshvirtualnodespecspecloggingaccesslog)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `path` | ***string***||
## AppmeshVirtualNodeSpecSpecServiceDiscovery

Appears on:[AppmeshVirtualNodeSpecSpec](#appmeshvirtualnodespecspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `awsCloudMap` | ***[[]AppmeshVirtualNodeSpecSpecServiceDiscoveryAwsCloudMap](#appmeshvirtualnodespecspecservicediscoveryawscloudmap)***| ***(Optional)*** |
| `dns` | ***[[]AppmeshVirtualNodeSpecSpecServiceDiscoveryDns](#appmeshvirtualnodespecspecservicediscoverydns)***| ***(Optional)*** |
## AppmeshVirtualNodeSpecSpecServiceDiscoveryAwsCloudMap

Appears on:[AppmeshVirtualNodeSpecSpecServiceDiscovery](#appmeshvirtualnodespecspecservicediscovery)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `attributes` | ***map[string]string***| ***(Optional)*** |
| `namespaceName` | ***string***||
| `serviceName` | ***string***||
## AppmeshVirtualNodeSpecSpecServiceDiscoveryDns

Appears on:[AppmeshVirtualNodeSpecSpecServiceDiscovery](#appmeshvirtualnodespecspecservicediscovery)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `hostname` | ***string***||
## AppmeshVirtualNodeStatus

Appears on:[AppmeshVirtualNode](#appmeshvirtualnode)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[AppmeshVirtualNodeSpec](#appmeshvirtualnodespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[AppmeshVirtualNodeStatus](#appmeshvirtualnodestatus)

---
