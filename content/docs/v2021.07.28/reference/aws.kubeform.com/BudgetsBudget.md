---
title: BudgetsBudget
menu:
  docs_v2021.07.28:
    identifier: budgetsbudget-aws.kubeform.com
    name: BudgetsBudget
    parent: aws.kubeform.com-reference
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

## BudgetsBudget
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `BudgetsBudget` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[BudgetsBudgetSpec](#budgetsbudgetspec)***||
| `status` | ***[BudgetsBudgetStatus](#budgetsbudgetstatus)***||
## BudgetsBudgetSpec

Appears on:[BudgetsBudget](#budgetsbudget), [BudgetsBudgetStatus](#budgetsbudgetstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `accountID` | ***string***| ***(Optional)*** |
| `budgetType` | ***string***||
| `costFilters` | ***map[string]string***| ***(Optional)*** |
| `costTypes` | ***[[]BudgetsBudgetSpecCostTypes](#budgetsbudgetspeccosttypes)***| ***(Optional)*** |
| `limitAmount` | ***string***||
| `limitUnit` | ***string***||
| `name` | ***string***| ***(Optional)*** |
| `namePrefix` | ***string***| ***(Optional)*** |
| `notification` | ***[[]BudgetsBudgetSpecNotification](#budgetsbudgetspecnotification)***| ***(Optional)*** |
| `timePeriodEnd` | ***string***| ***(Optional)*** |
| `timePeriodStart` | ***string***||
| `timeUnit` | ***string***||
## BudgetsBudgetSpecCostTypes

Appears on:[BudgetsBudgetSpec](#budgetsbudgetspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `includeCredit` | ***bool***| ***(Optional)*** |
| `includeDiscount` | ***bool***| ***(Optional)*** |
| `includeOtherSubscription` | ***bool***| ***(Optional)*** |
| `includeRecurring` | ***bool***| ***(Optional)*** |
| `includeRefund` | ***bool***| ***(Optional)*** |
| `includeSubscription` | ***bool***| ***(Optional)*** |
| `includeSupport` | ***bool***| ***(Optional)*** |
| `includeTax` | ***bool***| ***(Optional)*** |
| `includeUpfront` | ***bool***| ***(Optional)*** |
| `useAmortized` | ***bool***| ***(Optional)*** |
| `useBlended` | ***bool***| ***(Optional)*** |
## BudgetsBudgetSpecNotification

Appears on:[BudgetsBudgetSpec](#budgetsbudgetspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `comparisonOperator` | ***string***||
| `notificationType` | ***string***||
| `subscriberEmailAddresses` | ***[]string***| ***(Optional)*** |
| `subscriberSnsTopicArns` | ***[]string***| ***(Optional)*** |
| `threshold` | ***float64***||
| `thresholdType` | ***string***||
## BudgetsBudgetStatus

Appears on:[BudgetsBudget](#budgetsbudget)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[BudgetsBudgetSpec](#budgetsbudgetspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[BudgetsBudgetStatus](#budgetsbudgetstatus)

---
