import * as React from 'react'

import { isDef } from '../../../types/lang.types'
import { PageEmpty } from '../../../components/page/page-empty/page-empty.component'
import { PageLoader } from '../../../components/page/page-loader/page-loader.component'
import { ClientsSubscriptionsTable } from '../../../components/clients/clients-subscriptions-table/clients-subscriptions-table.component'
import { useClientsEditPageSubscriptions } from './clients-edit-page-subscriptions.hook'

export const ClientsEditPageSubscriptions: React.FC = () => {
  const {
    data,
    pagination,
    isLoading,
    isLoaded,
    onChangePageHandler,
    onChangePageSizeHandler,
    onBarcodeHandler,
    onPauseHandler,
    onResumeHandler,
    onRefundHandler,
  } = useClientsEditPageSubscriptions()

  if (!isLoaded && isLoading) {
    return <PageLoader />
  }

  if (isDef(data)) {
    return (
      <ClientsSubscriptionsTable
        data={data}
        pagination={pagination}
        loading={isLoading}
        onChangePage={onChangePageHandler}
        onChangePageSize={onChangePageSizeHandler}
        onBarcode={onBarcodeHandler}
        onPause={onPauseHandler}
        onResume={onResumeHandler}
        onRefund={onRefundHandler}
      />
    )
  }

  return <PageEmpty description="Абонементы не найдены" />
}
