import { NNumber } from '../../types/lang.types'
import { DEFAULT_PAGE_SIZE } from '../../utils/pagination.utils'

export interface DirectionsPageParams {
  page?: NNumber
  size?: NNumber
}

export const DIRECTIONS_PAGE_SIZE: number = DEFAULT_PAGE_SIZE
