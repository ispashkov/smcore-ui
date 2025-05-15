import * as React from 'react'
import { Typography } from 'antd'

import { DEFAULT_EMPTY_SYMBOL, formatDays } from '../../../format/text.format'
import { isDefAndNotEmpty, Nullable } from '../../../types/lang.types'
import { Days } from '../../../types/days.types'
import './table-cell-days.styles.less'

interface Props {
  days: Nullable<Days[]>
  rows?: number
}

export const TableCellDays: React.FC<Props> = props => {
  const { days, rows } = props

  if (isDefAndNotEmpty(days)) {
    return (
      <Typography.Paragraph className="table-cell-days" ellipsis={{ rows }}>
        {days.map(formatDays).join(', ')}
      </Typography.Paragraph>
    )
  }

  return <Typography.Text>{DEFAULT_EMPTY_SYMBOL}</Typography.Text>
}
