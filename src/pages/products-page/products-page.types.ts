import { NNumber } from '../../types/lang.types'
import { DEFAULT_PAGE_SIZE } from '../../utils/pagination.utils'

export interface ProductsPageUrlParams {
  section?: string
}

export interface ProductsPageQueryParams {
  page?: NNumber
  size?: NNumber
}

export interface ProductsPageParams {
  section: string
  page?: NNumber
  size?: NNumber
}

export enum ProductsPageSection {
  GROUP_SUBSCRIPTIONS = 'group-subscriptions',
  INDIVIDUAL_SUBSCRIPTIONS = 'individual-subscriptions',
  SERVICES = 'services',
}

export const PRODUCTS_PAGE_SIZE: number = DEFAULT_PAGE_SIZE
