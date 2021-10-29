---
title: Upgrade | Kubeform
description: Kubeform Upgrade
menu:
  docs_v2021.10.29:
    identifier: upgrade-kubeform
    name: Upgrade
    parent: setup
    weight: 20
product_name: kubeform
menu_name: docs_v2021.10.29
section_menu_id: setup
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

# Upgrading Kubeform

This guide will show you how to upgrade various Kubeform components. Here, we are going to show how to upgrade from an old Kubeform version to the new version, how to migrate between the enterprise edition and community edition, and how to update the license, etc.

## Upgrading Kubeform to `{{< param "info.version" >}}`

In order to upgrade from Kubeform to `{{< param "info.version" >}}`, please follow the following steps.

#### 1. Update Kubeform Catalog CRDs

Helm [does not upgrade the CRDs](https://github.com/helm/helm/issues/6581) bundled in a Helm chart if the CRDs already exist. So, to upgrde the Kubeform catalog CRD, please run the command below:

```bash
kubectl apply -f https://github.com/kubeform/installer/blob/{{< param "info.version" >}}/crds/kubeform-catalog-crds.yaml
```

#### 2. Upgrade Kubeform Operator

Now, upgrade the Kubeform helm chart using the following command. You can find the latest installation guide [here](/docs/v2021.10.29/setup/README). We recommend that you do **not** follow the legacy installation guide, as the new process is much more simpler.

```bash
$ helm upgrade kubeform appscode/kubeform \
  --version {{< param "info.version" >}} \
  --namespace kubeform \
  --set-file global.license=/path/to/the/license.txt
```

## Migration Between Community Edition and Enterprise Edition

Kubeform supports seamless migration between community edition and enterprise edition. You can run the following commands to migrate between them.

<ul class="nav nav-tabs" id="migrationTab" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" id="mgr-helm3-tab" data-toggle="tab" href="#mgr-helm3" role="tab" aria-controls="mgr-helm3" aria-selected="true">Helm 3</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="mgr-yaml-tab" data-toggle="tab" href="#mgr-yaml" role="tab" aria-controls="mgr-yaml" aria-selected="false">YAML</a>
  </li>
</ul>
<div class="tab-content" id="migrationTabContent">
  <div class="tab-pane fade show active" id="mgr-helm3" role="tabpanel" aria-labelledby="mgr-helm3">

#### Using Helm 3

**From Community Edition to Enterprise Edition:**

In order to migrate from Kubeform community edition to Kubeform enterprise edition, please run the following command,

```bash
helm upgrade kubeform -n kubeform appscode/kubeform \
  --reuse-values \
  --set kubeform-catalog.skipDeprecated=false \
  --set-file global.license=/path/to/kubeform-enterprise-license.txt
```

**From Enterprise Edition to Community Edition:**

In order to migrate from Kubeform enterprise edition to Kubeform community edition, please run the following command,

```bash
helm upgrade kubeform -n kubeform appscode/kubeform \
  --reuse-values \
  --set kubeform-catalog.skipDeprecated=false \
  --set-file global.license=/path/to/kubeform-community-license.txt
```

</div>
<div class="tab-pane fade" id="mgr-yaml" role="tabpanel" aria-labelledby="mgr-yaml">

**Using YAML (with helm 3)**

**From Community Edition to Enterprise Edition:**

In order to migrate from Kubeform community edition to Kubeform enterprise edition, please run the following command,

```bash
# Install Kubeform enterprise edition
helm template kubeform -n kubeform appscode/kubeform \
  --version {{< param "info.version" >}} \
  --set kubeform-catalog.skipDeprecated=false \
  --set global.skipCleaner=true \
  --set-file global.license=/path/to/kubeform-enterprise-license.txt | kubectl apply -f -
```

**From Enterprise Edition to Community Edition:**

In order to migrate from Kubeform enterprise edition to Kubeform community edition, please run the following command,

```bash
# Install Kubeform community edition
helm template kubeform -n kubeform appscode/kubeform \
  --version {{< param "info.version" >}} \
  --set kubeform-catalog.skipDeprecated=false \
  --set global.skipCleaner=true \
  --set-file global.license=/path/to/kubeform-community-license.txt | kubectl apply -f -
```

</div>
</div>

## Updating License

Kubeform support updating license without requiring any re-installation. Kubeform creates a Secret named `<helm release name>-license` with the license file. You just need to update the Secret. The changes will propagate automatically to the operator and it will use the updated license going forward.

Follow the below instructions to update the license:

- Get a new license and save it into a file.
- Then, run the following upgrade command based on your installation.

<ul class="nav nav-tabs" id="luTabs" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" id="lu-helm3-tab" data-toggle="tab" href="#lu-helm3" role="tab" aria-controls="lu-helm3" aria-selected="true">Helm 3</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="lu-yaml-tab" data-toggle="tab" href="#lu-yaml" role="tab" aria-controls="lu-yaml" aria-selected="false">YAML</a>
  </li>
</ul>
<div class="tab-content" id="luTabContent">
  <div class="tab-pane fade show active" id="lu-helm3" role="tabpanel" aria-labelledby="lu-helm3">

#### Using Helm 3

```bash
helm upgrade kubeform -n kubeform appscode/kubeform \
  --reuse-values \
  --set-file global.license=/path/to/new/license.txt
```

</div>
<div class="tab-pane fade" id="lu-yaml" role="tabpanel" aria-labelledby="lu-yaml">

#### Using YAML (with helm 3)

**Update License of Community Edition:**

```bash
helm template kubeform -n kubeform appscode/kubeform \
  --set global.skipCleaner=true \
  --show-only appscode/kubeform-operator/templates/license.yaml \
  --set-file global.license=/path/to/new/license.txt | kubectl apply -f -
```

**Update License of Enterprise Edition:**

```bash
helm template kubeform appscode/kubeform -n kubeform \
  --set global.skipCleaner=true \
  --show-only appscode/kubeform-operator/templates/license.yaml \
  --set-file global.license=/path/to/new/license.txt | kubectl apply -f -
```

</div>
</div>
