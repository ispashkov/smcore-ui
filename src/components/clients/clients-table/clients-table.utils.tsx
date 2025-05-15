import * as React from 'react'
import { Avatar, Tag } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import { UserOutlined } from '@ant-design/icons'

import { TableCellText } from '../../table-cells/table-cell-text/table-cell-text.component'
import { ClientsTableActions, ClientsTableRow } from './clients-table.types'
import { ClientsTableColumnActions } from './clients-table-column-actions/directions-table-column-actions.component'

export function genClientsTableColumns(params: ClientsTableActions): ColumnsType<ClientsTableRow> {
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
      title: 'ФИО',
      dataIndex: 'name',
      key: 'name',
      render: (_, { name }) => <TableCellText text={name} />,
    },
    {
      title: 'Телефон',
      dataIndex: 'phone',
      key: 'phone',
      render: (_, { phone }) => <TableCellText text={phone} />,
    },
    {
      title: 'Абонемент',
      dataIndex: 'loyaltyCard',
      key: 'loyaltyCard',
      render: (_, { loyaltyCard }) => <TableCellText text={loyaltyCard} />,
    },
    {
      title: 'Последнее посещение',
      dataIndex: 'lastVisit',
      key: 'lastVisit',
      render: (_, { lastVisit }) => <TableCellText text={lastVisit} />,
    },
    {
      title: 'Категория',
      dataIndex: 'clientCategory',
      key: 'clientCategory',
      render: (_, { clientCategory }) => <Tag color={clientCategory?.color}>{clientCategory?.name}</Tag>,
    },
    {
      title: 'Действие',
      key: 'action',
      render: (_, record) => (
        <ClientsTableColumnActions id={record.id} name={record.name} onEdit={onEdit} onRemove={onRemove} />
      ),
    },
  ]
}
