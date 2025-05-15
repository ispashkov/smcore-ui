import * as React from 'react'

import { PageLoader } from '../../components/page/page-loader/page-loader.component'
import { ClientsPageSearch } from './clients-page-search/clients-page-search.component'
import { ClientsPageTopBar } from './clients-page-top-bar/clients-page-top-bar.component'
import { ClientsPageTable } from './clients-page-table/clients-page-table.component'
import { useClientsPage } from './clients-page.hook'

export const ClientsPage = () => {
  const { isLoaded, isLoading } = useClientsPage()

  if (!isLoaded && isLoading) {
    return <PageLoader />
  }

  return (
    <>
      <ClientsPageSearch />
      <ClientsPageTopBar />
      <ClientsPageTable />
    </>
  )
}
