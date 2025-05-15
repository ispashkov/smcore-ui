import { isBoolean, parseBoolean } from '../../../types/lang.types'

export function genServicesRadioOptions() {
  return [
    { label: 'Все', value: false },
    { label: 'Выбрать', value: true },
  ]
}

export function genServicesInitialValues() {
  return {
    hasStudioLimitation: false,
    hasDirectionLimitation: false,
    hasTypeLimitation: false,
  }
}

export function castStringToBoolean(value: boolean | string): boolean {
  if (isBoolean(value)) {
    return Boolean(value)
  }
  return parseBoolean(value)
}
