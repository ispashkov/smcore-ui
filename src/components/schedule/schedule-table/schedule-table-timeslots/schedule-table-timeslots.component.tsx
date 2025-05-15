import * as React from 'react'
import { Typography } from 'antd'

import { isDefAndNotEmpty, Nullable } from '../../../../types/lang.types'
import { ScheduleTableDataItemTimeSlot } from '../schedule-table.types'
import { formatScheduleTableTimeslot } from './schedule-table-timeslots.utils'
import './schedule-table-timeslots.styles.less'
import { DEFAULT_EMPTY_SYMBOL } from '../../../../format/text.format'

interface Props {
  timeslots: Nullable<ScheduleTableDataItemTimeSlot[]>
}

const ScheduleTableTimeslotsInternal: React.FC<Props> = props => {
  const { timeslots } = props

  if (isDefAndNotEmpty(timeslots)) {
    return (
      <Typography.Paragraph className="schedule-table-timeslots" ellipsis={{ rows: 2 }}>
        {timeslots.map(formatScheduleTableTimeslot).join(',')}
      </Typography.Paragraph>
    )
  }

  return <Typography.Text>{DEFAULT_EMPTY_SYMBOL}</Typography.Text>
}

export const ScheduleTableTimeslots = React.memo(ScheduleTableTimeslotsInternal)
