import React from 'react'

import { StudiosCreatePageFormComponent } from './studios-create-page-form/studios-create-page-form.component'
import { useStudiosCreatePage } from './studios-create-page.hook'

export const StudiosCreatePageComponent = () => {
  useStudiosCreatePage()
  return (
    <div>
      <StudiosCreatePageFormComponent />
    </div>
  )
}
