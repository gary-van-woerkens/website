---
title: Route53ResolverRule
menu:
  docs_v2021.07.28:
    identifier: route53resolverrule-aws.kubeform.com
    name: Route53ResolverRule
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

## Route53ResolverRule
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `Route53ResolverRule` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[Route53ResolverRuleSpec](#route53resolverrulespec)***||
| `status` | ***[Route53ResolverRuleStatus](#route53resolverrulestatus)***||
## Phase(`string` alias)

Appears on:[Route53ResolverRuleStatus](#route53resolverrulestatus)

## Route53ResolverRuleSpec

Appears on:[Route53ResolverRule](#route53resolverrule), [Route53ResolverRuleStatus](#route53resolverrulestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `arn` | ***string***| ***(Optional)*** |
| `domainName` | ***string***||
| `name` | ***string***| ***(Optional)*** |
| `ownerID` | ***string***| ***(Optional)*** |
| `resolverEndpointID` | ***string***| ***(Optional)*** |
| `ruleType` | ***string***||
| `shareStatus` | ***string***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
| `targetIP` | ***[[]Route53ResolverRuleSpecTargetIP](#route53resolverrulespectargetip)***| ***(Optional)*** |
## Route53ResolverRuleSpecTargetIP

Appears on:[Route53ResolverRuleSpec](#route53resolverrulespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `ip` | ***string***||
| `port` | ***int64***| ***(Optional)*** |
## Route53ResolverRuleStatus

Appears on:[Route53ResolverRule](#route53resolverrule)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[Route53ResolverRuleSpec](#route53resolverrulespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
