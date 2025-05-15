import * as React from 'react'
import { Avatar } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import { UserOutlined } from '@ant-design/icons'

import { StudiosTableActions, StudiosTableRow } from './studios-table.types'
import { StudiosTableColumnActions } from './studios-table-column-actions/studios-table-column-actions.component'
import { formatPluralized } from '../../../format/text.format'

export function genStudiosTableColumns(params: StudiosTableActions): ColumnsType<StudiosTableRow> {
  const { onEdit, onRemove } = params

  return [
    {
      title: 'Фото',
      dataIndex: 'mainPhoto',
      key: 'mainPhoto',
      align: 'center',
      render: mainPhoto => <Avatar shape="square" size="large" src={mainPhoto} icon={<UserOutlined />} />,
    },
    {
      title: 'Название',
      key: 'name',
      dataIndex: 'name',
      render: text => text || '-',
    },
    {
      title: 'Местоположение',
      key: 'location',
      render: ({ country, city }) => `${country}, ${city}`,
    },
    {
      title: 'Франшиза',
      key: 'organization',
      dataIndex: 'organization',
      render: organization => organization || '-',
    },
    {
      title: 'Количество залов',
      dataIndex: 'rooms',
      key: 'rooms',
      render: rooms => formatPluralized(rooms, ['зал', 'зала', 'залов']) || '-',
    },
    {
      title: 'Количество направлений',
      key: 'directionsCount',
      dataIndex: 'directionsCount',
      render: directionsCount =>
        formatPluralized(directionsCount, ['направление', 'направления', 'направлений']) || '-',
    },
    {
      title: 'Действие',
      key: 'action',
      render: (_, record) => <StudiosTableColumnActions {...record} onEdit={onEdit} onRemove={onRemove} />,
    },
  ]
}
