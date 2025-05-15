import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form } from 'antd'

import { FranchisesFormValues } from '../../../components/franchises/franchises-form/franchises-form.types'
import { getCustomersOptions } from '../../../store/pages/franchises-edit-page/franchises-edit-page.selectors'
import { getFranchiseFormValues } from '../../../store/pages/franchises-edit-page/franchises-edit-page.selectors'
import { franchisesEditPageActions } from '../../../store/pages/franchises-edit-page/franchises-edit-page.slice'
import { isDef } from '../../../types/lang.types'
import { useFranchisesEditPageParams } from '../franchises-edit-page-hooks/franchises-edit-page-params.hook'

export function useFranchisesEditPageForm() {
  const [form] = Form.useForm<FranchisesFormValues>()

  const { id } = useFranchisesEditPageParams()

  const dispatch = useDispatch()

  const franchiseFormValues = useSelector(getFranchiseFormValues)
  const customersOptions = useSelector(getCustomersOptions)

  React.useEffect(() => {
    if (isDef(franchiseFormValues)) {
      form.setFieldsValue(franchiseFormValues)
    }
  }, [form, franchiseFormValues])

  const onFinishHandler = React.useCallback(
    (values: FranchisesFormValues): void => {
      if (isDef(id)) {
        dispatch(franchisesEditPageActions.updateFranchise({ id, data: values }))
      }
    },
    [dispatch, id]
  )

  return {
    form,
    customersOptions,
    onFinishHandler,
  }
}
