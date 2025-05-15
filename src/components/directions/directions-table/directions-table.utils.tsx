import * as React from 'react'
import { Avatar } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import { UserOutlined } from '@ant-design/icons'

import { DirectionsTableColumnActions } from './directions-table-column-actions/directions-table-column-actions.component'
import { DirectionsTableActions, DirectionsTableRow } from './directions-table.types'

export function genDirectionsTableColumns(params: DirectionsTableActions): ColumnsType<DirectionsTableRow> {
  const { onEdit, onRemove } = params

  return [
    {
      title: 'Фото',
      dataIndex: 'photo',
      key: 'photo',
      align: 'center',
      render: photo => <Avatar shape="square" size="large" src={photo} icon={<UserOutlined />} />,
    },
    {
      title: 'Название направления',
      dataIndex: 'name',
      key: 'name',
      render: name => name || '',
    },
    {
      title: 'Описание',
      dataIndex: 'description',
      key: 'description',
      render: text => text || '-',
    },
    {
      title: 'Что брать с собой',
      dataIndex: 'whatToTake',
      key: 'whatToTake',
      render: text => text || '-',
    },
    {
      title: 'Действие',
      key: 'action',
      render: (_, record) => <DirectionsTableColumnActions {...record} onEdit={onEdit} onRemove={onRemove} />,
    },
  ]
}
