import { NNumber } from '../../types/lang.types'
import { DEFAULT_PAGE_SIZE } from '../../utils/pagination.utils'

export interface TransactionsPageUrlParams {
  studioId: string
}

export interface TransactionsPageQueryParams {
  page?: NNumber
  size?: NNumber
}

export type TransactionsPageParams = TransactionsPageUrlParams & TransactionsPageQueryParams

export const TRANSACTIONS_PAGE_SIZE: number = DEFAULT_PAGE_SIZE
