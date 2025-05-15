import * as React from 'react'

import { FranchisesForm } from '../../../components/franchises/franchises-form/franchises-form.component'
import { useFranchisesEditPageForm } from './franchises-edit-page-form.hook'

export const FranchisesEditPageForm = () => {
  const { form, customersOptions, onFinishHandler } = useFranchisesEditPageForm()

  return (
    <FranchisesForm
      form={form}
      customersOptions={customersOptions}
      submitText="Редактирование франшизы"
      onFinish={onFinishHandler}
    />
  )
}
