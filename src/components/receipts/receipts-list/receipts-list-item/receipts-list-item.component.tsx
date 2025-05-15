import * as React from 'react'
import { Button } from 'antd'
import { PlusCircleOutlined } from '@ant-design/icons'

import { formatReceiptNumber } from '../../../../format/text.format'
import { TableCellText } from '../../../table-cells/table-cell-text/table-cell-text.component'
import { TableCellDateTime } from '../../../table-cells/table-cell-date-time/table-cell-date-time.component'
import { ReceiptsListItemData } from './receipts-list-item.types'
import './receipts-list-item.styles.less'

export const ReceiptsListItem: React.FC<ReceiptsListItemData> = props => {
  const { number, createdDate, link } = props

  return (
    <div className="receipts-list-item">
      <TableCellText text={formatReceiptNumber(number)} />

      <TableCellDateTime date={createdDate} />

      <a href={link} target="_blank" rel="noreferrer">
        <Button type="primary" ghost={true} icon={<PlusCircleOutlined />}>
          Посмотреть
        </Button>
      </a>
    </div>
  )
}
