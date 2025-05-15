import * as React from 'react'

import { PageLoader } from '../../components/page/page-loader/page-loader.component'
import { ClientsEditPageBack } from './clients-edit-page-back/clients-edit-page-back.component'
import { ClientsEditPageInfo } from './clients-edit-page-info/clients-edit-page-info.component'
import { ClientsEditPageMenu } from './clients-edit-page-menu/clients-edit-page-menu.component'
import { ClientsEditPageOverview } from './clients-edit-page-overview/clients-edit-page-overview.component'
import { ClientsEditPageBookingsActive } from './clients-edit-page-bookings-active/clients-edit-page-bookings-active.component'
import { ClientsEditPageBookingsHistory } from './clients-edit-page-bookings-history/clients-edit-page-bookings-history.component'
import { ClientsEditPagePurchases } from './clients-edit-page-purchases/clients-edit-page-purchases.component'
import { ClientsEditPageSubscriptions } from './clients-edit-page-subscriptions/clients-edit-page-subscriptions.component'
import { useClientsEditPage } from './clients-edit-page.hook'
import { ClientsEditPageSection } from './clients-edit-page.types'
import './clients-edit-page.styles.less'

export const ClientsEditPage = () => {
  const { isLoaded, isLoading, section } = useClientsEditPage()

  if (!isLoaded || isLoading) {
    return <PageLoader />
  }

  return (
    <>
      <ClientsEditPageBack />
      <ClientsEditPageInfo />
      <ClientsEditPageMenu />

      {section === ClientsEditPageSection.OVERVIEW && <ClientsEditPageOverview />}
      {section === ClientsEditPageSection.BOOKINGS_HISTORY && <ClientsEditPageBookingsHistory />}
      {section === ClientsEditPageSection.BOOKINGS_ACTIVE && <ClientsEditPageBookingsActive />}
      {section === ClientsEditPageSection.PURCHASES && <ClientsEditPagePurchases />}
      {section === ClientsEditPageSection.SUBSCRIPTIONS && <ClientsEditPageSubscriptions />}
    </>
  )
}
