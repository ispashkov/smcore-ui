import qs from 'qs'

import { validateStrEnumValue } from '../../utils/enum.utils'
import { isDef, isString, NString } from '../../types/lang.types'
import {
  CLIENTS_EDIT_PAGE_SIZE,
  ClientsEditPageParams,
  ClientsEditPageQueryParams,
  ClientsEditPageSection,
  ClientsEditPageUrlParams,
} from './clients-edit-page.types'

export function genClientsEditPageParams(params: ClientsEditPageUrlParams, search: NString): ClientsEditPageParams {
  return { ...genClientsEditPageUrlParams(params), ...genClientsEditPageQueryParams(search) }
}

export function genClientsEditPageUrlParams(params: ClientsEditPageUrlParams) {
  const { id } = params

  const section =
    validateStrEnumValue<ClientsEditPageSection>(ClientsEditPageSection, params.section) ||
    ClientsEditPageSection.OVERVIEW

  return { id, section }
}

export function genClientsEditPageQueryParams(search: NString): ClientsEditPageQueryParams {
  const queryParams = isDef(search) ? qs.parse(search, { ignoreQueryPrefix: true }) : null

  const page = isString(queryParams?.page) ? Number(queryParams?.page) : null
  const size = isString(queryParams?.size) ? Number(queryParams?.size) : CLIENTS_EDIT_PAGE_SIZE

  return {
    size,
    page,
  }
}
