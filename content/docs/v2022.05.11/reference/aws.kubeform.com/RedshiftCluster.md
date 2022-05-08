---
title: RedshiftCluster
menu:
  docs_v2022.05.11:
    identifier: redshiftcluster-aws.kubeform.com
    name: RedshiftCluster
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

## RedshiftCluster
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `RedshiftCluster` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-22.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[RedshiftClusterSpec](#redshiftclusterspec)***||
| `status` | ***[RedshiftClusterStatus](#redshiftclusterstatus)***||
## Phase(`string` alias)

Appears on:[RedshiftClusterStatus](#redshiftclusterstatus)

## RedshiftClusterSpec

Appears on:[RedshiftCluster](#redshiftcluster), [RedshiftClusterStatus](#redshiftclusterstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-22.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `secretRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-22.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#localobjectreference-v1-core)***||
| `allowVersionUpgrade` | ***bool***| ***(Optional)*** |
| `arn` | ***string***| ***(Optional)*** |
| `automatedSnapshotRetentionPeriod` | ***int64***| ***(Optional)*** |
| `availabilityZone` | ***string***| ***(Optional)*** |
| `clusterIdentifier` | ***string***||
| `clusterParameterGroupName` | ***string***| ***(Optional)*** |
| `clusterPublicKey` | ***string***| ***(Optional)*** |
| `clusterRevisionNumber` | ***string***| ***(Optional)*** |
| `clusterSecurityGroups` | ***[]string***| ***(Optional)*** |
| `clusterSubnetGroupName` | ***string***| ***(Optional)*** |
| `clusterType` | ***string***| ***(Optional)*** |
| `clusterVersion` | ***string***| ***(Optional)*** |
| `databaseName` | ***string***| ***(Optional)*** |
| `dnsName` | ***string***| ***(Optional)*** |
| `elasticIP` | ***string***| ***(Optional)*** |
| `encrypted` | ***bool***| ***(Optional)*** |
| `endpoint` | ***string***| ***(Optional)*** |
| `enhancedVpcRouting` | ***bool***| ***(Optional)*** |
| `finalSnapshotIdentifier` | ***string***| ***(Optional)*** |
| `iamRoles` | ***[]string***| ***(Optional)*** |
| `kmsKeyID` | ***string***| ***(Optional)*** |
| `logging` | ***[[]RedshiftClusterSpecLogging](#redshiftclusterspeclogging)***| ***(Optional)*** |
| `masterUsername` | ***string***| ***(Optional)*** |
| `nodeType` | ***string***||
| `numberOfNodes` | ***int64***| ***(Optional)*** |
| `ownerAccount` | ***string***| ***(Optional)*** |
| `port` | ***int64***| ***(Optional)*** |
| `preferredMaintenanceWindow` | ***string***| ***(Optional)*** |
| `publiclyAccessible` | ***bool***| ***(Optional)*** |
| `skipFinalSnapshot` | ***bool***| ***(Optional)*** |
| `snapshotClusterIdentifier` | ***string***| ***(Optional)*** |
| `snapshotCopy` | ***[[]RedshiftClusterSpecSnapshotCopy](#redshiftclusterspecsnapshotcopy)***| ***(Optional)*** |
| `snapshotIdentifier` | ***string***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
| `vpcSecurityGroupIDS` | ***[]string***| ***(Optional)*** |
## RedshiftClusterSpecLogging

Appears on:[RedshiftClusterSpec](#redshiftclusterspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `bucketName` | ***string***| ***(Optional)*** |
| `enable` | ***bool***||
| `s3KeyPrefix` | ***string***| ***(Optional)*** |
## RedshiftClusterSpecSnapshotCopy

Appears on:[RedshiftClusterSpec](#redshiftclusterspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `destinationRegion` | ***string***||
| `grantName` | ***string***| ***(Optional)*** |
| `retentionPeriod` | ***int64***| ***(Optional)*** |
## RedshiftClusterStatus

Appears on:[RedshiftCluster](#redshiftcluster)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[RedshiftClusterSpec](#redshiftclusterspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
## Sensitive Values
| Name | Type | Description |
|------|------|-------------|
| `master_password` | ***string*** ||
