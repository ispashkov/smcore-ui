import { TransactionStatus } from '../../../types/transactions.types'

export interface TransactionsTableDataItemProduct {
  id: string
  name: string
  cost: number
  count: number
}

export interface TransactionsTableDataItem {
  id: string
  date: string
  phone: string
  sum: number
  count: number
  status: TransactionStatus
  products: TransactionsTableDataItemProduct[]
}
