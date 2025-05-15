import * as React from 'react'
import { Typography } from 'antd'

import { StudiosTopBar } from './studios-page-top-bar-component/studios-page-top-bar-component'
import { StudiosPageTableComponent } from './studios-page-table/studios-page-table.component'
import { useStudiosPage } from './studios-page.hook'

export const StudiosPageComponent: React.FC = () => {
  useStudiosPage()

  return (
    <>
      <Typography.Title level={2}>Студии</Typography.Title>
      <StudiosTopBar />
      <StudiosPageTableComponent />
    </>
  )
}
