---
title: Changelog | Kubeform
description: Changelog
menu:
  docs_v2021.07.28:
    identifier: changelog-kubeform-v2021.07.21
    name: Changelog-v2021.07.21
    parent: welcome
    weight: 20210721
product_name: kubeform
menu_name: docs_v2021.07.28
section_menu_id: welcome
url: /docs/v2021.07.28/welcome/changelog-v2021.07.21/
aliases:
- /docs/v2021.07.28/CHANGELOG-v2021.07.21/
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

# Kubeform v2021.07.21 (2021-07-22)


## [kubeform/installer](https://github.com/kubeform/installer)

### [v2021.07.21](https://github.com/kubeform/installer/releases/tag/v2021.07.21)

- [f45c4a85](https://github.com/kubeform/installer/commit/f45c4a85) Prepare for release v2021.07.21 (#108)
- [cac27f2d](https://github.com/kubeform/installer/commit/cac27f2d) Add equinixmetal
- [1b3dd15d](https://github.com/kubeform/installer/commit/1b3dd15d) Update equinixmetal installer for provider@v1.1.1-0.20210721135909-47bb95202dd9 gen@9ef86ab (#102)
- [01b8d4f6](https://github.com/kubeform/installer/commit/01b8d4f6) Update aws installer for provider@v1.60.1-0.20210624223533-7ed5f82d440d gen@db2b03b (#106)
- [228ef969](https://github.com/kubeform/installer/commit/228ef969) Set dependency version from kubeform-provider (#96)
- [e17d643d](https://github.com/kubeform/installer/commit/e17d643d) Update equinixmetal installer for provider@v1.1.1-0.20210721135909-47bb95202dd9 gen@9ef86ab (#95)
- [f7ec2834](https://github.com/kubeform/installer/commit/f7ec2834) Update equinixmetal installer for provider@v1.1.1-0.20210721135909-47bb95202dd9 gen@bfcec49 (#89)
- [8d6247c0](https://github.com/kubeform/installer/commit/8d6247c0) Add equinixmetal
- [1fce7e10](https://github.com/kubeform/installer/commit/1fce7e10) Cleanup make file
- [bd4fb07e](https://github.com/kubeform/installer/commit/bd4fb07e) Remove provider tag override from kubeform-provider chart
- [5525fdde](https://github.com/kubeform/installer/commit/5525fdde) Update chart docs
- [746af563](https://github.com/kubeform/installer/commit/746af563) Update chart dependencies via Makefile (#87)
- [aa89a7bb](https://github.com/kubeform/installer/commit/aa89a7bb) Move MetricsConfiguration crd to crds folder (#86)
- [7109bb3b](https://github.com/kubeform/installer/commit/7109bb3b) Update slack badge
- [2bcd1b0e](https://github.com/kubeform/installer/commit/2bcd1b0e) Update linode installer for provider@v1.19.1 gen@9d1a739 (#82)
- [7d6cfe93](https://github.com/kubeform/installer/commit/7d6cfe93) Update google installer for provider@v1.20.1-0.20210628164239-4d5f8365936e gen@56eda4b (#83)
- [9162d8d3](https://github.com/kubeform/installer/commit/9162d8d3) Update digitalocean installer for provider@v1.23.1-0.20210629201646-266cb440f82b gen@2175eed (#81)
- [424ebf7a](https://github.com/kubeform/installer/commit/424ebf7a) Update aws installer for provider@v1.60.1-0.20210624223533-7ed5f82d440d gen@fab451d (#85)
- [0315b8ef](https://github.com/kubeform/installer/commit/0315b8ef) Update azurerm installer for provider@v1.44.1-0.20210702030130-ff3fb4ec388d gen@82d7be3 (#84)
- [c3011905](https://github.com/kubeform/installer/commit/c3011905) Dynamically generate webhook server cert secret name (#80)
- [aa9bd027](https://github.com/kubeform/installer/commit/aa9bd027) Move crds inside templates folder (#79)
- [afccf6a2](https://github.com/kubeform/installer/commit/afccf6a2) Preserve operator tag in generator (#78)
- [6b928fa0](https://github.com/kubeform/installer/commit/6b928fa0) Fix cluster role permission for the operator (#77)
- [e0cfd2ca](https://github.com/kubeform/installer/commit/e0cfd2ca) Fix helm charts (#76)
- [310ef655](https://github.com/kubeform/installer/commit/310ef655) Use lint against library charts (#75)
- [f083d946](https://github.com/kubeform/installer/commit/f083d946) Update azurerm installer for provider@v1.44.1-0.20210702030130-ff3fb4ec388d gen@4bf24f6 (#73)
- [1509c5ad](https://github.com/kubeform/installer/commit/1509c5ad) Update aws installer for provider@v1.60.1-0.20210624223533-7ed5f82d440d gen@3ca99b7 (#74)
- [7fc20f6d](https://github.com/kubeform/installer/commit/7fc20f6d) Fix chart version setter commands
- [4873920b](https://github.com/kubeform/installer/commit/4873920b) Rename Kubeform Controller -> Kubeform Provider
- [fe940410](https://github.com/kubeform/installer/commit/fe940410) Update readme



## [kubeform/provider-aws-api](https://github.com/kubeform/provider-aws-api)

### [v0.1.1](https://github.com/kubeform/provider-aws-api/releases/tag/v0.1.1)

- [10e853c0](https://github.com/kubeform/provider-aws-api/commit/10e853c0) Generate code for provider@v1.60.1-0.20210624223533-7ed5f82d440d gen@fab451d (#4)
- [80144d77](https://github.com/kubeform/provider-aws-api/commit/80144d77) Generate code for provider@v1.60.1-0.20210624223533-7ed5f82d440d gen@3ca99b7 (#3)
- [fa9fced6](https://github.com/kubeform/provider-aws-api/commit/fa9fced6) Add kind.yaml
- [c564bd32](https://github.com/kubeform/provider-aws-api/commit/c564bd32) Update readme
- [680a7d0b](https://github.com/kubeform/provider-aws-api/commit/680a7d0b) Test crds



## [kubeform/provider-aws-controller](https://github.com/kubeform/provider-aws-controller)

### [v0.1.1](https://github.com/kubeform/provider-aws-controller/releases/tag/v0.1.1)

- [c0f6f8aa](https://github.com/kubeform/provider-aws-controller/commit/c0f6f8aa) Prepare for release v0.1.1 (#17)
- [2375a6cd](https://github.com/kubeform/provider-aws-controller/commit/2375a6cd) Generate code for provider@v1.60.1-0.20210624223533-7ed5f82d440d gen@5a22c2f (#13)
- [c1f94584](https://github.com/kubeform/provider-aws-controller/commit/c1f94584) Generate code for provider@v1.60.1-0.20210624223533-7ed5f82d440d gen@6fec409 (#12)
- [5cba4dee](https://github.com/kubeform/provider-aws-controller/commit/5cba4dee) Add e2e tests (#1)
- [709daf48](https://github.com/kubeform/provider-aws-controller/commit/709daf48) Generate code for provider@v1.60.1-0.20210624223533-7ed5f82d440d gen@fab451d (#11)
- [e0c44f91](https://github.com/kubeform/provider-aws-controller/commit/e0c44f91) Generate code for provider@v1.60.1-0.20210624223533-7ed5f82d440d gen@12f0af3 (#10)
- [6be8d3f6](https://github.com/kubeform/provider-aws-controller/commit/6be8d3f6) Generate code for provider@v1.60.1-0.20210624223533-7ed5f82d440d gen@040e50d (#9)
- [3a7b042c](https://github.com/kubeform/provider-aws-controller/commit/3a7b042c) Generate code for provider@v1.60.1-0.20210624223533-7ed5f82d440d gen@3ca99b7 (#8)
- [eba4b0bf](https://github.com/kubeform/provider-aws-controller/commit/eba4b0bf) Update readme



## [kubeform/provider-azurerm-api](https://github.com/kubeform/provider-azurerm-api)

### [v0.1.1](https://github.com/kubeform/provider-azurerm-api/releases/tag/v0.1.1)

- [338eaa6](https://github.com/kubeform/provider-azurerm-api/commit/338eaa6) Generate code for provider@v1.44.1-0.20210702030130-ff3fb4ec388d gen@82d7be3 (#4)
- [8cb7c39](https://github.com/kubeform/provider-azurerm-api/commit/8cb7c39) Generate code for provider@v1.44.1-0.20210702030130-ff3fb4ec388d gen@4bf24f6 (#3)
- [475ba2f](https://github.com/kubeform/provider-azurerm-api/commit/475ba2f) Add kind.yaml
- [616d654](https://github.com/kubeform/provider-azurerm-api/commit/616d654) Update readme
- [034892f](https://github.com/kubeform/provider-azurerm-api/commit/034892f) Test crds



## [kubeform/provider-azurerm-controller](https://github.com/kubeform/provider-azurerm-controller)

### [v0.1.1](https://github.com/kubeform/provider-azurerm-controller/releases/tag/v0.1.1)

- [b4eff031](https://github.com/kubeform/provider-azurerm-controller/commit/b4eff031) Prepare for release v0.1.1 (#16)
- [8241fc76](https://github.com/kubeform/provider-azurerm-controller/commit/8241fc76) Generate code for provider@v1.44.1-0.20210702030130-ff3fb4ec388d gen@9b17a1b (#12)
- [683816fb](https://github.com/kubeform/provider-azurerm-controller/commit/683816fb) Generate code for provider@v1.44.1-0.20210702030130-ff3fb4ec388d gen@1a7b023 (#11)
- [e9fb4cf7](https://github.com/kubeform/provider-azurerm-controller/commit/e9fb4cf7) Add e2e tests (#6)
- [ad082245](https://github.com/kubeform/provider-azurerm-controller/commit/ad082245) Generate code for provider@v1.44.1-0.20210702030130-ff3fb4ec388d gen@82d7be3 (#10)
- [9d5da878](https://github.com/kubeform/provider-azurerm-controller/commit/9d5da878) Generate code for provider@v1.44.1-0.20210702030130-ff3fb4ec388d gen@bb2894b (#9)
- [ce8ae35c](https://github.com/kubeform/provider-azurerm-controller/commit/ce8ae35c) Generate code for provider@v1.44.1-0.20210702030130-ff3fb4ec388d gen@2bed18e (#8)
- [02b014ad](https://github.com/kubeform/provider-azurerm-controller/commit/02b014ad) Generate code for provider@v1.44.1-0.20210702030130-ff3fb4ec388d gen@4bf24f6 (#7)
- [54619072](https://github.com/kubeform/provider-azurerm-controller/commit/54619072) Update readme



## [kubeform/provider-digitalocean-api](https://github.com/kubeform/provider-digitalocean-api)

### [v0.1.1](https://github.com/kubeform/provider-digitalocean-api/releases/tag/v0.1.1)

- [20ee75b](https://github.com/kubeform/provider-digitalocean-api/commit/20ee75b) Generate code for provider@v1.23.1-0.20210629201646-266cb440f82b gen@2175eed (#3)
- [ada311a](https://github.com/kubeform/provider-digitalocean-api/commit/ada311a) Add kind.yaml
- [4aa4eb7](https://github.com/kubeform/provider-digitalocean-api/commit/4aa4eb7) Update readme
- [8091737](https://github.com/kubeform/provider-digitalocean-api/commit/8091737) Test crds



## [kubeform/provider-digitalocean-controller](https://github.com/kubeform/provider-digitalocean-controller)

### [v0.1.1](https://github.com/kubeform/provider-digitalocean-controller/releases/tag/v0.1.1)

- [8411ef2](https://github.com/kubeform/provider-digitalocean-controller/commit/8411ef2) Prepare for release v0.1.1 (#19)
- [939174b](https://github.com/kubeform/provider-digitalocean-controller/commit/939174b) Generate code for provider@v1.23.1-0.20210629201646-266cb440f82b gen@aeb1aa8 (#13)
- [89a8a3f](https://github.com/kubeform/provider-digitalocean-controller/commit/89a8a3f) Generate code for provider@v1.23.1-0.20210629201646-266cb440f82b gen@ef0247a (#12)
- [5e774f2](https://github.com/kubeform/provider-digitalocean-controller/commit/5e774f2) Add e2e tests (#1)
- [3aa7cba](https://github.com/kubeform/provider-digitalocean-controller/commit/3aa7cba) Generate code for provider@v1.23.1-0.20210629201646-266cb440f82b gen@2175eed (#11)
- [2812155](https://github.com/kubeform/provider-digitalocean-controller/commit/2812155) Generate code for provider@v1.23.1-0.20210629201646-266cb440f82b gen@e3fe0bd (#10)
- [40eee62](https://github.com/kubeform/provider-digitalocean-controller/commit/40eee62) Update readme



## [kubeform/provider-equinixmetal-api](https://github.com/kubeform/provider-equinixmetal-api)

### [v0.1.0](https://github.com/kubeform/provider-equinixmetal-api/releases/tag/v0.1.0)

- [ae93d2a](https://github.com/kubeform/provider-equinixmetal-api/commit/ae93d2a) Generate code for provider@v1.1.1-0.20210721135909-47bb95202dd9 gen@9ef86ab (#2)
- [6380408](https://github.com/kubeform/provider-equinixmetal-api/commit/6380408) Generate code for provider@v1.1.1-0.20210721135909-47bb95202dd9 gen@d1d496c (#1)



## [kubeform/provider-equinixmetal-controller](https://github.com/kubeform/provider-equinixmetal-controller)

### [v0.1.0](https://github.com/kubeform/provider-equinixmetal-controller/releases/tag/v0.1.0)

- [bda0108](https://github.com/kubeform/provider-equinixmetal-controller/commit/bda0108) Prepare for release v0.1.0 (#5)
- [537ee49](https://github.com/kubeform/provider-equinixmetal-controller/commit/537ee49) Generate code for provider@v1.1.1-0.20210721135909-47bb95202dd9 gen@9ef86ab (#3)
- [09deaa9](https://github.com/kubeform/provider-equinixmetal-controller/commit/09deaa9) Generate code for provider@v1.1.1-0.20210721135909-47bb95202dd9 gen@60c30b7 (#2)
- [19a71f0](https://github.com/kubeform/provider-equinixmetal-controller/commit/19a71f0) Generate code for provider@v1.1.1-0.20210721135909-47bb95202dd9 gen@931aeab (#1)



## [kubeform/provider-google-api](https://github.com/kubeform/provider-google-api)

### [v0.1.1](https://github.com/kubeform/provider-google-api/releases/tag/v0.1.1)

- [d4b8384](https://github.com/kubeform/provider-google-api/commit/d4b8384) Generate code for provider@v1.20.1-0.20210628164239-4d5f8365936e gen@56eda4b (#2)
- [9ee845d](https://github.com/kubeform/provider-google-api/commit/9ee845d) Add kind.yaml
- [bb251fb](https://github.com/kubeform/provider-google-api/commit/bb251fb) Update readme
- [7bd6b63](https://github.com/kubeform/provider-google-api/commit/7bd6b63) Test crds



## [kubeform/provider-google-controller](https://github.com/kubeform/provider-google-controller)

### [v0.1.1](https://github.com/kubeform/provider-google-controller/releases/tag/v0.1.1)

- [40e0f40](https://github.com/kubeform/provider-google-controller/commit/40e0f40) Prepare for release v0.1.1 (#19)
- [500f0b5](https://github.com/kubeform/provider-google-controller/commit/500f0b5) Generate code for provider@v1.20.1-0.20210628164239-4d5f8365936e gen@674abc5 (#14)
- [978837b](https://github.com/kubeform/provider-google-controller/commit/978837b) Generate code for provider@v1.20.1-0.20210628164239-4d5f8365936e gen@87b8247 (#13)
- [ec65640](https://github.com/kubeform/provider-google-controller/commit/ec65640) Add e2e tests (#1)
- [ad34434](https://github.com/kubeform/provider-google-controller/commit/ad34434) Generate code for provider@v1.20.1-0.20210628164239-4d5f8365936e gen@56eda4b (#12)
- [e91e9e5](https://github.com/kubeform/provider-google-controller/commit/e91e9e5) Generate code for provider@v1.20.1-0.20210628164239-4d5f8365936e gen@b6adbbf (#11)
- [fcb87f4](https://github.com/kubeform/provider-google-controller/commit/fcb87f4) Generate code for provider@v1.20.1-0.20210628164239-4d5f8365936e gen@bd2e7d7 (#10)



## [kubeform/provider-linode-api](https://github.com/kubeform/provider-linode-api)

### [v0.1.1](https://github.com/kubeform/provider-linode-api/releases/tag/v0.1.1)

- [32585da](https://github.com/kubeform/provider-linode-api/commit/32585da) Generate code for provider@v1.19.1 gen@9d1a739 (#4)
- [bbd46cb](https://github.com/kubeform/provider-linode-api/commit/bbd46cb) Add kind.yaml
- [484d4de](https://github.com/kubeform/provider-linode-api/commit/484d4de) Update readme
- [41e05a9](https://github.com/kubeform/provider-linode-api/commit/41e05a9) Test crds



## [kubeform/provider-linode-controller](https://github.com/kubeform/provider-linode-controller)

### [v0.1.1](https://github.com/kubeform/provider-linode-controller/releases/tag/v0.1.1)

- [c1a48e2](https://github.com/kubeform/provider-linode-controller/commit/c1a48e2) Prepare for release v0.1.1 (#24)
- [09867c1](https://github.com/kubeform/provider-linode-controller/commit/09867c1) Generate code for provider@v1.19.1 gen@a4cce75 (#19)
- [d61c0cf](https://github.com/kubeform/provider-linode-controller/commit/d61c0cf) Generate code for provider@v1.19.1 gen@1342207 (#18)
- [ac9d44c](https://github.com/kubeform/provider-linode-controller/commit/ac9d44c) Update e2e.yml
- [408a538](https://github.com/kubeform/provider-linode-controller/commit/408a538) Update e2e test (#4)
- [5ea012d](https://github.com/kubeform/provider-linode-controller/commit/5ea012d) Run e2e tests against pull requests only (#17)
- [2777d82](https://github.com/kubeform/provider-linode-controller/commit/2777d82) Generate code for provider@v1.19.1 gen@9d1a739 (#16)
- [a7b9856](https://github.com/kubeform/provider-linode-controller/commit/a7b9856) Setup CI e2e test (#14)
- [529cb03](https://github.com/kubeform/provider-linode-controller/commit/529cb03) Generate code for provider@v1.19.1 gen@d34fcc9 (#15)
- [2509b72](https://github.com/kubeform/provider-linode-controller/commit/2509b72) Generate code for provider@v1.19.1 gen@20e8843 (#13)
- [e0b0c62](https://github.com/kubeform/provider-linode-controller/commit/e0b0c62) Update readme




