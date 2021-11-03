---
title: AcmCertificate
menu:
  docs_v2021.10.29:
    identifier: acmcertificate-aws.kubeform.com
    name: AcmCertificate
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2021.10.29
section_menu_id: reference
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

## AcmCertificate
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `AcmCertificate` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[AcmCertificateSpec](#acmcertificatespec)***||
| `status` | ***[AcmCertificateStatus](#acmcertificatestatus)***||
## AcmCertificateSpec

Appears on:[AcmCertificate](#acmcertificate), [AcmCertificateStatus](#acmcertificatestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `secretRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `arn` | ***string***| ***(Optional)*** |
| `certificateAuthorityArn` | ***string***| ***(Optional)*** |
| `certificateBody` | ***string***| ***(Optional)*** |
| `certificateChain` | ***string***| ***(Optional)*** |
| `domainName` | ***string***| ***(Optional)*** |
| `domainValidationOptions` | ***[[]AcmCertificateSpecDomainValidationOptions](#acmcertificatespecdomainvalidationoptions)***| ***(Optional)*** |
| `options` | ***[[]AcmCertificateSpecOptions](#acmcertificatespecoptions)***| ***(Optional)*** |
| `subjectAlternativeNames` | ***[]string***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
| `validationEmails` | ***[]string***| ***(Optional)*** |
| `validationMethod` | ***string***| ***(Optional)*** |
## AcmCertificateSpecDomainValidationOptions

Appears on:[AcmCertificateSpec](#acmcertificatespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `domainName` | ***string***| ***(Optional)*** |
| `resourceRecordName` | ***string***| ***(Optional)*** |
| `resourceRecordType` | ***string***| ***(Optional)*** |
| `resourceRecordValue` | ***string***| ***(Optional)*** |
## AcmCertificateSpecOptions

Appears on:[AcmCertificateSpec](#acmcertificatespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `certificateTransparencyLoggingPreference` | ***string***| ***(Optional)*** |
## AcmCertificateStatus

Appears on:[AcmCertificate](#acmcertificate)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[AcmCertificateSpec](#acmcertificatespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[AcmCertificateStatus](#acmcertificatestatus)

---
## Sensitive Values
| Name | Type | Description |
|------|------|-------------|
| `private_key` | ***string*** ||
