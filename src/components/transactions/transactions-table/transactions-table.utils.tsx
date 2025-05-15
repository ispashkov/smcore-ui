import * as React from 'react'
import { Table } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import { ExpandedRowRender } from 'rc-table/lib/interface'

import { firstItem } from '../../../utils/list.utils'
import { formatPluralize } from '../../../format/text.format'
import { isDefAndNotEmpty } from '../../../types/lang.types'
import { TableCellText } from '../../table-cells/table-cell-text/table-cell-text.component'
import { TableCellDateTime } from '../../table-cells/table-cell-date-time/table-cell-date-time.component'
import { TableCellPrice } from '../../table-cells/table-cell-price/table-cell-price.component'
import { TransactionsTableStatus } from './transactions-table-status/transactions-table-status.component'
import { TransactionsTableActions } from './transactions-table-actions/transactions-table-actions.component'
import { TransactionsTableActionsEvents } from './transactions-table-actions/transactions-table-actions.types'
import { TransactionsTableDataItem, TransactionsTableDataItemProduct } from './transactions-table.types'

export function genTransactionsTableColumns(
  events: TransactionsTableActionsEvents
): ColumnsType<TransactionsTableDataItem> {
  const { onBarcode } = events

  return [
    {
      title: 'Товары',
      key: 'products',
      fixed: 'left',
      width: 200,
      render: (_, transaction) => {
        const { products } = transaction

        if (products.length > 1) {
          const text = `${products.length} ${formatPluralize(products.length, ['товар', 'товара', 'товаров'])}`

          return <TableCellText text={text} />
        }

        return <TableCellText text={firstItem(products)?.name} />
      },
    },
    {
      title: 'Дата и время',
      key: 'date-time',
      width: 130,
      render: (_, transaction) => <TableCellDateTime date={transaction.date} />,
    },
    {
      title: 'Телефон клиента',
      dataIndex: 'phone',
      key: 'phone',
      width: 160,
      render: (_, transaction) => <TableCellText text={transaction.phone} />,
    },
    {
      title: 'Сумма',
      dataIndex: 'sum',
      key: 'sum',
      width: 160,
      render: (_, transaction) => <TableCellPrice value={transaction.sum} />,
    },
    {
      title: 'Кол-во',
      dataIndex: 'count',
      key: 'count',
      width: 100,
      render: (_, transaction) => <TableCellText text={String(transaction.count)} />,
    },
    {
      title: 'Статус',
      dataIndex: 'status',
      key: 'status',
      fixed: 'right',
      width: 150,
      render: (_, transaction) => <TransactionsTableStatus value={transaction.status} />,
    },
    {
      title: 'Действия',
      key: 'action',
      fixed: 'right',
      width: 100,
      render: (_, transaction) => <TransactionsTableActions transaction={transaction} onBarcode={onBarcode} />,
    },
  ]
}

export function genTransactionsTableProductsColumns(): ColumnsType<TransactionsTableDataItemProduct> {
  return [
    {
      title: 'Наименование',
      key: 'products',
      render: (_, product) => <TableCellText text={product.name} />,
    },
    {
      title: 'Стоимость',
      dataIndex: 'sum',
      key: 'sum',
      render: (_, product) => <TableCellPrice value={product.cost} />,
    },
    {
      title: 'Кол-во',
      dataIndex: 'count',
      key: 'count',
      render: (_, product) => <TableCellText text={String(product.count)} />,
    },
    {
      title: 'Сумма',
      key: 'total',
      render: (_, product) => {
        const total = product.cost * product.count

        return <TableCellPrice value={total} />
      },
    },
  ]
}

export const genTransactionsTableExpandedRowRender: ExpandedRowRender<TransactionsTableDataItem> = (
  record: TransactionsTableDataItem
) => {
  const columns = genTransactionsTableProductsColumns()

  return <Table dataSource={record.products} columns={columns} pagination={false} loading={false} />
}

export const genTransactionsTableRowExpandable = (transaction: TransactionsTableDataItem): boolean => {
  return isDefAndNotEmpty(transaction.products) && transaction.products.length > 1
}
