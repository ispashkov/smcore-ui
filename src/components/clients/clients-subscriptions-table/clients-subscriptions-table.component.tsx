import * as React from 'react'
import { Table, TablePaginationConfig } from 'antd'
import { ColumnsType } from 'antd/lib/table'

import { genClientsSubscriptionsTableColumns } from './clients-subscriptions-table.utils'
import { ClientsSubscriptionsTableActionsEvents } from './clients-subscriptions-table-actions/clients-subscriptions-table-actions.types'
import { ClientsSubscriptionsTableDataItem } from './clients-subscriptions-table.types'

interface Props extends ClientsSubscriptionsTableActionsEvents {
  className?: string
  data: ClientsSubscriptionsTableDataItem[]
  pagination?: TablePaginationConfig
  loading?: boolean
  onChangePage: (page: number, pageSize: number) => void
  onChangePageSize: (pageSize: number) => void
}

export const ClientsSubscriptionsTable: React.FC<Props> = props => {
  const { data, pagination, loading } = props
  const { onChangePage, onChangePageSize } = props
  const { onBarcode, onPause, onResume, onRefund } = props

  const columns: ColumnsType<ClientsSubscriptionsTableDataItem> = React.useMemo(
    () => genClientsSubscriptionsTableColumns({ onBarcode, onPause, onResume, onRefund }),
    [onBarcode, onPause, onResume, onRefund]
  )

  const paginationConfig = React.useMemo(
    (): TablePaginationConfig => ({
      ...pagination,
      onChange: onChangePage,
      onShowSizeChange: onChangePageSize,
    }),
    [onChangePage, onChangePageSize, pagination]
  )

  const scroll = React.useMemo(() => ({ x: 1500 }), [])

  return (
    <Table
      rowKey="id"
      columns={columns}
      dataSource={data}
      pagination={paginationConfig}
      loading={loading}
      scroll={scroll}
    />
  )
}
