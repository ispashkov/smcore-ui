import * as React from 'react'
import { useDispatch } from 'react-redux'

import { productsServicesCreatePageActions } from '../../store/pages/products-services-create-page/products-services-create-page.slice'

export function useProductsServiceCreatePage() {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(productsServicesCreatePageActions.fetchAllDirections())
    dispatch(productsServicesCreatePageActions.fetchAllStudios())
    dispatch(productsServicesCreatePageActions.fetchAllExercises())
  }, [dispatch])

  React.useEffect(() => {
    return () => {
      dispatch(productsServicesCreatePageActions.reset())
    }
  }, [dispatch])
}
