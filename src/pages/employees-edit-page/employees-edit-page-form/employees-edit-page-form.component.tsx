import * as React from 'react'

import { EmployeesForm } from '../../../components/employees/employees-form/employees-form.component'
import { useEmployeesEditPageForm } from './employees-edit-page-form.hook'

export const EmployeesEditPageForm = () => {
  const { form, positionsOptions, franchisesOptions, onFinishHandler } = useEmployeesEditPageForm()

  return (
    <EmployeesForm
      submitText="Редактирование пользователя"
      form={form}
      franchisesOptions={franchisesOptions}
      positionsOptions={positionsOptions}
      onFinish={onFinishHandler}
    />
  )
}
