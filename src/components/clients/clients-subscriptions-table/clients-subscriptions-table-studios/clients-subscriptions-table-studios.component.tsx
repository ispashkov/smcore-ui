import * as React from 'react'

import { EntityItem, Nullable } from '../../../../types/lang.types'
import { TableCellList } from '../../../table-cells/table-cell-list/table-cell-list.component'
import { TableCellText } from '../../../table-cells/table-cell-text/table-cell-text.component'

interface Props {
  studios: Nullable<EntityItem<string>[]>
  hasStudioLimitation: boolean
}

export const ClientsSubscriptionsTableStudios: React.FC<Props> = props => {
  const { studios, hasStudioLimitation } = props

  if (hasStudioLimitation) {
    return <TableCellList items={studios} />
  }

  return <TableCellText text="Все студии" />
}
