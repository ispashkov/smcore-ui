import * as React from 'react'
import { useDispatch } from 'react-redux'

import { directionsPageActions } from '../../store/pages/directions-page/directions-page.slice'
import { useDirectionsPageParams } from './directions-page-hooks/directions-page-params.hook'

export function useDirectionsPage() {
  const params = useDirectionsPageParams()

  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(directionsPageActions.fetchAllDirections(params))
  }, [dispatch, params])

  React.useEffect(() => {
    return () => {
      dispatch(directionsPageActions.reset())
    }
  }, [dispatch])
}
