import { NNumber } from '../../types/lang.types'
import { DEFAULT_PAGE_SIZE } from '../../utils/pagination.utils'

export interface FranchisesPageParams {
  page?: NNumber
  size?: NNumber
}

export const FRANCHISES_PAGE_SIZE: number = DEFAULT_PAGE_SIZE
