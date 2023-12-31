---
title: ElasticsearchDomain
menu:
  docs_v2021.08.02:
    identifier: elasticsearchdomain-aws.kubeform.com
    name: ElasticsearchDomain
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

## ElasticsearchDomain
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `ElasticsearchDomain` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ElasticsearchDomainSpec](#elasticsearchdomainspec)***||
| `status` | ***[ElasticsearchDomainStatus](#elasticsearchdomainstatus)***||
## ElasticsearchDomainSpec

Appears on:[ElasticsearchDomain](#elasticsearchdomain), [ElasticsearchDomainStatus](#elasticsearchdomainstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `accessPolicies` | ***string***| ***(Optional)*** |
| `advancedOptions` | ***map[string]string***| ***(Optional)*** |
| `arn` | ***string***| ***(Optional)*** |
| `clusterConfig` | ***[[]ElasticsearchDomainSpecClusterConfig](#elasticsearchdomainspecclusterconfig)***| ***(Optional)*** |
| `cognitoOptions` | ***[[]ElasticsearchDomainSpecCognitoOptions](#elasticsearchdomainspeccognitooptions)***| ***(Optional)*** |
| `domainID` | ***string***| ***(Optional)*** |
| `domainName` | ***string***||
| `ebsOptions` | ***[[]ElasticsearchDomainSpecEbsOptions](#elasticsearchdomainspecebsoptions)***| ***(Optional)*** |
| `elasticsearchVersion` | ***string***| ***(Optional)*** |
| `encryptAtRest` | ***[[]ElasticsearchDomainSpecEncryptAtRest](#elasticsearchdomainspecencryptatrest)***| ***(Optional)*** |
| `endpoint` | ***string***| ***(Optional)*** |
| `kibanaEndpoint` | ***string***| ***(Optional)*** |
| `logPublishingOptions` | ***[[]ElasticsearchDomainSpecLogPublishingOptions](#elasticsearchdomainspeclogpublishingoptions)***| ***(Optional)*** |
| `nodeToNodeEncryption` | ***[[]ElasticsearchDomainSpecNodeToNodeEncryption](#elasticsearchdomainspecnodetonodeencryption)***| ***(Optional)*** |
| `snapshotOptions` | ***[[]ElasticsearchDomainSpecSnapshotOptions](#elasticsearchdomainspecsnapshotoptions)***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
| `vpcOptions` | ***[[]ElasticsearchDomainSpecVpcOptions](#elasticsearchdomainspecvpcoptions)***| ***(Optional)*** |
## ElasticsearchDomainSpecClusterConfig

Appears on:[ElasticsearchDomainSpec](#elasticsearchdomainspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `dedicatedMasterCount` | ***int64***| ***(Optional)*** |
| `dedicatedMasterEnabled` | ***bool***| ***(Optional)*** |
| `dedicatedMasterType` | ***string***| ***(Optional)*** |
| `instanceCount` | ***int64***| ***(Optional)*** |
| `instanceType` | ***string***| ***(Optional)*** |
| `zoneAwarenessConfig` | ***[[]ElasticsearchDomainSpecClusterConfigZoneAwarenessConfig](#elasticsearchdomainspecclusterconfigzoneawarenessconfig)***| ***(Optional)*** |
| `zoneAwarenessEnabled` | ***bool***| ***(Optional)*** |
## ElasticsearchDomainSpecClusterConfigZoneAwarenessConfig

Appears on:[ElasticsearchDomainSpecClusterConfig](#elasticsearchdomainspecclusterconfig)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `availabilityZoneCount` | ***int64***| ***(Optional)*** |
## ElasticsearchDomainSpecCognitoOptions

Appears on:[ElasticsearchDomainSpec](#elasticsearchdomainspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `enabled` | ***bool***| ***(Optional)*** |
| `identityPoolID` | ***string***||
| `roleArn` | ***string***||
| `userPoolID` | ***string***||
## ElasticsearchDomainSpecEbsOptions

Appears on:[ElasticsearchDomainSpec](#elasticsearchdomainspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `ebsEnabled` | ***bool***||
| `iops` | ***int64***| ***(Optional)*** |
| `volumeSize` | ***int64***| ***(Optional)*** |
| `volumeType` | ***string***| ***(Optional)*** |
## ElasticsearchDomainSpecEncryptAtRest

Appears on:[ElasticsearchDomainSpec](#elasticsearchdomainspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `enabled` | ***bool***||
| `kmsKeyID` | ***string***| ***(Optional)*** |
## ElasticsearchDomainSpecLogPublishingOptions

Appears on:[ElasticsearchDomainSpec](#elasticsearchdomainspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `cloudwatchLogGroupArn` | ***string***||
| `enabled` | ***bool***| ***(Optional)*** |
| `logType` | ***string***||
## ElasticsearchDomainSpecNodeToNodeEncryption

Appears on:[ElasticsearchDomainSpec](#elasticsearchdomainspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `enabled` | ***bool***||
## ElasticsearchDomainSpecSnapshotOptions

Appears on:[ElasticsearchDomainSpec](#elasticsearchdomainspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `automatedSnapshotStartHour` | ***int64***||
## ElasticsearchDomainSpecVpcOptions

Appears on:[ElasticsearchDomainSpec](#elasticsearchdomainspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `availabilityZones` | ***[]string***| ***(Optional)*** |
| `securityGroupIDS` | ***[]string***| ***(Optional)*** |
| `subnetIDS` | ***[]string***| ***(Optional)*** |
| `vpcID` | ***string***| ***(Optional)*** |
## ElasticsearchDomainStatus

Appears on:[ElasticsearchDomain](#elasticsearchdomain)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ElasticsearchDomainSpec](#elasticsearchdomainspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[ElasticsearchDomainStatus](#elasticsearchdomainstatus)

---
