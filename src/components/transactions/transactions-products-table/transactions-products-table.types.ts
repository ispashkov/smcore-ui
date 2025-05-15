import { NNumber, NString } from '../../../types/lang.types'
import { TransactionsProductsTableActionsEvents } from './transactions-products-table-actions/transactions-products-table-actions.types'
import { TransactionsProductsTableAmountEvents } from './transactions-products-table-amount/transactions-products-table-amount.types'

export interface TransactionsFormProductsTableProps extends TransactionsProductsTableEvents {
  data: TransactionsProductsTableDataItem[]
}

export interface TransactionsProductsTableDataItem {
  id: string
  photo: NString
  name: string
  price: NNumber
  count: number
}

export type TransactionsProductsTableEvents = TransactionsProductsTableActionsEvents &
  TransactionsProductsTableAmountEvents
