---
title: ComputeRegionAutoscaler
menu:
  docs_v2021.10.29:
    identifier: computeregionautoscaler-google.kubeform.com
    name: ComputeRegionAutoscaler
    parent: google.kubeform.com-reference
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

## ComputeRegionAutoscaler
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `google.kubeform.com/v1alpha1` |
|    `kind` | string | `ComputeRegionAutoscaler` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ComputeRegionAutoscalerSpec](#computeregionautoscalerspec)***||
| `status` | ***[ComputeRegionAutoscalerStatus](#computeregionautoscalerstatus)***||
## ComputeRegionAutoscalerSpec

Appears on:[ComputeRegionAutoscaler](#computeregionautoscaler), [ComputeRegionAutoscalerStatus](#computeregionautoscalerstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `autoscalingPolicy` | ***[[]ComputeRegionAutoscalerSpecAutoscalingPolicy](#computeregionautoscalerspecautoscalingpolicy)***||
| `creationTimestamp` | ***string***| ***(Optional)*** |
| `description` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `project` | ***string***| ***(Optional)*** |
| `region` | ***string***| ***(Optional)*** |
| `selfLink` | ***string***| ***(Optional)*** |
| `target` | ***string***||
## ComputeRegionAutoscalerSpecAutoscalingPolicy

Appears on:[ComputeRegionAutoscalerSpec](#computeregionautoscalerspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `cooldownPeriod` | ***int64***| ***(Optional)*** |
| `cpuUtilization` | ***[[]ComputeRegionAutoscalerSpecAutoscalingPolicyCpuUtilization](#computeregionautoscalerspecautoscalingpolicycpuutilization)***| ***(Optional)*** |
| `loadBalancingUtilization` | ***[[]ComputeRegionAutoscalerSpecAutoscalingPolicyLoadBalancingUtilization](#computeregionautoscalerspecautoscalingpolicyloadbalancingutilization)***| ***(Optional)*** |
| `maxReplicas` | ***int64***||
| `metric` | ***[[]ComputeRegionAutoscalerSpecAutoscalingPolicyMetric](#computeregionautoscalerspecautoscalingpolicymetric)***| ***(Optional)*** |
| `minReplicas` | ***int64***||
## ComputeRegionAutoscalerSpecAutoscalingPolicyCpuUtilization

Appears on:[ComputeRegionAutoscalerSpecAutoscalingPolicy](#computeregionautoscalerspecautoscalingpolicy)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `target` | ***float64***||
## ComputeRegionAutoscalerSpecAutoscalingPolicyLoadBalancingUtilization

Appears on:[ComputeRegionAutoscalerSpecAutoscalingPolicy](#computeregionautoscalerspecautoscalingpolicy)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `target` | ***float64***||
## ComputeRegionAutoscalerSpecAutoscalingPolicyMetric

Appears on:[ComputeRegionAutoscalerSpecAutoscalingPolicy](#computeregionautoscalerspecautoscalingpolicy)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `name` | ***string***||
| `target` | ***float64***| ***(Optional)*** |
| `type` | ***string***| ***(Optional)*** |
## ComputeRegionAutoscalerStatus

Appears on:[ComputeRegionAutoscaler](#computeregionautoscaler)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ComputeRegionAutoscalerSpec](#computeregionautoscalerspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[ComputeRegionAutoscalerStatus](#computeregionautoscalerstatus)

---
