import { NNumber } from '../../types/lang.types'
import { DEFAULT_PAGE_SIZE } from '../../utils/pagination.utils'

export interface ClientsEditPageUrlParams {
  id: string
  section?: string
}

export interface ClientsEditPageQueryParams {
  page?: NNumber
  size?: NNumber
}

export interface ClientsEditPageParams {
  id: string
  section: ClientsEditPageSection
  page?: NNumber
  size?: NNumber
}

export enum ClientsEditPageSection {
  OVERVIEW = 'overview',
  BOOKINGS_ACTIVE = 'bookings-active',
  BOOKINGS_HISTORY = 'bookings-history',
  PURCHASES = 'purchases',
  SUBSCRIPTIONS = 'subscriptions',
}

export const CLIENTS_EDIT_PAGE_SIZE: number = DEFAULT_PAGE_SIZE
