import { formatToHHmm } from '../../../../format/date.format'
import { ScheduleTableDataItemTimeSlot } from '../schedule-table.types'

export function formatScheduleTableTimeslot(timeslot: ScheduleTableDataItemTimeSlot): string {
  const { timeFrom, timeTo } = timeslot

  return `${formatToHHmm(timeFrom)} - ${formatToHHmm(timeTo)}`
}
