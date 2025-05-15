import * as React from 'react'
import { Typography } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import moment from 'moment'
import { clsx } from 'clsx'

import { isDef } from '../../../types/lang.types'
import { formatToUTCHours } from '../../../format/date.format'
import { TableCellList } from '../../table-cells/table-cell-list/table-cell-list.component'
import { TableCellText } from '../../table-cells/table-cell-text/table-cell-text.component'
import { TableCellStudioRoom } from '../../table-cells/table-cell-studio-room/table-cell-studio-room.component'
import { ExercisesTableActions } from './exercises-table-actions/exercises-table-actions.component'
import { ExercisesTableDirection } from './exercises-table-direction/exercises-table-direction.component'
import { ExercisesTableEvents as ScheduleTableActionsI, ExercisesTableDataItem } from './exercises-table.types'

export function genExercisesTableColumns(params: ScheduleTableActionsI): ColumnsType<ExercisesTableDataItem> {
  const { onAdd, onComment, onView, onCancel } = params

  return [
    {
      title: 'Время',
      dataIndex: 'availableTime',
      key: 'date',
      render: (_, schedule) => {
        const { timeFrom, timeTo } = schedule

        return {
          props: {
            className: clsx({ 'schedule-table_completed': isCompleted(schedule) }),
          },
          children: (
            <>
              <Typography.Title level={4} style={{ margin: 0 }}>
                {formatToUTCHours(timeFrom)}
              </Typography.Title>
              <Typography.Paragraph type="secondary" style={{ margin: 0 }}>
                {formatToUTCHours(timeTo)}
              </Typography.Paragraph>
            </>
          ),
        }
      },
    },
    {
      title: 'Направление',
      dataIndex: 'direction',
      key: 'direction',
      render: (_, schedule) => {
        const { direction, studiosRoom, timeFrom, timeTo } = schedule
        return {
          props: {
            className: clsx({ 'schedule-table_completed': isCompleted(schedule) }),
          },
          children: (
            <ExercisesTableDirection
              direction={direction}
              studioRoom={studiosRoom}
              timeFrom={timeFrom}
              timeTo={timeTo}
              isBooked={isBooked(schedule)}
              isCompleted={isCompleted(schedule)}
              onAdd={onAdd}
            />
          ),
        }
      },
    },
    {
      title: 'Тренер',
      dataIndex: 'trainer',
      key: 'trainer',
      render: (_, schedule) => {
        return {
          props: {
            className: clsx({ 'schedule-table_completed': isCompleted(schedule) }),
          },
          children: isBooked(schedule) ? <TableCellList items={schedule.trainers} /> : null,
        }
      },
    },
    {
      title: 'Тип',
      dataIndex: 'type',
      key: 'type',
      render: (_, schedule) => {
        return {
          props: {
            className: clsx({ 'schedule-table_completed': isCompleted(schedule) }),
          },
          children: isBooked(schedule) ? <TableCellText text={schedule?.type?.title} /> : null,
        }
      },
    },
    {
      title: 'Места',
      dataIndex: 'clientsCount',
      key: 'clientsCount',
      className: 'exercises-table_clients-count',
      render: (_, schedule) => {
        const { maxClientsCount, clientsCounts } = schedule

        return {
          props: {
            className: clsx({ 'schedule-table_completed': isCompleted(schedule) }),
          },
          children: isBooked(schedule) ? (
            <span className={clsx({ 'schedule-table_completed': isCompleted(schedule) })}>
              {`${clientsCounts} из ${maxClientsCount}`}
            </span>
          ) : null,
        }
      },
    },
    {
      title: 'Зал',
      dataIndex: 'studiosRoom',
      key: 'studiosRoom',
      render: (_, schedule) => {
        return {
          props: {
            className: clsx({ 'schedule-table_completed': isCompleted(schedule) }),
          },
          children: <TableCellStudioRoom room={schedule.studiosRoom.title} color={schedule.studiosRoom.color} />,
        }
      },
    },
    {
      title: 'Действие',
      key: 'action',
      render: (_, schedule) => {
        const completed = isCompleted(schedule)
        return {
          props: {
            className: clsx('schedule-table_actions', { 'schedule-table_completed': completed }),
          },
          children: isBooked(schedule) ? (
            <ExercisesTableActions
              id={schedule.id}
              onComment={onComment}
              onView={onView}
              onCancel={onCancel}
              isCompleted={completed}
            />
          ) : null,
        }
      },
    },
  ]
}

export function genExercisesTableRowId(schedule: ExercisesTableDataItem): string {
  if (isDef(schedule.id)) {
    return schedule.id
  }

  return `${schedule.studiosRoom.id}-${schedule.timeFrom}-${schedule.timeTo}`
}

function isBooked(schedule: ExercisesTableDataItem): boolean {
  /**
   * @todo Should be replaced when trainers will be added to API
   */
  return isDef(schedule.direction) /*&& isDefAndNotEmpty(schedule.trainers) */ && isDef(schedule.type)
}

function isCompleted(schedule: ExercisesTableDataItem): boolean {
  return moment().isAfter(new Date(schedule.timeTo))
}
