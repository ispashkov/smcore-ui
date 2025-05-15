import moment from 'moment'

import { formatMomentToDate } from '../../../format/date.format'
import { ScheduleGroupPageExercise } from '../schedule-group-page.types'

export function genDateOfStartFromScheduleGroupPageExercise(exercise: ScheduleGroupPageExercise): string {
  const date = moment(exercise.timeFrom)

  return formatMomentToDate(date)
}

export function genDateOfEndFromScheduleGroupPageExercise(exercise: ScheduleGroupPageExercise): string {
  const date = moment(exercise.timeTo)

  return formatMomentToDate(date)
}
