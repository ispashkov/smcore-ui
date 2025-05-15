import { isDef, NString } from '../types/lang.types'

export function genTokenHeader(token: NString): NString {
  if (isDef(token)) {
    return `Bearer ${token}`
  }

  return null
}
