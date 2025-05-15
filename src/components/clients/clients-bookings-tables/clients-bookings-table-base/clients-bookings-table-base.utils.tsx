import * as React from 'react'
import { ColumnsType } from 'antd/es/table'

import { formatPaymentType } from '../../../../format/text.format'
import { TableCellDateTime } from '../../../table-cells/table-cell-date-time/table-cell-date-time.component'
import { TableCellText } from '../../../table-cells/table-cell-text/table-cell-text.component'
import { ClientsBookingsTableBaseDataItem } from './clients-bookings-table-base.types'

export function genClientsBookingsTableBaseColumns(): ColumnsType<ClientsBookingsTableBaseDataItem> {
  return [
    {
      title: 'Дата и время',
      key: 'dateTime',
      render: (_, booking) => <TableCellDateTime date={booking.createDate} />,
    },
    {
      title: 'Направление',
      dataIndex: 'direction',
      key: 'direction',
      render: (_, booking) => <TableCellText text={booking.exerciseDirection.title} />,
    },
    {
      title: 'Студия',
      dataIndex: 'studio',
      key: 'studio',
      render: (_, booking) => <TableCellText text={booking.studio.title} />,
    },
    {
      title: 'Способ оплаты',
      dataIndex: 'paymentType',
      key: 'paymentType',
      render: (_, booking) => <TableCellText text={formatPaymentType(booking.paymentType)} />,
    },
  ]
}
