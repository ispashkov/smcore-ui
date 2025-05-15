import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form } from 'antd'

import { isDef } from '../../../types/lang.types'
import { useStudioEditPageParams } from '../studios-edit-page-hooks/studios-edit-page.hook'
import {
  getStudioFormValues,
  getDirectionsOptions,
  getFranchisesOptions,
} from '../../../store/pages/studios-edit-page/studios-edit-page.selectors'
import { studiosEditPageActions } from '../../../store/pages/studios-edit-page/studios-edit-page.slice'

export function useStudiosEditPageForm() {
  const [form] = Form.useForm()
  const dispatch = useDispatch()

  const { id } = useStudioEditPageParams()

  const studiosFormValues = useSelector(getStudioFormValues)
  const directionsOptions = useSelector(getDirectionsOptions)
  const franchisesOptions = useSelector(getFranchisesOptions)

  const onFinishHandler = React.useCallback((): void => {
    if (isDef(id)) {
      dispatch(studiosEditPageActions.updateStudio({ id, data: form.getFieldsValue(true) }))
    }
  }, [dispatch, id, form])

  React.useEffect(() => {
    if (isDef(studiosFormValues)) {
      form.setFieldsValue(studiosFormValues)
    }
  }, [form, studiosFormValues])

  return {
    form,
    onFinishHandler,
    directionsOptions,
    franchisesOptions,
  }
}
