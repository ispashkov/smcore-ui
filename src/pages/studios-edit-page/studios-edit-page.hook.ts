import * as React from 'react'
import { useDispatch } from 'react-redux'

import { isDef } from '../../types/lang.types'
import { studiosEditPageActions } from '../../store/pages/studios-edit-page/studios-edit-page.slice'
import { useStudioEditPageParams } from './studios-edit-page-hooks/studios-edit-page.hook'

export function useStudiosEditPage() {
  const { id } = useStudioEditPageParams()

  const dispatch = useDispatch()

  React.useEffect(() => {
    if (isDef(id)) {
      dispatch(studiosEditPageActions.fetchPageData(id))
    }
  }, [dispatch, id])

  React.useEffect(() => {
    return () => {
      dispatch(studiosEditPageActions.reset())
    }
  }, [dispatch])
}
