import qs from 'qs'

import { isDef, isString, NString } from '../../types/lang.types'
import {
  PRODUCTS_PAGE_SIZE,
  ProductsPageQueryParams,
  ProductsPageSection,
  ProductsPageUrlParams,
} from './products-page.types'
import { validateStrEnumValue } from '../../utils/enum.utils'

export function genProductsPageUrlParams(params: ProductsPageUrlParams) {
  const section =
    validateStrEnumValue<ProductsPageSection>(ProductsPageSection, params.section) ||
    ProductsPageSection.GROUP_SUBSCRIPTIONS

  return { section }
}

export function genProductsPageQueryParams(search: NString): ProductsPageQueryParams {
  const queryParams = isDef(search) ? qs.parse(search, { ignoreQueryPrefix: true }) : null

  const page = isString(queryParams?.page) ? Number(queryParams?.page) : null
  const size = isString(queryParams?.size) ? Number(queryParams?.size) : PRODUCTS_PAGE_SIZE

  return {
    size,
    page,
  }
}
