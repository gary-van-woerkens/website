---
title: AlbListener
menu:
  docs_v2022.05.11:
    identifier: alblistener-aws.kubeform.com
    name: AlbListener
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

## AlbListener
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `AlbListener` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-22.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[AlbListenerSpec](#alblistenerspec)***||
| `status` | ***[AlbListenerStatus](#alblistenerstatus)***||
## AlbListenerSpec

Appears on:[AlbListener](#alblistener), [AlbListenerStatus](#alblistenerstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-22.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `secretRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-22.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#localobjectreference-v1-core)***||
| `arn` | ***string***| ***(Optional)*** |
| `certificateArn` | ***string***| ***(Optional)*** |
| `defaultAction` | ***[[]AlbListenerSpecDefaultAction](#alblistenerspecdefaultaction)***||
| `loadBalancerArn` | ***string***||
| `port` | ***int64***||
| `protocol` | ***string***| ***(Optional)*** |
| `sslPolicy` | ***string***| ***(Optional)*** |
## AlbListenerSpecDefaultAction

Appears on:[AlbListenerSpec](#alblistenerspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `authenticateCognito` | ***[[]AlbListenerSpecDefaultActionAuthenticateCognito](#alblistenerspecdefaultactionauthenticatecognito)***| ***(Optional)*** |
| `authenticateOidc` | ***[[]AlbListenerSpecDefaultActionAuthenticateOidc](#alblistenerspecdefaultactionauthenticateoidc)***| ***(Optional)*** |
| `fixedResponse` | ***[[]AlbListenerSpecDefaultActionFixedResponse](#alblistenerspecdefaultactionfixedresponse)***| ***(Optional)*** |
| `order` | ***int64***| ***(Optional)*** |
| `redirect` | ***[[]AlbListenerSpecDefaultActionRedirect](#alblistenerspecdefaultactionredirect)***| ***(Optional)*** |
| `targetGroupArn` | ***string***| ***(Optional)*** |
| `type` | ***string***||
## AlbListenerSpecDefaultActionAuthenticateCognito

Appears on:[AlbListenerSpecDefaultAction](#alblistenerspecdefaultaction)

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
## AlbListenerSpecDefaultActionAuthenticateOidc

Appears on:[AlbListenerSpecDefaultAction](#alblistenerspecdefaultaction)

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
## AlbListenerSpecDefaultActionFixedResponse

Appears on:[AlbListenerSpecDefaultAction](#alblistenerspecdefaultaction)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `contentType` | ***string***||
| `messageBody` | ***string***| ***(Optional)*** |
| `statusCode` | ***string***| ***(Optional)*** |
## AlbListenerSpecDefaultActionRedirect

Appears on:[AlbListenerSpecDefaultAction](#alblistenerspecdefaultaction)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `host` | ***string***| ***(Optional)*** |
| `path` | ***string***| ***(Optional)*** |
| `port` | ***string***| ***(Optional)*** |
| `protocol` | ***string***| ***(Optional)*** |
| `query` | ***string***| ***(Optional)*** |
| `statusCode` | ***string***||
## AlbListenerStatus

Appears on:[AlbListener](#alblistener)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[AlbListenerSpec](#alblistenerspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[AlbListenerStatus](#alblistenerstatus)

---
## Sensitive Values
| Name | Type | Description |
|------|------|-------------|
| `default_action.<index>.authenticate_oidc.<index>.client_secret` | ***string*** ||
