import * as React from 'react'
import { Menu } from 'antd'
import { ItemType } from 'antd/lib/menu/hooks/useItems'
import { MenuInfo } from 'rc-menu/lib/interface'

import { Days } from '../../../../types/days.types'
import { isDef } from '../../../../types/lang.types'
import { validateStrEnumValue } from '../../../../utils/enum.utils'

interface Props {
  items: ItemType[]
  onClick: (day: Days) => void
}

export const DaysDropdownMenu: React.FC<Props> = props => {
  const { items, onClick } = props

  const onClickHandler = React.useCallback(
    (info: MenuInfo): void => {
      const { key } = info

      const day = validateStrEnumValue<Days>(Days, key)

      if (isDef(day)) {
        onClick(day)
      }
    },
    [onClick]
  )

  return <Menu items={items} onClick={onClickHandler} />
}
