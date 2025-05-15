import * as React from 'react'

import { useProductServicesEditPageForm } from './products-subscriptions-edit-page-form.hook'
import { ProductSubscriptionForm } from '../../../components/products/products-subscriptions-form/products-subscriptions-form.component'

export const ProductSubscriptionsEditPageForm = () => {
  const { form, onFinishHandler, directionsOptions, studiosOptions, exercisesOptions } =
    useProductServicesEditPageForm()
  return (
    <ProductSubscriptionForm
      directionsOptions={directionsOptions}
      studiosOptions={studiosOptions}
      exercisesOptions={exercisesOptions}
      form={form}
      submitText="Сохранить"
      onFinish={onFinishHandler}
    />
  )
}
