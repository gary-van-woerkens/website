---
title: KinesisAnalyticsApplication
menu:
  docs_v2022.05.11:
    identifier: kinesisanalyticsapplication-aws.kubeform.com
    name: KinesisAnalyticsApplication
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

## KinesisAnalyticsApplication
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `KinesisAnalyticsApplication` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-22.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[KinesisAnalyticsApplicationSpec](#kinesisanalyticsapplicationspec)***||
| `status` | ***[KinesisAnalyticsApplicationStatus](#kinesisanalyticsapplicationstatus)***||
## KinesisAnalyticsApplicationSpec

Appears on:[KinesisAnalyticsApplication](#kinesisanalyticsapplication), [KinesisAnalyticsApplicationStatus](#kinesisanalyticsapplicationstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-22.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `arn` | ***string***| ***(Optional)*** |
| `cloudwatchLoggingOptions` | ***[[]KinesisAnalyticsApplicationSpecCloudwatchLoggingOptions](#kinesisanalyticsapplicationspeccloudwatchloggingoptions)***| ***(Optional)*** |
| `code` | ***string***| ***(Optional)*** |
| `createTimestamp` | ***string***| ***(Optional)*** |
| `description` | ***string***| ***(Optional)*** |
| `inputs` | ***[[]KinesisAnalyticsApplicationSpecInputs](#kinesisanalyticsapplicationspecinputs)***| ***(Optional)*** |
| `lastUpdateTimestamp` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `outputs` | ***[[]KinesisAnalyticsApplicationSpecOutputs](#kinesisanalyticsapplicationspecoutputs)***| ***(Optional)*** |
| `referenceDataSources` | ***[[]KinesisAnalyticsApplicationSpecReferenceDataSources](#kinesisanalyticsapplicationspecreferencedatasources)***| ***(Optional)*** |
| `status` | ***string***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
| `version` | ***int64***| ***(Optional)*** |
## KinesisAnalyticsApplicationSpecCloudwatchLoggingOptions

Appears on:[KinesisAnalyticsApplicationSpec](#kinesisanalyticsapplicationspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `ID` | ***string***| ***(Optional)*** |
| `logStreamArn` | ***string***||
| `roleArn` | ***string***||
## KinesisAnalyticsApplicationSpecInputs

Appears on:[KinesisAnalyticsApplicationSpec](#kinesisanalyticsapplicationspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `ID` | ***string***| ***(Optional)*** |
| `kinesisFirehose` | ***[[]KinesisAnalyticsApplicationSpecInputsKinesisFirehose](#kinesisanalyticsapplicationspecinputskinesisfirehose)***| ***(Optional)*** |
| `kinesisStream` | ***[[]KinesisAnalyticsApplicationSpecInputsKinesisStream](#kinesisanalyticsapplicationspecinputskinesisstream)***| ***(Optional)*** |
| `namePrefix` | ***string***||
| `parallelism` | ***[[]KinesisAnalyticsApplicationSpecInputsParallelism](#kinesisanalyticsapplicationspecinputsparallelism)***| ***(Optional)*** |
| `processingConfiguration` | ***[[]KinesisAnalyticsApplicationSpecInputsProcessingConfiguration](#kinesisanalyticsapplicationspecinputsprocessingconfiguration)***| ***(Optional)*** |
| `schema` | ***[[]KinesisAnalyticsApplicationSpecInputsSchema](#kinesisanalyticsapplicationspecinputsschema)***||
| `startingPositionConfiguration` | ***[[]KinesisAnalyticsApplicationSpecInputsStartingPositionConfiguration](#kinesisanalyticsapplicationspecinputsstartingpositionconfiguration)***| ***(Optional)*** |
| `streamNames` | ***[]string***| ***(Optional)*** |
## KinesisAnalyticsApplicationSpecInputsKinesisFirehose

Appears on:[KinesisAnalyticsApplicationSpecInputs](#kinesisanalyticsapplicationspecinputs)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `resourceArn` | ***string***||
| `roleArn` | ***string***||
## KinesisAnalyticsApplicationSpecInputsKinesisStream

Appears on:[KinesisAnalyticsApplicationSpecInputs](#kinesisanalyticsapplicationspecinputs)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `resourceArn` | ***string***||
| `roleArn` | ***string***||
## KinesisAnalyticsApplicationSpecInputsParallelism

Appears on:[KinesisAnalyticsApplicationSpecInputs](#kinesisanalyticsapplicationspecinputs)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `count` | ***int64***||
## KinesisAnalyticsApplicationSpecInputsProcessingConfiguration

Appears on:[KinesisAnalyticsApplicationSpecInputs](#kinesisanalyticsapplicationspecinputs)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `lambda` | ***[[]KinesisAnalyticsApplicationSpecInputsProcessingConfigurationLambda](#kinesisanalyticsapplicationspecinputsprocessingconfigurationlambda)***||
## KinesisAnalyticsApplicationSpecInputsProcessingConfigurationLambda

Appears on:[KinesisAnalyticsApplicationSpecInputsProcessingConfiguration](#kinesisanalyticsapplicationspecinputsprocessingconfiguration)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `resourceArn` | ***string***||
| `roleArn` | ***string***||
## KinesisAnalyticsApplicationSpecInputsSchema

Appears on:[KinesisAnalyticsApplicationSpecInputs](#kinesisanalyticsapplicationspecinputs)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `recordColumns` | ***[[]KinesisAnalyticsApplicationSpecInputsSchemaRecordColumns](#kinesisanalyticsapplicationspecinputsschemarecordcolumns)***||
| `recordEncoding` | ***string***| ***(Optional)*** |
| `recordFormat` | ***[[]KinesisAnalyticsApplicationSpecInputsSchemaRecordFormat](#kinesisanalyticsapplicationspecinputsschemarecordformat)***||
## KinesisAnalyticsApplicationSpecInputsSchemaRecordColumns

Appears on:[KinesisAnalyticsApplicationSpecInputsSchema](#kinesisanalyticsapplicationspecinputsschema)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `mapping` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `sqlType` | ***string***||
## KinesisAnalyticsApplicationSpecInputsSchemaRecordFormat

Appears on:[KinesisAnalyticsApplicationSpecInputsSchema](#kinesisanalyticsapplicationspecinputsschema)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `mappingParameters` | ***[[]KinesisAnalyticsApplicationSpecInputsSchemaRecordFormatMappingParameters](#kinesisanalyticsapplicationspecinputsschemarecordformatmappingparameters)***| ***(Optional)*** |
| `recordFormatType` | ***string***| ***(Optional)*** |
## KinesisAnalyticsApplicationSpecInputsSchemaRecordFormatMappingParameters

Appears on:[KinesisAnalyticsApplicationSpecInputsSchemaRecordFormat](#kinesisanalyticsapplicationspecinputsschemarecordformat)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `csv` | ***[[]KinesisAnalyticsApplicationSpecInputsSchemaRecordFormatMappingParametersCsv](#kinesisanalyticsapplicationspecinputsschemarecordformatmappingparameterscsv)***| ***(Optional)*** |
| `json` | ***[[]KinesisAnalyticsApplicationSpecInputsSchemaRecordFormatMappingParametersJson](#kinesisanalyticsapplicationspecinputsschemarecordformatmappingparametersjson)***| ***(Optional)*** |
## KinesisAnalyticsApplicationSpecInputsSchemaRecordFormatMappingParametersCsv

Appears on:[KinesisAnalyticsApplicationSpecInputsSchemaRecordFormatMappingParameters](#kinesisanalyticsapplicationspecinputsschemarecordformatmappingparameters)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `recordColumnDelimiter` | ***string***||
| `recordRowDelimiter` | ***string***||
## KinesisAnalyticsApplicationSpecInputsSchemaRecordFormatMappingParametersJson

Appears on:[KinesisAnalyticsApplicationSpecInputsSchemaRecordFormatMappingParameters](#kinesisanalyticsapplicationspecinputsschemarecordformatmappingparameters)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `recordRowPath` | ***string***||
## KinesisAnalyticsApplicationSpecInputsStartingPositionConfiguration

Appears on:[KinesisAnalyticsApplicationSpecInputs](#kinesisanalyticsapplicationspecinputs)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `startingPosition` | ***string***| ***(Optional)*** |
## KinesisAnalyticsApplicationSpecOutputs

Appears on:[KinesisAnalyticsApplicationSpec](#kinesisanalyticsapplicationspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `ID` | ***string***| ***(Optional)*** |
| `kinesisFirehose` | ***[[]KinesisAnalyticsApplicationSpecOutputsKinesisFirehose](#kinesisanalyticsapplicationspecoutputskinesisfirehose)***| ***(Optional)*** |
| `kinesisStream` | ***[[]KinesisAnalyticsApplicationSpecOutputsKinesisStream](#kinesisanalyticsapplicationspecoutputskinesisstream)***| ***(Optional)*** |
| `lambda` | ***[[]KinesisAnalyticsApplicationSpecOutputsLambda](#kinesisanalyticsapplicationspecoutputslambda)***| ***(Optional)*** |
| `name` | ***string***||
| `schema` | ***[[]KinesisAnalyticsApplicationSpecOutputsSchema](#kinesisanalyticsapplicationspecoutputsschema)***||
## KinesisAnalyticsApplicationSpecOutputsKinesisFirehose

Appears on:[KinesisAnalyticsApplicationSpecOutputs](#kinesisanalyticsapplicationspecoutputs)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `resourceArn` | ***string***||
| `roleArn` | ***string***||
## KinesisAnalyticsApplicationSpecOutputsKinesisStream

Appears on:[KinesisAnalyticsApplicationSpecOutputs](#kinesisanalyticsapplicationspecoutputs)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `resourceArn` | ***string***||
| `roleArn` | ***string***||
## KinesisAnalyticsApplicationSpecOutputsLambda

Appears on:[KinesisAnalyticsApplicationSpecOutputs](#kinesisanalyticsapplicationspecoutputs)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `resourceArn` | ***string***||
| `roleArn` | ***string***||
## KinesisAnalyticsApplicationSpecOutputsSchema

Appears on:[KinesisAnalyticsApplicationSpecOutputs](#kinesisanalyticsapplicationspecoutputs)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `recordFormatType` | ***string***| ***(Optional)*** |
## KinesisAnalyticsApplicationSpecReferenceDataSources

Appears on:[KinesisAnalyticsApplicationSpec](#kinesisanalyticsapplicationspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `ID` | ***string***| ***(Optional)*** |
| `s3` | ***[[]KinesisAnalyticsApplicationSpecReferenceDataSourcesS3](#kinesisanalyticsapplicationspecreferencedatasourcess3)***||
| `schema` | ***[[]KinesisAnalyticsApplicationSpecReferenceDataSourcesSchema](#kinesisanalyticsapplicationspecreferencedatasourcesschema)***||
| `tableName` | ***string***||
## KinesisAnalyticsApplicationSpecReferenceDataSourcesS3

Appears on:[KinesisAnalyticsApplicationSpecReferenceDataSources](#kinesisanalyticsapplicationspecreferencedatasources)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `bucketArn` | ***string***||
| `fileKey` | ***string***||
| `roleArn` | ***string***||
## KinesisAnalyticsApplicationSpecReferenceDataSourcesSchema

Appears on:[KinesisAnalyticsApplicationSpecReferenceDataSources](#kinesisanalyticsapplicationspecreferencedatasources)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `recordColumns` | ***[[]KinesisAnalyticsApplicationSpecReferenceDataSourcesSchemaRecordColumns](#kinesisanalyticsapplicationspecreferencedatasourcesschemarecordcolumns)***||
| `recordEncoding` | ***string***| ***(Optional)*** |
| `recordFormat` | ***[[]KinesisAnalyticsApplicationSpecReferenceDataSourcesSchemaRecordFormat](#kinesisanalyticsapplicationspecreferencedatasourcesschemarecordformat)***||
## KinesisAnalyticsApplicationSpecReferenceDataSourcesSchemaRecordColumns

Appears on:[KinesisAnalyticsApplicationSpecReferenceDataSourcesSchema](#kinesisanalyticsapplicationspecreferencedatasourcesschema)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `mapping` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `sqlType` | ***string***||
## KinesisAnalyticsApplicationSpecReferenceDataSourcesSchemaRecordFormat

Appears on:[KinesisAnalyticsApplicationSpecReferenceDataSourcesSchema](#kinesisanalyticsapplicationspecreferencedatasourcesschema)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `mappingParameters` | ***[[]KinesisAnalyticsApplicationSpecReferenceDataSourcesSchemaRecordFormatMappingParameters](#kinesisanalyticsapplicationspecreferencedatasourcesschemarecordformatmappingparameters)***| ***(Optional)*** |
| `recordFormatType` | ***string***| ***(Optional)*** |
## KinesisAnalyticsApplicationSpecReferenceDataSourcesSchemaRecordFormatMappingParameters

Appears on:[KinesisAnalyticsApplicationSpecReferenceDataSourcesSchemaRecordFormat](#kinesisanalyticsapplicationspecreferencedatasourcesschemarecordformat)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `csv` | ***[[]KinesisAnalyticsApplicationSpecReferenceDataSourcesSchemaRecordFormatMappingParametersCsv](#kinesisanalyticsapplicationspecreferencedatasourcesschemarecordformatmappingparameterscsv)***| ***(Optional)*** |
| `json` | ***[[]KinesisAnalyticsApplicationSpecReferenceDataSourcesSchemaRecordFormatMappingParametersJson](#kinesisanalyticsapplicationspecreferencedatasourcesschemarecordformatmappingparametersjson)***| ***(Optional)*** |
## KinesisAnalyticsApplicationSpecReferenceDataSourcesSchemaRecordFormatMappingParametersCsv

Appears on:[KinesisAnalyticsApplicationSpecReferenceDataSourcesSchemaRecordFormatMappingParameters](#kinesisanalyticsapplicationspecreferencedatasourcesschemarecordformatmappingparameters)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `recordColumnDelimiter` | ***string***||
| `recordRowDelimiter` | ***string***||
## KinesisAnalyticsApplicationSpecReferenceDataSourcesSchemaRecordFormatMappingParametersJson

Appears on:[KinesisAnalyticsApplicationSpecReferenceDataSourcesSchemaRecordFormatMappingParameters](#kinesisanalyticsapplicationspecreferencedatasourcesschemarecordformatmappingparameters)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `recordRowPath` | ***string***||
## KinesisAnalyticsApplicationStatus

Appears on:[KinesisAnalyticsApplication](#kinesisanalyticsapplication)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[KinesisAnalyticsApplicationSpec](#kinesisanalyticsapplicationspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[KinesisAnalyticsApplicationStatus](#kinesisanalyticsapplicationstatus)

---
