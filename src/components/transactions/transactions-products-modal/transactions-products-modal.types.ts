import { AppModalBaseProps } from '../../../types/modal.types'
import { Nullable } from '../../../types/lang.types'
import {
  TransactionsProductsModalTableDataItem,
  TransactionsProductsModalTableProps,
} from './transactions-products-modal-table/transactions-products-modal-table.types'

export interface TransactionsProductsModalProps
  extends AppModalBaseProps,
    Omit<TransactionsProductsModalTableProps, 'className' | 'data'> {
  data: Nullable<TransactionsProductsModalTableDataItem[]>
  loaded: boolean
  onSearch: (value: string) => void
}
