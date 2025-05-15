import { TablePaginationConfig } from 'antd'

import { isDef, isDefAndMoreThenZero, NNumber } from '../types/lang.types'
import { PaginationParamsDTO } from '../api/types/api.types'
import { genLinearDoubledList } from './number.utils'

export const DEFAULT_PAGE_SIZE: number = 25

export function genPaginationParamsDTO(page: NNumber, size: NNumber): Partial<PaginationParamsDTO> {
  return {
    page: isDefAndMoreThenZero(page) ? page - 1 : null,
    size: size || null,
  }
}

export function genPaginationSizeOptions(): number[] {
  return genLinearDoubledList(DEFAULT_PAGE_SIZE, 3)
}

export function genPaginationConfig(
  page: NNumber,
  size: NNumber,
  total: NNumber,
  pageSizeOptions: number[] = genPaginationSizeOptions()
): TablePaginationConfig | undefined {
  if (isDef(size) && isDef(total)) {
    return {
      current: page || 1,
      pageSize: size,
      total: total,
      pageSizeOptions: pageSizeOptions,
      showSizeChanger: true,
      position: ['bottomCenter'],
    }
  }

  return
}
