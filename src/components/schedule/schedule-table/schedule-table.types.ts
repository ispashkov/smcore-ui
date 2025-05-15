import { Days } from '../../../types/days.types'
import { ScheduleTableActionsEvents } from './schedule-table-actions/schedule-table-actions.types'
import { ColoredEntityItem, EntityItem } from '../../../types/lang.types'

export interface ScheduleTableDataItem {
  id: string
  direction: EntityItem<number>
  type: EntityItem<number>
  trainers: EntityItem<string>[]
  studiosRoom: ColoredEntityItem<string>
  days: Days[]
  timeslots: ScheduleTableDataItemTimeSlot[]
  dateFrom: string
  dateTo: string
}

export interface ScheduleTableDataItemTimeSlot {
  timeFrom: string
  timeTo: string
}

export type ScheduleTableEvents = ScheduleTableActionsEvents
