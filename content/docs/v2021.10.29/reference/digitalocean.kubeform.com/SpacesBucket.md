---
title: SpacesBucket
menu:
  docs_v2021.10.29:
    identifier: spacesbucket-digitalocean.kubeform.com
    name: SpacesBucket
    parent: digitalocean.kubeform.com-reference
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

## SpacesBucket
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `digitalocean.kubeform.com/v1alpha1` |
|    `kind` | string | `SpacesBucket` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[SpacesBucketSpec](#spacesbucketspec)***||
| `status` | ***[SpacesBucketStatus](#spacesbucketstatus)***||
## Phase(`string` alias)

Appears on:[SpacesBucketStatus](#spacesbucketstatus)

## SpacesBucketSpec

Appears on:[SpacesBucket](#spacesbucket), [SpacesBucketStatus](#spacesbucketstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `acl` | ***string***| ***(Optional)*** Canned ACL applied on bucket creation|
| `bucketDomainName` | ***string***| ***(Optional)*** The FQDN of the bucket|
| `corsRule` | ***[[]SpacesBucketSpecCorsRule](#spacesbucketspeccorsrule)***| ***(Optional)*** A container holding a list of elements describing allowed methods for a specific origin.|
| `forceDestroy` | ***bool***| ***(Optional)*** Unless true, the bucket will only be destroyed if empty|
| `lifecycleRule` | ***[[]SpacesBucketSpecLifecycleRule](#spacesbucketspeclifecyclerule)***| ***(Optional)*** |
| `name` | ***string***|Bucket name|
| `region` | ***string***| ***(Optional)*** Bucket region|
| `urn` | ***string***| ***(Optional)*** the uniform resource name for the bucket|
| `versioning` | ***[[]SpacesBucketSpecVersioning](#spacesbucketspecversioning)***| ***(Optional)*** |
## SpacesBucketSpecCorsRule

Appears on:[SpacesBucketSpec](#spacesbucketspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `allowedHeaders` | ***[]string***| ***(Optional)*** A list of headers that will be included in the CORS preflight request's Access-Control-Request-Headers. A header may contain one wildcard (e.g. x-amz-*).|
| `allowedMethods` | ***[]string***|A list of HTTP methods (e.g. GET) which are allowed from the specified origin.|
| `allowedOrigins` | ***[]string***|A list of hosts from which requests using the specified methods are allowed. A host may contain one wildcard (e.g. http://*.example.com).|
| `maxAgeSeconds` | ***int64***| ***(Optional)*** |
## SpacesBucketSpecLifecycleRule

Appears on:[SpacesBucketSpec](#spacesbucketspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `abortIncompleteMultipartUploadDays` | ***int64***| ***(Optional)*** |
| `enabled` | ***bool***||
| `expiration` | ***[[]SpacesBucketSpecLifecycleRuleExpiration](#spacesbucketspeclifecycleruleexpiration)***| ***(Optional)*** |
| `ID` | ***string***| ***(Optional)*** |
| `noncurrentVersionExpiration` | ***[[]SpacesBucketSpecLifecycleRuleNoncurrentVersionExpiration](#spacesbucketspeclifecyclerulenoncurrentversionexpiration)***| ***(Optional)*** |
| `prefix` | ***string***| ***(Optional)*** |
## SpacesBucketSpecLifecycleRuleExpiration

Appears on:[SpacesBucketSpecLifecycleRule](#spacesbucketspeclifecyclerule)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `date` | ***string***| ***(Optional)*** |
| `days` | ***int64***| ***(Optional)*** |
| `expiredObjectDeleteMarker` | ***bool***| ***(Optional)*** |
## SpacesBucketSpecLifecycleRuleNoncurrentVersionExpiration

Appears on:[SpacesBucketSpecLifecycleRule](#spacesbucketspeclifecyclerule)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `days` | ***int64***| ***(Optional)*** |
## SpacesBucketSpecVersioning

Appears on:[SpacesBucketSpec](#spacesbucketspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `enabled` | ***bool***| ***(Optional)*** |
## SpacesBucketStatus

Appears on:[SpacesBucket](#spacesbucket)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[SpacesBucketSpec](#spacesbucketspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
