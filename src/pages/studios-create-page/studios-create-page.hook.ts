import * as React from 'react'
import { useDispatch } from 'react-redux'

import { studiosCreatePageActions } from '../../store/pages/studios-create-page/studios-create-page.slice'

export function useStudiosCreatePage() {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(studiosCreatePageActions.fetchAllFranchises())
    dispatch(studiosCreatePageActions.fetchAllDirections())
  }, [dispatch])

  React.useEffect(() => {
    return () => {
      dispatch(studiosCreatePageActions.reset())
    }
  }, [dispatch])
}
