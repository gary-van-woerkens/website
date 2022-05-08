---
title: Troubleshooting Kubeform Installation
description: Troubleshooting guide for Kubeform installation
menu:
  docs_v2022.05.11:
    identifier: install-kubeform-troubleshoot
    name: Troubleshooting
    parent: installation-guide
    weight: 40
product_name: kubeform
menu_name: docs_v2022.05.11
section_menu_id: setup
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

## Installing in GKE Cluster

If you are installing Kubeform on a GKE cluster, you will need cluster admin permissions to install Kubeform operator. Run the following command to grant admin permision to the cluster.

```bash
$ kubectl create clusterrolebinding "cluster-admin-$(whoami)" \
  --clusterrole=cluster-admin                                 \
  --user="$(gcloud config get-value core/account)"
```

In addition, if your GKE cluster is a [private cluster](https://cloud.google.com/kubernetes-engine/docs/how-to/private-clusters), you will need to either add an additional firewall rule that allows master nodes access port `8443/tcp` on worker nodes, or change the existing rule that allows access to ports `443/tcp` and `10250/tcp` to also allow access to port `8443/tcp`. The procedure to add or modify firewall rules is described in the official GKE documentation for private clusters mentioned before.

## Detect Kubeform version

To detect Kubeform version, exec into the operator pod and run `provider-***-controller version` command.

```bash
$ POD_NAMESPACE=kubeform
$ POD_NAME=$(kubectl get pods -n $POD_NAMESPACE -l app.kubernetes.io/name=kubeform-provider -o jsonpath={.items[0].metadata.name})
$ kubectl exec $POD_NAME -c operator -n $POD_NAMESPACE -- /provider-equinixmetal-controller version

Version = {{< param "info.version" >}}
VersionStrategy = tag
GitTag = {{< param "info.version" >}}
GitBranch = HEAD
CommitHash = bda0108f77a28ad63c453895529581e96dd9b18a
CommitTimestamp = 2021-07-21T22:52:59
GoVersion = go1.16.6
Compiler = gcc
Platform = linux/amd64
```
