import { createSelector } from '@reduxjs/toolkit'
import { matchPath } from 'react-router-dom'

import { mapStudiosToAppLayoutTopBarStudios } from '../../../mapping/studios.mapping'
import { AppState } from '../../app.store'
import { isDef, isDefAndNotEmpty } from '../../../types/lang.types'
import { AppPath } from '../../../types/path.types'
import { firstItem } from '../../../utils/list.utils'
import { getSelectedStudioId } from '../../../utils/local-storage.utils'
import { DEFAULT_THEME } from '../../../types/theme.types'

const getLocationInternal = (state: AppState) => state.router.location
const getStudiosInternal = (state: AppState) => state.layout.studios
const getThemeInternal = (state: AppState) => state.layout.theme

export const getThemeIsInitialized = (state: AppState) => state.layout.themeIsInitialized

export const getLayoutIsLoading = (state: AppState) => state.layout.isLoading

export const getLayoutIsLoaded = (state: AppState) => state.layout.isLoaded

export const getLayoutStudios = createSelector(getStudiosInternal, studios =>
  mapStudiosToAppLayoutTopBarStudios(studios?.content)
)

const firstStudioInLayoutInternal = createSelector(getLayoutStudios, studios => firstItem(studios))

const getStudioIdInURLInternal = createSelector(getLocationInternal, getLayoutStudios, (location, studios) => {
  const match = matchPath<{ studioId: string }>(location.pathname, {
    path: [AppPath.SCHEDULE],
  })

  return match?.params?.studioId
})

export const getCurrentStudioId = createSelector(
  firstStudioInLayoutInternal,
  getStudioIdInURLInternal,
  (firstStudioInLayout, studioIdInURL) => {
    const studioIdInLocalStorage = getSelectedStudioId()

    if (isDef(studioIdInURL)) {
      return studioIdInURL
    }

    if (isDef(studioIdInLocalStorage)) {
      return studioIdInLocalStorage
    }

    if (isDef(firstStudioInLayout)) {
      return firstStudioInLayout.id
    }

    return null
  }
)

export const getCurrentStudio = createSelector(getCurrentStudioId, getLayoutStudios, (currentStudioId, studios) => {
  if (isDef(currentStudioId) && isDefAndNotEmpty(studios)) {
    return studios.find(studio => studio.id === currentStudioId)
  }

  return null
})

export const getCurrentStudioName = createSelector(getCurrentStudio, currentStudio => currentStudio?.title)

export const getCurrentStudioOffset = createSelector(getCurrentStudio, currentStudio => currentStudio?.offset)

export const getTheme = createSelector(getThemeInternal, theme => {
  if (isDef(theme)) {
    return theme
  }

  return DEFAULT_THEME
})
