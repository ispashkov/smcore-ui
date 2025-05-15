import * as React from 'react'
import { useHistory } from 'react-router-dom'

import { validateStrEnumValue } from '../../../utils/enum.utils'
import { genClientsEditPagePath } from '../../../format/path.format'
import { isDef } from '../../../types/lang.types'
import { useClientsEditPageParams } from '../clients-edit-page-hooks/clients-edit-page-params.hook'
import { ClientsEditPageSection, ClientsEditPageUrlParams } from '../clients-edit-page.types'
import { genClientsEditPageMenuTabs } from './clients-edit-page-menu.utils'

export function useClientsEditPageMenu() {
  const { push } = useHistory()
  const { id, section } = useClientsEditPageParams()

  const menuItems = React.useMemo(genClientsEditPageMenuTabs, [])

  const onChangeHandler = React.useCallback(
    (activeKey: string): void => {
      const section = validateStrEnumValue<ClientsEditPageSection>(ClientsEditPageSection, activeKey)
      const params: ClientsEditPageUrlParams =
        isDef(section) && section !== ClientsEditPageSection.OVERVIEW ? { id, section } : { id }

      push(genClientsEditPagePath(params))
    },
    [id, push]
  )

  return {
    section,
    menuItems,

    onChangeHandler,
  }
}
