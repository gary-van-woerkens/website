---
title: SesReceiptRule
menu:
  docs_v2021.08.02:
    identifier: sesreceiptrule-aws.kubeform.com
    name: SesReceiptRule
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

## SesReceiptRule
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `SesReceiptRule` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[SesReceiptRuleSpec](#sesreceiptrulespec)***||
| `status` | ***[SesReceiptRuleStatus](#sesreceiptrulestatus)***||
## Phase(`string` alias)

Appears on:[SesReceiptRuleStatus](#sesreceiptrulestatus)

## SesReceiptRuleSpec

Appears on:[SesReceiptRule](#sesreceiptrule), [SesReceiptRuleStatus](#sesreceiptrulestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `addHeaderAction` | ***[[]SesReceiptRuleSpecAddHeaderAction](#sesreceiptrulespecaddheaderaction)***| ***(Optional)*** |
| `after` | ***string***| ***(Optional)*** |
| `bounceAction` | ***[[]SesReceiptRuleSpecBounceAction](#sesreceiptrulespecbounceaction)***| ***(Optional)*** |
| `enabled` | ***bool***| ***(Optional)*** |
| `lambdaAction` | ***[[]SesReceiptRuleSpecLambdaAction](#sesreceiptrulespeclambdaaction)***| ***(Optional)*** |
| `name` | ***string***||
| `recipients` | ***[]string***| ***(Optional)*** |
| `ruleSetName` | ***string***||
| `s3Action` | ***[[]SesReceiptRuleSpecS3Action](#sesreceiptrulespecs3action)***| ***(Optional)*** |
| `scanEnabled` | ***bool***| ***(Optional)*** |
| `snsAction` | ***[[]SesReceiptRuleSpecSnsAction](#sesreceiptrulespecsnsaction)***| ***(Optional)*** |
| `stopAction` | ***[[]SesReceiptRuleSpecStopAction](#sesreceiptrulespecstopaction)***| ***(Optional)*** |
| `tlsPolicy` | ***string***| ***(Optional)*** |
| `workmailAction` | ***[[]SesReceiptRuleSpecWorkmailAction](#sesreceiptrulespecworkmailaction)***| ***(Optional)*** |
## SesReceiptRuleSpecAddHeaderAction

Appears on:[SesReceiptRuleSpec](#sesreceiptrulespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `headerName` | ***string***||
| `headerValue` | ***string***||
| `position` | ***int64***||
## SesReceiptRuleSpecBounceAction

Appears on:[SesReceiptRuleSpec](#sesreceiptrulespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `message` | ***string***||
| `position` | ***int64***||
| `sender` | ***string***||
| `smtpReplyCode` | ***string***||
| `statusCode` | ***string***| ***(Optional)*** |
| `topicArn` | ***string***| ***(Optional)*** |
## SesReceiptRuleSpecLambdaAction

Appears on:[SesReceiptRuleSpec](#sesreceiptrulespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `functionArn` | ***string***||
| `invocationType` | ***string***| ***(Optional)*** |
| `position` | ***int64***||
| `topicArn` | ***string***| ***(Optional)*** |
## SesReceiptRuleSpecS3Action

Appears on:[SesReceiptRuleSpec](#sesreceiptrulespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `bucketName` | ***string***||
| `kmsKeyArn` | ***string***| ***(Optional)*** |
| `objectKeyPrefix` | ***string***| ***(Optional)*** |
| `position` | ***int64***||
| `topicArn` | ***string***| ***(Optional)*** |
## SesReceiptRuleSpecSnsAction

Appears on:[SesReceiptRuleSpec](#sesreceiptrulespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `position` | ***int64***||
| `topicArn` | ***string***||
## SesReceiptRuleSpecStopAction

Appears on:[SesReceiptRuleSpec](#sesreceiptrulespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `position` | ***int64***||
| `scope` | ***string***||
| `topicArn` | ***string***| ***(Optional)*** |
## SesReceiptRuleSpecWorkmailAction

Appears on:[SesReceiptRuleSpec](#sesreceiptrulespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `organizationArn` | ***string***||
| `position` | ***int64***||
| `topicArn` | ***string***| ***(Optional)*** |
## SesReceiptRuleStatus

Appears on:[SesReceiptRule](#sesreceiptrule)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[SesReceiptRuleSpec](#sesreceiptrulespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
