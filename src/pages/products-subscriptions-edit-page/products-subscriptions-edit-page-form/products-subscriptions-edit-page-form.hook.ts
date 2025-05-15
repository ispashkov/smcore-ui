import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form } from 'antd'

import {
  getDirectionsOptions,
  getExercisesOptions,
  getProductsServicesFormValues,
  getStudiosOptions,
} from '../../../store/pages/products-subscriptions-edit-page/products-subscriptions-edit-page.selectors'
import { isDef } from '../../../types/lang.types'
import { useSubscriptionsEditPageParams } from '../products-subscriptions-edit-page-hooks/products-subscriptions-edit-page.hook'
import { productSubscriptionsEditPageActions } from '../../../store/pages/products-subscriptions-edit-page/products-subscriptions-edit-page.slice'
import { ProductsSubscriptionsFormValue } from '../../../components/products/products-subscriptions-form/products-subscriptions-form.types'

export function useProductServicesEditPageForm() {
  const { type, id } = useSubscriptionsEditPageParams()

  const [form] = Form.useForm()
  const dispatch = useDispatch()

  const subscriptionsFormValues = useSelector(getProductsServicesFormValues)
  const directionsOptions = useSelector(getDirectionsOptions)
  const studiosOptions = useSelector(getStudiosOptions)
  const exercisesOptions = useSelector(getExercisesOptions)

  const onFinishHandler = React.useCallback(
    (values: ProductsSubscriptionsFormValue): void => {
      if (isDef(id)) {
        dispatch(productSubscriptionsEditPageActions.updateSubscription({ id, data: { ...values, type } }))
      }
    },
    [dispatch, id, type]
  )

  React.useEffect(() => {
    if (isDef(subscriptionsFormValues)) {
      form.setFieldsValue(subscriptionsFormValues)
    }
  }, [form, subscriptionsFormValues])

  return {
    form,
    onFinishHandler,
    directionsOptions,
    studiosOptions,
    exercisesOptions,
  }
}
