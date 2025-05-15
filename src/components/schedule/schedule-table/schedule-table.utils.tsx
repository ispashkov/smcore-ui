import * as React from 'react'
import { ColumnsType } from 'antd/lib/table'

import { TableCellText } from '../../table-cells/table-cell-text/table-cell-text.component'
import { TableCellList } from '../../table-cells/table-cell-list/table-cell-list.component'
import { TableCellDays } from '../../table-cells/table-cell-days/table-cell-days.component'
import { TableCellStudioRoom } from '../../table-cells/table-cell-studio-room/table-cell-studio-room.component'
import { ScheduleTableTimeslots } from './schedule-table-timeslots/schedule-table-timeslots.component'
import { ScheduleTablePeriod } from './schedule-table-period/schedule-table-period.component'
import { ScheduleTableActions } from './schedule-table-actions/schedule-table-actions.component'
import { ScheduleTableDataItem, ScheduleTableEvents } from './schedule-table.types'

export function genScheduleTableColumns(events: ScheduleTableEvents): ColumnsType<ScheduleTableDataItem> {
  const { onEdit, onCancel } = events

  return [
    {
      title: 'Название',
      dataIndex: 'direction',
      key: 'direction',
      render: (_, { direction }) => <TableCellText text={direction?.title} />,
    },
    {
      title: 'Тип',
      dataIndex: 'type',
      key: 'type',
      render: (_, { type }) => <TableCellText text={type?.title} />,
    },
    {
      title: 'Тренер',
      dataIndex: 'trainers',
      key: 'trainers',
      render: (_, { trainers }) => <TableCellList items={trainers} />,
    },
    {
      title: 'Зал',
      dataIndex: 'studiosRoom',
      key: 'studiosRoom',
      render: (_, { studiosRoom }) => <TableCellStudioRoom room={studiosRoom.title} color={studiosRoom.color} />,
    },
    {
      title: 'Дни',
      dataIndex: 'days',
      key: 'days',
      render: (_, { days }) => <TableCellDays days={days} />,
    },
    {
      title: 'Время',
      dataIndex: 'timeslots',
      key: 'timeslots',
      render: (_, { timeslots }) => <ScheduleTableTimeslots timeslots={timeslots} />,
    },
    {
      title: 'Период',
      key: 'period',
      render: (_, { dateFrom, dateTo }) => <ScheduleTablePeriod dateFrom={dateFrom} dateTo={dateTo} />,
    },
    {
      title: 'Действие',
      key: 'action',
      render: (_, { id }) => <ScheduleTableActions id={id} onEdit={onEdit} onCancel={onCancel} />,
    },
  ]
}
