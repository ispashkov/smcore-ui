import { ItemType } from 'antd/es/menu/hooks/useItems'

import { genDays } from '../../../utils/days.utils'
import { formatDays } from '../../../format/text.format'

export function genDaysDropdownMenuItems(): ItemType[] {
  return genDays().map(day => ({
    key: day,
    label: formatDays(day),
  }))
}
