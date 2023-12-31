---
title: GameliftGameSessionQueue
menu:
  docs_v2021.07.28:
    identifier: gameliftgamesessionqueue-aws.kubeform.com
    name: GameliftGameSessionQueue
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

## GameliftGameSessionQueue
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `GameliftGameSessionQueue` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[GameliftGameSessionQueueSpec](#gameliftgamesessionqueuespec)***||
| `status` | ***[GameliftGameSessionQueueStatus](#gameliftgamesessionqueuestatus)***||
## GameliftGameSessionQueueSpec

Appears on:[GameliftGameSessionQueue](#gameliftgamesessionqueue), [GameliftGameSessionQueueStatus](#gameliftgamesessionqueuestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `arn` | ***string***| ***(Optional)*** |
| `destinations` | ***[]string***| ***(Optional)*** |
| `name` | ***string***||
| `playerLatencyPolicy` | ***[[]GameliftGameSessionQueueSpecPlayerLatencyPolicy](#gameliftgamesessionqueuespecplayerlatencypolicy)***| ***(Optional)*** |
| `timeoutInSeconds` | ***int64***| ***(Optional)*** |
## GameliftGameSessionQueueSpecPlayerLatencyPolicy

Appears on:[GameliftGameSessionQueueSpec](#gameliftgamesessionqueuespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `maximumIndividualPlayerLatencyMilliseconds` | ***int64***||
| `policyDurationSeconds` | ***int64***| ***(Optional)*** |
## GameliftGameSessionQueueStatus

Appears on:[GameliftGameSessionQueue](#gameliftgamesessionqueue)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[GameliftGameSessionQueueSpec](#gameliftgamesessionqueuespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[GameliftGameSessionQueueStatus](#gameliftgamesessionqueuestatus)

---
