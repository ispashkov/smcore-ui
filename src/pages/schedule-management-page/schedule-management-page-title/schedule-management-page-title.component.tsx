import * as React from 'react'
import { Typography } from 'antd'

import { useStudio } from '../../../hooks/use-studios.hook'
import { isDef } from '../../../types/lang.types'
import './schedule-management-page-title.styles.less'

export const ScheduleManagementPageTitle: React.FC = () => {
  const { studioName } = useStudio()

  if (isDef(studioName)) {
    return (
      <Typography.Title className="schedule-management-page-title">{`Расписание для: ${studioName}`}</Typography.Title>
    )
  }

  return null
}
