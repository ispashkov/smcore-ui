import * as React from 'react'

import { FranchisesForm } from '../../../components/franchises/franchises-form/franchises-form.component'
import { useFranchisesCreatePageForm } from './franchises-create-page-form.hook'

export const FranchisesCreatePageForm = () => {
  const { form, customersOptions, onFinishHandler } = useFranchisesCreatePageForm()

  return (
    <FranchisesForm
      form={form}
      customersOptions={customersOptions}
      submitText="Создание франшизы"
      onFinish={onFinishHandler}
    />
  )
}
