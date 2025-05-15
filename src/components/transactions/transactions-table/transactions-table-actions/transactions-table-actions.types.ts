import { TransactionsTableDataItem } from '../transactions-table.types'

export interface TransactionsTableActionsEvents {
  onBarcode: (transaction: TransactionsTableDataItem) => void
}
