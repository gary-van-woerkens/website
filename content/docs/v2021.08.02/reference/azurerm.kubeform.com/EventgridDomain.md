---
title: EventgridDomain
menu:
  docs_v2021.08.02:
    identifier: eventgriddomain-azurerm.kubeform.com
    name: EventgridDomain
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

## EventgridDomain
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `EventgridDomain` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[EventgridDomainSpec](#eventgriddomainspec)***||
| `status` | ***[EventgridDomainStatus](#eventgriddomainstatus)***||
## EventgridDomainSpec

Appears on:[EventgridDomain](#eventgriddomain), [EventgridDomainStatus](#eventgriddomainstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `secretRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `endpoint` | ***string***| ***(Optional)*** |
| `inputMappingDefaultValues` | ***[[]EventgridDomainSpecInputMappingDefaultValues](#eventgriddomainspecinputmappingdefaultvalues)***| ***(Optional)*** |
| `inputMappingFields` | ***[[]EventgridDomainSpecInputMappingFields](#eventgriddomainspecinputmappingfields)***| ***(Optional)*** |
| `inputSchema` | ***string***| ***(Optional)*** |
| `location` | ***string***||
| `name` | ***string***||
| `resourceGroupName` | ***string***||
| `tags` | ***map[string]string***| ***(Optional)*** |
## EventgridDomainSpecInputMappingDefaultValues

Appears on:[EventgridDomainSpec](#eventgriddomainspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `dataVersion` | ***string***| ***(Optional)*** |
| `eventType` | ***string***| ***(Optional)*** |
| `subject` | ***string***| ***(Optional)*** |
## EventgridDomainSpecInputMappingFields

Appears on:[EventgridDomainSpec](#eventgriddomainspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `dataVersion` | ***string***| ***(Optional)*** |
| `eventTime` | ***string***| ***(Optional)*** |
| `eventType` | ***string***| ***(Optional)*** |
| `ID` | ***string***| ***(Optional)*** |
| `subject` | ***string***| ***(Optional)*** |
| `topic` | ***string***| ***(Optional)*** |
## EventgridDomainStatus

Appears on:[EventgridDomain](#eventgriddomain)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[EventgridDomainSpec](#eventgriddomainspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[EventgridDomainStatus](#eventgriddomainstatus)

---
## Sensitive Values
| Name | Type | Description |
|------|------|-------------|
| `primary_access_key` | ***string*** ||
| `secondary_access_key` | ***string*** ||
