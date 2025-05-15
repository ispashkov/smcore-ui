import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import * as React from 'react'

import { genPaginationConfig } from '../../../../utils/pagination.utils'
import { genProductsPagePath, genProductSubscriptionEditPagePath } from '../../../../format/path.format'
import {
  getProductsPageIndividualIsLoading,
  getProductsPageIndividualSubscriptions,
  getProductsPageIndividualTotalElements,
} from '../../../../store/pages/products-page/products-page-individual/products-page-individual.selectors'
import { productsPageIndividualActions } from '../../../../store/pages/products-page/products-page-individual/products-page-individual.slice'
import { useProductsPageParams } from '../../products-page-hooks/products-page-params.hook'
import { ProductsPageSection } from '../../products-page.types'
import { ProductsSubscriptionsApi } from '../../../../api/types/products-subscriptions-api.types'

export function useProductsPageSectionIndividualTable() {
  const { push } = useHistory()

  const { page, size } = useProductsPageParams()

  const dispatch = useDispatch()

  const subscriptions = useSelector(getProductsPageIndividualSubscriptions)
  const totalElements = useSelector(getProductsPageIndividualTotalElements)
  const isLoading = useSelector(getProductsPageIndividualIsLoading)

  const pagination = React.useMemo(() => genPaginationConfig(page, size, totalElements), [page, size, totalElements])

  const onEditHandler = React.useCallback(
    (id: string, type: ProductsSubscriptionsApi.ProductSubscriptionType): void => {
      push(genProductSubscriptionEditPagePath({ id, type }))
    },
    [push]
  )

  const onRemoveHandler = React.useCallback(
    (id: string): void => {
      dispatch(productsPageIndividualActions.removeSubscription(id))
    },
    [dispatch]
  )

  const onChangePageHandler = React.useCallback(
    (page: number, pageSize: number): void => {
      push(genProductsPagePath(ProductsPageSection.INDIVIDUAL_SUBSCRIPTIONS, { page: page, size: pageSize }))
    },
    [push]
  )

  const onChangePageSizeHandler = React.useCallback(
    (pageSize: number): void => {
      push(genProductsPagePath(ProductsPageSection.INDIVIDUAL_SUBSCRIPTIONS, { page, size: pageSize }))
    },
    [page, push]
  )

  return {
    subscriptions,
    pagination,
    isLoading,
    onEditHandler,
    onRemoveHandler,
    onChangePageHandler,
    onChangePageSizeHandler,
  }
}
