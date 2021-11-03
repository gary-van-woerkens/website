---
title: Kubeform Concepts
menu:
  docs_v2021.10.29:
    identifier: concepts-architecture
    name: Architecture
    parent: concepts
    weight: 20
menu_name: docs_v2021.10.29
section_menu_id: concepts
info:
  alicloud: v0.4.0
  aws: v0.4.0
  azurerm: v0.4.0
  civo: v0.4.0
  cli: v0.1.0
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

> New to Kubeform? Please start [here](/docs/v2021.10.29/concepts/README).

# Kubeform Architecture

The following diagram shows how `Kubeform` creates a resource on a Cloud Provider (GCP, AWS, etc.).

<figure align="center">
 <img alt="Kubeform Architecture" src="/docs/v2021.10.29/images/concepts/what-is-kubeform/architecture.jpg">
 <figcaption align="center">Fig: Kubeform Architecture</figcaption>
</figure>

The Resource Creation Process of Kubeform consists of the following steps:

1. At first, a user creates a provider secret with access credentials of the Cloud provider where the resource will be created.

2. Then, he creates a sensitive secret with sensitive fields of the cloud resource that he wants to create. This is optional, if a user do not create a sensitive secret then kfc will create a sensitive secret if the cloud resource has any sensitive field.

3. Then, he creates a CRD of the resource that specifies the information of the Cloud Resource. The CRD also points to the secrets that he created.

4. The KubeForm Controller (KFC) watches the created CRD and also the sensitive secret continuously.

5. If the KubeForm Controller (KFC) get any new changes in sensitive secret or in the CRD it starts reconciling and the resource enters into `InProgress` phase.
   
6. The KubeForm Controller (KFC) Create, Update or Delete the respective cloud resource through the Resource CRUD API.  

7. If the resource is being Created or Updated the resource enters into `InProgress` phase. When the recociling process ends and resource successfully created or updated theen the phase is `Current`.

8. The KubeForm Controller (KFC) update the resource `spec.state` after successfully creating or updating the resource.

9. If the resource is being Deleted then the resource phase is `Terminating`.

10. The KubeForm Controller (KFC) deletes the resource after the respective cloud resource get destroyed.
