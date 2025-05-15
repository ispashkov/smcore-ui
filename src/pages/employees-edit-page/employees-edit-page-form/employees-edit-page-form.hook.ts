import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form } from 'antd'

import {
  getEmployeeFormValues,
  getEmployeesPositionsOptions,
  getFranchisesOptions,
} from '../../../store/pages/employees-edit-page/employees-edit-page.selectors'
import { employeesEditPageActions } from '../../../store/pages/employees-edit-page/employees-edit-page.slice'
import { isDef } from '../../../types/lang.types'
import { useEmployeesEditPageParams } from '../employees-edit-page-hooks/employees-edit-page-params.hook'
import {
  EmployeesFormValues,
  EmployeesFormValuesDTO,
} from '../../../components/employees/employees-form/employees-form.types'

export function useEmployeesEditPageForm() {
  const [form] = Form.useForm<EmployeesFormValues>()

  const { id } = useEmployeesEditPageParams()

  const dispatch = useDispatch()

  const employeeFormValues = useSelector(getEmployeeFormValues)
  const franchisesOptions = useSelector(getFranchisesOptions)
  const positionsOptions = useSelector(getEmployeesPositionsOptions)

  React.useEffect(() => {
    if (isDef(employeeFormValues)) {
      form.setFieldsValue(employeeFormValues)
    }
  }, [employeeFormValues, form])

  const onFinishHandler = React.useCallback(
    (values: EmployeesFormValuesDTO): void => {
      if (isDef(id)) {
        dispatch(employeesEditPageActions.updateEmployee({ id, data: values }))
      }
    },
    [dispatch, id]
  )

  return {
    form,
    franchisesOptions,
    positionsOptions,
    onFinishHandler,
  }
}
