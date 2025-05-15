export function genCreateStudiosSteps(): string[] {
  return ['Основная информация', 'Залы и направления']
}

export function genStudioInitialValues() {
  return {
    name: '',
    country: '',
    city: '',
    address: '',
    description: '',
    mainPhoto: '',
    photos: [],
    orgId: null,
    workTime: [],
    minRate: 1,
    girlsOnly: false,
    rooms: [],
  }
}
