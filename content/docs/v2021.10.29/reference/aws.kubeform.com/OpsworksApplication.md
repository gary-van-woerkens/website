---
title: OpsworksApplication
menu:
  docs_v2021.10.29:
    identifier: opsworksapplication-aws.kubeform.com
    name: OpsworksApplication
    parent: aws.kubeform.com-reference
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

## OpsworksApplication
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `OpsworksApplication` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[OpsworksApplicationSpec](#opsworksapplicationspec)***||
| `status` | ***[OpsworksApplicationStatus](#opsworksapplicationstatus)***||
## OpsworksApplicationSpec

Appears on:[OpsworksApplication](#opsworksapplication), [OpsworksApplicationStatus](#opsworksapplicationstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `secretRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `appSource` | ***[[]OpsworksApplicationSpecAppSource](#opsworksapplicationspecappsource)***| ***(Optional)*** |
| `autoBundleOnDeploy` | ***string***| ***(Optional)*** |
| `awsFlowRubySettings` | ***string***| ***(Optional)*** |
| `dataSourceArn` | ***string***| ***(Optional)*** |
| `dataSourceDatabaseName` | ***string***| ***(Optional)*** |
| `dataSourceType` | ***string***| ***(Optional)*** |
| `description` | ***string***| ***(Optional)*** |
| `documentRoot` | ***string***| ***(Optional)*** |
| `domains` | ***[]string***| ***(Optional)*** |
| `enableSSL` | ***bool***| ***(Optional)*** |
| `environment` | ***[[]OpsworksApplicationSpecEnvironment](#opsworksapplicationspecenvironment)***| ***(Optional)*** |
| `name` | ***string***||
| `railsEnv` | ***string***| ***(Optional)*** |
| `shortName` | ***string***| ***(Optional)*** |
| `sslConfiguration` | ***[[]OpsworksApplicationSpecSslConfiguration](#opsworksapplicationspecsslconfiguration)***| ***(Optional)*** |
| `stackID` | ***string***||
| `type` | ***string***||
## OpsworksApplicationSpecAppSource

Appears on:[OpsworksApplicationSpec](#opsworksapplicationspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `revision` | ***string***| ***(Optional)*** |
| `sshKey` | ***string***| ***(Optional)*** |
| `type` | ***string***||
| `url` | ***string***| ***(Optional)*** |
| `username` | ***string***| ***(Optional)*** |
## OpsworksApplicationSpecEnvironment

Appears on:[OpsworksApplicationSpec](#opsworksapplicationspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `key` | ***string***||
| `secure` | ***bool***| ***(Optional)*** |
| `value` | ***string***||
## OpsworksApplicationSpecSslConfiguration

Appears on:[OpsworksApplicationSpec](#opsworksapplicationspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `certificate` | ***string***||
| `chain` | ***string***| ***(Optional)*** |
## OpsworksApplicationStatus

Appears on:[OpsworksApplication](#opsworksapplication)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[OpsworksApplicationSpec](#opsworksapplicationspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[OpsworksApplicationStatus](#opsworksapplicationstatus)

---
## Sensitive Values
| Name | Type | Description |
|------|------|-------------|
| `app_source.<index>.password` | ***string*** ||
| `ssl_configuration.<index>.private_key` | ***string*** ||
