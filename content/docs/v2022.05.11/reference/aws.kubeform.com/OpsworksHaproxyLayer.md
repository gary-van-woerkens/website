---
title: OpsworksHaproxyLayer
menu:
  docs_v2022.05.11:
    identifier: opsworkshaproxylayer-aws.kubeform.com
    name: OpsworksHaproxyLayer
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

## OpsworksHaproxyLayer
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `OpsworksHaproxyLayer` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-22.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[OpsworksHaproxyLayerSpec](#opsworkshaproxylayerspec)***||
| `status` | ***[OpsworksHaproxyLayerStatus](#opsworkshaproxylayerstatus)***||
## OpsworksHaproxyLayerSpec

Appears on:[OpsworksHaproxyLayer](#opsworkshaproxylayer), [OpsworksHaproxyLayerStatus](#opsworkshaproxylayerstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-22.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `autoAssignElasticIPS` | ***bool***| ***(Optional)*** |
| `autoAssignPublicIPS` | ***bool***| ***(Optional)*** |
| `autoHealing` | ***bool***| ***(Optional)*** |
| `customConfigureRecipes` | ***[]string***| ***(Optional)*** |
| `customDeployRecipes` | ***[]string***| ***(Optional)*** |
| `customInstanceProfileArn` | ***string***| ***(Optional)*** |
| `customJSON` | ***string***| ***(Optional)*** |
| `customSecurityGroupIDS` | ***[]string***| ***(Optional)*** |
| `customSetupRecipes` | ***[]string***| ***(Optional)*** |
| `customShutdownRecipes` | ***[]string***| ***(Optional)*** |
| `customUndeployRecipes` | ***[]string***| ***(Optional)*** |
| `drainElbOnShutdown` | ***bool***| ***(Optional)*** |
| `ebsVolume` | ***[[]OpsworksHaproxyLayerSpecEbsVolume](#opsworkshaproxylayerspecebsvolume)***| ***(Optional)*** |
| `elasticLoadBalancer` | ***string***| ***(Optional)*** |
| `healthcheckMethod` | ***string***| ***(Optional)*** |
| `healthcheckURL` | ***string***| ***(Optional)*** |
| `installUpdatesOnBoot` | ***bool***| ***(Optional)*** |
| `instanceShutdownTimeout` | ***int64***| ***(Optional)*** |
| `name` | ***string***| ***(Optional)*** |
| `stackID` | ***string***||
| `statsEnabled` | ***bool***| ***(Optional)*** |
| `statsPassword` | ***string***||
| `statsURL` | ***string***| ***(Optional)*** |
| `statsUser` | ***string***| ***(Optional)*** |
| `systemPackages` | ***[]string***| ***(Optional)*** |
| `useEbsOptimizedInstances` | ***bool***| ***(Optional)*** |
## OpsworksHaproxyLayerSpecEbsVolume

Appears on:[OpsworksHaproxyLayerSpec](#opsworkshaproxylayerspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `iops` | ***int64***| ***(Optional)*** |
| `mountPoint` | ***string***||
| `numberOfDisks` | ***int64***||
| `raidLevel` | ***string***| ***(Optional)*** |
| `size` | ***int64***||
| `type` | ***string***| ***(Optional)*** |
## OpsworksHaproxyLayerStatus

Appears on:[OpsworksHaproxyLayer](#opsworkshaproxylayer)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[OpsworksHaproxyLayerSpec](#opsworkshaproxylayerspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[OpsworksHaproxyLayerStatus](#opsworkshaproxylayerstatus)

---
