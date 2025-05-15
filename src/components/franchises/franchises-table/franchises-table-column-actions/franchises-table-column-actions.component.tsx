import * as React from 'react'
import { Modal } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons'

import { FranchisesTableActions } from '../franchises-table.types'
import { NNumber, NString } from '../../../../types/lang.types'
import { TableCellActions } from '../../../table-cells/table-cell-actions/table-cell-actions.component'

const { confirm } = Modal

interface Props extends FranchisesTableActions {
  id: string
  name: NString
  studiosCount: NNumber
}

export const FranchisesTableColumnActions: React.FC<Props> = props => {
  const { id, name, studiosCount } = props
  const { onEdit, onRemove } = props

  const onEditHandler = React.useCallback(() => onEdit(id), [id, onEdit])

  const onRemoveHandler = React.useCallback(() => {
    const studioWarn = studiosCount ? `Количество студий во франшизе: ${studiosCount}.` : 'Во франшизе нет студий.'

    confirm({
      title: `Подтвердите удаление франшизы ${name}`,
      icon: <ExclamationCircleOutlined />,
      content: studioWarn,
      onOk: () => onRemove(id),
    })
  }, [id, name, onRemove, studiosCount])

  return <TableCellActions onEdit={onEditHandler} onRemove={onRemoveHandler} />
}
