import { EntityItem, NNumber, NString } from '../../types/lang.types'
import { DEFAULT_PAGE_SIZE } from '../../utils/pagination.utils'

export interface ScheduleGroupPageUrlParams {
  studioId: string
  scheduleId: string
}

export interface ScheduleGroupPageQueryParams {
  page?: NNumber
  size?: NNumber
  productCategoryId?: NString
}

export type ScheduleGroupPageParams = ScheduleGroupPageUrlParams & ScheduleGroupPageQueryParams

export interface ScheduleGroupPageExercise {
  id: string
  timeFrom: string
  timeTo: string
  direction: EntityItem<number>
  trainers: EntityItem<string>[]
  type: EntityItem<number>
  studiosRoom: EntityItem<string>
}

export const SCHEDULE_GROUP_PAGE_SIZE: number = DEFAULT_PAGE_SIZE
