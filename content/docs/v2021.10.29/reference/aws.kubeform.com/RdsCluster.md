---
title: RdsCluster
menu:
  docs_v2021.10.29:
    identifier: rdscluster-aws.kubeform.com
    name: RdsCluster
    parent: aws.kubeform.com-reference
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

## RdsCluster
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `RdsCluster` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[RdsClusterSpec](#rdsclusterspec)***||
| `status` | ***[RdsClusterStatus](#rdsclusterstatus)***||
## Phase(`string` alias)

Appears on:[RdsClusterStatus](#rdsclusterstatus)

## RdsClusterSpec

Appears on:[RdsCluster](#rdscluster), [RdsClusterStatus](#rdsclusterstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `secretRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `applyImmediately` | ***bool***| ***(Optional)*** |
| `arn` | ***string***| ***(Optional)*** |
| `availabilityZones` | ***[]string***| ***(Optional)*** |
| `backtrackWindow` | ***int64***| ***(Optional)*** |
| `backupRetentionPeriod` | ***int64***| ***(Optional)*** |
| `clusterIdentifier` | ***string***| ***(Optional)*** |
| `clusterIdentifierPrefix` | ***string***| ***(Optional)*** |
| `clusterMembers` | ***[]string***| ***(Optional)*** |
| `clusterResourceID` | ***string***| ***(Optional)*** |
| `copyTagsToSnapshot` | ***bool***| ***(Optional)*** |
| `databaseName` | ***string***| ***(Optional)*** |
| `dbClusterParameterGroupName` | ***string***| ***(Optional)*** |
| `dbSubnetGroupName` | ***string***| ***(Optional)*** |
| `deletionProtection` | ***bool***| ***(Optional)*** |
| `enabledCloudwatchLogsExports` | ***[]string***| ***(Optional)*** |
| `endpoint` | ***string***| ***(Optional)*** |
| `engine` | ***string***| ***(Optional)*** |
| `engineMode` | ***string***| ***(Optional)*** |
| `engineVersion` | ***string***| ***(Optional)*** |
| `finalSnapshotIdentifier` | ***string***| ***(Optional)*** |
| `globalClusterIdentifier` | ***string***| ***(Optional)*** |
| `hostedZoneID` | ***string***| ***(Optional)*** |
| `iamDatabaseAuthenticationEnabled` | ***bool***| ***(Optional)*** |
| `iamRoles` | ***[]string***| ***(Optional)*** |
| `kmsKeyID` | ***string***| ***(Optional)*** |
| `masterUsername` | ***string***| ***(Optional)*** |
| `port` | ***int64***| ***(Optional)*** |
| `preferredBackupWindow` | ***string***| ***(Optional)*** |
| `preferredMaintenanceWindow` | ***string***| ***(Optional)*** |
| `readerEndpoint` | ***string***| ***(Optional)*** |
| `replicationSourceIdentifier` | ***string***| ***(Optional)*** |
| `s3Import` | ***[[]RdsClusterSpecS3Import](#rdsclusterspecs3import)***| ***(Optional)*** |
| `scalingConfiguration` | ***[[]RdsClusterSpecScalingConfiguration](#rdsclusterspecscalingconfiguration)***| ***(Optional)*** |
| `skipFinalSnapshot` | ***bool***| ***(Optional)*** |
| `snapshotIdentifier` | ***string***| ***(Optional)*** |
| `sourceRegion` | ***string***| ***(Optional)*** |
| `storageEncrypted` | ***bool***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
| `vpcSecurityGroupIDS` | ***[]string***| ***(Optional)*** |
## RdsClusterSpecS3Import

Appears on:[RdsClusterSpec](#rdsclusterspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `bucketName` | ***string***||
| `bucketPrefix` | ***string***| ***(Optional)*** |
| `ingestionRole` | ***string***||
| `sourceEngine` | ***string***||
| `sourceEngineVersion` | ***string***||
## RdsClusterSpecScalingConfiguration

Appears on:[RdsClusterSpec](#rdsclusterspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `autoPause` | ***bool***| ***(Optional)*** |
| `maxCapacity` | ***int64***| ***(Optional)*** |
| `minCapacity` | ***int64***| ***(Optional)*** |
| `secondsUntilAutoPause` | ***int64***| ***(Optional)*** |
| `timeoutAction` | ***string***| ***(Optional)*** |
## RdsClusterStatus

Appears on:[RdsCluster](#rdscluster)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[RdsClusterSpec](#rdsclusterspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
## Sensitive Values
| Name | Type | Description |
|------|------|-------------|
| `master_password` | ***string*** ||
