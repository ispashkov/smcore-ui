import * as React from 'react'
import { Tag, Typography } from 'antd'

import { isDef } from '../../../types/lang.types'
import { DEFAULT_EMPTY_SYMBOL } from '../../../format/text.format'

interface Props {
  room: string
  color: string
}

export const TableCellStudioRoom: React.FC<Props> = props => {
  const { room, color } = props

  if (isDef(room)) {
    return <Tag color={color}>{room}</Tag>
  }

  return <Typography.Text>{DEFAULT_EMPTY_SYMBOL}</Typography.Text>
}
