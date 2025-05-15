export function formatPenniesToRubles(pennies: number): number {
  return pennies / 100
}

export function formatRublesToPennies(rubles: number): number {
  return rubles * 100
}

export function formatRubleCurrency(rubles: number): string {
  return new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }).format(rubles)
}

export function formatRublesPenniesCurrency(pennies: number): string {
  const rubles = formatPenniesToRubles(pennies)
  return formatRubleCurrency(rubles)
}
