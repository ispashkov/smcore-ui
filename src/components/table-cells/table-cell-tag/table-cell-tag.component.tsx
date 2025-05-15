import * as React from 'react'
import { Tag, Typography } from 'antd'

import { isDef, NString } from '../../../types/lang.types'
import { DEFAULT_EMPTY_SYMBOL } from '../../../format/text.format'

interface Props {
  text: NString
}

export const TableCellTag: React.FC<Props> = props => {
  const { text } = props

  if (isDef(text)) {
    return <Tag>{text}</Tag>
  }

  return <Typography.Text>{DEFAULT_EMPTY_SYMBOL}</Typography.Text>
}
