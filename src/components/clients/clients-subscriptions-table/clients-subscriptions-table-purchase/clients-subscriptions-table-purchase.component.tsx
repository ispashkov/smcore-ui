import * as React from 'react'

import { formatDateToHumanize } from '../../../../format/date.format'
import { TableCellText } from '../../../table-cells/table-cell-text/table-cell-text.component'

interface Props {
  purchaseDate: string
}

export const ClientsSubscriptionsTablePurchase: React.FC<Props> = props => {
  const { purchaseDate } = props

  const text = `Куплен ${formatDateToHumanize(purchaseDate)}`

  return <TableCellText text={text} />
}
