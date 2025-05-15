import * as React from 'react'
import { Avatar } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import { UserOutlined } from '@ant-design/icons'

import { formatFullName } from '../../../format/text.format'
import { EmployeesTableColumnActions } from './employees-table-column-actions/employees-table-column-actions.component'
import { EmployeesTableActions, EmployeesTableRow } from './employees-table.types'

export function genEmployeesTableColumns(params: EmployeesTableActions): ColumnsType<EmployeesTableRow> {
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
      key: 'name',
      render: ({ firstName, lastName, middleName }) => formatFullName(firstName, lastName, middleName),
    },
    {
      title: 'Дата рождения',
      dataIndex: 'birthDate',
      key: 'birthDate',
      render: text => text || '-',
    },
    {
      title: 'Телефон',
      key: 'phone',
      dataIndex: 'phone',
      render: text => text || '-',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      render: text => text || '-',
    },
    {
      title: 'Организация',
      key: 'franchise',
      dataIndex: 'franchise',
      render: organisation => organisation || '-',
    },
    {
      title: 'Должность',
      key: 'position',
      dataIndex: 'position',
      render: position => position || 'Нет студий',
    },
    {
      title: 'Доступ',
      key: 'studiosCount',
      dataIndex: 'studiosCount',
      render: text => text || 'Нет студий',
    },
    {
      title: 'Действие',
      key: 'action',
      render: (_, record) => <EmployeesTableColumnActions {...record} onEdit={onEdit} onRemove={onRemove} />,
    },
  ]
}
