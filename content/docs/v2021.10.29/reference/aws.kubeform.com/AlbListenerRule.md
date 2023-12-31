---
title: AlbListenerRule
menu:
  docs_v2021.10.29:
    identifier: alblistenerrule-aws.kubeform.com
    name: AlbListenerRule
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

## AlbListenerRule
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `AlbListenerRule` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[AlbListenerRuleSpec](#alblistenerrulespec)***||
| `status` | ***[AlbListenerRuleStatus](#alblistenerrulestatus)***||
## AlbListenerRuleSpec

Appears on:[AlbListenerRule](#alblistenerrule), [AlbListenerRuleStatus](#alblistenerrulestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `secretRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `action` | ***[[]AlbListenerRuleSpecAction](#alblistenerrulespecaction)***||
| `arn` | ***string***| ***(Optional)*** |
| `condition` | ***[[]AlbListenerRuleSpecCondition](#alblistenerrulespeccondition)***||
| `listenerArn` | ***string***||
| `priority` | ***int64***| ***(Optional)*** |
## AlbListenerRuleSpecAction

Appears on:[AlbListenerRuleSpec](#alblistenerrulespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `authenticateCognito` | ***[[]AlbListenerRuleSpecActionAuthenticateCognito](#alblistenerrulespecactionauthenticatecognito)***| ***(Optional)*** |
| `authenticateOidc` | ***[[]AlbListenerRuleSpecActionAuthenticateOidc](#alblistenerrulespecactionauthenticateoidc)***| ***(Optional)*** |
| `fixedResponse` | ***[[]AlbListenerRuleSpecActionFixedResponse](#alblistenerrulespecactionfixedresponse)***| ***(Optional)*** |
| `order` | ***int64***| ***(Optional)*** |
| `redirect` | ***[[]AlbListenerRuleSpecActionRedirect](#alblistenerrulespecactionredirect)***| ***(Optional)*** |
| `targetGroupArn` | ***string***| ***(Optional)*** |
| `type` | ***string***||
## AlbListenerRuleSpecActionAuthenticateCognito

Appears on:[AlbListenerRuleSpecAction](#alblistenerrulespecaction)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `authenticationRequestExtraParams` | ***map[string]string***| ***(Optional)*** |
| `onUnauthenticatedRequest` | ***string***| ***(Optional)*** |
| `scope` | ***string***| ***(Optional)*** |
| `sessionCookieName` | ***string***| ***(Optional)*** |
| `sessionTimeout` | ***int64***| ***(Optional)*** |
| `userPoolArn` | ***string***||
| `userPoolClientID` | ***string***||
| `userPoolDomain` | ***string***||
## AlbListenerRuleSpecActionAuthenticateOidc

Appears on:[AlbListenerRuleSpecAction](#alblistenerrulespecaction)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `authenticationRequestExtraParams` | ***map[string]string***| ***(Optional)*** |
| `authorizationEndpoint` | ***string***||
| `clientID` | ***string***||
| `issuer` | ***string***||
| `onUnauthenticatedRequest` | ***string***| ***(Optional)*** |
| `scope` | ***string***| ***(Optional)*** |
| `sessionCookieName` | ***string***| ***(Optional)*** |
| `sessionTimeout` | ***int64***| ***(Optional)*** |
| `tokenEndpoint` | ***string***||
| `userInfoEndpoint` | ***string***||
## AlbListenerRuleSpecActionFixedResponse

Appears on:[AlbListenerRuleSpecAction](#alblistenerrulespecaction)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `contentType` | ***string***||
| `messageBody` | ***string***| ***(Optional)*** |
| `statusCode` | ***string***| ***(Optional)*** |
## AlbListenerRuleSpecActionRedirect

Appears on:[AlbListenerRuleSpecAction](#alblistenerrulespecaction)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `host` | ***string***| ***(Optional)*** |
| `path` | ***string***| ***(Optional)*** |
| `port` | ***string***| ***(Optional)*** |
| `protocol` | ***string***| ***(Optional)*** |
| `query` | ***string***| ***(Optional)*** |
| `statusCode` | ***string***||
## AlbListenerRuleSpecCondition

Appears on:[AlbListenerRuleSpec](#alblistenerrulespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `field` | ***string***| ***(Optional)*** |
| `values` | ***[]string***| ***(Optional)*** |
## AlbListenerRuleStatus

Appears on:[AlbListenerRule](#alblistenerrule)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[AlbListenerRuleSpec](#alblistenerrulespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[AlbListenerRuleStatus](#alblistenerrulestatus)

---
## Sensitive Values
| Name | Type | Description |
|------|------|-------------|
| `action.<index>.authenticate_oidc.<index>.client_secret` | ***string*** ||
