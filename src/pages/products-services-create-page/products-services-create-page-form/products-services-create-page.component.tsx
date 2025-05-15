import * as React from 'react'

import { ProductServicesForm } from '../../../components/products/products-services-form/product-services-form.component'
import { useProductServicesCreatePageForm } from './products-services-create-page.hook'

export const ProductServicesCreatePageForm = () => {
  const { form, onFinishHandler, directionsOptions, studiosOptions, exercisesOptions } =
    useProductServicesCreatePageForm()

  return (
    <ProductServicesForm
      directionsOptions={directionsOptions}
      studiosOptions={studiosOptions}
      exercisesOptions={exercisesOptions}
      form={form}
      submitText="Создание новой услуги"
      onFinish={onFinishHandler}
    />
  )
}
