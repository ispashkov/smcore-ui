import * as React from 'react'
import { Modal, Spin } from 'antd'

import { isDefAndNotEmpty } from '../../../types/lang.types'
import { PageEmpty } from '../../page/page-empty/page-empty.component'
import { TransactionsProductsModalSearch } from './transactions-products-modal-search/transactions-products-modal-search.component'
import { TransactionsProductsModalTable } from './transactions-products-modal-table/transactions-products-modal-table.component'
import { TransactionsProductsModalProps } from './transactions-products-modal.types'
import './transactions-products-modal.styles.less'

export const TransactionsProductsModal: React.FC<TransactionsProductsModalProps> = props => {
  const { data, loading, loaded, pagination } = props
  const { onAdd, onChangePage, onChangePageSize, onCancel, onSearch } = props

  return (
    <Modal
      width={1000}
      className="transactions-products-modal"
      title="Добавить товар"
      onCancel={onCancel}
      footer={null}
      open={true}
    >
      {!loaded && loading ? (
        <Spin className="transactions-products-modal__loader" />
      ) : (
        <>
          <TransactionsProductsModalSearch onChange={onSearch} />

          {isDefAndNotEmpty(data) ? (
            <TransactionsProductsModalTable
              data={data}
              loading={loading}
              pagination={pagination}
              onAdd={onAdd}
              onChangePage={onChangePage}
              onChangePageSize={onChangePageSize}
            />
          ) : (
            <PageEmpty description="Товары не найдены" />
          )}
        </>
      )}
    </Modal>
  )
}
