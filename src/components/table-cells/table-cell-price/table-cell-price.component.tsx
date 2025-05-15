import * as React from 'react'

import { NNumber } from '../../../types/lang.types'
import { formatRubleCurrency } from '../../../format/number.format'
import { TableCellText } from '../table-cell-text/table-cell-text.component'

interface Props {
  value: NNumber
}

export const TableCellPrice: React.FC<Props> = props => {
  const { value } = props

  const price = value ? formatRubleCurrency(value) : null

  return <TableCellText text={price} />
}
