---
title: Install Kubeform Enterprise Edition
description: Installation guide for Kubeform Enterprise edition
menu:
  docs_v2021.07.28:
    identifier: install-kubeform-enterprise
    name: Enterprise Edition
    parent: installation-guide
    weight: 20
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

# Install Kubeform Enterprise Edition

Kubeform comes in 2 editions: `Community Edition` and `Enterprise Edition`. `Community Edition` only manages Kubeform custom resources in the `default` Kubernetes namespace. `Enterprise Edition` can be used to manage Kubeform custom resources in any Kubernetes namespace. A full features comparison between the Kubeform Community edition and Enterprise edition can be found [here](https://kubeform.com/pricing/).

If you are willing to try Kubeform Enterprise Edition, you can grab a **30 days trial** license from [here](https://license-issuer.appscode.com/?p=kubeform-enterprise).

## Get a Trial License

In this section, we are going to show you how you can get a **30 days trial** license for Kubeform Enterprise edition. You can get a license for your Kubernetes cluster by going through the following steps:

- At first, go to [AppsCode License Server](https://license-issuer.appscode.com/?p=kubeform-enterprise) and fill up the form. It will ask for your Name, Email, the product you want to install, and your cluster ID (UID of the `kube-system` namespace).
- Provide your name and email address. **You must provide your work email address**.
- Then, select `Kubeform Enterprise Edition` in the product field.
- Now, provide your cluster ID. You can get your cluster ID easily by running the following command:

```bash
kubectl get ns kube-system -o=jsonpath='{.metadata.uid}'
```

- Then, you have to agree with the terms and conditions. We recommend reading it before checking the box.
- Now, you can submit the form. After you submit the form, the AppsCode License server will send an email to the provided email address with a link to your license file.
- Navigate to the provided link and save the license into a file. Here, we save the license to a `license.txt` file.

Here is a screenshot of the license form.

<figure align="center">
  <img alt="Kubeform Backend Overview" src="/docs/v2021.07.28/images/setup/enterprise_license_form.png">
  <figcaption align="center">Fig: Kubeform License Form</figcaption>
</figure>

You can create licenses for as many clusters as you want. You can upgrade your license any time without re-installing Kubeform by following the upgrading guide from [here](/docs/v2021.07.28/setup/upgrade/#updating-license).

> Kubeform licensing process has been designed to work with CI/CD workflow. You can automatically obtain a license from your CI/CD pipeline by following the guide from [here](https://github.com/appscode/offline-license-server#offline-license-server).

## Get an Enterprise License

If you are interested in purchasing Enterprise license, please contact us via sales@appscode.com for further discussion. You can also set up a meeting via our [calendly link](https://calendly.com/appscode/30min).

If you are willing to purchasing Enterprise license but need more time to test in your dev cluster, feel free to contact sales@appscode.com. We will be happy to extend your trial period.

## Install

To activate the Enterprise features, you need to install both Kubeform Community operator and Enterprise operator chart. These operators can be installed as a Helm chart or simply as Kubernetes manifests. If you have already installed the Community operator, only install the Enterprise operator (step 4 in the following secttion).

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
appscode/kubeform-provider-aws                      {{< param "info.installer" >}}    {{< param "info.aws" >}}  Kubeform Provider Aws Controller by AppsCode      
appscode/kubeform-provider-azurerm                  {{< param "info.installer" >}}    {{< param "info.azurerm" >}}  Kubeform Provider Azurerm Controller by AppsCode  
appscode/kubeform-provider-digitalocean             {{< param "info.installer" >}}    {{< param "info.digitalocean" >}} Kubeform Provider Digitalocean Controller by Ap...
appscode/kubeform-provider-equinixmetal             {{< param "info.installer" >}}    {{< param "info.equinixmetal" >}} Kubeform Provider Equinix Metal Controller by Ap...
appscode/kubeform-provider-google                   {{< param "info.installer" >}}    {{< param "info.google" >}} Kubeform Provider Google Controller by AppsCode   
appscode/kubeform-provider-linode                   {{< param "info.installer" >}}    {{< param "info.linode" >}} Kubeform Provider Linode Controller by AppsCode   

$ helm install kubeform-provider-*** appscode/kubeform-provider-*** \
  --version {{< param "info.installer" >}} \
  --namespace kubeform --create-namespace \
  --set-file kubeform-provider.license=/path/to/the/license.txt
```

To see the detailed configuration options, visit [here](https://github.com/kubeform/installer/tree/{{< param "info.installer" >}}/charts/kubeform).

</div>
<div class="tab-pane fade" id="script" role="tabpanel" aria-labelledby="script-tab">

## Using YAML

If you prefer to not use Helm, you can generate YAMLs from Kubeform chart and deploy using `kubectl`. Here we are going to show the procedure using Helm 3.

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
