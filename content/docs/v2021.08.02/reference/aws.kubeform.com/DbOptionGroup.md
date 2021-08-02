---
title: DbOptionGroup
menu:
  docs_v2021.08.02:
    identifier: dboptiongroup-aws.kubeform.com
    name: DbOptionGroup
    parent: aws.kubeform.com-reference
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

## DbOptionGroup
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `DbOptionGroup` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[DbOptionGroupSpec](#dboptiongroupspec)***||
| `status` | ***[DbOptionGroupStatus](#dboptiongroupstatus)***||
## DbOptionGroupSpec

Appears on:[DbOptionGroup](#dboptiongroup), [DbOptionGroupStatus](#dboptiongroupstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `arn` | ***string***| ***(Optional)*** |
| `engineName` | ***string***||
| `majorEngineVersion` | ***string***||
| `name` | ***string***| ***(Optional)*** |
| `namePrefix` | ***string***| ***(Optional)*** |
| `option` | ***[[]DbOptionGroupSpecOption](#dboptiongroupspecoption)***| ***(Optional)*** |
| `optionGroupDescription` | ***string***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
## DbOptionGroupSpecOption

Appears on:[DbOptionGroupSpec](#dboptiongroupspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `dbSecurityGroupMemberships` | ***[]string***| ***(Optional)*** |
| `optionName` | ***string***||
| `optionSettings` | ***[[]DbOptionGroupSpecOptionOptionSettings](#dboptiongroupspecoptionoptionsettings)***| ***(Optional)*** |
| `port` | ***int64***| ***(Optional)*** |
| `version` | ***string***| ***(Optional)*** |
| `vpcSecurityGroupMemberships` | ***[]string***| ***(Optional)*** |
## DbOptionGroupSpecOptionOptionSettings

Appears on:[DbOptionGroupSpecOption](#dboptiongroupspecoption)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `name` | ***string***||
| `value` | ***string***||
## DbOptionGroupStatus

Appears on:[DbOptionGroup](#dboptiongroup)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[DbOptionGroupSpec](#dboptiongroupspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[DbOptionGroupStatus](#dboptiongroupstatus)

---
