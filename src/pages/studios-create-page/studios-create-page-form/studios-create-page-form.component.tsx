import React from 'react'

import { StudiosFormComponent } from '../../../components/studios/studios-form/studios-form.component'
import { useStudiosCreatePageForm } from './studios-create-page-form.hook'

export const StudiosCreatePageFormComponent = () => {
  const { form, franchisesOptions, directionsOptions, onFinishHandler } = useStudiosCreatePageForm()
  return (
    <div>
      <StudiosFormComponent
        form={form}
        franchisesOptions={franchisesOptions}
        directionsOptions={directionsOptions}
        onFinishHandler={onFinishHandler}
      />
    </div>
  )
}
