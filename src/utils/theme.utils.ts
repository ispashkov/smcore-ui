import { isDef } from '../types/lang.types'
import { Theme, THEME_PREFETCH_ID, THEME_STYLE_ID } from '../types/theme.types'
import { getStrEnumValues } from './enum.utils'

export function genThemeMap(): Record<Theme, string> {
  return {
    light: '/themes/antd.min.css',
    dark: '/themes/antd.dark.min.css',
  }
}

export function setTheme(theme: Theme) {
  const themeMap = genThemeMap()
  const existedTheme = document.getElementById(THEME_STYLE_ID)

  if (themeMap[theme]) {
    if (isDef(existedTheme)) {
      existedTheme.setAttribute('href', themeMap[theme])
    } else {
      const link = document.createElement('link')
      link.type = 'text/css'
      link.rel = 'stylesheet'
      link.id = THEME_STYLE_ID
      link.href = themeMap[theme]

      document.head.prepend(link)
    }

    document.body.setAttribute('data-theme', theme)
  }
}

export function prefetchThemeStyles(): void {
  const themes = getStrEnumValues<Theme>(Theme)
  const themeMap = genThemeMap()

  themes.forEach((theme: Theme): void => {
    const id = `${THEME_PREFETCH_ID}-${theme}`

    const link = document.createElement('link')
    link.type = 'text/css'
    link.rel = 'prefetch'
    link.id = id
    link.href = themeMap[theme]

    document.head.append(link)
  })
}
