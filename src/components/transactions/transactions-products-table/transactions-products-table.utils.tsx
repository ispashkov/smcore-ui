import * as React from 'react'
import { Avatar } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import { UserOutlined } from '@ant-design/icons'

import { TableCellText } from '../../table-cells/table-cell-text/table-cell-text.component'
import { TableCellPrice } from '../../table-cells/table-cell-price/table-cell-price.component'
import { TransactionsProductsTableActions } from './transactions-products-table-actions/transactions-products-table-actions.component'
import { TransactionsProductsTableAmount } from './transactions-products-table-amount/transactions-products-table-amount.component'
import { TransactionsProductsTableDataItem, TransactionsProductsTableEvents } from './transactions-products-table.types'

export function genTransactionsProductsTableColumns(
  events: TransactionsProductsTableEvents
): ColumnsType<TransactionsProductsTableDataItem> {
  const { onRemove, onChangeAmount } = events

  return [
    {
      title: 'Фото',
      key: 'photo',
      dataIndex: 'photo',
      render: (_, product) => <Avatar shape="square" size="large" src={product.photo} icon={<UserOutlined />} />,
    },
    {
      title: 'Товар',
      key: 'name',
      dataIndex: 'name',
      render: (_, product) => <TableCellText text={product.name} />,
    },
    {
      title: 'Цена',
      key: 'price',
      dataIndex: 'price',
      render: (_, product) => <TableCellPrice value={product.price} />,
    },
    {
      title: 'Количество',
      key: 'count',
      dataIndex: 'count',
      render: (_, product) => (
        <TransactionsProductsTableAmount productId={product.id} value={product.count} onChangeAmount={onChangeAmount} />
      ),
    },
    {
      title: 'Действия',
      key: 'count',
      dataIndex: 'count',
      render: (_, product) => <TransactionsProductsTableActions productId={product.id} onRemove={onRemove} />,
    },
  ]
}
