import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form } from 'antd'

import {
  getEmployeesPositionsOptions,
  getFranchisesOptions,
} from '../../../store/pages/employees-create-page/employees-create-page.selectors'
import {
  EmployeesFormValues,
  EmployeesFormValuesDTO,
} from '../../../components/employees/employees-form/employees-form.types'
import { employeesCreatePageActions } from '../../../store/pages/employees-create-page/employees-create-page.slice'

export function useEmployeesCreatePageForm() {
  const [form] = Form.useForm<EmployeesFormValues>()

  const dispatch = useDispatch()

  const franchisesOptions = useSelector(getFranchisesOptions)
  const positionsOptions = useSelector(getEmployeesPositionsOptions)

  const onFinishHandler = React.useCallback(
    (values: EmployeesFormValuesDTO): void => {
      dispatch(employeesCreatePageActions.createEmployee(values))
    },
    [dispatch]
  )

  return {
    form,
    franchisesOptions,
    positionsOptions,
    onFinishHandler,
  }
}
