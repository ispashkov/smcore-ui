import * as React from 'react'

import { ProductServicesForm } from '../../../components/products/products-services-form/product-services-form.component'
import { useProductServicesCreatePageForm } from './products-services-edit-page-form.hook'

export const ProductServicesEditPageForm = () => {
  const { form, onFinishHandler, directionsOptions, studiosOptions, exercisesOptions } =
    useProductServicesCreatePageForm()
  return (
    <ProductServicesForm
      directionsOptions={directionsOptions}
      studiosOptions={studiosOptions}
      exercisesOptions={exercisesOptions}
      form={form}
      submitText="Редактирование услуги"
      onFinish={onFinishHandler}
    />
  )
}
