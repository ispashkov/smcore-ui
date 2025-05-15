import * as React from 'react'
import { useDispatch } from 'react-redux'

import { isDef } from '../../types/lang.types'
import { productServicesEditPageActions } from '../../store/pages/products-services-edit-page/products-services-edit-page.slice'
import { useServicesEditPageParams } from './products-services-edit-page-hooks/products-services-edit-page.hook'

export function useServicesEditPage() {
  const { id } = useServicesEditPageParams()

  const dispatch = useDispatch()

  React.useEffect(() => {
    if (isDef(id)) {
      dispatch(productServicesEditPageActions.fetchPageData(id))
    }
  }, [dispatch, id])

  React.useEffect(() => {
    return () => {
      dispatch(productServicesEditPageActions.reset())
    }
  }, [dispatch])
}
