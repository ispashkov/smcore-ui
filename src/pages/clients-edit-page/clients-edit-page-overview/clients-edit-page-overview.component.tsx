import * as React from 'react'

import { PageLoader } from '../../../components/page/page-loader/page-loader.component'
import { PageEmpty } from '../../../components/page/page-empty/page-empty.component'
import { ClientsForm } from '../../../components/clients/clients-form/clients-form.component'
import { useClientsEditPageOverview } from './clients-edit-page-overview.hook'

export const ClientsEditPageOverview = () => {
  const { form, isLoaded, isLoading, isUpdating, categoriesOptions, onFinishHandler } = useClientsEditPageOverview()

  if (!isLoaded || isLoading) {
    return <PageLoader />
  }

  if (isLoaded && !isLoading) {
    return (
      <ClientsForm
        form={form}
        categoriesOptions={categoriesOptions}
        isLoading={isLoading}
        isSaving={isUpdating}
        onSubmit={onFinishHandler}
      />
    )
  }

  return <PageEmpty description="Карточка не найдена" />
}
