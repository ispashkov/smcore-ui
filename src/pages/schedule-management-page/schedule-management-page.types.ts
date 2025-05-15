import { NString } from '../../types/lang.types'

export interface ScheduleManagementPageUrlParams {
  studioId: string
}

export interface ScheduleManagementPageQueryParams {
  roomId?: NString
}

export type ScheduleManagementPageParams = ScheduleManagementPageUrlParams & ScheduleManagementPageQueryParams
