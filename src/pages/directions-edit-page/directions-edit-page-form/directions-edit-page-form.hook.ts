import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form } from 'antd'

import { isDef } from '../../../types/lang.types'
import { getDirectionsFormValues } from '../../../store/pages/directions-edit-page/directions-edit-page.selectors'
import { directionsEditPageActions } from '../../../store/pages/directions-edit-page/directions-edit-page.slice'
import { DirectionsFormValues } from '../../../components/directions/directions-form/directions-form.types'
import { useDirectionsEditPageParams } from '../directions-edit-page-hooks/directions-edit-page-hooks.hook'

export function useDirectionsEditPageForm() {
  const [form] = Form.useForm<DirectionsFormValues>()

  const { id } = useDirectionsEditPageParams()

  const dispatch = useDispatch()

  const directionFormValues = useSelector(getDirectionsFormValues)

  React.useEffect(() => {
    if (isDef(directionFormValues)) {
      form.setFieldsValue(directionFormValues)
    }
  }, [form, directionFormValues])

  const onFinishHandler = React.useCallback(
    (values: DirectionsFormValues): void => {
      if (isDef(id)) {
        dispatch(directionsEditPageActions.updateDirection({ id, data: values }))
      }
    },
    [dispatch, id]
  )

  return {
    form,
    onFinishHandler,
  }
}
