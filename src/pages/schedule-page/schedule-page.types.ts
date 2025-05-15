import { NBoolean, NString } from '../../types/lang.types'

export interface SchedulePageUrlParams {
  studioId: string
}

export interface SchedulePageQueryParams {
  roomId?: NString
  date?: NString
  completed?: NBoolean
  extended?: NBoolean
}

export type SchedulePageParams = SchedulePageUrlParams & SchedulePageQueryParams
