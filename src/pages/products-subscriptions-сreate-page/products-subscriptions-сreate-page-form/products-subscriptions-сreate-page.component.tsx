import * as React from 'react'

import { ProductSubscriptionForm } from '../../../components/products/products-subscriptions-form/products-subscriptions-form.component'
import { useProductSubscriptionsCreatePageForm } from './products-subscriptions-сreate-page.hook'

export const ProductSubscriptionCreatePageForm = () => {
  const { form, onFinishHandler, directionsOptions, studiosOptions, exercisesOptions } =
    useProductSubscriptionsCreatePageForm()

  return (
    <ProductSubscriptionForm
      directionsOptions={directionsOptions}
      studiosOptions={studiosOptions}
      exercisesOptions={exercisesOptions}
      form={form}
      submitText="Создание нового абонемента"
      onFinish={onFinishHandler}
    />
  )
}
