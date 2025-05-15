import * as React from 'react'

import { isDefAndNotEmpty } from '../../../types/lang.types'
import { PageEmpty } from '../../../components/page/page-empty/page-empty.component'
import { ClientsTable } from '../../../components/clients/clients-table/clients-table.component'
import { useClientsPageTable } from './clients-page-table.hook'

export const ClientsPageTable: React.FC = () => {
  const {
    clients,
    pagination,
    isLoading,
    onEditHandler,
    onRemoveHandler,
    onChangePageHandler,
    onChangePageSizeHandler,
  } = useClientsPageTable()

  if (isDefAndNotEmpty(clients)) {
    return (
      <ClientsTable
        data={clients}
        pagination={pagination}
        loading={isLoading}
        onEdit={onEditHandler}
        onRemove={onRemoveHandler}
        onChangePage={onChangePageHandler}
        onChangePageSize={onChangePageSizeHandler}
      />
    )
  }

  return <PageEmpty description="Клиентов не найдено" />
}
