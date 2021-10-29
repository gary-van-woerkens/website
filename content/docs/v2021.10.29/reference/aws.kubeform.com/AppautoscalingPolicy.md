---
title: AppautoscalingPolicy
menu:
  docs_v2021.10.29:
    identifier: appautoscalingpolicy-aws.kubeform.com
    name: AppautoscalingPolicy
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

## AppautoscalingPolicy
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `AppautoscalingPolicy` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[AppautoscalingPolicySpec](#appautoscalingpolicyspec)***||
| `status` | ***[AppautoscalingPolicyStatus](#appautoscalingpolicystatus)***||
## AppautoscalingPolicySpec

Appears on:[AppautoscalingPolicy](#appautoscalingpolicy), [AppautoscalingPolicyStatus](#appautoscalingpolicystatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `alarms` | ***[]string***| ***(Optional)*** |
| `arn` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `policyType` | ***string***| ***(Optional)*** |
| `resourceID` | ***string***||
| `scalableDimension` | ***string***||
| `serviceNamespace` | ***string***||
| `stepScalingPolicyConfiguration` | ***[[]AppautoscalingPolicySpecStepScalingPolicyConfiguration](#appautoscalingpolicyspecstepscalingpolicyconfiguration)***| ***(Optional)*** |
| `targetTrackingScalingPolicyConfiguration` | ***[[]AppautoscalingPolicySpecTargetTrackingScalingPolicyConfiguration](#appautoscalingpolicyspectargettrackingscalingpolicyconfiguration)***| ***(Optional)*** |
## AppautoscalingPolicySpecStepScalingPolicyConfiguration

Appears on:[AppautoscalingPolicySpec](#appautoscalingpolicyspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `adjustmentType` | ***string***| ***(Optional)*** |
| `cooldown` | ***int64***| ***(Optional)*** |
| `metricAggregationType` | ***string***| ***(Optional)*** |
| `minAdjustmentMagnitude` | ***int64***| ***(Optional)*** |
| `stepAdjustment` | ***[[]AppautoscalingPolicySpecStepScalingPolicyConfigurationStepAdjustment](#appautoscalingpolicyspecstepscalingpolicyconfigurationstepadjustment)***| ***(Optional)*** |
## AppautoscalingPolicySpecStepScalingPolicyConfigurationStepAdjustment

Appears on:[AppautoscalingPolicySpecStepScalingPolicyConfiguration](#appautoscalingpolicyspecstepscalingpolicyconfiguration)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `metricIntervalLowerBound` | ***string***| ***(Optional)*** |
| `metricIntervalUpperBound` | ***string***| ***(Optional)*** |
| `scalingAdjustment` | ***int64***||
## AppautoscalingPolicySpecTargetTrackingScalingPolicyConfiguration

Appears on:[AppautoscalingPolicySpec](#appautoscalingpolicyspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `customizedMetricSpecification` | ***[[]AppautoscalingPolicySpecTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification](#appautoscalingpolicyspectargettrackingscalingpolicyconfigurationcustomizedmetricspecification)***| ***(Optional)*** |
| `disableScaleIn` | ***bool***| ***(Optional)*** |
| `predefinedMetricSpecification` | ***[[]AppautoscalingPolicySpecTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification](#appautoscalingpolicyspectargettrackingscalingpolicyconfigurationpredefinedmetricspecification)***| ***(Optional)*** |
| `scaleInCooldown` | ***int64***| ***(Optional)*** |
| `scaleOutCooldown` | ***int64***| ***(Optional)*** |
| `targetValue` | ***float64***||
## AppautoscalingPolicySpecTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification

Appears on:[AppautoscalingPolicySpecTargetTrackingScalingPolicyConfiguration](#appautoscalingpolicyspectargettrackingscalingpolicyconfiguration)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `dimensions` | ***[[]AppautoscalingPolicySpecTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions](#appautoscalingpolicyspectargettrackingscalingpolicyconfigurationcustomizedmetricspecificationdimensions)***| ***(Optional)*** |
| `metricName` | ***string***||
| `namespace` | ***string***||
| `statistic` | ***string***||
| `unit` | ***string***| ***(Optional)*** |
## AppautoscalingPolicySpecTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions

Appears on:[AppautoscalingPolicySpecTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification](#appautoscalingpolicyspectargettrackingscalingpolicyconfigurationcustomizedmetricspecification)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `name` | ***string***||
| `value` | ***string***||
## AppautoscalingPolicySpecTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification

Appears on:[AppautoscalingPolicySpecTargetTrackingScalingPolicyConfiguration](#appautoscalingpolicyspectargettrackingscalingpolicyconfiguration)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `predefinedMetricType` | ***string***||
| `resourceLabel` | ***string***| ***(Optional)*** |
## AppautoscalingPolicyStatus

Appears on:[AppautoscalingPolicy](#appautoscalingpolicy)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[AppautoscalingPolicySpec](#appautoscalingpolicyspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[AppautoscalingPolicyStatus](#appautoscalingpolicystatus)

---
