import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  getProductsPageServicesIsLoaded,
  getProductsPageServicesIsLoading,
} from '../../../store/pages/products-page/products-page-services/products-page-services.selectors'
import { productsPageServicesActions } from '../../../store/pages/products-page/products-page-services/products-page-services.slice'
import { useProductsPageParams } from '../products-page-hooks/products-page-params.hook'

export function useProductsPageSectionServices() {
  const { page, size } = useProductsPageParams()

  const dispatch = useDispatch()

  const isLoading = useSelector(getProductsPageServicesIsLoading)
  const isLoaded = useSelector(getProductsPageServicesIsLoaded)

  React.useEffect(() => {
    dispatch(
      productsPageServicesActions.fetchAllServices({
        page,
        size,
      })
    )
  }, [dispatch, page, size])

  React.useEffect(() => {
    return () => {
      dispatch(productsPageServicesActions.reset())
    }
  }, [dispatch])

  return {
    isLoaded,
    isLoading,
  }
}
