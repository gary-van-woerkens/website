---
title: CognitoUserPool
menu:
  docs_v2021.08.02:
    identifier: cognitouserpool-aws.kubeform.com
    name: CognitoUserPool
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

## CognitoUserPool
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `CognitoUserPool` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[CognitoUserPoolSpec](#cognitouserpoolspec)***||
| `status` | ***[CognitoUserPoolStatus](#cognitouserpoolstatus)***||
## CognitoUserPoolSpec

Appears on:[CognitoUserPool](#cognitouserpool), [CognitoUserPoolStatus](#cognitouserpoolstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `adminCreateUserConfig` | ***[[]CognitoUserPoolSpecAdminCreateUserConfig](#cognitouserpoolspecadmincreateuserconfig)***| ***(Optional)*** |
| `aliasAttributes` | ***[]string***| ***(Optional)*** |
| `arn` | ***string***| ***(Optional)*** |
| `autoVerifiedAttributes` | ***[]string***| ***(Optional)*** |
| `creationDate` | ***string***| ***(Optional)*** |
| `deviceConfiguration` | ***[[]CognitoUserPoolSpecDeviceConfiguration](#cognitouserpoolspecdeviceconfiguration)***| ***(Optional)*** |
| `emailConfiguration` | ***[[]CognitoUserPoolSpecEmailConfiguration](#cognitouserpoolspecemailconfiguration)***| ***(Optional)*** |
| `emailVerificationMessage` | ***string***| ***(Optional)*** |
| `emailVerificationSubject` | ***string***| ***(Optional)*** |
| `endpoint` | ***string***| ***(Optional)*** |
| `lambdaConfig` | ***[[]CognitoUserPoolSpecLambdaConfig](#cognitouserpoolspeclambdaconfig)***| ***(Optional)*** |
| `lastModifiedDate` | ***string***| ***(Optional)*** |
| `mfaConfiguration` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `passwordPolicy` | ***[[]CognitoUserPoolSpecPasswordPolicy](#cognitouserpoolspecpasswordpolicy)***| ***(Optional)*** |
| `schema` | ***[[]CognitoUserPoolSpecSchema](#cognitouserpoolspecschema)***| ***(Optional)*** |
| `smsAuthenticationMessage` | ***string***| ***(Optional)*** |
| `smsConfiguration` | ***[[]CognitoUserPoolSpecSmsConfiguration](#cognitouserpoolspecsmsconfiguration)***| ***(Optional)*** |
| `smsVerificationMessage` | ***string***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
| `userPoolAddOns` | ***[[]CognitoUserPoolSpecUserPoolAddOns](#cognitouserpoolspecuserpooladdons)***| ***(Optional)*** |
| `usernameAttributes` | ***[]string***| ***(Optional)*** |
| `verificationMessageTemplate` | ***[[]CognitoUserPoolSpecVerificationMessageTemplate](#cognitouserpoolspecverificationmessagetemplate)***| ***(Optional)*** |
## CognitoUserPoolSpecAdminCreateUserConfig

Appears on:[CognitoUserPoolSpec](#cognitouserpoolspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `allowAdminCreateUserOnly` | ***bool***| ***(Optional)*** |
| `inviteMessageTemplate` | ***[[]CognitoUserPoolSpecAdminCreateUserConfigInviteMessageTemplate](#cognitouserpoolspecadmincreateuserconfiginvitemessagetemplate)***| ***(Optional)*** |
| `unusedAccountValidityDays` | ***int64***| ***(Optional)*** |
## CognitoUserPoolSpecAdminCreateUserConfigInviteMessageTemplate

Appears on:[CognitoUserPoolSpecAdminCreateUserConfig](#cognitouserpoolspecadmincreateuserconfig)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `emailMessage` | ***string***| ***(Optional)*** |
| `emailSubject` | ***string***| ***(Optional)*** |
| `smsMessage` | ***string***| ***(Optional)*** |
## CognitoUserPoolSpecDeviceConfiguration

Appears on:[CognitoUserPoolSpec](#cognitouserpoolspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `challengeRequiredOnNewDevice` | ***bool***| ***(Optional)*** |
| `deviceOnlyRememberedOnUserPrompt` | ***bool***| ***(Optional)*** |
## CognitoUserPoolSpecEmailConfiguration

Appears on:[CognitoUserPoolSpec](#cognitouserpoolspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `emailSendingAccount` | ***string***| ***(Optional)*** |
| `replyToEmailAddress` | ***string***| ***(Optional)*** |
| `sourceArn` | ***string***| ***(Optional)*** |
## CognitoUserPoolSpecLambdaConfig

Appears on:[CognitoUserPoolSpec](#cognitouserpoolspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `createAuthChallenge` | ***string***| ***(Optional)*** |
| `customMessage` | ***string***| ***(Optional)*** |
| `defineAuthChallenge` | ***string***| ***(Optional)*** |
| `postAuthentication` | ***string***| ***(Optional)*** |
| `postConfirmation` | ***string***| ***(Optional)*** |
| `preAuthentication` | ***string***| ***(Optional)*** |
| `preSignUp` | ***string***| ***(Optional)*** |
| `preTokenGeneration` | ***string***| ***(Optional)*** |
| `userMigration` | ***string***| ***(Optional)*** |
| `verifyAuthChallengeResponse` | ***string***| ***(Optional)*** |
## CognitoUserPoolSpecPasswordPolicy

Appears on:[CognitoUserPoolSpec](#cognitouserpoolspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `minimumLength` | ***int64***| ***(Optional)*** |
| `requireLowercase` | ***bool***| ***(Optional)*** |
| `requireNumbers` | ***bool***| ***(Optional)*** |
| `requireSymbols` | ***bool***| ***(Optional)*** |
| `requireUppercase` | ***bool***| ***(Optional)*** |
## CognitoUserPoolSpecSchema

Appears on:[CognitoUserPoolSpec](#cognitouserpoolspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `attributeDataType` | ***string***||
| `developerOnlyAttribute` | ***bool***| ***(Optional)*** |
| `mutable` | ***bool***| ***(Optional)*** |
| `name` | ***string***||
| `numberAttributeConstraints` | ***[[]CognitoUserPoolSpecSchemaNumberAttributeConstraints](#cognitouserpoolspecschemanumberattributeconstraints)***| ***(Optional)*** |
| `required` | ***bool***| ***(Optional)*** |
| `stringAttributeConstraints` | ***[[]CognitoUserPoolSpecSchemaStringAttributeConstraints](#cognitouserpoolspecschemastringattributeconstraints)***| ***(Optional)*** |
## CognitoUserPoolSpecSchemaNumberAttributeConstraints

Appears on:[CognitoUserPoolSpecSchema](#cognitouserpoolspecschema)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `maxValue` | ***string***| ***(Optional)*** |
| `minValue` | ***string***| ***(Optional)*** |
## CognitoUserPoolSpecSchemaStringAttributeConstraints

Appears on:[CognitoUserPoolSpecSchema](#cognitouserpoolspecschema)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `maxLength` | ***string***| ***(Optional)*** |
| `minLength` | ***string***| ***(Optional)*** |
## CognitoUserPoolSpecSmsConfiguration

Appears on:[CognitoUserPoolSpec](#cognitouserpoolspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `externalID` | ***string***||
| `snsCallerArn` | ***string***||
## CognitoUserPoolSpecUserPoolAddOns

Appears on:[CognitoUserPoolSpec](#cognitouserpoolspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `advancedSecurityMode` | ***string***||
## CognitoUserPoolSpecVerificationMessageTemplate

Appears on:[CognitoUserPoolSpec](#cognitouserpoolspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `defaultEmailOption` | ***string***| ***(Optional)*** |
| `emailMessage` | ***string***| ***(Optional)*** |
| `emailMessageByLink` | ***string***| ***(Optional)*** |
| `emailSubject` | ***string***| ***(Optional)*** |
| `emailSubjectByLink` | ***string***| ***(Optional)*** |
| `smsMessage` | ***string***| ***(Optional)*** |
## CognitoUserPoolStatus

Appears on:[CognitoUserPool](#cognitouserpool)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[CognitoUserPoolSpec](#cognitouserpoolspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[CognitoUserPoolStatus](#cognitouserpoolstatus)

---
