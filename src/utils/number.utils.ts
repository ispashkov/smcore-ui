export function genLinearDoubledList(initialValue: number, amount: number): number[] {
  const result: number[] = []

  for (let i = 0; i < amount; i++) {
    if (i === 0) {
      result.push(initialValue)
    } else {
      result.push(result[i - 1] * 2)
    }
  }

  return result
}
