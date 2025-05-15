import * as React from 'react'

import { PageEmpty } from '../../../components/page/page-empty/page-empty.component'
import { PageLoader } from '../../../components/page/page-loader/page-loader.component'
import { ClientsBookingsTableActive } from '../../../components/clients/clients-bookings-tables/clients-bookings-table-active/clients-bookings-table-active.component'
import { isDef } from '../../../types/lang.types'
import { useClientsEditPageBookingsActive } from './clients-edit-page-bookings-active.hook'

export const ClientsEditPageBookingsActive: React.FC = () => {
  const {
    data,
    pagination,
    isLoading,
    isLoaded,
    onChangePageHandler,
    onChangePageSizeHandler,
    onVisitHandler,
    onBarcodeHandler,
    onCancelHandler,
  } = useClientsEditPageBookingsActive()

  if (!isLoaded && isLoading) {
    return <PageLoader />
  }

  if (isDef(data)) {
    return (
      <ClientsBookingsTableActive
        data={data}
        pagination={pagination}
        loading={isLoading}
        onChangePage={onChangePageHandler}
        onChangePageSize={onChangePageSizeHandler}
        onVisit={onVisitHandler}
        onBarcode={onBarcodeHandler}
        onCancel={onCancelHandler}
      />
    )
  }

  return <PageEmpty description="Активные занятия не найдены" />
}
