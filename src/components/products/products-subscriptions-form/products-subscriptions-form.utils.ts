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
