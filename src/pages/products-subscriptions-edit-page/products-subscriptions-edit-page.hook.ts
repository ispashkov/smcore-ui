import * as React from 'react'
import { useDispatch } from 'react-redux'

import { isDef } from '../../types/lang.types'
import { useSubscriptionsEditPageParams } from './products-subscriptions-edit-page-hooks/products-subscriptions-edit-page.hook'
import { productSubscriptionsEditPageActions } from '../../store/pages/products-subscriptions-edit-page/products-subscriptions-edit-page.slice'

export function useProductsEditPage() {
  const { id } = useSubscriptionsEditPageParams()

  const dispatch = useDispatch()

  React.useEffect(() => {
    if (isDef(id)) {
      dispatch(productSubscriptionsEditPageActions.fetchPageData(id))
    }
  }, [dispatch, id])

  React.useEffect(() => {
    return () => {
      dispatch(productSubscriptionsEditPageActions.reset())
    }
  }, [dispatch])
}
