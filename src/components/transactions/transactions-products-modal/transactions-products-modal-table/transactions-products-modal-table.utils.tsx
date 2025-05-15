import * as React from 'react'
import { ColumnsType } from 'antd/lib/table'
import { Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'

import { TableCellPrice } from '../../../table-cells/table-cell-price/table-cell-price.component'
import { TransactionsProductsModalTableActions } from './transactions-products-modal-table-actions/transactions-products-modal-table-actions.component'
import { TransactionsProductsModalTableName } from './transactions-products-modal-table-name/transactions-products-modal-table-name.component'
import {
  TransactionsProductsModalTableDataItem,
  TransactionsProductsModalTableEvents,
} from './transactions-products-modal-table.types'

export function genTransactionsProductsModalTableColumns(
  events: TransactionsProductsModalTableEvents
): ColumnsType<TransactionsProductsModalTableDataItem> {
  const { onAdd } = events

  return [
    {
      key: 'photo',
      dataIndex: 'photo',
      width: 72,
      render: (_, product) => <Avatar shape="square" size="large" src={product.photo} icon={<UserOutlined />} />,
    },
    {
      key: 'name',
      dataIndex: 'name',
      render: (_, product) => <TransactionsProductsModalTableName text={product.name} />,
    },
    {
      key: 'price',
      dataIndex: 'price',
      width: 160,
      render: (_, product) => <TableCellPrice value={product.price} />,
    },
    {
      key: 'actions',
      className: 'transactions-products-modal-table-cell__actions',
      width: 180,
      render: (_, product) => <TransactionsProductsModalTableActions productId={product.id} onAdd={onAdd} />,
    },
  ]
}
