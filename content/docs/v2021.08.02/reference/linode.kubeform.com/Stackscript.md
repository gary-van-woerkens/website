---
title: Stackscript
menu:
  docs_v2021.08.02:
    identifier: stackscript-linode.kubeform.com
    name: Stackscript
    parent: linode.kubeform.com-reference
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

## Stackscript
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `linode.kubeform.com/v1alpha1` |
|    `kind` | string | `Stackscript` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[StackscriptSpec](#stackscriptspec)***||
| `status` | ***[StackscriptStatus](#stackscriptstatus)***||
## Phase(`string` alias)

Appears on:[StackscriptStatus](#stackscriptstatus)

## StackscriptSpec

Appears on:[Stackscript](#stackscript), [StackscriptStatus](#stackscriptstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `created` | ***string***| ***(Optional)*** The date this StackScript was created.|
| `deploymentsActive` | ***int64***| ***(Optional)*** Count of currently active, deployed Linodes created from this StackScript.|
| `deploymentsTotal` | ***int64***| ***(Optional)*** The total number of times this StackScript has been deployed.|
| `description` | ***string***|A description for the StackScript.|
| `images` | ***[]string***|An array of Image IDs representing the Images that this StackScript is compatible for deploying with.|
| `isPublic` | ***bool***| ***(Optional)*** This determines whether other users can use your StackScript. Once a StackScript is made public, it cannot be made private.|
| `label` | ***string***|The StackScript's label is for display purposes only.|
| `revNote` | ***string***| ***(Optional)*** This field allows you to add notes for the set of revisions made to this StackScript.|
| `script` | ***string***|The script to execute when provisioning a new Linode with this StackScript.|
| `updated` | ***string***| ***(Optional)*** The date this StackScript was updated.|
| `userDefinedFields` | ***[[]StackscriptSpecUserDefinedFields](#stackscriptspecuserdefinedfields)***| ***(Optional)*** This is a list of fields defined with a special syntax inside this StackScript that allow for supplying customized parameters during deployment.|
| `userGravatarID` | ***string***| ***(Optional)*** The Gravatar ID for the User who created the StackScript.|
| `username` | ***string***| ***(Optional)*** The User who created the StackScript.|
## StackscriptSpecUserDefinedFields

Appears on:[StackscriptSpec](#stackscriptspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `default` | ***string***| ***(Optional)*** |
| `example` | ***string***| ***(Optional)*** |
| `label` | ***string***| ***(Optional)*** |
| `manyOf` | ***string***| ***(Optional)*** |
| `name` | ***string***| ***(Optional)*** |
| `oneOf` | ***string***| ***(Optional)*** |
## StackscriptStatus

Appears on:[Stackscript](#stackscript)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[StackscriptSpec](#stackscriptspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
