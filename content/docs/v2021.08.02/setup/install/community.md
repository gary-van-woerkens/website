---
title: Install Kubeform Community Edition
description: Installation guide for Kubeform Community edition
menu:
  docs_v2021.08.02:
    identifier: install-kubeform-community
    name: Community Edition
    parent: installation-guide
    weight: 10
product_name: kubeform
menu_name: docs_v2021.08.02
section_menu_id: setup
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

# Install Kubeform Community Edition

Kubeform comes in 2 editions: `Community Edition` and `Enterprise Edition`. `Community Edition` only manages Kubeform custom resources in the `default` Kubernetes namespace. `Enterprise Edition` can be used to manage Kubeform custom resources in any Kubernetes namespace. A full features comparison between the Kubeform Community edition and Enterprise edition can be found [here](https://kubeform.com/pricing/).

To use the Kubeform Community edition, you can grab **1 year** free license from [here](https://license-issuer.appscode.com/?p=kubeform-community). After that, you can issue another license for one more year. Typically we release a new version of the operator at least quarterly. So, you can just grab a new license every time you upgrade the operator.

## Get a License

In this section, we are going to show you how you can get a **1 year** free license for the Kubeform Community edition. You can get a license for your Kubernetes cluster by going through the following steps:

- At first, go to [AppsCode License Server](https://license-issuer.appscode.com/?p=kubeform-community) and fill-up the form. It will ask for your Name, Email, the product you want to install, and your cluster ID (UID of the `kube-system` namespace).
- Provide your name and email address. You can provide your personal or work email address.
- Then, select `Kubeform Community Edition` in the product field.
- Now, provide your cluster-ID. You can get your cluster ID easily by running the following command:

  ```bash
  $ kubectl get ns kube-system -o=jsonpath='{.metadata.uid}'
  ```

- Then, you have to agree with the terms and conditions. We recommend reading it before checking the box.
- Now, you can submit the form. After you submit the form, the AppsCode License server will send an email to the provided email address with a link to your license file.
- Navigate to the provided link and save the license into a file. Here, we save the license to a `license.txt` file.

Here is a screenshot of the license form.

<figure align="center">
  <img alt="Kubeform Backend Overview" src="/docs/v2021.08.02/images/setup/community_license_form.png">
  <figcaption align="center">Fig: Kubeform License Form</figcaption>
</figure>

You can create licenses for as many clusters as you want. You can upgrade your license any time without re-installing Kubeform by following the upgrading guide from [here](/docs/v2021.08.02/setup/upgrade/#updating-license).

> Kubeform licensing process has been designed to work with CI/CD workflow. You can automatically obtain a license from your CI/CD pipeline by following the guide from [here](https://github.com/appscode/offline-license-server#offline-license-server).

## Install

Kubeform operator can be installed as a Helm chart or simply as Kubernetes manifests.

<ul class="nav nav-tabs" id="installerTab" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" id="helm3-tab" data-toggle="tab" href="#helm3" role="tab" aria-controls="helm3" aria-selected="true">Helm 3 (Recommended)</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="script-tab" data-toggle="tab" href="#script" role="tab" aria-controls="script" aria-selected="false">YAML</a>
  </li>
</ul>
<div class="tab-content" id="installerTabContent">
  <div class="tab-pane fade show active" id="helm3" role="tabpanel" aria-labelledby="helm3-tab">

## Using Helm 3

Kubeform can be installed via [Helm](https://helm.sh/) using the [chart](https://github.com/kubeform/installer/tree/{{< param "info.installer" >}}/charts/kubeform) from [AppsCode Charts Repository](https://github.com/appscode/charts). To install, follow the steps below:

```bash
$ helm repo add appscode https://charts.appscode.com/stable/
$ helm repo update
$ helm search repo appscode/kubeform --version {{< param "info.installer" >}}
NAME                                                CHART VERSION APP VERSION DESCRIPTION
appscode/kubeform-provider-alicloud                 {{< param "info.installer" >}}    {{< param "info.alicloud" >}}       Kubeform Provider Alicloud Controller by AppsCode
appscode/kubeform-provider-aws                      {{< param "info.installer" >}}    {{< param "info.aws" >}}      Kubeform Provider Aws Controller by AppsCode
appscode/kubeform-provider-azurerm                  {{< param "info.installer" >}}    {{< param "info.azurerm" >}}      Kubeform Provider Azurerm Controller by AppsCode
appscode/kubeform-provider-civo                     {{< param "info.installer" >}}    {{< param "info.civo" >}}       Kubeform Provider Civo Controller by AppsCode
appscode/kubeform-provider-datadog                  {{< param "info.installer" >}}    {{< param "info.datadog" >}}      Kubeform Provider Datadog Controller by AppsCode
appscode/kubeform-provider-digitalocean             {{< param "info.installer" >}}    {{< param "info.digitalocean" >}}       Kubeform Provider Digitalocean Controller by Ap...
appscode/kubeform-provider-dynatrace                {{< param "info.installer" >}}    {{< param "info.dynatrace" >}}      Kubeform Provider Dynatrace Controller by AppsCode
appscode/kubeform-provider-ec                       {{< param "info.installer" >}}    {{< param "info.ec" >}}       Kubeform Provider Ec Controller by AppsCode
appscode/kubeform-provider-equinixmetal             {{< param "info.installer" >}}    {{< param "info.equinixmetal" >}}       Kubeform Provider Equinixmetal Controller by Ap...
appscode/kubeform-provider-google                   {{< param "info.installer" >}}    {{< param "info.google" >}}       Kubeform Provider Google Controller by AppsCode
appscode/kubeform-provider-grafana                  {{< param "info.installer" >}}    {{< param "info.grafana" >}}      Kubeform Provider Grafana Controller by AppsCode
appscode/kubeform-provider-hcloud                   {{< param "info.installer" >}}    {{< param "info.hcloud" >}}       Kubeform Provider Hcloud Controller by AppsCode
appscode/kubeform-provider-ibm                      {{< param "info.installer" >}}    {{< param "info.ibm" >}}      Kubeform Provider Ibm Controller by AppsCode
appscode/kubeform-provider-linode                   {{< param "info.installer" >}}    {{< param "info.linode" >}}       Kubeform Provider Linode Controller by AppsCode
appscode/kubeform-provider-mongodbatlas             {{< param "info.installer" >}}    {{< param "info.mongodbatlas" >}}       Kubeform Provider Mongodbatlas Controller by Ap...
appscode/kubeform-provider-newrelic                 {{< param "info.installer" >}}    {{< param "info.newrelic" >}}       Kubeform Provider Newrelic Controller by AppsCode
appscode/kubeform-provider-ovh                      {{< param "info.installer" >}}    {{< param "info.ovh" >}}      Kubeform Provider Ovh Controller by AppsCode
appscode/kubeform-provider-pagerduty                {{< param "info.installer" >}}    {{< param "info.pagerduty" >}}      Kubeform Provider Pagerduty Controller by AppsCode
appscode/kubeform-provider-rediscloud               {{< param "info.installer" >}}    {{< param "info.rediscloud" >}}       Kubeform Provider Rediscloud Controller by Apps...
appscode/kubeform-provider-upcloud                  {{< param "info.installer" >}}    {{< param "info.upcloud" >}}      Kubeform Provider Upcloud Controller by AppsCode
appscode/kubeform-provider-vsphere                  {{< param "info.installer" >}}    {{< param "info.vsphere" >}}      Kubeform Provider Vsphere Controller by AppsCode
appscode/kubeform-provider-vultr                    {{< param "info.installer" >}}    {{< param "info.vultr" >}}      Kubeform Provider Vultr Controller by AppsCode
appscode/kubeform-provider-wavefront                {{< param "info.installer" >}}    {{< param "info.wavefront" >}}      Kubeform Provider Wavefront Controller by AppsCode

$ helm install kubeform-provider-*** appscode/kubeform-provider-*** \
  --version {{< param "info.installer" >}} \
  --namespace kubeform --create-namespace \
  --set-file kubeform-provider.license=/path/to/the/license.txt
```

To see the detailed configuration options, visit [here](https://github.com/kubeform/installer/tree/{{< param "info.installer" >}}/charts/kubeform).

</div>
<div class="tab-pane fade" id="script" role="tabpanel" aria-labelledby="script-tab">

## Using YAML

If you prefer to not use Helm, you can generate YAMLs from Kubeform chart and deploy using `kubectl`. Here we are going to show the prodecure using Helm 3.

```bash
$ helm repo add appscode https://charts.appscode.com/stable/
$ helm repo update
$ helm search repo appscode/kubeform --version {{< param "info.installer" >}}
NAME                                                CHART VERSION APP VERSION DESCRIPTION                                       
appscode/kubeform-provider-aws                      {{< param "info.installer" >}}    {{< param "info.aws" >}}  Kubeform Provider Aws Controller by AppsCode      
appscode/kubeform-provider-azurerm                  {{< param "info.installer" >}}    {{< param "info.azurerm" >}}  Kubeform Provider Azurerm Controller by AppsCode  
appscode/kubeform-provider-digitalocean             {{< param "info.installer" >}}    {{< param "info.digitalocean" >}} Kubeform Provider Digitalocean Controller by Ap...
appscode/kubeform-provider-equinixmetal             {{< param "info.installer" >}}    {{< param "info.equinixmetal" >}} Kubeform Provider Equinix Metal Controller by Ap...
appscode/kubeform-provider-google                   {{< param "info.installer" >}}    {{< param "info.google" >}} Kubeform Provider Google Controller by AppsCode   
appscode/kubeform-provider-linode                   {{< param "info.installer" >}}    {{< param "info.linode" >}} Kubeform Provider Linode Controller by AppsCode   

$ helm template kubeform-provider-*** appscode/kubeform-provider-*** \
  --version {{< param "info.installer" >}} \
  --namespace kubeform --create-namespace \
  --set-file kubeform-provider.license=/path/to/the/license.txt \
  --set kubeform-provider.cleaner.skip=true | kubectl apply -f -
```

To see the detailed configuration options, visit [here](https://github.com/kubeform/installer/tree/{{< param "info.installer" >}}/charts/kubeform).

</div>
</div>

## Verify installation

To check if Kubeform operator pods have started, run the following command:

```bash
$ kubectl get pods --all-namespaces -l app.kubernetes.io/name=kubeform-provider --watch

NAMESPACE   NAME                                             READY   STATUS    RESTARTS   AGE
kubeform    kubeform-provider-equinixmetal-8f7bddf64-sxtrr   1/1     Running   0          12m
```

Once the operator pod is running, you can cancel the above command by typing `Ctrl+C`.
