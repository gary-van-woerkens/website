---
title: VpcDHCPOptions
menu:
  docs_v2021.07.28:
    identifier: vpcdhcpoptions-aws.kubeform.com
    name: VpcDHCPOptions
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

## VpcDHCPOptions
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `VpcDHCPOptions` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[VpcDHCPOptionsSpec](#vpcdhcpoptionsspec)***||
| `status` | ***[VpcDHCPOptionsStatus](#vpcdhcpoptionsstatus)***||
## Phase(`string` alias)

Appears on:[VpcDHCPOptionsStatus](#vpcdhcpoptionsstatus)

## VpcDHCPOptionsSpec

Appears on:[VpcDHCPOptions](#vpcdhcpoptions), [VpcDHCPOptionsStatus](#vpcdhcpoptionsstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `domainName` | ***string***| ***(Optional)*** |
| `domainNameServers` | ***[]string***| ***(Optional)*** |
| `netbiosNameServers` | ***[]string***| ***(Optional)*** |
| `netbiosNodeType` | ***string***| ***(Optional)*** |
| `ntpServers` | ***[]string***| ***(Optional)*** |
| `ownerID` | ***string***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
## VpcDHCPOptionsStatus

Appears on:[VpcDHCPOptions](#vpcdhcpoptions)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[VpcDHCPOptionsSpec](#vpcdhcpoptionsspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
