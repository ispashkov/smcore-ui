import * as React from 'react'
import { Table, TablePaginationConfig } from 'antd'
import { ColumnsType } from 'antd/lib/table'

import { ClientsBookingsTableBaseDataItem } from '../clients-bookings-table-base/clients-bookings-table-base.types'
import { genClientsBookingsTableHistoryColumns } from './clients-bookings-table-history.utils'
import { ClientsBookingsTableActiveProps } from './clients-bookings-table-history.types'

export const ClientsBookingsTableHistory: React.FC<ClientsBookingsTableActiveProps> = props => {
  const { data, pagination, loading } = props
  const { onChangePage, onChangePageSize } = props
  const { onBarcode } = props

  const columns: ColumnsType<ClientsBookingsTableBaseDataItem> = React.useMemo(
    () => genClientsBookingsTableHistoryColumns({ onBarcode }),
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
