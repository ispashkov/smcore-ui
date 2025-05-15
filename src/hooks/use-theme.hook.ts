import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getTheme, getThemeIsInitialized } from '../store/common/layout/layout.selectors'
import { layoutActions } from '../store/common/layout/layout.slice'
import { Theme } from '../types/theme.types'

export function useTheme() {
  const dispatch = useDispatch()

  const theme = useSelector(getTheme)
  const themeIsInitialized = useSelector(getThemeIsInitialized)

  React.useEffect((): void => {
    if (!themeIsInitialized) {
      dispatch(layoutActions.initializeTheme())
    }
  }, [dispatch, theme, themeIsInitialized])

  const onSwitchTheme = React.useCallback((): void => {
    const nextTheme: Theme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
    dispatch(layoutActions.changeTheme(nextTheme))
  }, [dispatch, theme])

  return {
    theme,
    onSwitchTheme,
  }
}
