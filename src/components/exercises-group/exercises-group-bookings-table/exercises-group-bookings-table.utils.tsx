import * as React from 'react'
import { Avatar } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import { UserOutlined } from '@ant-design/icons'

import { isDef } from '../../../types/lang.types'
import { formatFullName, formatPaymentType } from '../../../format/text.format'
import { TableCellText } from '../../table-cells/table-cell-text/table-cell-text.component'
import { TableCellTag } from '../../table-cells/table-cell-tag/table-cell-tag.component'
import { ExercisesGroupBookingsTableActions } from './exercises-group-bookings-table-actions/exercises-group-bookings-table-actions.component'
import {
  ExercisesGroupBookingsTableDataItem,
  ExercisesGroupBookingsTableEvents,
} from './exercises-group-bookings-table.types'
import { TableCellVisit } from '../../table-cells/table-cell-visit/table-cell-visit.component'

export function genExercisesGroupBookingsTableColumns(
  events: ExercisesGroupBookingsTableEvents
): ColumnsType<ExercisesGroupBookingsTableDataItem> {
  const { onVisit, onComment, onCancel } = events

  return [
    {
      title: 'Фото',
      dataIndex: 'photo',
      key: 'photo',
      render: (_, schedule) => <Avatar shape="square" size={64} src={schedule.photo} icon={<UserOutlined />} />,
    },
    {
      title: 'ФИО',
      dataIndex: 'fullName',
      key: 'fullName',
      render: (_, schedule) => {
        const { firstName, lastName } = schedule
        const fullName = isDef(firstName) && isDef(lastName) ? formatFullName(firstName, lastName) : null

        return <TableCellText text={fullName} />
      },
    },
    {
      title: 'Телефон',
      dataIndex: 'phone',
      key: 'phone',
      render: (_, schedule) => <TableCellText text={schedule.phone} />,
    },
    {
      title: 'Место в зале',
      render: (_, schedule) => <TableCellText text={String(schedule.placement)} />,
    },
    {
      title: 'Категория',
      dataIndex: 'paymentType',
      key: 'paymentType',
      render: (_, schedule) => <TableCellTag text={formatPaymentType(schedule.paymentType)} />,
    },
    {
      title: 'Посещение',
      dataIndex: 'visitConfirmed',
      key: 'visitConfirmed',
      render: (_, schedule) => {
        const { id, visitConfirmed } = schedule

        return <TableCellVisit id={id} isChecked={visitConfirmed} onVisit={onVisit} />
      },
    },
    {
      title: 'Действие',
      key: 'action',
      render: (_, schedule) => (
        <ExercisesGroupBookingsTableActions id={schedule.id} onComment={onComment} onCancel={onCancel} />
      ),
    },
  ]
}
