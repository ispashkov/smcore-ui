import * as React from 'react'

import { ReceiptsListItem } from './receipts-list-item/receipts-list-item.component'
import { ReceiptsListProps } from './receipts-list.types'
import './receipts-list.styles.less'

export const ReceiptsList: React.FC<ReceiptsListProps> = props => {
  const { receipts } = props

  return (
    <div className="receipts-list">
      {receipts.map(receipt => (
        <ReceiptsListItem
          key={receipt.id}
          id={receipt.id}
          number={receipt.number}
          link={receipt.link}
          createdDate={receipt.createdDate}
        />
      ))}
    </div>
  )
}
