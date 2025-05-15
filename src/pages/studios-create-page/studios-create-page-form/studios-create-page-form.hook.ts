import { Form } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import * as React from 'react'

import { StudiosFormTypes } from '../../../components/studios/studios-form/studios-form-types'
import {
  getDirectionsOptions,
  getFranchisesOptions,
} from '../../../store/pages/studios-create-page/studios-create-page.selectors'
import { studiosCreatePageActions } from '../../../store/pages/studios-create-page/studios-create-page.slice'

export function useStudiosCreatePageForm() {
  const [form] = Form.useForm<StudiosFormTypes>()
  const dispatch = useDispatch()

  const franchisesOptions = useSelector(getFranchisesOptions)
  const directionsOptions = useSelector(getDirectionsOptions)

  const onFinishHandler = React.useCallback((): void => {
    const values = form.getFieldsValue(true)

    dispatch(studiosCreatePageActions.createStudio(values))
  }, [dispatch, form])

  return {
    form,
    franchisesOptions,
    directionsOptions,
    onFinishHandler,
  }
}
