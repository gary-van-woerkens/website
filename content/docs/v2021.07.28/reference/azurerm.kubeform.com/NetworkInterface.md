---
title: NetworkInterface
menu:
  docs_v2021.07.28:
    identifier: networkinterface-azurerm.kubeform.com
    name: NetworkInterface
    parent: azurerm.kubeform.com-reference
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

## NetworkInterface
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `NetworkInterface` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[NetworkInterfaceSpec](#networkinterfacespec)***||
| `status` | ***[NetworkInterfaceStatus](#networkinterfacestatus)***||
## NetworkInterfaceSpec

Appears on:[NetworkInterface](#networkinterface), [NetworkInterfaceStatus](#networkinterfacestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `appliedDNSServers` | ***[]string***| ***(Optional)*** |
| `dnsServers` | ***[]string***| ***(Optional)*** |
| `enableAcceleratedNetworking` | ***bool***| ***(Optional)*** |
| `enableIPForwarding` | ***bool***| ***(Optional)*** |
| `internalDNSNameLabel` | ***string***| ***(Optional)*** |
| `internalFqdn` | ***string***| ***(Optional)*** Deprecated|
| `ipConfiguration` | ***[[]NetworkInterfaceSpecIpConfiguration](#networkinterfacespecipconfiguration)***||
| `location` | ***string***||
| `macAddress` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `networkSecurityGroupID` | ***string***| ***(Optional)*** |
| `privateIPAddress` | ***string***| ***(Optional)*** |
| `privateIPAddresses` | ***[]string***| ***(Optional)*** |
| `resourceGroupName` | ***string***||
| `tags` | ***map[string]string***| ***(Optional)*** |
| `virtualMachineID` | ***string***| ***(Optional)*** |
## NetworkInterfaceSpecIpConfiguration

Appears on:[NetworkInterfaceSpec](#networkinterfacespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `applicationGatewayBackendAddressPoolsIDS` | ***[]string***| ***(Optional)*** Deprecated|
| `applicationSecurityGroupIDS` | ***[]string***| ***(Optional)*** Deprecated|
| `loadBalancerBackendAddressPoolsIDS` | ***[]string***| ***(Optional)*** Deprecated|
| `loadBalancerInboundNATRulesIDS` | ***[]string***| ***(Optional)*** Deprecated|
| `name` | ***string***||
| `primary` | ***bool***| ***(Optional)*** |
| `privateIPAddress` | ***string***| ***(Optional)*** |
| `privateIPAddressAllocation` | ***string***||
| `privateIPAddressVersion` | ***string***| ***(Optional)*** |
| `publicIPAddressID` | ***string***| ***(Optional)*** |
| `subnetID` | ***string***| ***(Optional)*** |
## NetworkInterfaceStatus

Appears on:[NetworkInterface](#networkinterface)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[NetworkInterfaceSpec](#networkinterfacespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[NetworkInterfaceStatus](#networkinterfacestatus)

---
