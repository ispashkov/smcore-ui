import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form } from 'antd'

import { ServiceFormValues } from '../../../components/products/products-services-form/product-services-form.types'
import { productsServicesCreatePageActions } from '../../../store/pages/products-services-create-page/products-services-create-page.slice'
import {
  getDirectionsOptions,
  getExercisesOptions,
  getStudiosOptions,
} from '../../../store/pages/products-services-create-page/products-services-create-page.selectors'

export function useProductServicesCreatePageForm() {
  const [form] = Form.useForm()

  const dispatch = useDispatch()
  const directionsOptions = useSelector(getDirectionsOptions)
  const studiosOptions = useSelector(getStudiosOptions)
  const exercisesOptions = useSelector(getExercisesOptions)
  const onFinishHandler = React.useCallback(
    (values: ServiceFormValues): void => {
      dispatch(productsServicesCreatePageActions.createService(values))
    },
    [dispatch]
  )

  return {
    form,
    onFinishHandler,
    directionsOptions,
    studiosOptions,
    exercisesOptions,
  }
}
