import * as React from 'react'
import { Space, Typography } from 'antd'

import './schedule-form-slot-header.styles.less'

interface Props {
  className?: string
}

export const ScheduleFormSlotHeader: React.FC<Props> = props => {
  return (
    <Space className="schedule-form-slot-header">
      <Typography.Text className="schedule-form-slot-header__item" strong>
        Начало и конец
      </Typography.Text>
      <Typography.Text className="schedule-form-slot-header__item" strong>
        Зал
      </Typography.Text>
      <Typography.Text className="schedule-form-slot-header__item" strong>
        Тренеры
      </Typography.Text>
    </Space>
  )
}
