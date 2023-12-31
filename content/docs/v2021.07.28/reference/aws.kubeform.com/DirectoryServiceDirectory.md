---
title: DirectoryServiceDirectory
menu:
  docs_v2021.07.28:
    identifier: directoryservicedirectory-aws.kubeform.com
    name: DirectoryServiceDirectory
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

## DirectoryServiceDirectory
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `DirectoryServiceDirectory` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[DirectoryServiceDirectorySpec](#directoryservicedirectoryspec)***||
| `status` | ***[DirectoryServiceDirectoryStatus](#directoryservicedirectorystatus)***||
## DirectoryServiceDirectorySpec

Appears on:[DirectoryServiceDirectory](#directoryservicedirectory), [DirectoryServiceDirectoryStatus](#directoryservicedirectorystatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `secretRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `accessURL` | ***string***| ***(Optional)*** |
| `alias` | ***string***| ***(Optional)*** |
| `connectSettings` | ***[[]DirectoryServiceDirectorySpecConnectSettings](#directoryservicedirectoryspecconnectsettings)***| ***(Optional)*** |
| `description` | ***string***| ***(Optional)*** |
| `dnsIPAddresses` | ***[]string***| ***(Optional)*** |
| `edition` | ***string***| ***(Optional)*** |
| `enableSso` | ***bool***| ***(Optional)*** |
| `name` | ***string***||
| `securityGroupID` | ***string***| ***(Optional)*** |
| `shortName` | ***string***| ***(Optional)*** |
| `size` | ***string***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
| `type` | ***string***| ***(Optional)*** |
| `vpcSettings` | ***[[]DirectoryServiceDirectorySpecVpcSettings](#directoryservicedirectoryspecvpcsettings)***| ***(Optional)*** |
## DirectoryServiceDirectorySpecConnectSettings

Appears on:[DirectoryServiceDirectorySpec](#directoryservicedirectoryspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `customerDNSIPS` | ***[]string***||
| `customerUsername` | ***string***||
| `subnetIDS` | ***[]string***||
| `vpcID` | ***string***||
## DirectoryServiceDirectorySpecVpcSettings

Appears on:[DirectoryServiceDirectorySpec](#directoryservicedirectoryspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `subnetIDS` | ***[]string***||
| `vpcID` | ***string***||
## DirectoryServiceDirectoryStatus

Appears on:[DirectoryServiceDirectory](#directoryservicedirectory)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[DirectoryServiceDirectorySpec](#directoryservicedirectoryspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[DirectoryServiceDirectoryStatus](#directoryservicedirectorystatus)

---
## Sensitive Values
| Name | Type | Description |
|------|------|-------------|
| `password` | ***string*** ||
