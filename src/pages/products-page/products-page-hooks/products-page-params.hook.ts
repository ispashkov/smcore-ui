import { useLocation, useRouteMatch } from 'react-router-dom'

import { ProductsPageUrlParams, ProductsPageQueryParams, ProductsPageParams } from '../products-page.types'
import { genProductsPageQueryParams, genProductsPageUrlParams } from '../products-page.utils'

export function useProductsPageParams(): ProductsPageParams {
  const { params } = useRouteMatch<ProductsPageUrlParams>()
  const { search } = useLocation<ProductsPageQueryParams>()

  return { ...genProductsPageUrlParams(params), ...genProductsPageQueryParams(search) }
}
