---
title: LbListener
menu:
  docs_v2021.08.02:
    identifier: lblistener-aws.kubeform.com
    name: LbListener
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

## LbListener
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `LbListener` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[LbListenerSpec](#lblistenerspec)***||
| `status` | ***[LbListenerStatus](#lblistenerstatus)***||
## LbListenerSpec

Appears on:[LbListener](#lblistener), [LbListenerStatus](#lblistenerstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `secretRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `arn` | ***string***| ***(Optional)*** |
| `certificateArn` | ***string***| ***(Optional)*** |
| `defaultAction` | ***[[]LbListenerSpecDefaultAction](#lblistenerspecdefaultaction)***||
| `loadBalancerArn` | ***string***||
| `port` | ***int64***||
| `protocol` | ***string***| ***(Optional)*** |
| `sslPolicy` | ***string***| ***(Optional)*** |
## LbListenerSpecDefaultAction

Appears on:[LbListenerSpec](#lblistenerspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `authenticateCognito` | ***[[]LbListenerSpecDefaultActionAuthenticateCognito](#lblistenerspecdefaultactionauthenticatecognito)***| ***(Optional)*** |
| `authenticateOidc` | ***[[]LbListenerSpecDefaultActionAuthenticateOidc](#lblistenerspecdefaultactionauthenticateoidc)***| ***(Optional)*** |
| `fixedResponse` | ***[[]LbListenerSpecDefaultActionFixedResponse](#lblistenerspecdefaultactionfixedresponse)***| ***(Optional)*** |
| `order` | ***int64***| ***(Optional)*** |
| `redirect` | ***[[]LbListenerSpecDefaultActionRedirect](#lblistenerspecdefaultactionredirect)***| ***(Optional)*** |
| `targetGroupArn` | ***string***| ***(Optional)*** |
| `type` | ***string***||
## LbListenerSpecDefaultActionAuthenticateCognito

Appears on:[LbListenerSpecDefaultAction](#lblistenerspecdefaultaction)

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
## LbListenerSpecDefaultActionAuthenticateOidc

Appears on:[LbListenerSpecDefaultAction](#lblistenerspecdefaultaction)

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
## LbListenerSpecDefaultActionFixedResponse

Appears on:[LbListenerSpecDefaultAction](#lblistenerspecdefaultaction)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `contentType` | ***string***||
| `messageBody` | ***string***| ***(Optional)*** |
| `statusCode` | ***string***| ***(Optional)*** |
## LbListenerSpecDefaultActionRedirect

Appears on:[LbListenerSpecDefaultAction](#lblistenerspecdefaultaction)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `host` | ***string***| ***(Optional)*** |
| `path` | ***string***| ***(Optional)*** |
| `port` | ***string***| ***(Optional)*** |
| `protocol` | ***string***| ***(Optional)*** |
| `query` | ***string***| ***(Optional)*** |
| `statusCode` | ***string***||
## LbListenerStatus

Appears on:[LbListener](#lblistener)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[LbListenerSpec](#lblistenerspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[LbListenerStatus](#lblistenerstatus)

---
## Sensitive Values
| Name | Type | Description |
|------|------|-------------|
| `default_action.<index>.authenticate_oidc.<index>.client_secret` | ***string*** ||
