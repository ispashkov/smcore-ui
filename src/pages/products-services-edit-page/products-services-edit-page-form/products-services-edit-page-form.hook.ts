import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form } from 'antd'

import { ServiceFormValues } from '../../../components/products/products-services-form/product-services-form.types'
import {
  getDirectionsOptions,
  getExercisesOptions,
  getStudiosOptions,
} from '../../../store/pages/products-services-edit-page/products-services-edit-page.selectors'
import { useServicesEditPageParams } from '../products-services-edit-page-hooks/products-services-edit-page.hook'
import { getProductsServicesFormValues } from '../../../store/pages/products-services-edit-page/products-services-edit-page.selectors'
import { isDef } from '../../../types/lang.types'
import { productServicesEditPageActions } from '../../../store/pages/products-services-edit-page/products-services-edit-page.slice'

export function useProductServicesCreatePageForm() {
  const [form] = Form.useForm()
  const dispatch = useDispatch()

  const { id } = useServicesEditPageParams()

  const servicesFormValues = useSelector(getProductsServicesFormValues)
  const directionsOptions = useSelector(getDirectionsOptions)
  const studiosOptions = useSelector(getStudiosOptions)
  const exercisesOptions = useSelector(getExercisesOptions)

  const onFinishHandler = React.useCallback(
    (values: ServiceFormValues): void => {
      if (isDef(id)) {
        dispatch(productServicesEditPageActions.updateService({ id, data: values }))
      }
    },
    [dispatch, id]
  )

  React.useEffect(() => {
    if (isDef(servicesFormValues)) {
      form.setFieldsValue(servicesFormValues)
    }
  }, [form, servicesFormValues])
  return {
    form,
    onFinishHandler,
    directionsOptions,
    studiosOptions,
    exercisesOptions,
  }
}
