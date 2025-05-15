import * as React from 'react'

import { DirectionsForm } from '../../../components/directions/directions-form/directions-form.component'
import { useDirectionsCreatePageForm } from './directions-create-page-form.hook'

export const DirectionsCreatePageForm = () => {
  const { form, onFinishHandler } = useDirectionsCreatePageForm()

  return <DirectionsForm form={form} submitText="Создание направления" onFinish={onFinishHandler} />
}
