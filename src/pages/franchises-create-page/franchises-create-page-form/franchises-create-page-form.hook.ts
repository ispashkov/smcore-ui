import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form } from 'antd'

import { getCustomersOptions } from '../../../store/pages/franchises-create-page/franchises-create-page.selectors'
import { FranchisesFormValues } from '../../../components/franchises/franchises-form/franchises-form.types'
import { franchisesCreatePageActions } from '../../../store/pages/franchises-create-page/franchises-create-page.slice'

export function useFranchisesCreatePageForm() {
  const [form] = Form.useForm<FranchisesFormValues>()

  const dispatch = useDispatch()

  const customersOptions = useSelector(getCustomersOptions)

  const onFinishHandler = React.useCallback(
    (values: FranchisesFormValues): void => {
      dispatch(franchisesCreatePageActions.createFranchise(values))
    },
    [dispatch]
  )

  return {
    form,
    customersOptions,
    onFinishHandler,
  }
}
