import * as React from 'react'
import { useDispatch } from 'react-redux'

import { productsSubscriptionsCreatePageActions } from '../../store/pages/products-subscriptions-сreate-page/products-subscriptions-сreate-page.slice'

export function useProductsSubscriptionsCreatePage() {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(productsSubscriptionsCreatePageActions.fetchAllDirections())
    dispatch(productsSubscriptionsCreatePageActions.fetchAllStudios())
    dispatch(productsSubscriptionsCreatePageActions.fetchAllExercises())
  }, [dispatch])

  React.useEffect(() => {
    return () => {
      dispatch(productsSubscriptionsCreatePageActions.reset())
    }
  }, [dispatch])
}
