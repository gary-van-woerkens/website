---
title: ComposerEnvironment
menu:
  docs_v2021.08.02:
    identifier: composerenvironment-google.kubeform.com
    name: ComposerEnvironment
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

## ComposerEnvironment
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `google.kubeform.com/v1alpha1` |
|    `kind` | string | `ComposerEnvironment` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ComposerEnvironmentSpec](#composerenvironmentspec)***||
| `status` | ***[ComposerEnvironmentStatus](#composerenvironmentstatus)***||
## ComposerEnvironmentSpec

Appears on:[ComposerEnvironment](#composerenvironment), [ComposerEnvironmentStatus](#composerenvironmentstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `config` | ***[[]ComposerEnvironmentSpecConfig](#composerenvironmentspecconfig)***| ***(Optional)*** |
| `labels` | ***map[string]string***| ***(Optional)*** |
| `name` | ***string***||
| `project` | ***string***| ***(Optional)*** |
| `region` | ***string***| ***(Optional)*** |
## ComposerEnvironmentSpecConfig

Appears on:[ComposerEnvironmentSpec](#composerenvironmentspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `airflowURI` | ***string***| ***(Optional)*** |
| `dagGcsPrefix` | ***string***| ***(Optional)*** |
| `gkeCluster` | ***string***| ***(Optional)*** |
| `nodeConfig` | ***[[]ComposerEnvironmentSpecConfigNodeConfig](#composerenvironmentspecconfignodeconfig)***| ***(Optional)*** |
| `nodeCount` | ***int64***| ***(Optional)*** |
| `privateEnvironmentConfig` | ***[[]ComposerEnvironmentSpecConfigPrivateEnvironmentConfig](#composerenvironmentspecconfigprivateenvironmentconfig)***| ***(Optional)*** |
| `softwareConfig` | ***[[]ComposerEnvironmentSpecConfigSoftwareConfig](#composerenvironmentspecconfigsoftwareconfig)***| ***(Optional)*** |
## ComposerEnvironmentSpecConfigNodeConfig

Appears on:[ComposerEnvironmentSpecConfig](#composerenvironmentspecconfig)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `diskSizeGb` | ***int64***| ***(Optional)*** |
| `ipAllocationPolicy` | ***[[]ComposerEnvironmentSpecConfigNodeConfigIpAllocationPolicy](#composerenvironmentspecconfignodeconfigipallocationpolicy)***| ***(Optional)*** |
| `machineType` | ***string***| ***(Optional)*** |
| `network` | ***string***| ***(Optional)*** |
| `oauthScopes` | ***[]string***| ***(Optional)*** |
| `serviceAccount` | ***string***| ***(Optional)*** |
| `subnetwork` | ***string***| ***(Optional)*** |
| `tags` | ***[]string***| ***(Optional)*** |
| `zone` | ***string***||
## ComposerEnvironmentSpecConfigNodeConfigIpAllocationPolicy

Appears on:[ComposerEnvironmentSpecConfigNodeConfig](#composerenvironmentspecconfignodeconfig)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `clusterIpv4CIDRBlock` | ***string***| ***(Optional)*** |
| `clusterSecondaryRangeName` | ***string***| ***(Optional)*** |
| `servicesIpv4CIDRBlock` | ***string***| ***(Optional)*** |
| `servicesSecondaryRangeName` | ***string***| ***(Optional)*** |
| `useIPAliases` | ***bool***| ***(Optional)*** |
## ComposerEnvironmentSpecConfigPrivateEnvironmentConfig

Appears on:[ComposerEnvironmentSpecConfig](#composerenvironmentspecconfig)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `enablePrivateEndpoint` | ***bool***| ***(Optional)*** |
| `masterIpv4CIDRBlock` | ***string***| ***(Optional)*** |
## ComposerEnvironmentSpecConfigSoftwareConfig

Appears on:[ComposerEnvironmentSpecConfig](#composerenvironmentspecconfig)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `airflowConfigOverrides` | ***map[string]string***| ***(Optional)*** |
| `envVariables` | ***map[string]string***| ***(Optional)*** |
| `imageVersion` | ***string***| ***(Optional)*** |
| `pypiPackages` | ***map[string]string***| ***(Optional)*** |
| `pythonVersion` | ***string***| ***(Optional)*** |
## ComposerEnvironmentStatus

Appears on:[ComposerEnvironment](#composerenvironment)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ComposerEnvironmentSpec](#composerenvironmentspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[ComposerEnvironmentStatus](#composerenvironmentstatus)

---
