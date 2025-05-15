import * as React from 'react'
import { useDispatch } from 'react-redux'

import { useStudiosPageParams } from './studios-page-hooks/studios-page-params.hook'
import { studiosPageActions } from '../../store/pages/studios-page/studios-page.slice'

export function useStudiosPage() {
  const params = useStudiosPageParams()

  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(studiosPageActions.fetchAllStudios(params))
  }, [dispatch, params])

  React.useEffect(() => {
    dispatch(studiosPageActions.fetchAllFilters())
  }, [dispatch])

  React.useEffect(() => {
    return () => {
      dispatch(studiosPageActions.reset())
    }
  }, [dispatch])
}
export {}
