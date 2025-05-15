import { ColumnsType } from 'antd/es/table'
import * as React from 'react'
import { Table } from 'antd'
import { ExpandedRowRender } from 'rc-table/lib/interface'

import { TableCellText } from '../../table-cells/table-cell-text/table-cell-text.component'
import { TableCellPrice } from '../../table-cells/table-cell-price/table-cell-price.component'
import {
  ClientsTransactionsTableDataItem,
  ClientsTransactionsTableDataItemProduct,
} from './clients-transactions-table.types'
import { ClientsTransactionsTableActionsEvents } from './clients-transactions-table-actions/clients-transactions-table-actions.types'
import { formatPluralize } from '../../../format/text.format'
import { firstItem } from '../../../utils/list.utils'
import { TransactionsTableStatus } from '../../transactions/transactions-table/transactions-table-status/transactions-table-status.component'
import { ClientsTransactionsTableActions } from './clients-transactions-table-actions/clients-transactions-table-actions.component'
import { isDefAndNotEmpty } from '../../../types/lang.types'
import { genTransactionsTableProductsColumns } from '../../transactions/transactions-table/transactions-table.utils'

export function genClientsTransactionsTableColumns(
  events: ClientsTransactionsTableActionsEvents
): ColumnsType<ClientsTransactionsTableDataItem> {
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
      render: (_, transaction) => (
        <ClientsTransactionsTableActions transactionId={transaction.id} onBarcode={onBarcode} />
      ),
    },
  ]
}

export function genClientsTransactionsTableColumnsProductsColumns(): ColumnsType<ClientsTransactionsTableDataItemProduct> {
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

export const genClientsTransactionsTableExpandedRowRender: ExpandedRowRender<ClientsTransactionsTableDataItem> = (
  record: ClientsTransactionsTableDataItem
) => {
  const columns = genTransactionsTableProductsColumns()

  return <Table dataSource={record.products} columns={columns} pagination={false} loading={false} />
}

export const genClientsTransactionsTableRowExpandable = (transaction: ClientsTransactionsTableDataItem): boolean => {
  return isDefAndNotEmpty(transaction.products) && transaction.products.length > 1
}
