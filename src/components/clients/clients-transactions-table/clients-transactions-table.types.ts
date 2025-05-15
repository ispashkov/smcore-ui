import { TransactionStatus } from '../../../types/transactions.types'

export interface ClientsTransactionsTableDataItem {
  id: string
  createDate: string
  status: TransactionStatus
  products: ClientsTransactionsTableDataItemProduct[]
}

export interface ClientsTransactionsTableDataItemProduct {
  id: string
  name: string
  cost: number
  count: number
}
