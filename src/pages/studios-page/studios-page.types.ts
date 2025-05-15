import { NNumber, NString } from '../../types/lang.types'
import { DEFAULT_PAGE_SIZE } from '../../utils/pagination.utils'

export interface StudiosPageParams {
  page?: NNumber
  size?: NNumber
  type?: NString
  country?: NString
  city?: NString
  orgId?: NString
  directions?: NNumber
}

export const STUDIOS_PAGE_SIZE: number = DEFAULT_PAGE_SIZE
