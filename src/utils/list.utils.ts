import { Nullable } from '../types/lang.types'

export function firstItem<T>(list: Nullable<T[]>): Nullable<T> {
  return list?.length ? list[0] || null : null
}

export function range(start: number, end: number): Array<number> {
  const list: Array<number> = []

  for (let i = start; i < end; i++) {
    list.push(i)
  }

  return list
}
