import * as React from 'react'

import { DirectionsForm } from '../../../components/directions/directions-form/directions-form.component'
import { useDirectionsEditPageForm } from './directions-edit-page-form.hook'

export const DirectionsEditPageForm = () => {
  const { form, onFinishHandler } = useDirectionsEditPageForm()

  return <DirectionsForm form={form} submitText="Редактирование направления" onFinish={onFinishHandler} />
}
