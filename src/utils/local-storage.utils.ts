import { LocalStorageKey } from '../types/local-storage.types'
import { isDef, NString } from '../types/lang.types'

export function setAccessToken(accessToken: NString): void {
  if (isDef(accessToken)) {
    localStorage.setItem(LocalStorageKey.APP_AUTH_ACCESS_TOKEN, accessToken)
  }
}

export function getAccessToken(): string | undefined {
  const accessToken = localStorage.getItem(LocalStorageKey.APP_AUTH_ACCESS_TOKEN)

  if (isDef(accessToken)) {
    return accessToken
  }
}

export function removeAccessToken(): void {
  localStorage.removeItem(LocalStorageKey.APP_AUTH_ACCESS_TOKEN)
}

export function setRefreshToken(refreshToken: NString): void {
  if (isDef(refreshToken)) {
    localStorage.setItem(LocalStorageKey.APP_AUTH_REFRESH_TOKEN, refreshToken)
  }
}

export function getRefreshToken(): string | undefined {
  const refreshToken = localStorage.getItem(LocalStorageKey.APP_AUTH_REFRESH_TOKEN)

  if (isDef(refreshToken)) {
    return refreshToken
  }
}

export function removeRefreshToken(): void {
  localStorage.removeItem(LocalStorageKey.APP_AUTH_REFRESH_TOKEN)
}

export function setSelectedStudioId(studioId: NString): void {
  if (isDef(studioId)) {
    localStorage.setItem(LocalStorageKey.APP_SELECTED_STUDIO_ID, studioId)
  }
}

export function getSelectedStudioId(): NString {
  return localStorage.getItem(LocalStorageKey.APP_SELECTED_STUDIO_ID)
}
