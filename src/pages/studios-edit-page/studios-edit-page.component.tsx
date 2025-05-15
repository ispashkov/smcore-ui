import React from 'react'

import { StudiosEditPageFormComponent } from './studios-edit-page-form/studios-edit-page-form.component'
import { useStudiosEditPage } from './studios-edit-page.hook'

export const StudiosEditPageComponent = () => {
  useStudiosEditPage()
  return (
    <div>
      <StudiosEditPageFormComponent />
    </div>
  )
}
