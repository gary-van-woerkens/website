---
title: KeyVaultCertificate
menu:
  docs_v2021.07.28:
    identifier: keyvaultcertificate-azurerm.kubeform.com
    name: KeyVaultCertificate
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v2021.07.28
section_menu_id: reference
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

## KeyVaultCertificate
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `KeyVaultCertificate` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[KeyVaultCertificateSpec](#keyvaultcertificatespec)***||
| `status` | ***[KeyVaultCertificateStatus](#keyvaultcertificatestatus)***||
## KeyVaultCertificateSpec

Appears on:[KeyVaultCertificate](#keyvaultcertificate), [KeyVaultCertificateStatus](#keyvaultcertificatestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `secretRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `certificate` | ***[[]KeyVaultCertificateSpecCertificate](#keyvaultcertificatespeccertificate)***| ***(Optional)*** |
| `certificateData` | ***string***| ***(Optional)*** |
| `certificatePolicy` | ***[[]KeyVaultCertificateSpecCertificatePolicy](#keyvaultcertificatespeccertificatepolicy)***||
| `keyVaultID` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `secretID` | ***string***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
| `thumbprint` | ***string***| ***(Optional)*** |
| `vaultURI` | ***string***| ***(Optional)*** Deprecated|
| `version` | ***string***| ***(Optional)*** |
## KeyVaultCertificateSpecCertificate

Appears on:[KeyVaultCertificateSpec](#keyvaultcertificatespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
## KeyVaultCertificateSpecCertificatePolicy

Appears on:[KeyVaultCertificateSpec](#keyvaultcertificatespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `issuerParameters` | ***[[]KeyVaultCertificateSpecCertificatePolicyIssuerParameters](#keyvaultcertificatespeccertificatepolicyissuerparameters)***||
| `keyProperties` | ***[[]KeyVaultCertificateSpecCertificatePolicyKeyProperties](#keyvaultcertificatespeccertificatepolicykeyproperties)***||
| `lifetimeAction` | ***[[]KeyVaultCertificateSpecCertificatePolicyLifetimeAction](#keyvaultcertificatespeccertificatepolicylifetimeaction)***| ***(Optional)*** |
| `secretProperties` | ***[[]KeyVaultCertificateSpecCertificatePolicySecretProperties](#keyvaultcertificatespeccertificatepolicysecretproperties)***||
| `x509CertificateProperties` | ***[[]KeyVaultCertificateSpecCertificatePolicyX509CertificateProperties](#keyvaultcertificatespeccertificatepolicyx509certificateproperties)***| ***(Optional)*** |
## KeyVaultCertificateSpecCertificatePolicyIssuerParameters

Appears on:[KeyVaultCertificateSpecCertificatePolicy](#keyvaultcertificatespeccertificatepolicy)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `name` | ***string***||
## KeyVaultCertificateSpecCertificatePolicyKeyProperties

Appears on:[KeyVaultCertificateSpecCertificatePolicy](#keyvaultcertificatespeccertificatepolicy)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `exportable` | ***bool***||
| `keySize` | ***int64***||
| `keyType` | ***string***||
| `reuseKey` | ***bool***||
## KeyVaultCertificateSpecCertificatePolicyLifetimeAction

Appears on:[KeyVaultCertificateSpecCertificatePolicy](#keyvaultcertificatespeccertificatepolicy)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `action` | ***[[]KeyVaultCertificateSpecCertificatePolicyLifetimeActionAction](#keyvaultcertificatespeccertificatepolicylifetimeactionaction)***||
| `trigger` | ***[[]KeyVaultCertificateSpecCertificatePolicyLifetimeActionTrigger](#keyvaultcertificatespeccertificatepolicylifetimeactiontrigger)***||
## KeyVaultCertificateSpecCertificatePolicyLifetimeActionAction

Appears on:[KeyVaultCertificateSpecCertificatePolicyLifetimeAction](#keyvaultcertificatespeccertificatepolicylifetimeaction)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `actionType` | ***string***||
## KeyVaultCertificateSpecCertificatePolicyLifetimeActionTrigger

Appears on:[KeyVaultCertificateSpecCertificatePolicyLifetimeAction](#keyvaultcertificatespeccertificatepolicylifetimeaction)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `daysBeforeExpiry` | ***int64***| ***(Optional)*** |
| `lifetimePercentage` | ***int64***| ***(Optional)*** |
## KeyVaultCertificateSpecCertificatePolicySecretProperties

Appears on:[KeyVaultCertificateSpecCertificatePolicy](#keyvaultcertificatespeccertificatepolicy)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `contentType` | ***string***||
## KeyVaultCertificateSpecCertificatePolicyX509CertificateProperties

Appears on:[KeyVaultCertificateSpecCertificatePolicy](#keyvaultcertificatespeccertificatepolicy)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `extendedKeyUsage` | ***[]string***| ***(Optional)*** |
| `keyUsage` | ***[]string***||
| `subject` | ***string***||
| `subjectAlternativeNames` | ***[[]KeyVaultCertificateSpecCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames](#keyvaultcertificatespeccertificatepolicyx509certificatepropertiessubjectalternativenames)***| ***(Optional)*** |
| `validityInMonths` | ***int64***||
## KeyVaultCertificateSpecCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames

Appears on:[KeyVaultCertificateSpecCertificatePolicyX509CertificateProperties](#keyvaultcertificatespeccertificatepolicyx509certificateproperties)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `dnsNames` | ***[]string***| ***(Optional)*** |
| `emails` | ***[]string***| ***(Optional)*** |
| `upns` | ***[]string***| ***(Optional)*** |
## KeyVaultCertificateStatus

Appears on:[KeyVaultCertificate](#keyvaultcertificate)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[KeyVaultCertificateSpec](#keyvaultcertificatespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[KeyVaultCertificateStatus](#keyvaultcertificatestatus)

---
## Sensitive Values
| Name | Type | Description |
|------|------|-------------|
| `certificate.<index>.contents` | ***string*** ||
| `certificate.<index>.password` | ***string*** ||
