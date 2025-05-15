import * as React from 'react'
import { Typography } from 'antd'

import { formatDate } from '../../../../format/date.format'
import { isDef, NString } from '../../../../types/lang.types'
import './schedule-table-period.styles.less'
import { DEFAULT_EMPTY_SYMBOL } from '../../../../format/text.format'

interface Props {
  dateFrom: NString
  dateTo: NString
}

export const ScheduleTablePeriod: React.FC<Props> = props => {
  const { dateFrom, dateTo } = props

  if (isDef(dateFrom) && isDef(dateTo)) {
    const from = `с: ${formatDate(dateFrom)}`
    const to = `по: ${formatDate(dateTo)}`

    return (
      <>
        <Typography.Paragraph className="schedule-table-period" ellipsis>
          {from}
        </Typography.Paragraph>

        <Typography.Paragraph className="schedule-table-period" ellipsis>
          {to}
        </Typography.Paragraph>
      </>
    )
  }

  return <Typography.Text>{DEFAULT_EMPTY_SYMBOL}</Typography.Text>
}
