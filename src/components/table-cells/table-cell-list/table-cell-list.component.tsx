import * as React from 'react'
import { Typography } from 'antd'

import { EntityItem, isDefAndNotEmpty, Nullable } from '../../../types/lang.types'
import './table-cell-list.styles.less'
import { DEFAULT_EMPTY_SYMBOL } from '../../../format/text.format'

interface Props {
  items: Nullable<EntityItem<string>[]>
  rows?: number
}

export const TableCellList: React.FC<Props> = props => {
  const { items, rows } = props

  if (isDefAndNotEmpty(items)) {
    return (
      <Typography.Paragraph className="table-cell-list" ellipsis={{ rows }}>
        {items.map(it => it.title).join(', ')}
      </Typography.Paragraph>
    )
  }

  return <Typography.Text>{DEFAULT_EMPTY_SYMBOL}</Typography.Text>
}
