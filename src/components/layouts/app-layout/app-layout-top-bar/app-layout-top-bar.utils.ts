import { isDef } from '../../../../types/lang.types'
import { AppLayoutTopBarMenuItem } from './app-layout-top-bar.types'

export function genSelectedKeys(items: AppLayoutTopBarMenuItem[], pathname: string, search: string): string[] {
  const activeKey = items.find(item => {
    if (item.path?.includes('?')) {
      return item.path === `${pathname}${search}`
    }

    return item.path === pathname
  })

  return isDef(activeKey) && isDef(activeKey?.title) ? [activeKey.title] : []
}
