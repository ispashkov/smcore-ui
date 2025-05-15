import * as React from 'react'

import { TransactionsProductsModal } from '../../../components/transactions/transactions-products-modal/transactions-products-modal.component'
import { useTransactionsCreatePageModalProducts } from './transactions-create-page-modal-products.hook'
import { TransactionsCreatePageModalProductsProps } from './transactions-create-page-modal-products.types'

export const TransactionsCreatePageModalProducts: React.FC<TransactionsCreatePageModalProductsProps> = () => {
  const {
    products,
    pagination,
    loading,
    loaded,
    onAddHandler,
    onChangePageHandler,
    onChangePageSizeHandler,
    onCancelHandler,
    onSearchHandler,
  } = useTransactionsCreatePageModalProducts()

  return (
    <TransactionsProductsModal
      data={products}
      loading={loading}
      loaded={loaded}
      pagination={pagination}
      onChangePage={onChangePageHandler}
      onChangePageSize={onChangePageSizeHandler}
      onAdd={onAddHandler}
      onCancel={onCancelHandler}
      onSearch={onSearchHandler}
    />
  )
}
