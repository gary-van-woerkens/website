---
title: AutoscalingGroup
menu:
  docs_v2022.05.11:
    identifier: autoscalinggroup-aws.kubeform.com
    name: AutoscalingGroup
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

## AutoscalingGroup
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `AutoscalingGroup` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-22.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[AutoscalingGroupSpec](#autoscalinggroupspec)***||
| `status` | ***[AutoscalingGroupStatus](#autoscalinggroupstatus)***||
## AutoscalingGroupSpec

Appears on:[AutoscalingGroup](#autoscalinggroup), [AutoscalingGroupStatus](#autoscalinggroupstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-22.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `arn` | ***string***| ***(Optional)*** |
| `availabilityZones` | ***[]string***| ***(Optional)*** |
| `defaultCooldown` | ***int64***| ***(Optional)*** |
| `desiredCapacity` | ***int64***| ***(Optional)*** |
| `enabledMetrics` | ***[]string***| ***(Optional)*** |
| `forceDelete` | ***bool***| ***(Optional)*** |
| `healthCheckGracePeriod` | ***int64***| ***(Optional)*** |
| `healthCheckType` | ***string***| ***(Optional)*** |
| `initialLifecycleHook` | ***[[]AutoscalingGroupSpecInitialLifecycleHook](#autoscalinggroupspecinitiallifecyclehook)***| ***(Optional)*** |
| `launchConfiguration` | ***string***| ***(Optional)*** |
| `launchTemplate` | ***[[]AutoscalingGroupSpecLaunchTemplate](#autoscalinggroupspeclaunchtemplate)***| ***(Optional)*** |
| `loadBalancers` | ***[]string***| ***(Optional)*** |
| `maxSize` | ***int64***||
| `metricsGranularity` | ***string***| ***(Optional)*** |
| `minElbCapacity` | ***int64***| ***(Optional)*** |
| `minSize` | ***int64***||
| `mixedInstancesPolicy` | ***[[]AutoscalingGroupSpecMixedInstancesPolicy](#autoscalinggroupspecmixedinstancespolicy)***| ***(Optional)*** |
| `name` | ***string***| ***(Optional)*** |
| `namePrefix` | ***string***| ***(Optional)*** |
| `placementGroup` | ***string***| ***(Optional)*** |
| `protectFromScaleIn` | ***bool***| ***(Optional)*** |
| `serviceLinkedRoleArn` | ***string***| ***(Optional)*** |
| `suspendedProcesses` | ***[]string***| ***(Optional)*** |
| `tag` | ***[[]AutoscalingGroupSpecTag](#autoscalinggroupspectag)***| ***(Optional)*** |
| `targetGroupArns` | ***[]string***| ***(Optional)*** |
| `terminationPolicies` | ***[]string***| ***(Optional)*** |
| `vpcZoneIdentifier` | ***[]string***| ***(Optional)*** |
| `waitForCapacityTimeout` | ***string***| ***(Optional)*** |
| `waitForElbCapacity` | ***int64***| ***(Optional)*** |
## AutoscalingGroupSpecInitialLifecycleHook

Appears on:[AutoscalingGroupSpec](#autoscalinggroupspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `defaultResult` | ***string***| ***(Optional)*** |
| `heartbeatTimeout` | ***int64***| ***(Optional)*** |
| `lifecycleTransition` | ***string***||
| `name` | ***string***||
| `notificationMetadata` | ***string***| ***(Optional)*** |
| `notificationTargetArn` | ***string***| ***(Optional)*** |
| `roleArn` | ***string***| ***(Optional)*** |
## AutoscalingGroupSpecLaunchTemplate

Appears on:[AutoscalingGroupSpec](#autoscalinggroupspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `ID` | ***string***| ***(Optional)*** |
| `name` | ***string***| ***(Optional)*** |
| `version` | ***string***| ***(Optional)*** |
## AutoscalingGroupSpecMixedInstancesPolicy

Appears on:[AutoscalingGroupSpec](#autoscalinggroupspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `instancesDistribution` | ***[[]AutoscalingGroupSpecMixedInstancesPolicyInstancesDistribution](#autoscalinggroupspecmixedinstancespolicyinstancesdistribution)***| ***(Optional)*** |
| `launchTemplate` | ***[[]AutoscalingGroupSpecMixedInstancesPolicyLaunchTemplate](#autoscalinggroupspecmixedinstancespolicylaunchtemplate)***||
## AutoscalingGroupSpecMixedInstancesPolicyInstancesDistribution

Appears on:[AutoscalingGroupSpecMixedInstancesPolicy](#autoscalinggroupspecmixedinstancespolicy)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `onDemandAllocationStrategy` | ***string***| ***(Optional)*** |
| `onDemandBaseCapacity` | ***int64***| ***(Optional)*** |
| `onDemandPercentageAboveBaseCapacity` | ***int64***| ***(Optional)*** |
| `spotAllocationStrategy` | ***string***| ***(Optional)*** |
| `spotInstancePools` | ***int64***| ***(Optional)*** |
| `spotMaxPrice` | ***string***| ***(Optional)*** |
## AutoscalingGroupSpecMixedInstancesPolicyLaunchTemplate

Appears on:[AutoscalingGroupSpecMixedInstancesPolicy](#autoscalinggroupspecmixedinstancespolicy)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `launchTemplateSpecification` | ***[[]AutoscalingGroupSpecMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification](#autoscalinggroupspecmixedinstancespolicylaunchtemplatelaunchtemplatespecification)***||
| `override` | ***[[]AutoscalingGroupSpecMixedInstancesPolicyLaunchTemplateOverride](#autoscalinggroupspecmixedinstancespolicylaunchtemplateoverride)***| ***(Optional)*** |
## AutoscalingGroupSpecMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification

Appears on:[AutoscalingGroupSpecMixedInstancesPolicyLaunchTemplate](#autoscalinggroupspecmixedinstancespolicylaunchtemplate)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `launchTemplateID` | ***string***| ***(Optional)*** |
| `launchTemplateName` | ***string***| ***(Optional)*** |
| `version` | ***string***| ***(Optional)*** |
## AutoscalingGroupSpecMixedInstancesPolicyLaunchTemplateOverride

Appears on:[AutoscalingGroupSpecMixedInstancesPolicyLaunchTemplate](#autoscalinggroupspecmixedinstancespolicylaunchtemplate)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `instanceType` | ***string***| ***(Optional)*** |
## AutoscalingGroupSpecTag

Appears on:[AutoscalingGroupSpec](#autoscalinggroupspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `key` | ***string***||
| `propagateAtLaunch` | ***bool***||
| `value` | ***string***||
## AutoscalingGroupStatus

Appears on:[AutoscalingGroup](#autoscalinggroup)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[AutoscalingGroupSpec](#autoscalinggroupspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[AutoscalingGroupStatus](#autoscalinggroupstatus)

---
