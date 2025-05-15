import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import * as React from 'react'

import { genPaginationConfig } from '../../../../utils/pagination.utils'
import { genProductServicesEditPagePath, genProductsPagePath } from '../../../../format/path.format'
import {
  getProductsPageServices,
  getProductsPageServicesIsLoading,
  getProductsPageServicesTotalElements,
} from '../../../../store/pages/products-page/products-page-services/products-page-services.selectors'
import { productsPageServicesActions } from '../../../../store/pages/products-page/products-page-services/products-page-services.slice'
import { useProductsPageParams } from '../../products-page-hooks/products-page-params.hook'
import { ProductsPageSection } from '../../products-page.types'

export function useProductsPageSectionServicesTable() {
  const { push } = useHistory()

  const { page, size } = useProductsPageParams()

  const dispatch = useDispatch()

  const services = useSelector(getProductsPageServices)
  const totalElements = useSelector(getProductsPageServicesTotalElements)
  const isLoading = useSelector(getProductsPageServicesIsLoading)

  const pagination = React.useMemo(() => genPaginationConfig(page, size, totalElements), [page, size, totalElements])

  const onEditHandler = React.useCallback(
    (id: string): void => {
      push(genProductServicesEditPagePath({ id }))
    },
    [push]
  )

  const onRemoveHandler = React.useCallback(
    (id: string): void => {
      dispatch(productsPageServicesActions.removeService(id))
    },
    [dispatch]
  )

  const onChangePageHandler = React.useCallback(
    (page: number, pageSize: number): void => {
      push(genProductsPagePath(ProductsPageSection.SERVICES, { page: page, size: pageSize }))
    },
    [push]
  )

  const onChangePageSizeHandler = React.useCallback(
    (pageSize: number): void => {
      push(genProductsPagePath(ProductsPageSection.SERVICES, { page, size: pageSize }))
    },
    [page, push]
  )

  return {
    services,
    pagination,
    isLoading,
    onEditHandler,
    onRemoveHandler,
    onChangePageHandler,
    onChangePageSizeHandler,
  }
}
