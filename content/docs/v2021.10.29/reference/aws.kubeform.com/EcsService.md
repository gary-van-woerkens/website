---
title: EcsService
menu:
  docs_v2021.10.29:
    identifier: ecsservice-aws.kubeform.com
    name: EcsService
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

## EcsService
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `EcsService` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[EcsServiceSpec](#ecsservicespec)***||
| `status` | ***[EcsServiceStatus](#ecsservicestatus)***||
## EcsServiceSpec

Appears on:[EcsService](#ecsservice), [EcsServiceStatus](#ecsservicestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `cluster` | ***string***| ***(Optional)*** |
| `deploymentController` | ***[[]EcsServiceSpecDeploymentController](#ecsservicespecdeploymentcontroller)***| ***(Optional)*** |
| `deploymentMaximumPercent` | ***int64***| ***(Optional)*** |
| `deploymentMinimumHealthyPercent` | ***int64***| ***(Optional)*** |
| `desiredCount` | ***int64***| ***(Optional)*** |
| `enableEcsManagedTags` | ***bool***| ***(Optional)*** |
| `healthCheckGracePeriodSeconds` | ***int64***| ***(Optional)*** |
| `iamRole` | ***string***| ***(Optional)*** |
| `launchType` | ***string***| ***(Optional)*** |
| `loadBalancer` | ***[[]EcsServiceSpecLoadBalancer](#ecsservicespecloadbalancer)***| ***(Optional)*** |
| `name` | ***string***||
| `networkConfiguration` | ***[[]EcsServiceSpecNetworkConfiguration](#ecsservicespecnetworkconfiguration)***| ***(Optional)*** |
| `orderedPlacementStrategy` | ***[[]EcsServiceSpecOrderedPlacementStrategy](#ecsservicespecorderedplacementstrategy)***| ***(Optional)*** |
| `placementConstraints` | ***[[]EcsServiceSpecPlacementConstraints](#ecsservicespecplacementconstraints)***| ***(Optional)*** |
| `platformVersion` | ***string***| ***(Optional)*** |
| `propagateTags` | ***string***| ***(Optional)*** |
| `schedulingStrategy` | ***string***| ***(Optional)*** |
| `serviceRegistries` | ***[[]EcsServiceSpecServiceRegistries](#ecsservicespecserviceregistries)***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
| `taskDefinition` | ***string***||
## EcsServiceSpecDeploymentController

Appears on:[EcsServiceSpec](#ecsservicespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `type` | ***string***| ***(Optional)*** |
## EcsServiceSpecLoadBalancer

Appears on:[EcsServiceSpec](#ecsservicespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `containerName` | ***string***||
| `containerPort` | ***int64***||
| `elbName` | ***string***| ***(Optional)*** |
| `targetGroupArn` | ***string***| ***(Optional)*** |
## EcsServiceSpecNetworkConfiguration

Appears on:[EcsServiceSpec](#ecsservicespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `assignPublicIP` | ***bool***| ***(Optional)*** |
| `securityGroups` | ***[]string***| ***(Optional)*** |
| `subnets` | ***[]string***||
## EcsServiceSpecOrderedPlacementStrategy

Appears on:[EcsServiceSpec](#ecsservicespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `field` | ***string***| ***(Optional)*** |
| `type` | ***string***||
## EcsServiceSpecPlacementConstraints

Appears on:[EcsServiceSpec](#ecsservicespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `expression` | ***string***| ***(Optional)*** |
| `type` | ***string***||
## EcsServiceSpecServiceRegistries

Appears on:[EcsServiceSpec](#ecsservicespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `containerName` | ***string***| ***(Optional)*** |
| `containerPort` | ***int64***| ***(Optional)*** |
| `port` | ***int64***| ***(Optional)*** |
| `registryArn` | ***string***||
## EcsServiceStatus

Appears on:[EcsService](#ecsservice)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[EcsServiceSpec](#ecsservicespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[EcsServiceStatus](#ecsservicestatus)

---
