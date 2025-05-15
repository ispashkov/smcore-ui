import * as React from 'react'

import { EmployeesForm } from '../../../components/employees/employees-form/employees-form.component'
import { useEmployeesCreatePageForm } from './employees-create-page-form.hook'

export const EmployeesCreatePageForm = () => {
  const { form, positionsOptions, franchisesOptions, onFinishHandler } = useEmployeesCreatePageForm()

  return (
    <EmployeesForm
      submitText="Создание пользователя"
      form={form}
      franchisesOptions={franchisesOptions}
      positionsOptions={positionsOptions}
      onFinish={onFinishHandler}
    />
  )
}
