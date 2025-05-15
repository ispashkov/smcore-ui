import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  getProductsPageIndividualIsLoaded,
  getProductsPageIndividualIsLoading,
} from '../../../store/pages/products-page/products-page-individual/products-page-individual.selectors'
import { productsPageIndividualActions } from '../../../store/pages/products-page/products-page-individual/products-page-individual.slice'
import { useProductsPageParams } from '../products-page-hooks/products-page-params.hook'

export function useProductsPageSectionIndividual() {
  const { page, size } = useProductsPageParams()

  const dispatch = useDispatch()

  const isLoading = useSelector(getProductsPageIndividualIsLoading)
  const isLoaded = useSelector(getProductsPageIndividualIsLoaded)

  React.useEffect(() => {
    dispatch(
      productsPageIndividualActions.fetchAllSubscriptions({
        page,
        size,
      })
    )
  }, [dispatch, page, size])

  React.useEffect(() => {
    return () => {
      dispatch(productsPageIndividualActions.reset())
    }
  }, [dispatch])

  return {
    isLoaded,
    isLoading,
  }
}
