import * as React from 'react'

import { PageEmpty } from '../../../components/page/page-empty/page-empty.component'
import { PageLoader } from '../../../components/page/page-loader/page-loader.component'
import { ClientsBookingsTableHistory } from '../../../components/clients/clients-bookings-tables/clients-bookings-table-history/clients-bookings-table-history.component'
import { isDef } from '../../../types/lang.types'
import { useClientsEditPageBookingsHistory } from './clients-edit-page-bookings-history.hook'

export const ClientsEditPageBookingsHistory: React.FC = () => {
  const { data, pagination, isLoading, isLoaded, onChangePageHandler, onChangePageSizeHandler, onBarcodeHandler } =
    useClientsEditPageBookingsHistory()

  if (!isLoaded && isLoading) {
    return <PageLoader />
  }

  if (isDef(data)) {
    return (
      <ClientsBookingsTableHistory
        data={data}
        pagination={pagination}
        loading={isLoading}
        onChangePage={onChangePageHandler}
        onChangePageSize={onChangePageSizeHandler}
        onBarcode={onBarcodeHandler}
      />
    )
  }

  return <PageEmpty description="История посещений не найдена" />
}
