import * as React from 'react'
import { Table, TablePaginationConfig } from 'antd'
import { ColumnsType } from 'antd/lib/table'

import { ClientsBookingsTableBaseDataItem } from '../clients-bookings-table-base/clients-bookings-table-base.types'
import { genClientsBookingsTableActiveColumns } from './clients-bookings-table-active.utils'
import { ClientsBookingsTableActiveProps } from './clients-bookings-table-active.types'

export const ClientsBookingsTableActive: React.FC<ClientsBookingsTableActiveProps> = props => {
  const { data, pagination, loading } = props
  const { onChangePage, onChangePageSize } = props
  const { onVisit, onBarcode, onCancel } = props

  const columns: ColumnsType<ClientsBookingsTableBaseDataItem> = React.useMemo(
    () => genClientsBookingsTableActiveColumns({ onVisit, onBarcode, onCancel }),
    [onVisit, onBarcode, onCancel]
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
