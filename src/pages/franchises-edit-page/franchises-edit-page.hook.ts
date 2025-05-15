import * as React from 'react'
import { useDispatch } from 'react-redux'

import { franchisesEditPageActions } from '../../store/pages/franchises-edit-page/franchises-edit-page.slice'
import { isDef } from '../../types/lang.types'
import { useFranchisesEditPageParams } from './franchises-edit-page-hooks/franchises-edit-page-params.hook'

export function useFranchisesEditPage() {
  const { id } = useFranchisesEditPageParams()

  const dispatch = useDispatch()

  React.useEffect(() => {
    if (isDef(id)) {
      dispatch(franchisesEditPageActions.fetchPageData(id))
    }
  }, [dispatch, id])

  React.useEffect(() => {
    return () => {
      dispatch(franchisesEditPageActions.reset())
    }
  }, [dispatch])
}
