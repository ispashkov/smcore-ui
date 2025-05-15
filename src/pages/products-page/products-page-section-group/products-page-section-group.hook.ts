import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { productsPageGroupActions } from '../../../store/pages/products-page/products-page-group/products-page-group.slice'
import { useProductsPageParams } from '../products-page-hooks/products-page-params.hook'
import {
  getProductsPageGroupIsLoaded,
  getProductsPageGroupIsLoading,
} from '../../../store/pages/products-page/products-page-group/products-page-group.selectors'

export function useProductsPageSectionGroup() {
  const { page, size } = useProductsPageParams()

  const dispatch = useDispatch()

  const isLoading = useSelector(getProductsPageGroupIsLoading)
  const isLoaded = useSelector(getProductsPageGroupIsLoaded)

  React.useEffect(() => {
    dispatch(
      productsPageGroupActions.fetchAllSubscriptions({
        page,
        size,
      })
    )
  }, [dispatch, page, size])

  React.useEffect(() => {
    return () => {
      dispatch(productsPageGroupActions.reset())
    }
  }, [dispatch])

  return {
    isLoaded,
    isLoading,
  }
}
