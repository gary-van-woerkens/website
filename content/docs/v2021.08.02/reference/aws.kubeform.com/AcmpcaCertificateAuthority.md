---
title: AcmpcaCertificateAuthority
menu:
  docs_v2021.08.02:
    identifier: acmpcacertificateauthority-aws.kubeform.com
    name: AcmpcaCertificateAuthority
    parent: aws.kubeform.com-reference
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

## AcmpcaCertificateAuthority
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `AcmpcaCertificateAuthority` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[AcmpcaCertificateAuthoritySpec](#acmpcacertificateauthorityspec)***||
| `status` | ***[AcmpcaCertificateAuthorityStatus](#acmpcacertificateauthoritystatus)***||
## AcmpcaCertificateAuthoritySpec

Appears on:[AcmpcaCertificateAuthority](#acmpcacertificateauthority), [AcmpcaCertificateAuthorityStatus](#acmpcacertificateauthoritystatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `arn` | ***string***| ***(Optional)*** |
| `certificate` | ***string***| ***(Optional)*** |
| `certificateAuthorityConfiguration` | ***[[]AcmpcaCertificateAuthoritySpecCertificateAuthorityConfiguration](#acmpcacertificateauthorityspeccertificateauthorityconfiguration)***||
| `certificateChain` | ***string***| ***(Optional)*** |
| `certificateSigningRequest` | ***string***| ***(Optional)*** |
| `enabled` | ***bool***| ***(Optional)*** |
| `notAfter` | ***string***| ***(Optional)*** |
| `notBefore` | ***string***| ***(Optional)*** |
| `permanentDeletionTimeInDays` | ***int64***| ***(Optional)*** |
| `revocationConfiguration` | ***[[]AcmpcaCertificateAuthoritySpecRevocationConfiguration](#acmpcacertificateauthorityspecrevocationconfiguration)***| ***(Optional)*** |
| `serial` | ***string***| ***(Optional)*** |
| `status` | ***string***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
| `type` | ***string***| ***(Optional)*** |
## AcmpcaCertificateAuthoritySpecCertificateAuthorityConfiguration

Appears on:[AcmpcaCertificateAuthoritySpec](#acmpcacertificateauthorityspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `keyAlgorithm` | ***string***||
| `signingAlgorithm` | ***string***||
| `subject` | ***[[]AcmpcaCertificateAuthoritySpecCertificateAuthorityConfigurationSubject](#acmpcacertificateauthorityspeccertificateauthorityconfigurationsubject)***||
## AcmpcaCertificateAuthoritySpecCertificateAuthorityConfigurationSubject

Appears on:[AcmpcaCertificateAuthoritySpecCertificateAuthorityConfiguration](#acmpcacertificateauthorityspeccertificateauthorityconfiguration)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `commonName` | ***string***| ***(Optional)*** |
| `country` | ***string***| ***(Optional)*** |
| `distinguishedNameQualifier` | ***string***| ***(Optional)*** |
| `generationQualifier` | ***string***| ***(Optional)*** |
| `givenName` | ***string***| ***(Optional)*** |
| `initials` | ***string***| ***(Optional)*** |
| `locality` | ***string***| ***(Optional)*** |
| `organization` | ***string***| ***(Optional)*** |
| `organizationalUnit` | ***string***| ***(Optional)*** |
| `pseudonym` | ***string***| ***(Optional)*** |
| `state` | ***string***| ***(Optional)*** |
| `surname` | ***string***| ***(Optional)*** |
| `title` | ***string***| ***(Optional)*** |
## AcmpcaCertificateAuthoritySpecRevocationConfiguration

Appears on:[AcmpcaCertificateAuthoritySpec](#acmpcacertificateauthorityspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `crlConfiguration` | ***[[]AcmpcaCertificateAuthoritySpecRevocationConfigurationCrlConfiguration](#acmpcacertificateauthorityspecrevocationconfigurationcrlconfiguration)***| ***(Optional)*** |
## AcmpcaCertificateAuthoritySpecRevocationConfigurationCrlConfiguration

Appears on:[AcmpcaCertificateAuthoritySpecRevocationConfiguration](#acmpcacertificateauthorityspecrevocationconfiguration)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `customCname` | ***string***| ***(Optional)*** |
| `enabled` | ***bool***| ***(Optional)*** |
| `expirationInDays` | ***int64***||
| `s3BucketName` | ***string***| ***(Optional)*** |
## AcmpcaCertificateAuthorityStatus

Appears on:[AcmpcaCertificateAuthority](#acmpcacertificateauthority)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[AcmpcaCertificateAuthoritySpec](#acmpcacertificateauthorityspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[AcmpcaCertificateAuthorityStatus](#acmpcacertificateauthoritystatus)

---
