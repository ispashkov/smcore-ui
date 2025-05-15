import { Days } from '../types/days.types'
import { getStrEnumValues } from './enum.utils'

export function genDays(): Days[] {
  return getStrEnumValues<Days>(Days)
}
