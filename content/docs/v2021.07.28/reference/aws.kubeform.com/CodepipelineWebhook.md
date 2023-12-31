---
title: CodepipelineWebhook
menu:
  docs_v2021.07.28:
    identifier: codepipelinewebhook-aws.kubeform.com
    name: CodepipelineWebhook
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

## CodepipelineWebhook
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `CodepipelineWebhook` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[CodepipelineWebhookSpec](#codepipelinewebhookspec)***||
| `status` | ***[CodepipelineWebhookStatus](#codepipelinewebhookstatus)***||
## CodepipelineWebhookSpec

Appears on:[CodepipelineWebhook](#codepipelinewebhook), [CodepipelineWebhookStatus](#codepipelinewebhookstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `secretRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `authentication` | ***string***||
| `authenticationConfiguration` | ***[[]CodepipelineWebhookSpecAuthenticationConfiguration](#codepipelinewebhookspecauthenticationconfiguration)***| ***(Optional)*** |
| `filter` | ***[[]CodepipelineWebhookSpecFilter](#codepipelinewebhookspecfilter)***||
| `name` | ***string***||
| `tags` | ***map[string]string***| ***(Optional)*** |
| `targetAction` | ***string***||
| `targetPipeline` | ***string***||
| `url` | ***string***| ***(Optional)*** |
## CodepipelineWebhookSpecAuthenticationConfiguration

Appears on:[CodepipelineWebhookSpec](#codepipelinewebhookspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `allowedIPRange` | ***string***| ***(Optional)*** |
## CodepipelineWebhookSpecFilter

Appears on:[CodepipelineWebhookSpec](#codepipelinewebhookspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `jsonPath` | ***string***||
| `matchEquals` | ***string***||
## CodepipelineWebhookStatus

Appears on:[CodepipelineWebhook](#codepipelinewebhook)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[CodepipelineWebhookSpec](#codepipelinewebhookspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[CodepipelineWebhookStatus](#codepipelinewebhookstatus)

---
## Sensitive Values
| Name | Type | Description |
|------|------|-------------|
| `authentication_configuration.<index>.secret_token` | ***string*** ||
