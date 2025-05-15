import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form } from 'antd'

import {
  getDirectionsOptions,
  getExercisesOptions,
  getStudiosOptions,
} from '../../../store/pages/products-subscriptions-сreate-page/products-subscriptions-сreate-page.selectors'
import { productsSubscriptionsCreatePageActions } from '../../../store/pages/products-subscriptions-сreate-page/products-subscriptions-сreate-page.slice'
import { ProductsSubscriptionsFormValue } from '../../../components/products/products-subscriptions-form/products-subscriptions-form.types'
import { useSubscriptionsCreatePageParams } from '../products-subscriptions-create-page-hooks/products-services-create-page.hook'

export function useProductSubscriptionsCreatePageForm() {
  const { type } = useSubscriptionsCreatePageParams()

  const [form] = Form.useForm()

  const dispatch = useDispatch()
  const directionsOptions = useSelector(getDirectionsOptions)
  const studiosOptions = useSelector(getStudiosOptions)
  const exercisesOptions = useSelector(getExercisesOptions)

  const onFinishHandler = React.useCallback(
    (values: ProductsSubscriptionsFormValue): void => {
      dispatch(productsSubscriptionsCreatePageActions.createSubscription({ ...values, type }))
    },
    [dispatch, type]
  )

  return {
    form,
    onFinishHandler,
    directionsOptions,
    studiosOptions,
    exercisesOptions,
  }
}
