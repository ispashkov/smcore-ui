import React from 'react'

import { StudiosFormComponent } from '../../../components/studios/studios-form/studios-form.component'
import { useStudiosEditPageForm } from './studios-edit-page-form.hook'

export const StudiosEditPageFormComponent = () => {
  const { form, onFinishHandler, directionsOptions, franchisesOptions } = useStudiosEditPageForm()
  return (
    <div>
      <StudiosFormComponent
        isEdit
        form={form}
        onFinishHandler={onFinishHandler}
        directionsOptions={directionsOptions}
        franchisesOptions={franchisesOptions}
      />
    </div>
  )
}
