---
title: CloudwatchMetricAlarm
menu:
  docs_v2021.10.29:
    identifier: cloudwatchmetricalarm-aws.kubeform.com
    name: CloudwatchMetricAlarm
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

## CloudwatchMetricAlarm
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `CloudwatchMetricAlarm` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[CloudwatchMetricAlarmSpec](#cloudwatchmetricalarmspec)***||
| `status` | ***[CloudwatchMetricAlarmStatus](#cloudwatchmetricalarmstatus)***||
## CloudwatchMetricAlarmSpec

Appears on:[CloudwatchMetricAlarm](#cloudwatchmetricalarm), [CloudwatchMetricAlarmStatus](#cloudwatchmetricalarmstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `actionsEnabled` | ***bool***| ***(Optional)*** |
| `alarmActions` | ***[]string***| ***(Optional)*** |
| `alarmDescription` | ***string***| ***(Optional)*** |
| `alarmName` | ***string***||
| `arn` | ***string***| ***(Optional)*** |
| `comparisonOperator` | ***string***||
| `datapointsToAlarm` | ***int64***| ***(Optional)*** |
| `dimensions` | ***map[string]string***| ***(Optional)*** |
| `evaluateLowSampleCountPercentiles` | ***string***| ***(Optional)*** |
| `evaluationPeriods` | ***int64***||
| `extendedStatistic` | ***string***| ***(Optional)*** |
| `insufficientDataActions` | ***[]string***| ***(Optional)*** |
| `metricName` | ***string***| ***(Optional)*** |
| `metricQuery` | ***[[]CloudwatchMetricAlarmSpecMetricQuery](#cloudwatchmetricalarmspecmetricquery)***| ***(Optional)*** |
| `namespace` | ***string***| ***(Optional)*** |
| `okActions` | ***[]string***| ***(Optional)*** |
| `period` | ***int64***| ***(Optional)*** |
| `statistic` | ***string***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
| `threshold` | ***float64***||
| `treatMissingData` | ***string***| ***(Optional)*** |
| `unit` | ***string***| ***(Optional)*** |
## CloudwatchMetricAlarmSpecMetricQuery

Appears on:[CloudwatchMetricAlarmSpec](#cloudwatchmetricalarmspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `expression` | ***string***| ***(Optional)*** |
| `ID` | ***string***||
| `label` | ***string***| ***(Optional)*** |
| `metric` | ***[[]CloudwatchMetricAlarmSpecMetricQueryMetric](#cloudwatchmetricalarmspecmetricquerymetric)***| ***(Optional)*** |
| `returnData` | ***bool***| ***(Optional)*** |
## CloudwatchMetricAlarmSpecMetricQueryMetric

Appears on:[CloudwatchMetricAlarmSpecMetricQuery](#cloudwatchmetricalarmspecmetricquery)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `dimensions` | ***map[string]string***| ***(Optional)*** |
| `metricName` | ***string***||
| `namespace` | ***string***| ***(Optional)*** |
| `period` | ***int64***||
| `stat` | ***string***||
| `unit` | ***string***| ***(Optional)*** |
## CloudwatchMetricAlarmStatus

Appears on:[CloudwatchMetricAlarm](#cloudwatchmetricalarm)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[CloudwatchMetricAlarmSpec](#cloudwatchmetricalarmspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[CloudwatchMetricAlarmStatus](#cloudwatchmetricalarmstatus)

---
