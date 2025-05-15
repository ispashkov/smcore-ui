import * as React from 'react'
import { useDispatch } from 'react-redux'

import { isDef } from '../../types/lang.types'
import { directionsEditPageActions } from '../../store/pages/directions-edit-page/directions-edit-page.slice'
import { useDirectionsEditPageParams } from './directions-edit-page-hooks/directions-edit-page-hooks.hook'

export function useDirectionsEditPage() {
  const { id } = useDirectionsEditPageParams()

  const dispatch = useDispatch()

  React.useEffect(() => {
    if (isDef(id)) {
      dispatch(directionsEditPageActions.fetchDirectionById(id))
    }
  }, [dispatch, id])

  React.useEffect(() => {
    return () => {
      dispatch(directionsEditPageActions.reset())
    }
  }, [dispatch])
}
