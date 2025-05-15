import { useRouteMatch } from 'react-router-dom'

import { ProductEditPageParams } from '../../products-subscriptions-edit-page/products-subscriptions-edit-page.types'

export function useSubscriptionsCreatePageParams() {
  const match = useRouteMatch<ProductEditPageParams>()
  const { params } = match
  const { type } = params

  return {
    type,
  }
}
