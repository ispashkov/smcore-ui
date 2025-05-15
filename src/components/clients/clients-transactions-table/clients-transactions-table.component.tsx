import * as React from 'react'
import { ColumnsType } from 'antd/lib/table'
import { Table, TablePaginationConfig } from 'antd'

import { ClientsTransactionsTableActionsEvents } from './clients-transactions-table-actions/clients-transactions-table-actions.types'
import { genClientsTransactionsTableColumns } from './clients-transactions-table.utils'
import { ClientsTransactionsTableDataItem } from './clients-transactions-table.types'

interface Props extends ClientsTransactionsTableActionsEvents {
  data: ClientsTransactionsTableDataItem[]
  pagination?: TablePaginationConfig
  loading?: boolean
  onChangePage: (page: number, pageSize: number) => void
  onChangePageSize: (pageSize: number) => void
}

export const ClientsTransactionsTable: React.FC<Props> = props => {
  const { data, pagination, loading } = props
  const { onBarcode, onChangePage, onChangePageSize } = props

  const columns: ColumnsType<ClientsTransactionsTableDataItem> = React.useMemo(
    () => genClientsTransactionsTableColumns({ onBarcode }),
    [onBarcode]
  )

  const paginationConfig = React.useMemo(
    (): TablePaginationConfig => ({
      ...pagination,
      onChange: onChangePage,
      onShowSizeChange: onChangePageSize,
    }),
    [onChangePage, onChangePageSize, pagination]
  )

  return <Table rowKey="id" columns={columns} dataSource={data} pagination={paginationConfig} loading={loading} />
}
