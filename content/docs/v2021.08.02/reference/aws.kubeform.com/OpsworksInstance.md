---
title: OpsworksInstance
menu:
  docs_v2021.08.02:
    identifier: opsworksinstance-aws.kubeform.com
    name: OpsworksInstance
    parent: aws.kubeform.com-reference
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

## OpsworksInstance
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `OpsworksInstance` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[OpsworksInstanceSpec](#opsworksinstancespec)***||
| `status` | ***[OpsworksInstanceStatus](#opsworksinstancestatus)***||
## OpsworksInstanceSpec

Appears on:[OpsworksInstance](#opsworksinstance), [OpsworksInstanceStatus](#opsworksinstancestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `agentVersion` | ***string***| ***(Optional)*** |
| `amiID` | ***string***| ***(Optional)*** |
| `architecture` | ***string***| ***(Optional)*** |
| `autoScalingType` | ***string***| ***(Optional)*** |
| `availabilityZone` | ***string***| ***(Optional)*** |
| `createdAt` | ***string***| ***(Optional)*** |
| `deleteEbs` | ***bool***| ***(Optional)*** |
| `deleteEip` | ***bool***| ***(Optional)*** |
| `ebsBlockDevice` | ***[[]OpsworksInstanceSpecEbsBlockDevice](#opsworksinstancespecebsblockdevice)***| ***(Optional)*** |
| `ebsOptimized` | ***bool***| ***(Optional)*** |
| `ec2InstanceID` | ***string***| ***(Optional)*** |
| `ecsClusterArn` | ***string***| ***(Optional)*** |
| `elasticIP` | ***string***| ***(Optional)*** |
| `ephemeralBlockDevice` | ***[[]OpsworksInstanceSpecEphemeralBlockDevice](#opsworksinstancespecephemeralblockdevice)***| ***(Optional)*** |
| `hostname` | ***string***| ***(Optional)*** |
| `infrastructureClass` | ***string***| ***(Optional)*** |
| `installUpdatesOnBoot` | ***bool***| ***(Optional)*** |
| `instanceProfileArn` | ***string***| ***(Optional)*** |
| `instanceType` | ***string***| ***(Optional)*** |
| `lastServiceErrorID` | ***string***| ***(Optional)*** |
| `layerIDS` | ***[]string***||
| `os` | ***string***| ***(Optional)*** |
| `platform` | ***string***| ***(Optional)*** |
| `privateDNS` | ***string***| ***(Optional)*** |
| `privateIP` | ***string***| ***(Optional)*** |
| `publicDNS` | ***string***| ***(Optional)*** |
| `publicIP` | ***string***| ***(Optional)*** |
| `registeredBy` | ***string***| ***(Optional)*** |
| `reportedAgentVersion` | ***string***| ***(Optional)*** |
| `reportedOsFamily` | ***string***| ***(Optional)*** |
| `reportedOsName` | ***string***| ***(Optional)*** |
| `reportedOsVersion` | ***string***| ***(Optional)*** |
| `rootBlockDevice` | ***[[]OpsworksInstanceSpecRootBlockDevice](#opsworksinstancespecrootblockdevice)***| ***(Optional)*** |
| `rootDeviceType` | ***string***| ***(Optional)*** |
| `rootDeviceVolumeID` | ***string***| ***(Optional)*** |
| `securityGroupIDS` | ***[]string***| ***(Optional)*** |
| `sshHostDsaKeyFingerprint` | ***string***| ***(Optional)*** |
| `sshHostRsaKeyFingerprint` | ***string***| ***(Optional)*** |
| `sshKeyName` | ***string***| ***(Optional)*** |
| `stackID` | ***string***||
| `state` | ***string***| ***(Optional)*** |
| `status` | ***string***| ***(Optional)*** |
| `subnetID` | ***string***| ***(Optional)*** |
| `tenancy` | ***string***| ***(Optional)*** |
| `virtualizationType` | ***string***| ***(Optional)*** |
## OpsworksInstanceSpecEbsBlockDevice

Appears on:[OpsworksInstanceSpec](#opsworksinstancespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `deleteOnTermination` | ***bool***| ***(Optional)*** |
| `deviceName` | ***string***||
| `iops` | ***int64***| ***(Optional)*** |
| `snapshotID` | ***string***| ***(Optional)*** |
| `volumeSize` | ***int64***| ***(Optional)*** |
| `volumeType` | ***string***| ***(Optional)*** |
## OpsworksInstanceSpecEphemeralBlockDevice

Appears on:[OpsworksInstanceSpec](#opsworksinstancespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `deviceName` | ***string***||
| `virtualName` | ***string***||
## OpsworksInstanceSpecRootBlockDevice

Appears on:[OpsworksInstanceSpec](#opsworksinstancespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `deleteOnTermination` | ***bool***| ***(Optional)*** |
| `iops` | ***int64***| ***(Optional)*** |
| `volumeSize` | ***int64***| ***(Optional)*** |
| `volumeType` | ***string***| ***(Optional)*** |
## OpsworksInstanceStatus

Appears on:[OpsworksInstance](#opsworksinstance)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[OpsworksInstanceSpec](#opsworksinstancespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[OpsworksInstanceStatus](#opsworksinstancestatus)

---
