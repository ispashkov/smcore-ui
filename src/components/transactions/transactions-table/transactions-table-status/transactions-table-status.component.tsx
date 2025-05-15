import * as React from 'react'
import { Badge } from 'antd'

import { TransactionStatus } from '../../../../types/transactions.types'
import { formatTransactionStatus } from '../../../../format/text.format'
import { mapTransactionStatusToPresetStatusColorType } from './transactions-table-status.utils'

interface Props {
  value: TransactionStatus
}

export const TransactionsTableStatus: React.FC<Props> = props => {
  const { value } = props

  const status = mapTransactionStatusToPresetStatusColorType(value)
  const text = formatTransactionStatus(value)

  return <Badge status={status} text={text} />
}
