import * as React from 'react'
import { useDispatch } from 'react-redux'
import { Form } from 'antd'

import { directionsCreatePageActions } from '../../../store/pages/directions-create-page/directions-create-page.slice'
import { DirectionsFormValues } from '../../../components/directions/directions-form/directions-form.types'

export function useDirectionsCreatePageForm() {
  const [form] = Form.useForm<DirectionsFormValues>()

  const dispatch = useDispatch()

  const onFinishHandler = React.useCallback(
    (values: DirectionsFormValues): void => {
      dispatch(directionsCreatePageActions.createDirection(values))
    },
    [dispatch]
  )

  return {
    form,
    onFinishHandler,
  }
}
