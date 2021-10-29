---
title: Firewall
menu:
  docs_v2021.10.29:
    identifier: firewall-linode.kubeform.com
    name: Firewall
    parent: linode.kubeform.com-reference
    weight: 1
menu_name: docs_v2021.10.29
section_menu_id: reference
info:
  alicloud: v0.4.0
  aws: v0.4.0
  azurerm: v0.4.0
  civo: v0.4.0
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

## Firewall
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `linode.kubeform.com/v1alpha1` |
|    `kind` | string | `Firewall` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[FirewallSpec](#firewallspec)***||
| `status` | ***[FirewallStatus](#firewallstatus)***||
## FirewallSpec

Appears on:[Firewall](#firewall), [FirewallStatus](#firewallstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `devices` | ***[[]FirewallSpecDevices](#firewallspecdevices)***| ***(Optional)*** The devices associated with this firewall.|
| `disabled` | ***bool***| ***(Optional)*** If true, the Firewall is inactive.|
| `inbound` | ***[[]FirewallSpecInbound](#firewallspecinbound)***| ***(Optional)*** A firewall rule that specifies what inbound network traffic is allowed.|
| `label` | ***string***| ***(Optional)*** The label for the Firewall. For display purposes only. If no label is provided, a default will be assigned.|
| `linodes` | ***[]int64***|The IDs of Linodes to apply this firewall to.|
| `outbound` | ***[[]FirewallSpecOutbound](#firewallspecoutbound)***| ***(Optional)*** A firewall rule that specifies what outbound network traffic is allowed.|
| `status` | ***string***| ***(Optional)*** The status of the firewall.|
| `tags` | ***[]string***| ***(Optional)*** An array of tags applied to this object. Tags are for organizational purposes only.|
## FirewallSpecDevices

Appears on:[FirewallSpec](#firewallspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `entityID` | ***int64***| ***(Optional)*** The ID of the underlying entity for the firewall device (e.g. the Linode's ID).|
| `ID` | ***int64***| ***(Optional)*** The ID of the firewall device.|
| `label` | ***string***| ***(Optional)*** The label of the underlying entity for the firewall device.|
| `type` | ***string***| ***(Optional)*** The type of firewall device.|
| `url` | ***string***| ***(Optional)*** The URL of the underlying entity for the firewall device.|
## FirewallSpecInbound

Appears on:[FirewallSpec](#firewallspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `addresses` | ***[]string***|A list of IP addresses, CIDR blocks, or 0.0.0.0/0 (to whitelist all) this rule applies to.|
| `ports` | ***[]string***|A list of ports and/or port ranges (i.e. "443" or "80-90").|
| `protocol` | ***string***|The network protocol this rule controls.|
## FirewallSpecOutbound

Appears on:[FirewallSpec](#firewallspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `addresses` | ***[]string***|A list of IP addresses, CIDR blocks, or 0.0.0.0/0 (to whitelist all) this rule applies to.|
| `ports` | ***[]string***|A list of ports and/or port ranges (i.e. "443" or "80-90").|
| `protocol` | ***string***|The network protocol this rule controls.|
## FirewallStatus

Appears on:[Firewall](#firewall)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[FirewallSpec](#firewallspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[FirewallStatus](#firewallstatus)

---
