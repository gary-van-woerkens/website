---
title: DataFactoryLinkedServiceDataLakeStorageGen2
menu:
  docs_v2021.07.28:
    identifier: datafactorylinkedservicedatalakestoragegen2-azurerm.kubeform.com
    name: DataFactoryLinkedServiceDataLakeStorageGen2
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

## DataFactoryLinkedServiceDataLakeStorageGen2
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `DataFactoryLinkedServiceDataLakeStorageGen2` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[DataFactoryLinkedServiceDataLakeStorageGen2Spec](#datafactorylinkedservicedatalakestoragegen2spec)***||
| `status` | ***[DataFactoryLinkedServiceDataLakeStorageGen2Status](#datafactorylinkedservicedatalakestoragegen2status)***||
## DataFactoryLinkedServiceDataLakeStorageGen2Spec

Appears on:[DataFactoryLinkedServiceDataLakeStorageGen2](#datafactorylinkedservicedatalakestoragegen2), [DataFactoryLinkedServiceDataLakeStorageGen2Status](#datafactorylinkedservicedatalakestoragegen2status)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `additionalProperties` | ***map[string]string***| ***(Optional)*** |
| `annotations` | ***[]string***| ***(Optional)*** |
| `dataFactoryName` | ***string***||
| `description` | ***string***| ***(Optional)*** |
| `integrationRuntimeName` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `parameters` | ***map[string]string***| ***(Optional)*** |
| `resourceGroupName` | ***string***||
| `servicePrincipalID` | ***string***||
| `servicePrincipalKey` | ***string***||
| `tenant` | ***string***||
| `url` | ***string***||
## DataFactoryLinkedServiceDataLakeStorageGen2Status

Appears on:[DataFactoryLinkedServiceDataLakeStorageGen2](#datafactorylinkedservicedatalakestoragegen2)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[DataFactoryLinkedServiceDataLakeStorageGen2Spec](#datafactorylinkedservicedatalakestoragegen2spec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[DataFactoryLinkedServiceDataLakeStorageGen2Status](#datafactorylinkedservicedatalakestoragegen2status)

---
