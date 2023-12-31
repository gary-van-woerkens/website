---
title: DbSecurityGroup
menu:
  docs_v2021.07.28:
    identifier: dbsecuritygroup-aws.kubeform.com
    name: DbSecurityGroup
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

## DbSecurityGroup
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `DbSecurityGroup` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[DbSecurityGroupSpec](#dbsecuritygroupspec)***||
| `status` | ***[DbSecurityGroupStatus](#dbsecuritygroupstatus)***||
## DbSecurityGroupSpec

Appears on:[DbSecurityGroup](#dbsecuritygroup), [DbSecurityGroupStatus](#dbsecuritygroupstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `arn` | ***string***| ***(Optional)*** |
| `description` | ***string***| ***(Optional)*** |
| `ingress` | ***[[]DbSecurityGroupSpecIngress](#dbsecuritygroupspecingress)***||
| `name` | ***string***||
| `tags` | ***map[string]string***| ***(Optional)*** |
## DbSecurityGroupSpecIngress

Appears on:[DbSecurityGroupSpec](#dbsecuritygroupspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `cidr` | ***string***| ***(Optional)*** |
| `securityGroupID` | ***string***| ***(Optional)*** |
| `securityGroupName` | ***string***| ***(Optional)*** |
| `securityGroupOwnerID` | ***string***| ***(Optional)*** |
## DbSecurityGroupStatus

Appears on:[DbSecurityGroup](#dbsecuritygroup)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[DbSecurityGroupSpec](#dbsecuritygroupspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[DbSecurityGroupStatus](#dbsecuritygroupstatus)

---
