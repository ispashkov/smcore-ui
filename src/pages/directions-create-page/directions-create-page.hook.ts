import * as React from 'react'
import { useDispatch } from 'react-redux'

import { directionsCreatePageActions } from '../../store/pages/directions-create-page/directions-create-page.slice'

export function useDirectionsCreatePage() {
  const dispatch = useDispatch()

  React.useEffect(() => {
    return () => {
      dispatch(directionsCreatePageActions.reset())
    }
  }, [dispatch])
}
