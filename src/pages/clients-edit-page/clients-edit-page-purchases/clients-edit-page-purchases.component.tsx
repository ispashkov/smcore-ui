import * as React from 'react'

import { PageEmpty } from '../../../components/page/page-empty/page-empty.component'
import { PageLoader } from '../../../components/page/page-loader/page-loader.component'
import { ClientsTransactionsTable } from '../../../components/clients/clients-transactions-table/clients-transactions-table.component'
import { isDef } from '../../../types/lang.types'
import { useClientsEditPagePurchases } from './clients-edit-page-purchases.hook'

export const ClientsEditPagePurchases: React.FC = () => {
  const { data, pagination, isLoading, isLoaded, onChangePageHandler, onChangePageSizeHandler, onBarcodeHandler } =
    useClientsEditPagePurchases()

  if (!isLoaded && isLoading) {
    return <PageLoader />
  }

  if (isDef(data)) {
    return (
      <ClientsTransactionsTable
        data={data}
        pagination={pagination}
        loading={isLoading}
        onChangePage={onChangePageHandler}
        onChangePageSize={onChangePageSizeHandler}
        onBarcode={onBarcodeHandler}
      />
    )
  }

  return <PageEmpty description="Покупки не найдены" />
}
