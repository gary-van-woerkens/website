---
title: Changelog | Kubeform
description: Changelog
menu:
  docs_v2022.05.11:
    identifier: changelog-kubeform-v2021.08.02
    name: Changelog-v2021.08.02
    parent: welcome
    weight: 20210802
product_name: kubeform
menu_name: docs_v2022.05.11
section_menu_id: welcome
url: /docs/v2022.05.11/welcome/changelog-v2021.08.02/
aliases:
- /docs/v2022.05.11/CHANGELOG-v2021.08.02/
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

# Kubeform v2021.08.02 (2021-08-02)


## [kubeform/installer](https://github.com/kubeform/installer)

### [v2021.08.02](https://github.com/kubeform/installer/releases/tag/v2021.08.02)

- [a07d94f0](https://github.com/kubeform/installer/commit/a07d94f0) Prepare for release v2021.08.02 (#148)
- [5b0db690](https://github.com/kubeform/installer/commit/5b0db690) Remove oci installer for now
- [5c5a220e](https://github.com/kubeform/installer/commit/5c5a220e) Update ibm installer for provider@v1.28.1-0.20210729083022-bc68146ed6f3 gen@7e6dda4 (#147)
- [1a43a299](https://github.com/kubeform/installer/commit/1a43a299) Update newrelic installer for provider@v2.24.1 gen@8ae9f7f (#146)
- [bc4445fb](https://github.com/kubeform/installer/commit/bc4445fb) Update installer charts
- [4f5609f0](https://github.com/kubeform/installer/commit/4f5609f0) Update dynatrace installer for provider@v1.6.1 gen@157fbdc (#145)
- [27db007d](https://github.com/kubeform/installer/commit/27db007d) Update alicloud installer for provider@v1.128.0 gen@859dcb6 (#144)
- [1d486d9f](https://github.com/kubeform/installer/commit/1d486d9f) Update pagerduty installer for provider@v1.10.0 gen@539e563 (#143)
- [50668eef](https://github.com/kubeform/installer/commit/50668eef) Update oci installer for provider@v1.0.19-0.20210728215100-1834b1ae4672 gen@88df304 (#142)
- [6c9dcbdd](https://github.com/kubeform/installer/commit/6c9dcbdd) Update azurerm installer for provider@v1.44.1-0.20210702030130-ff3fb4ec388d gen@b2b6cf7 (#141)
- [395baac9](https://github.com/kubeform/installer/commit/395baac9) Update rediscloud installer for provider@v0.2.5-0.20210730144149-20f14a5c8cdc gen@ea4918f (#140)
- [97ed6630](https://github.com/kubeform/installer/commit/97ed6630) Update grafana installer for provider@v1.13.3 gen@ac0b399 (#139)
- [4a167ebe](https://github.com/kubeform/installer/commit/4a167ebe) Update upcloud installer for provider@v0.0.0-20210622112225-b693562639e1 gen@c382ae0 (#138)
- [2f8931c8](https://github.com/kubeform/installer/commit/2f8931c8) Update vultr installer for provider@v1.3.4-0.20210625135956-5cdfa3b5e742 gen@f048d3f (#137)
- [3f609718](https://github.com/kubeform/installer/commit/3f609718) Update wavefront installer for provider@v0.0.0-20210610195536-769fabacff12 gen@e07602e (#136)
- [abd658e8](https://github.com/kubeform/installer/commit/abd658e8) Update vsphere installer for provider@v1.26.1-0.20210625182906-b8206ea7fc5a gen@a8ea74b (#135)
- [c768b6f2](https://github.com/kubeform/installer/commit/c768b6f2) Update ec installer for provider@v0.2.1 gen@e48e146 (#129)
- [5d95f8b4](https://github.com/kubeform/installer/commit/5d95f8b4) Update google installer for provider@v1.20.1-0.20210628164239-4d5f8365936e gen@6d909d5 (#134)
- [5d8c447e](https://github.com/kubeform/installer/commit/5d8c447e) Update civo installer for provider@v0.10.9 gen@cc08157 (#130)
- [8f9f99b8](https://github.com/kubeform/installer/commit/8f9f99b8) Update hcloud installer for provider@v1.27.3-0.20210730143039-29d7eec9c077 gen@4612561 (#131)
- [b220f9eb](https://github.com/kubeform/installer/commit/b220f9eb) Update mongodbatlas installer for provider@v0.9.2-0.20210729194514-c828847c5c7b gen@25fedf6 (#132)
- [d781a10e](https://github.com/kubeform/installer/commit/d781a10e) Update ovh installer for provider@v0.15.0 gen@b61be43 (#133)
- [e1a38331](https://github.com/kubeform/installer/commit/e1a38331) Update datadog installer for provider@v1.9.1-0.20210714133156-141501334a01 gen@416a93f (#128)
- [0f6cedca](https://github.com/kubeform/installer/commit/0f6cedca) Update datadog installer for provider@v1.9.1-0.20210714133156-141501334a01 gen@06e3ffb (#127)
- [d16b881b](https://github.com/kubeform/installer/commit/d16b881b) Update mongodbatlas installer for provider@v0.9.2-0.20210729194514-c828847c5c7b gen@03b0277 (#126)
- [c5f8e934](https://github.com/kubeform/installer/commit/c5f8e934) Update wavefront installer for provider@v0.0.0-20210610195536-769fabacff12 gen@8502170 (#125)
- [9e248557](https://github.com/kubeform/installer/commit/9e248557) Add new providers
- [5e97efa5](https://github.com/kubeform/installer/commit/5e97efa5) Update upcloud installer for provider@v0.0.0-20210622112225-b693562639e1 gen@be72eea (#124)
- [4fd0b8e5](https://github.com/kubeform/installer/commit/4fd0b8e5) Update hcloud installer for provider@v1.27.3-0.20210730143039-29d7eec9c077 gen@861d1f5 (#123)
- [d26bc575](https://github.com/kubeform/installer/commit/d26bc575) Update ovh installer for provider@v0.15.0 gen@f689cb7 (#122)
- [bd5532b5](https://github.com/kubeform/installer/commit/bd5532b5) Update ec installer for provider@v0.2.1 gen@d93b2e1 (#121)
- [ed5f6b0f](https://github.com/kubeform/installer/commit/ed5f6b0f) Update azurerm installer for provider@v1.44.1-0.20210702030130-ff3fb4ec388d gen@4a9f562 (#120)
- [6d6294fc](https://github.com/kubeform/installer/commit/6d6294fc) Update vultr installer for provider@v1.3.4-0.20210625135956-5cdfa3b5e742 gen@690b8be (#113)
- [867f5219](https://github.com/kubeform/installer/commit/867f5219) Update vsphere installer for provider@v1.26.1-0.20210625182906-b8206ea7fc5a gen@8848b91 (#114)
- [bd790b49](https://github.com/kubeform/installer/commit/bd790b49) Update civo installer for provider@v0.10.9 gen@683b5e8 (#112)
- [33f46e0c](https://github.com/kubeform/installer/commit/33f46e0c) Add new providers



## [kubeform/provider-alicloud-api](https://github.com/kubeform/provider-alicloud-api)

### [v0.3.0](https://github.com/kubeform/provider-alicloud-api/releases/tag/v0.3.0)

- [05f555b](https://github.com/kubeform/provider-alicloud-api/commit/05f555b) Generate code for provider@v1.128.0 gen@020d738 (#4)



## [kubeform/provider-alicloud-controller](https://github.com/kubeform/provider-alicloud-controller)

### [v0.3.0](https://github.com/kubeform/provider-alicloud-controller/releases/tag/v0.3.0)

- [cd03fa4f](https://github.com/kubeform/provider-alicloud-controller/commit/cd03fa4f) Prepare for release v0.3.0 (#4)
- [2d151a48](https://github.com/kubeform/provider-alicloud-controller/commit/2d151a48) Generate code for provider@v1.128.0 gen@859dcb6 (#3)
- [28c3f327](https://github.com/kubeform/provider-alicloud-controller/commit/28c3f327) Generate controllers



## [kubeform/provider-aws-api](https://github.com/kubeform/provider-aws-api)

### [v0.3.0](https://github.com/kubeform/provider-aws-api/releases/tag/v0.3.0)

- [b918b72b](https://github.com/kubeform/provider-aws-api/commit/b918b72b) Update README.md



## [kubeform/provider-aws-controller](https://github.com/kubeform/provider-aws-controller)

### [v0.3.0](https://github.com/kubeform/provider-aws-controller/releases/tag/v0.3.0)

- [0eec2a0b](https://github.com/kubeform/provider-aws-controller/commit/0eec2a0b) Prepare for release v0.3.0 (#24)
- [7d7c6a99](https://github.com/kubeform/provider-aws-controller/commit/7d7c6a99) Generate code for provider@v1.60.1-0.20210624223533-7ed5f82d440d gen@069c6aa (#23)



## [kubeform/provider-azurerm-api](https://github.com/kubeform/provider-azurerm-api)

### [v0.3.0](https://github.com/kubeform/provider-azurerm-api/releases/tag/v0.3.0)

- [72825eb](https://github.com/kubeform/provider-azurerm-api/commit/72825eb) Update README.md
- [85d3146](https://github.com/kubeform/provider-azurerm-api/commit/85d3146) Generate code for provider@v1.44.1-0.20210702030130-ff3fb4ec388d gen@b2b6cf7 (#5)



## [kubeform/provider-azurerm-controller](https://github.com/kubeform/provider-azurerm-controller)

### [v0.3.0](https://github.com/kubeform/provider-azurerm-controller/releases/tag/v0.3.0)

- [df7e7de5](https://github.com/kubeform/provider-azurerm-controller/commit/df7e7de5) Prepare for release v0.3.0 (#23)
- [8cc42609](https://github.com/kubeform/provider-azurerm-controller/commit/8cc42609) Generate code for provider@v1.44.1-0.20210702030130-ff3fb4ec388d gen@b2b6cf7 (#22)



## [kubeform/provider-civo-api](https://github.com/kubeform/provider-civo-api)

### [v0.3.0](https://github.com/kubeform/provider-civo-api/releases/tag/v0.3.0)

- [381fb23](https://github.com/kubeform/provider-civo-api/commit/381fb23) Generate code for provider@v0.10.9 gen@683b5e8 (#1)



## [kubeform/provider-civo-controller](https://github.com/kubeform/provider-civo-controller)

### [v0.3.0](https://github.com/kubeform/provider-civo-controller/releases/tag/v0.3.0)

- [393f0b8](https://github.com/kubeform/provider-civo-controller/commit/393f0b8) Prepare for release v0.3.0 (#3)
- [8799f6f](https://github.com/kubeform/provider-civo-controller/commit/8799f6f) Generate code for provider@v0.10.9 gen@cc08157 (#2)
- [7fb8f24](https://github.com/kubeform/provider-civo-controller/commit/7fb8f24) Update README.md
- [7c2b1b3](https://github.com/kubeform/provider-civo-controller/commit/7c2b1b3) Generate code for provider@v0.10.9 gen@683b5e8 (#1)



## [kubeform/provider-datadog-api](https://github.com/kubeform/provider-datadog-api)

### [v0.3.0](https://github.com/kubeform/provider-datadog-api/releases/tag/v0.3.0)

- [b14d5ac](https://github.com/kubeform/provider-datadog-api/commit/b14d5ac) Generate code for provider@v1.9.1-0.20210714133156-141501334a01 gen@06e3ffb (#3)
- [2b2e4f9](https://github.com/kubeform/provider-datadog-api/commit/2b2e4f9) Generate code for provider@v1.9.1-0.20210714133156-141501334a01 gen@9b249e5 (#1)



## [kubeform/provider-datadog-controller](https://github.com/kubeform/provider-datadog-controller)

### [v0.3.0](https://github.com/kubeform/provider-datadog-controller/releases/tag/v0.3.0)

- [93f517f](https://github.com/kubeform/provider-datadog-controller/commit/93f517f) Prepare for release v0.3.0 (#3)
- [138462c](https://github.com/kubeform/provider-datadog-controller/commit/138462c) Generate code for provider@v1.9.1-0.20210714133156-141501334a01 gen@416a93f (#2)



## [kubeform/provider-digitalocean-api](https://github.com/kubeform/provider-digitalocean-api)

### [v0.3.0](https://github.com/kubeform/provider-digitalocean-api/releases/tag/v0.3.0)

- [c6e181a](https://github.com/kubeform/provider-digitalocean-api/commit/c6e181a) Update README.md



## [kubeform/provider-digitalocean-controller](https://github.com/kubeform/provider-digitalocean-controller)

### [v0.3.0](https://github.com/kubeform/provider-digitalocean-controller/releases/tag/v0.3.0)

- [cbcbf05](https://github.com/kubeform/provider-digitalocean-controller/commit/cbcbf05) Prepare for release v0.3.0 (#27)
- [bd2eaa9](https://github.com/kubeform/provider-digitalocean-controller/commit/bd2eaa9) Generate code for provider@v1.23.1-0.20210629201646-266cb440f82b gen@653dd53 (#26)



## [kubeform/provider-dynatrace-api](https://github.com/kubeform/provider-dynatrace-api)

### [v0.3.0](https://github.com/kubeform/provider-dynatrace-api/releases/tag/v0.3.0)

- [b7300b5](https://github.com/kubeform/provider-dynatrace-api/commit/b7300b5) Generate code for provider@v1.6.1 gen@157fbdc (#1)
- [f8fd4fb](https://github.com/kubeform/provider-dynatrace-api/commit/f8fd4fb) Generate apis



## [kubeform/provider-dynatrace-controller](https://github.com/kubeform/provider-dynatrace-controller)

### [v0.3.0](https://github.com/kubeform/provider-dynatrace-controller/releases/tag/v0.3.0)

- [fcf45a5](https://github.com/kubeform/provider-dynatrace-controller/commit/fcf45a5) Prepare for release v0.3.0 (#1)
- [0db89f3](https://github.com/kubeform/provider-dynatrace-controller/commit/0db89f3) Generate controllers



## [kubeform/provider-ec-api](https://github.com/kubeform/provider-ec-api)

### [v0.3.0](https://github.com/kubeform/provider-ec-api/releases/tag/v0.3.0)

- [82bd27f](https://github.com/kubeform/provider-ec-api/commit/82bd27f) Generate code for provider@v0.2.1 gen@d93b2e1 (#1)



## [kubeform/provider-ec-controller](https://github.com/kubeform/provider-ec-controller)

### [v0.3.0](https://github.com/kubeform/provider-ec-controller/releases/tag/v0.3.0)

- [f6540e5](https://github.com/kubeform/provider-ec-controller/commit/f6540e5) Prepare for release v0.3.0 (#4)
- [76bde32](https://github.com/kubeform/provider-ec-controller/commit/76bde32) Generate code for provider@v0.2.1 gen@e48e146 (#3)
- [2aed358](https://github.com/kubeform/provider-ec-controller/commit/2aed358) Generate code for provider@v0.2.1 gen@d93b2e1 (#2)



## [kubeform/provider-equinixmetal-api](https://github.com/kubeform/provider-equinixmetal-api)

### [v0.3.0](https://github.com/kubeform/provider-equinixmetal-api/releases/tag/v0.3.0)

- [8cbbf6f](https://github.com/kubeform/provider-equinixmetal-api/commit/8cbbf6f) Update README.md



## [kubeform/provider-equinixmetal-controller](https://github.com/kubeform/provider-equinixmetal-controller)

### [v0.3.0](https://github.com/kubeform/provider-equinixmetal-controller/releases/tag/v0.3.0)

- [8c5926c](https://github.com/kubeform/provider-equinixmetal-controller/commit/8c5926c) Prepare for release v0.3.0 (#13)
- [280f1bc](https://github.com/kubeform/provider-equinixmetal-controller/commit/280f1bc) Generate code for provider@v1.1.1-0.20210727130052-a55db9bd1897 gen@86c73c1 (#12)



## [kubeform/provider-google-api](https://github.com/kubeform/provider-google-api)

### [v0.3.0](https://github.com/kubeform/provider-google-api/releases/tag/v0.3.0)

- [7a297e9](https://github.com/kubeform/provider-google-api/commit/7a297e9) Update README.md
- [bbd450d](https://github.com/kubeform/provider-google-api/commit/bbd450d) Generate code for provider@v1.20.1-0.20210628164239-4d5f8365936e gen@6d909d5 (#3)



## [kubeform/provider-google-controller](https://github.com/kubeform/provider-google-controller)

### [v0.3.0](https://github.com/kubeform/provider-google-controller/releases/tag/v0.3.0)

- [d66e940](https://github.com/kubeform/provider-google-controller/commit/d66e940) Prepare for release v0.3.0 (#26)
- [484db26](https://github.com/kubeform/provider-google-controller/commit/484db26) Generate code for provider@v1.20.1-0.20210628164239-4d5f8365936e gen@6d909d5 (#25)



## [kubeform/provider-grafana-api](https://github.com/kubeform/provider-grafana-api)

### [v0.3.0](https://github.com/kubeform/provider-grafana-api/releases/tag/v0.3.0)

- [0016798](https://github.com/kubeform/provider-grafana-api/commit/0016798) Generate code for provider@v1.13.3 gen@dff03cb (#1)



## [kubeform/provider-grafana-controller](https://github.com/kubeform/provider-grafana-controller)

### [v0.3.0](https://github.com/kubeform/provider-grafana-controller/releases/tag/v0.3.0)

- [f61323e](https://github.com/kubeform/provider-grafana-controller/commit/f61323e) Prepare for release v0.3.0 (#5)
- [1f435ca](https://github.com/kubeform/provider-grafana-controller/commit/1f435ca) Generate code for provider@v1.13.3 gen@ac0b399 (#4)
- [8f38d8d](https://github.com/kubeform/provider-grafana-controller/commit/8f38d8d) Generate code for provider@v1.13.3 gen@dff03cb (#2)



## [kubeform/provider-hcloud-api](https://github.com/kubeform/provider-hcloud-api)

### [v0.3.0](https://github.com/kubeform/provider-hcloud-api/releases/tag/v0.3.0)

- [0d06b87](https://github.com/kubeform/provider-hcloud-api/commit/0d06b87) Generate code for provider@v1.27.2 gen@d062bf0 (#1)



## [kubeform/provider-hcloud-controller](https://github.com/kubeform/provider-hcloud-controller)

### [v0.3.0](https://github.com/kubeform/provider-hcloud-controller/releases/tag/v0.3.0)

- [f6adb69](https://github.com/kubeform/provider-hcloud-controller/commit/f6adb69) Prepare for release v0.3.0 (#4)
- [913547d](https://github.com/kubeform/provider-hcloud-controller/commit/913547d) Generate code for provider@v1.27.3-0.20210730143039-29d7eec9c077 gen@4612561 (#3)
- [539e263](https://github.com/kubeform/provider-hcloud-controller/commit/539e263) Generate code for provider@v1.27.3-0.20210730143039-29d7eec9c077 gen@861d1f5 (#2)



## [kubeform/provider-ibm-api](https://github.com/kubeform/provider-ibm-api)

### [v0.3.0](https://github.com/kubeform/provider-ibm-api/releases/tag/v0.3.0)

- [a04dc27](https://github.com/kubeform/provider-ibm-api/commit/a04dc27) Generate code for provider@v1.28.1-0.20210729083022-bc68146ed6f3 gen@7e6dda4 (#1)
- [8bb6a99](https://github.com/kubeform/provider-ibm-api/commit/8bb6a99) Generate api types



## [kubeform/provider-ibm-controller](https://github.com/kubeform/provider-ibm-controller)

### [v0.3.0](https://github.com/kubeform/provider-ibm-controller/releases/tag/v0.3.0)

- [6fa3300](https://github.com/kubeform/provider-ibm-controller/commit/6fa3300) Prepare for release v0.3.0 (#3)
- [72bf123](https://github.com/kubeform/provider-ibm-controller/commit/72bf123) Fix build
- [8362b6d](https://github.com/kubeform/provider-ibm-controller/commit/8362b6d) Generate code for provider@v1.28.1-0.20210729083022-bc68146ed6f3 gen@7e6dda4 (#1)



## [kubeform/provider-linode-api](https://github.com/kubeform/provider-linode-api)

### [v0.3.0](https://github.com/kubeform/provider-linode-api/releases/tag/v0.3.0)

- [fd6358a](https://github.com/kubeform/provider-linode-api/commit/fd6358a) Update README.md



## [kubeform/provider-linode-controller](https://github.com/kubeform/provider-linode-controller)

### [v0.3.0](https://github.com/kubeform/provider-linode-controller/releases/tag/v0.3.0)

- [6aa6a2a](https://github.com/kubeform/provider-linode-controller/commit/6aa6a2a) Prepare for release v0.3.0 (#31)
- [fdcf812](https://github.com/kubeform/provider-linode-controller/commit/fdcf812) Generate code for provider@v1.19.1 gen@e318666 (#30)



## [kubeform/provider-mongodbatlas-api](https://github.com/kubeform/provider-mongodbatlas-api)

### [v0.3.0](https://github.com/kubeform/provider-mongodbatlas-api/releases/tag/v0.3.0)

- [fc5f601](https://github.com/kubeform/provider-mongodbatlas-api/commit/fc5f601) Generate code for provider@v0.9.2-0.20210729194514-c828847c5c7b gen@03b0277 (#1)



## [kubeform/provider-mongodbatlas-controller](https://github.com/kubeform/provider-mongodbatlas-controller)

### [v0.3.0](https://github.com/kubeform/provider-mongodbatlas-controller/releases/tag/v0.3.0)

- [652861b](https://github.com/kubeform/provider-mongodbatlas-controller/commit/652861b) Prepare for release v0.3.0 (#3)
- [0972c5b](https://github.com/kubeform/provider-mongodbatlas-controller/commit/0972c5b) Generate code for provider@v0.9.2-0.20210729194514-c828847c5c7b gen@25fedf6 (#2)
- [c9fb328](https://github.com/kubeform/provider-mongodbatlas-controller/commit/c9fb328) Generate code for provider@v0.9.2-0.20210729194514-c828847c5c7b gen@03b0277 (#1)
- [2bea531](https://github.com/kubeform/provider-mongodbatlas-controller/commit/2bea531) Generate controller



## [kubeform/provider-newrelic-api](https://github.com/kubeform/provider-newrelic-api)

### [v0.3.0](https://github.com/kubeform/provider-newrelic-api/releases/tag/v0.3.0)

- [e82eec0](https://github.com/kubeform/provider-newrelic-api/commit/e82eec0) Generate code for provider@ gen@72723c7 (#4)
- [3ae5a04](https://github.com/kubeform/provider-newrelic-api/commit/3ae5a04) Generate code for provider@ gen@3872c37 (#3)



## [kubeform/provider-newrelic-controller](https://github.com/kubeform/provider-newrelic-controller)

### [v0.3.0](https://github.com/kubeform/provider-newrelic-controller/releases/tag/v0.3.0)

- [d8e7c9c](https://github.com/kubeform/provider-newrelic-controller/commit/d8e7c9c) Prepare for release v0.3.0 (#2)
- [565f90b](https://github.com/kubeform/provider-newrelic-controller/commit/565f90b) Generate controllers



## [kubeform/provider-ovh-api](https://github.com/kubeform/provider-ovh-api)

### [v0.3.0](https://github.com/kubeform/provider-ovh-api/releases/tag/v0.3.0)

- [d2fe679](https://github.com/kubeform/provider-ovh-api/commit/d2fe679) Generate code for provider@v0.15.0 gen@f689cb7 (#1)



## [kubeform/provider-ovh-controller](https://github.com/kubeform/provider-ovh-controller)

### [v0.3.0](https://github.com/kubeform/provider-ovh-controller/releases/tag/v0.3.0)

- [96695be](https://github.com/kubeform/provider-ovh-controller/commit/96695be) Prepare for release v0.3.0 (#4)
- [64085a3](https://github.com/kubeform/provider-ovh-controller/commit/64085a3) Generate code for provider@v0.15.0 gen@b61be43 (#3)
- [f9fad7d](https://github.com/kubeform/provider-ovh-controller/commit/f9fad7d) Generate code for provider@v0.15.0 gen@f689cb7 (#2)



## [kubeform/provider-pagerduty-api](https://github.com/kubeform/provider-pagerduty-api)

### [v0.3.0](https://github.com/kubeform/provider-pagerduty-api/releases/tag/v0.3.0)

- [2a90511](https://github.com/kubeform/provider-pagerduty-api/commit/2a90511) Generate code for provider@v0.0.0-00010101000000-000000000000 gen@86db7ff (#1)



## [kubeform/provider-pagerduty-controller](https://github.com/kubeform/provider-pagerduty-controller)

### [v0.3.0](https://github.com/kubeform/provider-pagerduty-controller/releases/tag/v0.3.0)

- [b2383a4](https://github.com/kubeform/provider-pagerduty-controller/commit/b2383a4) Prepare for release v0.3.0 (#4)
- [98f3dd5](https://github.com/kubeform/provider-pagerduty-controller/commit/98f3dd5) Generate code for provider@v1.10.0 gen@539e563 (#3)
- [e2c3b9a](https://github.com/kubeform/provider-pagerduty-controller/commit/e2c3b9a) Generate code for provider@v1.10.0 gen@396a47f (#1)



## [kubeform/provider-rediscloud-api](https://github.com/kubeform/provider-rediscloud-api)

### [v0.3.0](https://github.com/kubeform/provider-rediscloud-api/releases/tag/v0.3.0)

- [b2a8b6d](https://github.com/kubeform/provider-rediscloud-api/commit/b2a8b6d) Generate code for provider@v0.2.5-0.20210730144149-20f14a5c8cdc gen@3dbd881 (#2)



## [kubeform/provider-rediscloud-controller](https://github.com/kubeform/provider-rediscloud-controller)

### [v0.3.0](https://github.com/kubeform/provider-rediscloud-controller/releases/tag/v0.3.0)

- [9896d7d](https://github.com/kubeform/provider-rediscloud-controller/commit/9896d7d) Prepare for release v0.3.0 (#4)
- [518fe04](https://github.com/kubeform/provider-rediscloud-controller/commit/518fe04) Generate code for provider@v0.2.5-0.20210730144149-20f14a5c8cdc gen@ea4918f (#3)
- [3102b5a](https://github.com/kubeform/provider-rediscloud-controller/commit/3102b5a) Generate code for provider@v0.2.5-0.20210730144149-20f14a5c8cdc gen@3dbd881 (#1)



## [kubeform/provider-upcloud-api](https://github.com/kubeform/provider-upcloud-api)

### [v0.3.0](https://github.com/kubeform/provider-upcloud-api/releases/tag/v0.3.0)

- [424a11a](https://github.com/kubeform/provider-upcloud-api/commit/424a11a) Generate code for provider@v0.0.0-20210622112225-b693562639e1 gen@76e0b43 (#1)



## [kubeform/provider-upcloud-controller](https://github.com/kubeform/provider-upcloud-controller)

### [v0.3.0](https://github.com/kubeform/provider-upcloud-controller/releases/tag/v0.3.0)

- [bffb159](https://github.com/kubeform/provider-upcloud-controller/commit/bffb159) Prepare for release v0.3.0 (#3)
- [1ea2ca9](https://github.com/kubeform/provider-upcloud-controller/commit/1ea2ca9) Generate code for provider@v0.0.0-20210622112225-b693562639e1 gen@c382ae0 (#2)
- [217fb02](https://github.com/kubeform/provider-upcloud-controller/commit/217fb02) Generate code for provider@v0.0.0-20210622112225-b693562639e1 gen@be72eea (#1)



## [kubeform/provider-vsphere-api](https://github.com/kubeform/provider-vsphere-api)

### [v0.3.0](https://github.com/kubeform/provider-vsphere-api/releases/tag/v0.3.0)

- [bba7c02](https://github.com/kubeform/provider-vsphere-api/commit/bba7c02) Generate code for provider@v1.26.1-0.20210625182906-b8206ea7fc5a gen@8848b91 (#1)



## [kubeform/provider-vsphere-controller](https://github.com/kubeform/provider-vsphere-controller)

### [v0.3.0](https://github.com/kubeform/provider-vsphere-controller/releases/tag/v0.3.0)

- [ed9b06f](https://github.com/kubeform/provider-vsphere-controller/commit/ed9b06f) Prepare for release v0.3.0 (#3)
- [874be77](https://github.com/kubeform/provider-vsphere-controller/commit/874be77) Generate code for provider@v1.26.1-0.20210625182906-b8206ea7fc5a gen@a8ea74b (#2)
- [e43936e](https://github.com/kubeform/provider-vsphere-controller/commit/e43936e) Generate code for provider@v1.26.1-0.20210625182906-b8206ea7fc5a gen@8848b91 (#1)



## [kubeform/provider-vultr-api](https://github.com/kubeform/provider-vultr-api)

### [v0.3.0](https://github.com/kubeform/provider-vultr-api/releases/tag/v0.3.0)

- [2450452](https://github.com/kubeform/provider-vultr-api/commit/2450452) Generate code for provider@v1.3.4-0.20210625135956-5cdfa3b5e742 gen@690b8be (#1)



## [kubeform/provider-vultr-controller](https://github.com/kubeform/provider-vultr-controller)

### [v0.3.0](https://github.com/kubeform/provider-vultr-controller/releases/tag/v0.3.0)

- [8a6399c](https://github.com/kubeform/provider-vultr-controller/commit/8a6399c) Prepare for release v0.3.0 (#4)
- [87524df](https://github.com/kubeform/provider-vultr-controller/commit/87524df) Generate code for provider@v1.3.4-0.20210625135956-5cdfa3b5e742 gen@f048d3f (#3)
- [c86bd5a](https://github.com/kubeform/provider-vultr-controller/commit/c86bd5a) Generate code for provider@v1.3.4-0.20210625135956-5cdfa3b5e742 gen@690b8be (#2)



## [kubeform/provider-wavefront-api](https://github.com/kubeform/provider-wavefront-api)

### [v0.3.0](https://github.com/kubeform/provider-wavefront-api/releases/tag/v0.3.0)

- [9a2c62c](https://github.com/kubeform/provider-wavefront-api/commit/9a2c62c) Generate code for provider@ gen@d34c78c (#1)



## [kubeform/provider-wavefront-controller](https://github.com/kubeform/provider-wavefront-controller)

### [v0.3.0](https://github.com/kubeform/provider-wavefront-controller/releases/tag/v0.3.0)

- [18ff79d](https://github.com/kubeform/provider-wavefront-controller/commit/18ff79d) Prepare for release v0.3.0 (#3)
- [24bc409](https://github.com/kubeform/provider-wavefront-controller/commit/24bc409) Generate code for provider@v0.0.0-20210610195536-769fabacff12 gen@e07602e (#2)
- [22e12a7](https://github.com/kubeform/provider-wavefront-controller/commit/22e12a7) Generate code for provider@v0.0.0-20210610195536-769fabacff12 gen@8502170 (#1)




