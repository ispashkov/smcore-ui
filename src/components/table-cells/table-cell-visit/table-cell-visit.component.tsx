import * as React from 'react'
import { Switch } from 'antd'

import { TableCellVisitEvents } from './table-cell-visit.types'

interface Props extends TableCellVisitEvents {
  id: string
  isChecked: boolean
}

export const TableCellVisit: React.FC<Props> = props => {
  const { id, isChecked } = props
  const { onVisit } = props

  const onChangeHandler = React.useCallback(
    (checked: boolean): void => {
      onVisit(id, checked)
    },
    [id, onVisit]
  )

  return <Switch checked={isChecked} onChange={onChangeHandler} />
}
