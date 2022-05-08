---
title: LaunchTemplate
menu:
  docs_v2022.05.11:
    identifier: launchtemplate-aws.kubeform.com
    name: LaunchTemplate
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

## LaunchTemplate
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `LaunchTemplate` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-22.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[LaunchTemplateSpec](#launchtemplatespec)***||
| `status` | ***[LaunchTemplateStatus](#launchtemplatestatus)***||
## LaunchTemplateSpec

Appears on:[LaunchTemplate](#launchtemplate), [LaunchTemplateStatus](#launchtemplatestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-22.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `arn` | ***string***| ***(Optional)*** |
| `blockDeviceMappings` | ***[[]LaunchTemplateSpecBlockDeviceMappings](#launchtemplatespecblockdevicemappings)***| ***(Optional)*** |
| `capacityReservationSpecification` | ***[[]LaunchTemplateSpecCapacityReservationSpecification](#launchtemplatespeccapacityreservationspecification)***| ***(Optional)*** |
| `creditSpecification` | ***[[]LaunchTemplateSpecCreditSpecification](#launchtemplatespeccreditspecification)***| ***(Optional)*** |
| `defaultVersion` | ***int64***| ***(Optional)*** |
| `description` | ***string***| ***(Optional)*** |
| `disableAPITermination` | ***bool***| ***(Optional)*** |
| `ebsOptimized` | ***string***| ***(Optional)*** |
| `elasticGpuSpecifications` | ***[[]LaunchTemplateSpecElasticGpuSpecifications](#launchtemplatespecelasticgpuspecifications)***| ***(Optional)*** |
| `elasticInferenceAccelerator` | ***[[]LaunchTemplateSpecElasticInferenceAccelerator](#launchtemplatespecelasticinferenceaccelerator)***| ***(Optional)*** |
| `iamInstanceProfile` | ***[[]LaunchTemplateSpecIamInstanceProfile](#launchtemplatespeciaminstanceprofile)***| ***(Optional)*** |
| `imageID` | ***string***| ***(Optional)*** |
| `instanceInitiatedShutdownBehavior` | ***string***| ***(Optional)*** |
| `instanceMarketOptions` | ***[[]LaunchTemplateSpecInstanceMarketOptions](#launchtemplatespecinstancemarketoptions)***| ***(Optional)*** |
| `instanceType` | ***string***| ***(Optional)*** |
| `kernelID` | ***string***| ***(Optional)*** |
| `keyName` | ***string***| ***(Optional)*** |
| `latestVersion` | ***int64***| ***(Optional)*** |
| `licenseSpecification` | ***[[]LaunchTemplateSpecLicenseSpecification](#launchtemplatespeclicensespecification)***| ***(Optional)*** |
| `monitoring` | ***[[]LaunchTemplateSpecMonitoring](#launchtemplatespecmonitoring)***| ***(Optional)*** |
| `name` | ***string***| ***(Optional)*** |
| `namePrefix` | ***string***| ***(Optional)*** |
| `networkInterfaces` | ***[[]LaunchTemplateSpecNetworkInterfaces](#launchtemplatespecnetworkinterfaces)***| ***(Optional)*** |
| `placement` | ***[[]LaunchTemplateSpecPlacement](#launchtemplatespecplacement)***| ***(Optional)*** |
| `ramDiskID` | ***string***| ***(Optional)*** |
| `securityGroupNames` | ***[]string***| ***(Optional)*** |
| `tagSpecifications` | ***[[]LaunchTemplateSpecTagSpecifications](#launchtemplatespectagspecifications)***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
| `userData` | ***string***| ***(Optional)*** |
| `vpcSecurityGroupIDS` | ***[]string***| ***(Optional)*** |
## LaunchTemplateSpecBlockDeviceMappings

Appears on:[LaunchTemplateSpec](#launchtemplatespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `deviceName` | ***string***| ***(Optional)*** |
| `ebs` | ***[[]LaunchTemplateSpecBlockDeviceMappingsEbs](#launchtemplatespecblockdevicemappingsebs)***| ***(Optional)*** |
| `noDevice` | ***string***| ***(Optional)*** |
| `virtualName` | ***string***| ***(Optional)*** |
## LaunchTemplateSpecBlockDeviceMappingsEbs

Appears on:[LaunchTemplateSpecBlockDeviceMappings](#launchtemplatespecblockdevicemappings)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `deleteOnTermination` | ***string***| ***(Optional)*** |
| `encrypted` | ***string***| ***(Optional)*** |
| `iops` | ***int64***| ***(Optional)*** |
| `kmsKeyID` | ***string***| ***(Optional)*** |
| `snapshotID` | ***string***| ***(Optional)*** |
| `volumeSize` | ***int64***| ***(Optional)*** |
| `volumeType` | ***string***| ***(Optional)*** |
## LaunchTemplateSpecCapacityReservationSpecification

Appears on:[LaunchTemplateSpec](#launchtemplatespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `capacityReservationPreference` | ***string***| ***(Optional)*** |
| `capacityReservationTarget` | ***[[]LaunchTemplateSpecCapacityReservationSpecificationCapacityReservationTarget](#launchtemplatespeccapacityreservationspecificationcapacityreservationtarget)***| ***(Optional)*** |
## LaunchTemplateSpecCapacityReservationSpecificationCapacityReservationTarget

Appears on:[LaunchTemplateSpecCapacityReservationSpecification](#launchtemplatespeccapacityreservationspecification)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `capacityReservationID` | ***string***| ***(Optional)*** |
## LaunchTemplateSpecCreditSpecification

Appears on:[LaunchTemplateSpec](#launchtemplatespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `cpuCredits` | ***string***| ***(Optional)*** |
## LaunchTemplateSpecElasticGpuSpecifications

Appears on:[LaunchTemplateSpec](#launchtemplatespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `type` | ***string***||
## LaunchTemplateSpecElasticInferenceAccelerator

Appears on:[LaunchTemplateSpec](#launchtemplatespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `type` | ***string***||
## LaunchTemplateSpecIamInstanceProfile

Appears on:[LaunchTemplateSpec](#launchtemplatespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `arn` | ***string***| ***(Optional)*** |
| `name` | ***string***| ***(Optional)*** |
## LaunchTemplateSpecInstanceMarketOptions

Appears on:[LaunchTemplateSpec](#launchtemplatespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `marketType` | ***string***| ***(Optional)*** |
| `spotOptions` | ***[[]LaunchTemplateSpecInstanceMarketOptionsSpotOptions](#launchtemplatespecinstancemarketoptionsspotoptions)***| ***(Optional)*** |
## LaunchTemplateSpecInstanceMarketOptionsSpotOptions

Appears on:[LaunchTemplateSpecInstanceMarketOptions](#launchtemplatespecinstancemarketoptions)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `blockDurationMinutes` | ***int64***| ***(Optional)*** |
| `instanceInterruptionBehavior` | ***string***| ***(Optional)*** |
| `maxPrice` | ***string***| ***(Optional)*** |
| `spotInstanceType` | ***string***| ***(Optional)*** |
| `validUntil` | ***string***| ***(Optional)*** |
## LaunchTemplateSpecLicenseSpecification

Appears on:[LaunchTemplateSpec](#launchtemplatespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `licenseConfigurationArn` | ***string***||
## LaunchTemplateSpecMonitoring

Appears on:[LaunchTemplateSpec](#launchtemplatespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `enabled` | ***bool***| ***(Optional)*** |
## LaunchTemplateSpecNetworkInterfaces

Appears on:[LaunchTemplateSpec](#launchtemplatespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `associatePublicIPAddress` | ***bool***| ***(Optional)*** |
| `deleteOnTermination` | ***bool***| ***(Optional)*** |
| `description` | ***string***| ***(Optional)*** |
| `deviceIndex` | ***int64***| ***(Optional)*** |
| `ipv4AddressCount` | ***int64***| ***(Optional)*** |
| `ipv4Addresses` | ***[]string***| ***(Optional)*** |
| `ipv6AddressCount` | ***int64***| ***(Optional)*** |
| `ipv6Addresses` | ***[]string***| ***(Optional)*** |
| `networkInterfaceID` | ***string***| ***(Optional)*** |
| `privateIPAddress` | ***string***| ***(Optional)*** |
| `securityGroups` | ***[]string***| ***(Optional)*** |
| `subnetID` | ***string***| ***(Optional)*** |
## LaunchTemplateSpecPlacement

Appears on:[LaunchTemplateSpec](#launchtemplatespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `affinity` | ***string***| ***(Optional)*** |
| `availabilityZone` | ***string***| ***(Optional)*** |
| `groupName` | ***string***| ***(Optional)*** |
| `hostID` | ***string***| ***(Optional)*** |
| `spreadDomain` | ***string***| ***(Optional)*** |
| `tenancy` | ***string***| ***(Optional)*** |
## LaunchTemplateSpecTagSpecifications

Appears on:[LaunchTemplateSpec](#launchtemplatespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `resourceType` | ***string***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
## LaunchTemplateStatus

Appears on:[LaunchTemplate](#launchtemplate)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[LaunchTemplateSpec](#launchtemplatespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[LaunchTemplateStatus](#launchtemplatestatus)

---
