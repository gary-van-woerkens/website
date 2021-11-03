---
title: Install Kubeform kubectl Plugin
description: Installation guide for Kubeform kubectl Plugin
menu:
  docs_v2021.10.29:
    identifier: install-kubeform-kubectl-plugin
    name: Kubeform kubectl Plugin
    parent: installation-guide
    weight: 30
product_name: kubeform
menu_name: docs_v2021.10.29
section_menu_id: setup
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

# Install Kubeform kubectl Plugin

Kubeform provides a `kubectl` plugin to interact with Kubeform resources.

## Install using Krew

Kubeform `kubectl` plugin can be installed using Krew. [Krew](https://krew.sigs.k8s.io/) is the plugin manager for kubectl command-line tool. To install follow the steps below:

- Install `krew` following the steps [here](https://krew.sigs.k8s.io/docs/user-guide/setup/install/).

- If you have already installed `krew`, please upgrade `krew` to version v0.4.0 or later so that you can use [custom plugin indexes](https://krew.sigs.k8s.io/docs/user-guide/custom-indexes/).

```bash
kubectl krew upgrade
kubectl krew version
```

- Add [AppsCode's kubectl plugin index](https://github.com/appscode/krew-index). If you have already added the index, update the index.

```bash
kubectl krew index add appscode https://github.com/appscode/krew-index.git
kubectl krew index list
kubectl krew update
```

- Install Kubeform `kubectl` plugin following the commands below:

```bash
kubectl krew install appscode/kf
kubectl kf version
```

- If Kubeform `kubectl` plugin is already installed, run the following command to upgrade the plugin:

```bash
kubectl krew upgrade
kubectl kf version
```

## Install using pre-built binary

You can download the pre-build binaries from [kubeform/cli](https://github.com/kubeform/cli/releases) releases and put it into one of your installation directory denoted by `$PATH` variable.

Here is a simple Linux command to install the latest 64-bit Linux binary directly into your `/usr/local/bin` directory:

```bash
# Linux amd 64-bit
curl -o kubectl-kf.tar.gz -fsSL https://github.com/kubeform/cli/releases/download/{{< param "info.cli" >}}/kubectl-kf-linux-amd64.tar.gz \
  && tar zxvf kubectl-kf.tar.gz \
  && chmod +x kubectl-kf-linux-amd64 \
  && sudo mv kubectl-kf-linux-amd64 /usr/local/bin/kubectl-kf \
  && rm kubectl-kf.tar.gz LICENSE.md

# Mac OSX 64-bit
curl -o kubectl-kf.tar.gz -fsSL https://github.com/kubeform/cli/releases/download/{{< param "info.cli" >}}/kubectl-kf-darwin-amd64.tar.gz \
  && tar zxvf kubectl-kf.tar.gz \
  && chmod +x kubectl-kf-darwin-amd64 \
  && sudo mv kubectl-kf-darwin-amd64 /usr/local/bin/kubectl-kf \
  && rm kubectl-kf.tar.gz LICENSE.md
```

If you prefer to install kubectl Kubeform cli from source code, make sure that your go development environment has been setup properly. Then, just run:

```bash
go get github.com/kubeform/cli/...
```

>Please note that this will install Kubeform cli from master branch which might include breaking and/or undocumented changes.
