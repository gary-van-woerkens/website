---
title: VpcEndpoint
menu:
  docs_v2022.05.11:
    identifier: vpcendpoint-aws.kubeform.com
    name: VpcEndpoint
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

## VpcEndpoint
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `VpcEndpoint` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-22.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[VpcEndpointSpec](#vpcendpointspec)***||
| `status` | ***[VpcEndpointStatus](#vpcendpointstatus)***||
## Phase(`string` alias)

Appears on:[VpcEndpointStatus](#vpcendpointstatus)

## VpcEndpointSpec

Appears on:[VpcEndpoint](#vpcendpoint), [VpcEndpointStatus](#vpcendpointstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-22.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `autoAccept` | ***bool***| ***(Optional)*** |
| `cidrBlocks` | ***[]string***| ***(Optional)*** |
| `dnsEntry` | ***[[]VpcEndpointSpecDnsEntry](#vpcendpointspecdnsentry)***| ***(Optional)*** |
| `networkInterfaceIDS` | ***[]string***| ***(Optional)*** |
| `ownerID` | ***string***| ***(Optional)*** |
| `policy` | ***string***| ***(Optional)*** |
| `prefixListID` | ***string***| ***(Optional)*** |
| `privateDNSEnabled` | ***bool***| ***(Optional)*** |
| `requesterManaged` | ***bool***| ***(Optional)*** |
| `routeTableIDS` | ***[]string***| ***(Optional)*** |
| `securityGroupIDS` | ***[]string***| ***(Optional)*** |
| `serviceName` | ***string***||
| `state` | ***string***| ***(Optional)*** |
| `subnetIDS` | ***[]string***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
| `vpcEndpointType` | ***string***| ***(Optional)*** |
| `vpcID` | ***string***||
## VpcEndpointSpecDnsEntry

Appears on:[VpcEndpointSpec](#vpcendpointspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `dnsName` | ***string***| ***(Optional)*** |
| `hostedZoneID` | ***string***| ***(Optional)*** |
## VpcEndpointStatus

Appears on:[VpcEndpoint](#vpcendpoint)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[VpcEndpointSpec](#vpcendpointspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
