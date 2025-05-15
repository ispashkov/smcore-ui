import * as React from 'react'
import { Typography } from 'antd'

import { formatDate, formatToUTCHours } from '../../../format/date.format'
import { isDef, NString } from '../../../types/lang.types'
import './table-cell-date-time.styles.less'
import { DEFAULT_EMPTY_SYMBOL } from '../../../format/text.format'

interface Props {
  date: NString
}

export const TableCellDateTime: React.FC<Props> = props => {
  const { date } = props

  if (isDef(date)) {
    return (
      <div className="table-cell-date-time">
        <Typography.Text>{formatDate(date, 'DD.MM.YY')}</Typography.Text>
        <Typography.Text type="secondary">{formatToUTCHours(date, 'HH:mm:ss')}</Typography.Text>
      </div>
    )
  }

  return <Typography.Text>{DEFAULT_EMPTY_SYMBOL}</Typography.Text>
}
