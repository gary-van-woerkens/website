---
title: OpsworksMysqlLayer
menu:
  docs_v2021.07.28:
    identifier: opsworksmysqllayer-aws.kubeform.com
    name: OpsworksMysqlLayer
    parent: aws.kubeform.com-reference
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

## OpsworksMysqlLayer
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `OpsworksMysqlLayer` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[OpsworksMysqlLayerSpec](#opsworksmysqllayerspec)***||
| `status` | ***[OpsworksMysqlLayerStatus](#opsworksmysqllayerstatus)***||
## OpsworksMysqlLayerSpec

Appears on:[OpsworksMysqlLayer](#opsworksmysqllayer), [OpsworksMysqlLayerStatus](#opsworksmysqllayerstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
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
| `ebsVolume` | ***[[]OpsworksMysqlLayerSpecEbsVolume](#opsworksmysqllayerspecebsvolume)***| ***(Optional)*** |
| `elasticLoadBalancer` | ***string***| ***(Optional)*** |
| `installUpdatesOnBoot` | ***bool***| ***(Optional)*** |
| `instanceShutdownTimeout` | ***int64***| ***(Optional)*** |
| `name` | ***string***| ***(Optional)*** |
| `rootPassword` | ***string***| ***(Optional)*** |
| `rootPasswordOnAllInstances` | ***bool***| ***(Optional)*** |
| `stackID` | ***string***||
| `systemPackages` | ***[]string***| ***(Optional)*** |
| `useEbsOptimizedInstances` | ***bool***| ***(Optional)*** |
## OpsworksMysqlLayerSpecEbsVolume

Appears on:[OpsworksMysqlLayerSpec](#opsworksmysqllayerspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `iops` | ***int64***| ***(Optional)*** |
| `mountPoint` | ***string***||
| `numberOfDisks` | ***int64***||
| `raidLevel` | ***string***| ***(Optional)*** |
| `size` | ***int64***||
| `type` | ***string***| ***(Optional)*** |
## OpsworksMysqlLayerStatus

Appears on:[OpsworksMysqlLayer](#opsworksmysqllayer)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[OpsworksMysqlLayerSpec](#opsworksmysqllayerspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[OpsworksMysqlLayerStatus](#opsworksmysqllayerstatus)

---
