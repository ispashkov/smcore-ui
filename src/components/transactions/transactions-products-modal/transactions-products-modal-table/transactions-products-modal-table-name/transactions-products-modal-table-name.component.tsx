import * as React from 'react'
import { Typography } from 'antd'

import { isDef, NString } from '../../../../../types/lang.types'
import { DEFAULT_EMPTY_SYMBOL } from '../../../../../format/text.format'

interface Props {
  text: NString
}

export const TransactionsProductsModalTableName: React.FC<Props> = props => {
  const { text } = props
  if (isDef(text)) {
    return (
      <Typography.Text style={{ width: 500 }} ellipsis={{ tooltip: text }}>
        {text}
      </Typography.Text>
    )
  }

  return <Typography.Text>{DEFAULT_EMPTY_SYMBOL}</Typography.Text>
}
