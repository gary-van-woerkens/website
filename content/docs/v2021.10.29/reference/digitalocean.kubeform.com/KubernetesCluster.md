---
title: KubernetesCluster
menu:
  docs_v2021.10.29:
    identifier: kubernetescluster-digitalocean.kubeform.com
    name: KubernetesCluster
    parent: digitalocean.kubeform.com-reference
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

## KubernetesCluster
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `digitalocean.kubeform.com/v1alpha1` |
|    `kind` | string | `KubernetesCluster` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[KubernetesClusterSpec](#kubernetesclusterspec)***||
| `status` | ***[KubernetesClusterStatus](#kubernetesclusterstatus)***||
## KubernetesClusterSpec

Appears on:[KubernetesCluster](#kubernetescluster), [KubernetesClusterStatus](#kubernetesclusterstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `secretRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `clusterSubnet` | ***string***| ***(Optional)*** |
| `createdAt` | ***string***| ***(Optional)*** |
| `endpoint` | ***string***| ***(Optional)*** |
| `ipv4Address` | ***string***| ***(Optional)*** |
| `name` | ***string***| ***(Optional)*** |
| `nodePool` | ***[[]KubernetesClusterSpecNodePool](#kubernetesclusterspecnodepool)***||
| `region` | ***string***||
| `serviceSubnet` | ***string***| ***(Optional)*** |
| `status` | ***string***| ***(Optional)*** |
| `tags` | ***[]string***| ***(Optional)*** |
| `updatedAt` | ***string***| ***(Optional)*** |
| `version` | ***string***||
| `vpcUUID` | ***string***| ***(Optional)*** |
## KubernetesClusterSpecNodePool

Appears on:[KubernetesClusterSpec](#kubernetesclusterspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `actualNodeCount` | ***int64***| ***(Optional)*** |
| `autoScale` | ***bool***| ***(Optional)*** |
| `ID` | ***string***| ***(Optional)*** |
| `labels` | ***map[string]string***| ***(Optional)*** |
| `maxNodes` | ***int64***| ***(Optional)*** |
| `minNodes` | ***int64***| ***(Optional)*** |
| `name` | ***string***||
| `nodeCount` | ***int64***| ***(Optional)*** |
| `nodes` | ***[[]KubernetesClusterSpecNodePoolNodes](#kubernetesclusterspecnodepoolnodes)***| ***(Optional)*** |
| `size` | ***string***||
| `tags` | ***[]string***| ***(Optional)*** |
## KubernetesClusterSpecNodePoolNodes

Appears on:[KubernetesClusterSpecNodePool](#kubernetesclusterspecnodepool)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `createdAt` | ***string***| ***(Optional)*** |
| `dropletID` | ***string***| ***(Optional)*** |
| `ID` | ***string***| ***(Optional)*** |
| `name` | ***string***| ***(Optional)*** |
| `status` | ***string***| ***(Optional)*** |
| `updatedAt` | ***string***| ***(Optional)*** |
## KubernetesClusterStatus

Appears on:[KubernetesCluster](#kubernetescluster)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[KubernetesClusterSpec](#kubernetesclusterspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[KubernetesClusterStatus](#kubernetesclusterstatus)

---
