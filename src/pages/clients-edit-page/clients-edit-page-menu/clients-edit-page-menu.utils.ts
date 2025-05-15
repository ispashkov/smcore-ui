import { Tab } from 'rc-tabs/lib/interface'

import { getStrEnumValues } from '../../../utils/enum.utils'
import { formatClientsEditPageSection } from '../../../format/text.format'
import { ClientsEditPageSection } from '../clients-edit-page.types'

export function genClientsEditPageMenuTabs(): Tab[] {
  return getStrEnumValues<ClientsEditPageSection>(ClientsEditPageSection).map(
    (section: ClientsEditPageSection): Tab => ({
      key: section,
      label: formatClientsEditPageSection(section),
    })
  )
}
