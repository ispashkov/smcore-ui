import qs from 'qs'

import { buildPath } from '../utils/utls.utils'
import { AppPath } from '../types/path.types'
import { FranchisesPageParams } from '../pages/franchises-page/franchises-page.types'
import { isDef } from '../types/lang.types'
import { DirectionsPageParams } from '../pages/directions-page/directions-page.types'
import { FranchisesEditPageParams } from '../pages/franchises-edit-page/franchises-edit-page.types'
import { DirectionsEditPageParams } from '../pages/directions-edit-page/directions-edit-page.types'
import { EmployeesPageParams } from '../pages/employees-page/employees-page.types'
import { EmployeesEditPageParams } from '../pages/employees-edit-page/employees-edit-page.types'
import { ProductsPageQueryParams, ProductsPageSection } from '../pages/products-page/products-page.types'
import { ServicesEditPageParams } from '../pages/products-services-edit-page/products-services-edit-page.types'
import { ProductEditPageParams } from '../pages/products-subscriptions-edit-page/products-subscriptions-edit-page.types'
import { SchedulePageQueryParams } from '../pages/schedule-page/schedule-page.types'
import { ScheduleManagementPageQueryParams } from '../pages/schedule-management-page/schedule-management-page.types'
import { ScheduleGroupPageQueryParams } from '../pages/schedule-group-page/schedule-group-page.types'
import { StudiosPageParams } from '../pages/studios-page/studios-page.types'
import { TransactionsPageQueryParams } from '../pages/transactions-page/transactions-page.types'
import { ClientsPageParams } from '../pages/clients-page/clients-page.types'
import {
  ClientsEditPageUrlParams,
  ClientsEditPageQueryParams,
} from '../pages/clients-edit-page/clients-edit-page.types'

export function genHomePagePath(): string {
  return buildPath(AppPath.HOME)
}

export function genSchedulePagePath(studioId: string, queryParams?: SchedulePageQueryParams): string {
  const search = isDef(queryParams) ? qs.stringify(queryParams, { skipNulls: true }) : null
  const path = buildPath(AppPath.SCHEDULE, { studioId })

  return isDef(search) ? `${path}?${search}` : path
}

export function genScheduleGroupPagePath(
  studioId: string,
  scheduleId: string,
  queryParams?: ScheduleGroupPageQueryParams
): string {
  const search = isDef(queryParams) ? qs.stringify(queryParams, { skipNulls: true }) : null
  const path = buildPath(AppPath.SCHEDULE_GROUP, { studioId, scheduleId })

  return isDef(search) ? `${path}?${search}` : path
}

export function genScheduleManagementPagePath(
  studioId: string,
  queryParams?: ScheduleManagementPageQueryParams
): string {
  const search = isDef(queryParams) ? qs.stringify(queryParams, { skipNulls: true }) : null
  const path = buildPath(AppPath.SCHEDULE_MANAGEMENT, { studioId })

  return isDef(search) ? `${path}?${search}` : path
}

export function genProductsPagePath(section: ProductsPageSection, params?: ProductsPageQueryParams): string {
  const search = isDef(params) ? qs.stringify(params) : null
  const path = buildPath(AppPath.PRODUCTS, { section })

  return isDef(search) ? `${path}?${search}` : path
}

export function genProductSubscriptionCreatePagePath({ type }: ProductEditPageParams): string {
  return buildPath(AppPath.PRODUCTS_CREATE_SUBSCRIPTION, { type })
}

export function genProductSubscriptionEditPagePath({ id, type }: ProductEditPageParams): string {
  return buildPath(AppPath.PRODUCTS_EDIT_SUBSCRIPTION, { id, type })
}

export function genProductServicesCreatePagePath(): string {
  return buildPath(AppPath.PRODUCTS_CREATE_SERVICE)
}

export function genProductServicesEditPagePath({ id }: ServicesEditPageParams): string {
  return buildPath(AppPath.PRODUCTS_EDIT_SERVICE, { id })
}

export function genDiscountsPagePath(): string {
  return buildPath(AppPath.DISCOUNTS)
}

export function genTransactionsPagePath(studioId: string, queryParams?: TransactionsPageQueryParams): string {
  const search = isDef(queryParams) ? qs.stringify(queryParams) : null
  const path = buildPath(AppPath.TRANSACTIONS, { studioId })

  return isDef(search) ? `${path}?${search}` : path
}

export function genTransactionsCreatePagePath(studioId: string): string {
  return buildPath(AppPath.TRANSACTIONS_CREATE, { studioId })
}

export function genStudiosPagePath(params?: StudiosPageParams): string {
  const search = isDef(params) ? qs.stringify(params) : null
  const path = buildPath(AppPath.STUDIOS)

  return isDef(search) ? `${path}?${search}` : path
}

export function genStudiosCreatePagePath(): string {
  return buildPath(AppPath.STUDIOS_CREATE)
}

export function genStudiosEditPagePath(id: string): string {
  return buildPath(AppPath.STUDIOS_EDIT, { id })
}

export function genSettingsPagePath(): string {
  return buildPath(AppPath.SETTINGS)
}

export function genFranchisesPagePath(params?: FranchisesPageParams): string {
  const search = isDef(params) ? qs.stringify(params) : null
  const path = buildPath(AppPath.FRANCHISES)

  return isDef(search) ? `${path}?${search}` : path
}

export function genFranchisesCreatePagePath(): string {
  return buildPath(AppPath.FRANCHISES_CREATE)
}

export function genFranchisesEditPagePath({ id }: FranchisesEditPageParams): string {
  return buildPath(AppPath.FRANCHISES_EDIT, { id })
}

export function genEmployeesPagePath(params?: EmployeesPageParams): string {
  const search = isDef(params) ? qs.stringify(params) : null
  const path = buildPath(AppPath.EMPLOYEES)

  return isDef(search) ? `${path}?${search}` : path
}

export function genEmployeesCreatePagePath(): string {
  return buildPath(AppPath.EMPLOYEES_CREATE)
}

export function genEmployeesEditPagePath({ id }: EmployeesEditPageParams): string {
  return buildPath(AppPath.EMPLOYEES_EDIT, { id })
}

export function genDirectionsPagePath(params?: DirectionsPageParams): string {
  const search = isDef(params) ? qs.stringify(params) : null
  const path = buildPath(AppPath.DIRECTIONS)

  return isDef(search) ? `${path}?${search}` : path
}

export function genDirectionsCreatePagePath(): string {
  return buildPath(AppPath.DIRECTIONS_CREATE)
}

export function genDirectionsEditPagePath({ id }: DirectionsEditPageParams): string {
  return buildPath(AppPath.DIRECTIONS_EDIT, { id })
}

export function genClientsPagePath(params?: ClientsPageParams): string {
  const search = isDef(params) ? qs.stringify(params) : null
  const path = buildPath(AppPath.CLIENTS)

  return isDef(search) ? `${path}?${search}` : path
}

export function genClientsCreatePagePath(): string {
  return buildPath(AppPath.CLIENTS_CREATE)
}

export function genClientsEditPagePath(
  urlParams: ClientsEditPageUrlParams,
  queryParams?: ClientsEditPageQueryParams
): string {
  const { id, section } = urlParams

  const search = isDef(queryParams) ? qs.stringify(queryParams) : null

  const path = buildPath(AppPath.CLIENTS_EDIT, { id, section })

  return isDef(search) ? `${path}?${search}` : path
}
