---
title: ElasticBeanstalkApplication
menu:
  docs_v2021.07.28:
    identifier: elasticbeanstalkapplication-aws.kubeform.com
    name: ElasticBeanstalkApplication
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2021.07.28
section_menu_id: reference
info:
  aws: v0.2.0
  azurerm: v0.2.0
  digitalocean: v0.2.0
  equinixmetal: v0.2.0
  google: v0.2.0
  installer: v2021.07.28
  linode: v0.2.0
  version: v2021.07.28
---

## ElasticBeanstalkApplication
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `ElasticBeanstalkApplication` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ElasticBeanstalkApplicationSpec](#elasticbeanstalkapplicationspec)***||
| `status` | ***[ElasticBeanstalkApplicationStatus](#elasticbeanstalkapplicationstatus)***||
## ElasticBeanstalkApplicationSpec

Appears on:[ElasticBeanstalkApplication](#elasticbeanstalkapplication), [ElasticBeanstalkApplicationStatus](#elasticbeanstalkapplicationstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `appversionLifecycle` | ***[[]ElasticBeanstalkApplicationSpecAppversionLifecycle](#elasticbeanstalkapplicationspecappversionlifecycle)***| ***(Optional)*** |
| `arn` | ***string***| ***(Optional)*** |
| `description` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `tags` | ***map[string]string***| ***(Optional)*** |
## ElasticBeanstalkApplicationSpecAppversionLifecycle

Appears on:[ElasticBeanstalkApplicationSpec](#elasticbeanstalkapplicationspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `deleteSourceFromS3` | ***bool***| ***(Optional)*** |
| `maxAgeInDays` | ***int64***| ***(Optional)*** |
| `maxCount` | ***int64***| ***(Optional)*** |
| `serviceRole` | ***string***||
## ElasticBeanstalkApplicationStatus

Appears on:[ElasticBeanstalkApplication](#elasticbeanstalkapplication)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ElasticBeanstalkApplicationSpec](#elasticbeanstalkapplicationspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[ElasticBeanstalkApplicationStatus](#elasticbeanstalkapplicationstatus)

---
