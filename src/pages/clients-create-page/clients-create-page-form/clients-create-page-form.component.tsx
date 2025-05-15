import * as React from 'react'

import { ClientsForm } from '../../../components/clients/clients-form/clients-form.component'
import { useClientsCreatePageForm } from './clients-create-page-form.hook'

export const ClientsCreatePageForm = () => {
  const { form, categoriesOptions, isLoading, isCreating, onFinishHandler } = useClientsCreatePageForm()

  return (
    <ClientsForm
      form={form}
      categoriesOptions={categoriesOptions}
      onSubmit={onFinishHandler}
      isLoading={isLoading}
      isSaving={isCreating}
    />
  )
}
