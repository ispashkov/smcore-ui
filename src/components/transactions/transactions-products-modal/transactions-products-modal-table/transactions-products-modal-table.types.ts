import { TablePaginationConfig } from 'antd'

import { NString } from '../../../../types/lang.types'
import { TransactionsProductsModalTableActionsEvents } from './transactions-products-modal-table-actions/transactions-products-modal-table-actions.types'

export interface TransactionsProductsModalTableProps extends TransactionsProductsModalTableEvents {
  data: TransactionsProductsModalTableDataItem[]
  loading: boolean
  pagination?: TablePaginationConfig
  onChangePage: (page: number, pageSize: number) => void
  onChangePageSize: (pageSize: number) => void
}

export interface TransactionsProductsModalTableDataItem {
  id: string
  photo: NString
  name: string
  price: number
}

export type TransactionsProductsModalTableEvents = TransactionsProductsModalTableActionsEvents
