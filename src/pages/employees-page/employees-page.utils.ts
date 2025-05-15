import qs from 'qs'

import { NString, isString, isDef } from '../../types/lang.types'
import { EMPLOYEES_PAGE_SIZE, EmployeesPageParams } from './employees-page.types'

export function genEmployeesPageParams(search: NString): EmployeesPageParams {
  const queryParams = isDef(search) ? qs.parse(search, { ignoreQueryPrefix: true }) : null

  const page = isString(queryParams?.page) ? Number(queryParams?.page) : null
  const size = isString(queryParams?.size) ? Number(queryParams?.size) : EMPLOYEES_PAGE_SIZE

  return {
    size,
    page,
  }
}
