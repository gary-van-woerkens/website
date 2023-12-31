---
title: CloudfunctionsFunction
menu:
  docs_v2021.08.02:
    identifier: cloudfunctionsfunction-google.kubeform.com
    name: CloudfunctionsFunction
    parent: google.kubeform.com-reference
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

## CloudfunctionsFunction
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `google.kubeform.com/v1alpha1` |
|    `kind` | string | `CloudfunctionsFunction` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[CloudfunctionsFunctionSpec](#cloudfunctionsfunctionspec)***||
| `status` | ***[CloudfunctionsFunctionStatus](#cloudfunctionsfunctionstatus)***||
## CloudfunctionsFunctionSpec

Appears on:[CloudfunctionsFunction](#cloudfunctionsfunction), [CloudfunctionsFunctionStatus](#cloudfunctionsfunctionstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `availableMemoryMb` | ***int64***| ***(Optional)*** |
| `description` | ***string***| ***(Optional)*** |
| `entryPoint` | ***string***| ***(Optional)*** |
| `environmentVariables` | ***map[string]string***| ***(Optional)*** |
| `eventTrigger` | ***[[]CloudfunctionsFunctionSpecEventTrigger](#cloudfunctionsfunctionspeceventtrigger)***| ***(Optional)*** |
| `httpsTriggerURL` | ***string***| ***(Optional)*** |
| `labels` | ***map[string]string***| ***(Optional)*** |
| `maxInstances` | ***int64***| ***(Optional)*** |
| `name` | ***string***||
| `project` | ***string***| ***(Optional)*** |
| `region` | ***string***| ***(Optional)*** |
| `runtime` | ***string***| ***(Optional)*** |
| `serviceAccountEmail` | ***string***| ***(Optional)*** |
| `sourceArchiveBucket` | ***string***| ***(Optional)*** |
| `sourceArchiveObject` | ***string***| ***(Optional)*** |
| `sourceRepository` | ***[[]CloudfunctionsFunctionSpecSourceRepository](#cloudfunctionsfunctionspecsourcerepository)***| ***(Optional)*** |
| `timeout` | ***int64***| ***(Optional)*** |
| `triggerHTTP` | ***bool***| ***(Optional)*** |
| `vpcConnector` | ***string***| ***(Optional)*** |
## CloudfunctionsFunctionSpecEventTrigger

Appears on:[CloudfunctionsFunctionSpec](#cloudfunctionsfunctionspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `eventType` | ***string***||
| `failurePolicy` | ***[[]CloudfunctionsFunctionSpecEventTriggerFailurePolicy](#cloudfunctionsfunctionspeceventtriggerfailurepolicy)***| ***(Optional)*** |
| `resource` | ***string***||
## CloudfunctionsFunctionSpecEventTriggerFailurePolicy

Appears on:[CloudfunctionsFunctionSpecEventTrigger](#cloudfunctionsfunctionspeceventtrigger)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `retry` | ***bool***||
## CloudfunctionsFunctionSpecSourceRepository

Appears on:[CloudfunctionsFunctionSpec](#cloudfunctionsfunctionspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `deployedURL` | ***string***| ***(Optional)*** |
| `url` | ***string***||
## CloudfunctionsFunctionStatus

Appears on:[CloudfunctionsFunction](#cloudfunctionsfunction)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[CloudfunctionsFunctionSpec](#cloudfunctionsfunctionspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[CloudfunctionsFunctionStatus](#cloudfunctionsfunctionstatus)

---
