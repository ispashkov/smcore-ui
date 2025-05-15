import { ColumnsType } from 'antd/lib/table'

import { TableCellText } from '../../../table-cells/table-cell-text/table-cell-text.component'
import { TableCellPrice } from '../../../table-cells/table-cell-price/table-cell-price.component'
import { TransactionsTableDataItemProduct } from '../transactions-table.types'

export function genTransactionsTableProductsColumns(): ColumnsType<TransactionsTableDataItemProduct> {
  return [
    {
      title: 'Товары',
      key: 'products',
      render: (_, product) => <TableCellText text={product.name} />,
    },
    {
      title: 'Сумма',
      dataIndex: 'sum',
      key: 'sum',
      render: (_, product) => <TableCellPrice value={product.cost} />,
    },
    {
      title: 'Кол-во',
      dataIndex: 'count',
      key: 'count',
      render: (_, transaction) => <TableCellText text={String(transaction.count)} />,
    },
  ]
}
