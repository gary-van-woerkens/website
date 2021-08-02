---
title: CloudfrontDistribution
menu:
  docs_v2021.08.02:
    identifier: cloudfrontdistribution-aws.kubeform.com
    name: CloudfrontDistribution
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

## CloudfrontDistribution
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `CloudfrontDistribution` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[CloudfrontDistributionSpec](#cloudfrontdistributionspec)***||
| `status` | ***[CloudfrontDistributionStatus](#cloudfrontdistributionstatus)***||
## CloudfrontDistributionSpec

Appears on:[CloudfrontDistribution](#cloudfrontdistribution), [CloudfrontDistributionStatus](#cloudfrontdistributionstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `activeTrustedSigners` | ***map[string]string***| ***(Optional)*** |
| `aliases` | ***[]string***| ***(Optional)*** |
| `arn` | ***string***| ***(Optional)*** |
| `callerReference` | ***string***| ***(Optional)*** |
| `comment` | ***string***| ***(Optional)*** |
| `customErrorResponse` | ***[[]CloudfrontDistributionSpecCustomErrorResponse](#cloudfrontdistributionspeccustomerrorresponse)***| ***(Optional)*** |
| `defaultCacheBehavior` | ***[[]CloudfrontDistributionSpecDefaultCacheBehavior](#cloudfrontdistributionspecdefaultcachebehavior)***||
| `defaultRootObject` | ***string***| ***(Optional)*** |
| `domainName` | ***string***| ***(Optional)*** |
| `enabled` | ***bool***||
| `etag` | ***string***| ***(Optional)*** |
| `hostedZoneID` | ***string***| ***(Optional)*** |
| `httpVersion` | ***string***| ***(Optional)*** |
| `inProgressValidationBatches` | ***int64***| ***(Optional)*** |
| `isIpv6Enabled` | ***bool***| ***(Optional)*** |
| `lastModifiedTime` | ***string***| ***(Optional)*** |
| `loggingConfig` | ***[[]CloudfrontDistributionSpecLoggingConfig](#cloudfrontdistributionspecloggingconfig)***| ***(Optional)*** |
| `orderedCacheBehavior` | ***[[]CloudfrontDistributionSpecOrderedCacheBehavior](#cloudfrontdistributionspecorderedcachebehavior)***| ***(Optional)*** |
| `origin` | ***[[]CloudfrontDistributionSpecOrigin](#cloudfrontdistributionspecorigin)***||
| `originGroup` | ***[[]CloudfrontDistributionSpecOriginGroup](#cloudfrontdistributionspecorigingroup)***| ***(Optional)*** |
| `priceClass` | ***string***| ***(Optional)*** |
| `restrictions` | ***[[]CloudfrontDistributionSpecRestrictions](#cloudfrontdistributionspecrestrictions)***||
| `retainOnDelete` | ***bool***| ***(Optional)*** |
| `status` | ***string***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
| `viewerCertificate` | ***[[]CloudfrontDistributionSpecViewerCertificate](#cloudfrontdistributionspecviewercertificate)***||
| `waitForDeployment` | ***bool***| ***(Optional)*** |
| `webACLID` | ***string***| ***(Optional)*** |
## CloudfrontDistributionSpecCustomErrorResponse

Appears on:[CloudfrontDistributionSpec](#cloudfrontdistributionspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `errorCachingMinTtl` | ***int64***| ***(Optional)*** |
| `errorCode` | ***int64***||
| `responseCode` | ***int64***| ***(Optional)*** |
| `responsePagePath` | ***string***| ***(Optional)*** |
## CloudfrontDistributionSpecDefaultCacheBehavior

Appears on:[CloudfrontDistributionSpec](#cloudfrontdistributionspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `allowedMethods` | ***[]string***||
| `cachedMethods` | ***[]string***||
| `compress` | ***bool***| ***(Optional)*** |
| `defaultTtl` | ***int64***| ***(Optional)*** |
| `fieldLevelEncryptionID` | ***string***| ***(Optional)*** |
| `forwardedValues` | ***[[]CloudfrontDistributionSpecDefaultCacheBehaviorForwardedValues](#cloudfrontdistributionspecdefaultcachebehaviorforwardedvalues)***||
| `lambdaFunctionAssociation` | ***[[]CloudfrontDistributionSpecDefaultCacheBehaviorLambdaFunctionAssociation](#cloudfrontdistributionspecdefaultcachebehaviorlambdafunctionassociation)***| ***(Optional)*** |
| `maxTtl` | ***int64***| ***(Optional)*** |
| `minTtl` | ***int64***| ***(Optional)*** |
| `smoothStreaming` | ***bool***| ***(Optional)*** |
| `targetOriginID` | ***string***||
| `trustedSigners` | ***[]string***| ***(Optional)*** |
| `viewerProtocolPolicy` | ***string***||
## CloudfrontDistributionSpecDefaultCacheBehaviorForwardedValues

Appears on:[CloudfrontDistributionSpecDefaultCacheBehavior](#cloudfrontdistributionspecdefaultcachebehavior)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `cookies` | ***[[]CloudfrontDistributionSpecDefaultCacheBehaviorForwardedValuesCookies](#cloudfrontdistributionspecdefaultcachebehaviorforwardedvaluescookies)***||
| `headers` | ***[]string***| ***(Optional)*** |
| `queryString` | ***bool***||
| `queryStringCacheKeys` | ***[]string***| ***(Optional)*** |
## CloudfrontDistributionSpecDefaultCacheBehaviorForwardedValuesCookies

Appears on:[CloudfrontDistributionSpecDefaultCacheBehaviorForwardedValues](#cloudfrontdistributionspecdefaultcachebehaviorforwardedvalues)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `forward` | ***string***||
| `whitelistedNames` | ***[]string***| ***(Optional)*** |
## CloudfrontDistributionSpecDefaultCacheBehaviorLambdaFunctionAssociation

Appears on:[CloudfrontDistributionSpecDefaultCacheBehavior](#cloudfrontdistributionspecdefaultcachebehavior)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `eventType` | ***string***||
| `includeBody` | ***bool***| ***(Optional)*** |
| `lambdaArn` | ***string***||
## CloudfrontDistributionSpecLoggingConfig

Appears on:[CloudfrontDistributionSpec](#cloudfrontdistributionspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `bucket` | ***string***||
| `includeCookies` | ***bool***| ***(Optional)*** |
| `prefix` | ***string***| ***(Optional)*** |
## CloudfrontDistributionSpecOrderedCacheBehavior

Appears on:[CloudfrontDistributionSpec](#cloudfrontdistributionspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `allowedMethods` | ***[]string***||
| `cachedMethods` | ***[]string***||
| `compress` | ***bool***| ***(Optional)*** |
| `defaultTtl` | ***int64***| ***(Optional)*** |
| `fieldLevelEncryptionID` | ***string***| ***(Optional)*** |
| `forwardedValues` | ***[[]CloudfrontDistributionSpecOrderedCacheBehaviorForwardedValues](#cloudfrontdistributionspecorderedcachebehaviorforwardedvalues)***||
| `lambdaFunctionAssociation` | ***[[]CloudfrontDistributionSpecOrderedCacheBehaviorLambdaFunctionAssociation](#cloudfrontdistributionspecorderedcachebehaviorlambdafunctionassociation)***| ***(Optional)*** |
| `maxTtl` | ***int64***| ***(Optional)*** |
| `minTtl` | ***int64***| ***(Optional)*** |
| `pathPattern` | ***string***||
| `smoothStreaming` | ***bool***| ***(Optional)*** |
| `targetOriginID` | ***string***||
| `trustedSigners` | ***[]string***| ***(Optional)*** |
| `viewerProtocolPolicy` | ***string***||
## CloudfrontDistributionSpecOrderedCacheBehaviorForwardedValues

Appears on:[CloudfrontDistributionSpecOrderedCacheBehavior](#cloudfrontdistributionspecorderedcachebehavior)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `cookies` | ***[[]CloudfrontDistributionSpecOrderedCacheBehaviorForwardedValuesCookies](#cloudfrontdistributionspecorderedcachebehaviorforwardedvaluescookies)***||
| `headers` | ***[]string***| ***(Optional)*** |
| `queryString` | ***bool***||
| `queryStringCacheKeys` | ***[]string***| ***(Optional)*** |
## CloudfrontDistributionSpecOrderedCacheBehaviorForwardedValuesCookies

Appears on:[CloudfrontDistributionSpecOrderedCacheBehaviorForwardedValues](#cloudfrontdistributionspecorderedcachebehaviorforwardedvalues)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `forward` | ***string***||
| `whitelistedNames` | ***[]string***| ***(Optional)*** |
## CloudfrontDistributionSpecOrderedCacheBehaviorLambdaFunctionAssociation

Appears on:[CloudfrontDistributionSpecOrderedCacheBehavior](#cloudfrontdistributionspecorderedcachebehavior)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `eventType` | ***string***||
| `includeBody` | ***bool***| ***(Optional)*** |
| `lambdaArn` | ***string***||
## CloudfrontDistributionSpecOrigin

Appears on:[CloudfrontDistributionSpec](#cloudfrontdistributionspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `customHeader` | ***[[]CloudfrontDistributionSpecOriginCustomHeader](#cloudfrontdistributionspecorigincustomheader)***| ***(Optional)*** |
| `customOriginConfig` | ***[[]CloudfrontDistributionSpecOriginCustomOriginConfig](#cloudfrontdistributionspecorigincustomoriginconfig)***| ***(Optional)*** |
| `domainName` | ***string***||
| `originID` | ***string***||
| `originPath` | ***string***| ***(Optional)*** |
| `s3OriginConfig` | ***[[]CloudfrontDistributionSpecOriginS3OriginConfig](#cloudfrontdistributionspecorigins3originconfig)***| ***(Optional)*** |
## CloudfrontDistributionSpecOriginCustomHeader

Appears on:[CloudfrontDistributionSpecOrigin](#cloudfrontdistributionspecorigin)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `name` | ***string***||
| `value` | ***string***||
## CloudfrontDistributionSpecOriginCustomOriginConfig

Appears on:[CloudfrontDistributionSpecOrigin](#cloudfrontdistributionspecorigin)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `httpPort` | ***int64***||
| `httpsPort` | ***int64***||
| `originKeepaliveTimeout` | ***int64***| ***(Optional)*** |
| `originProtocolPolicy` | ***string***||
| `originReadTimeout` | ***int64***| ***(Optional)*** |
| `originSSLProtocols` | ***[]string***||
## CloudfrontDistributionSpecOriginGroup

Appears on:[CloudfrontDistributionSpec](#cloudfrontdistributionspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `failoverCriteria` | ***[[]CloudfrontDistributionSpecOriginGroupFailoverCriteria](#cloudfrontdistributionspecorigingroupfailovercriteria)***||
| `member` | ***[[]CloudfrontDistributionSpecOriginGroupMember](#cloudfrontdistributionspecorigingroupmember)***||
| `originID` | ***string***||
## CloudfrontDistributionSpecOriginGroupFailoverCriteria

Appears on:[CloudfrontDistributionSpecOriginGroup](#cloudfrontdistributionspecorigingroup)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `statusCodes` | ***[]int64***||
## CloudfrontDistributionSpecOriginGroupMember

Appears on:[CloudfrontDistributionSpecOriginGroup](#cloudfrontdistributionspecorigingroup)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `originID` | ***string***||
## CloudfrontDistributionSpecOriginS3OriginConfig

Appears on:[CloudfrontDistributionSpecOrigin](#cloudfrontdistributionspecorigin)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `originAccessIdentity` | ***string***||
## CloudfrontDistributionSpecRestrictions

Appears on:[CloudfrontDistributionSpec](#cloudfrontdistributionspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `geoRestriction` | ***[[]CloudfrontDistributionSpecRestrictionsGeoRestriction](#cloudfrontdistributionspecrestrictionsgeorestriction)***||
## CloudfrontDistributionSpecRestrictionsGeoRestriction

Appears on:[CloudfrontDistributionSpecRestrictions](#cloudfrontdistributionspecrestrictions)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `locations` | ***[]string***| ***(Optional)*** |
| `restrictionType` | ***string***||
## CloudfrontDistributionSpecViewerCertificate

Appears on:[CloudfrontDistributionSpec](#cloudfrontdistributionspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `acmCertificateArn` | ***string***| ***(Optional)*** |
| `cloudfrontDefaultCertificate` | ***bool***| ***(Optional)*** |
| `iamCertificateID` | ***string***| ***(Optional)*** |
| `minimumProtocolVersion` | ***string***| ***(Optional)*** |
| `sslSupportMethod` | ***string***| ***(Optional)*** |
## CloudfrontDistributionStatus

Appears on:[CloudfrontDistribution](#cloudfrontdistribution)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[CloudfrontDistributionSpec](#cloudfrontdistributionspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[CloudfrontDistributionStatus](#cloudfrontdistributionstatus)

---
