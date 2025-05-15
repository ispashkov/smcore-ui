import moment, { Moment } from 'moment'
import 'moment/locale/ru'

import { isDef, NString } from '../types/lang.types'

export function genDefaultDateFormat(): string {
  return 'DD.MM.YYYY'
}

export function genDefaultTimeFormat(): string {
  return 'HH:mm'
}

export function genDefaultMomentDateFormat(): string {
  return 'YYYY-MM-DD'
}

export function formatToUTCHours(date: NString, format: string = genDefaultTimeFormat()): NString {
  if (isDef(date)) {
    const offset = moment.parseZone(date).utcOffset()
    return moment(date).utcOffset(offset).format(format)
  }

  return null
}

export function formatToHHmm(date: string): string {
  return moment(date, 'HH:mm:ss').format(genDefaultTimeFormat())
}

export function formatMomentToDate(moment: Moment): string {
  return moment.format(genDefaultMomentDateFormat())
}

export function formatDate(date: string, format: string = genDefaultDateFormat()): string {
  return moment(date).format(format)
}

export function formatTime(date: string, format: string = genDefaultTimeFormat()): string {
  return moment(date).format(format)
}

export function formatTimeToHhMmSs(date: string): string {
  return formatTime(date, 'HH:mm:ss')
}

export function formatDateToHumanize(date: string): string {
  return moment(date).format('D MMMM YYYY')
}
