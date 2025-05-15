import * as React from 'react'
import { Button } from 'antd'

import { useScheduleManagementPageAdd } from './schedule-management-page-add.hook'
import './schedule-management-page-add.styles.less'

export const ScheduleManagementPageAdd: React.FC = () => {
  const { onAddHandler } = useScheduleManagementPageAdd()

  return (
    <div className="schedule-management-page-add">
      <Button type="primary" onClick={onAddHandler}>
        Добавить в расписание
      </Button>
    </div>
  )
}
