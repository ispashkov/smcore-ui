import * as React from 'react'
import { ColumnsType } from 'antd/lib/table'

import { FranchisesTableColumnActions } from './franchises-table-column-actions/franchises-table-column-actions.component'
import { FranchisesTableActions, FranchisesTableRow } from './franchises-table.types'

export function genFranchisesTableColumns(params: FranchisesTableActions): ColumnsType<FranchisesTableRow> {
  const { onEdit, onRemove } = params

  return [
    {
      title: 'Название',
      dataIndex: 'name',
      key: 'name',
      render: text => text || '-',
    },
    {
      title: 'Руководитель',
      dataIndex: 'customerName',
      key: 'customerName',
      render: text => text || '-',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      render: text => text || '-',
    },
    {
      title: 'Телефон',
      key: 'phone',
      dataIndex: 'phone',
      render: text => text || '-',
    },
    {
      title: 'Кол-во студий',
      key: 'studiosCount',
      dataIndex: 'studiosCount',
      render: text => text || 'Нет студий',
    },
    {
      title: 'Действие',
      key: 'action',
      render: (_, record) => <FranchisesTableColumnActions {...record} onEdit={onEdit} onRemove={onRemove} />,
    },
  ]
}
