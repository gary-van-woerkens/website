---
title: Troubleshooting Kubeform Installation
description: Troubleshooting guide for Kubeform installation
menu:
  docs_v2021.07.28:
    identifier: install-kubeform-troubleshoot
    name: Troubleshooting
    parent: installation-guide
    weight: 40
product_name: kubeform
menu_name: docs_v2021.07.28
section_menu_id: setup
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

## Installing in GKE Cluster

If you are installing Kubeform on a GKE cluster, you will need cluster admin permissions to install Kubeform operator. Run the following command to grant admin permision to the cluster.

```bash
$ kubectl create clusterrolebinding "cluster-admin-$(whoami)" \
  --clusterrole=cluster-admin                                 \
  --user="$(gcloud config get-value core/account)"
```

In addition, if your GKE cluster is a [private cluster](https://cloud.google.com/kubernetes-engine/docs/how-to/private-clusters), you will need to either add an additional firewall rule that allows master nodes access port `8443/tcp` on worker nodes, or change the existing rule that allows access to ports `443/tcp` and `10250/tcp` to also allow access to port `8443/tcp`. The procedure to add or modify firewall rules is described in the official GKE documentation for private clusters mentioned before.

## Detect Kubeform version

To detect Kubeform version, exec into the operator pod and run `kubeform version` command.

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
