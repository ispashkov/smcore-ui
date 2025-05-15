import { useRouteMatch } from 'react-router-dom'

import { ProductEditPageParams } from '../products-subscriptions-edit-page.types'

export function useSubscriptionsEditPageParams() {
  const match = useRouteMatch<ProductEditPageParams>()
  const { params } = match
  const { id, type } = params

  return {
    id,
    type,
  }
}
