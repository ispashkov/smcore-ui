import * as React from 'react'

import { PageLoader } from '../../../components/page/page-loader/page-loader.component'
import { ProductsPageSectionServicesTopBar } from './products-page-section-services-top-bar/products-page-section-services-top-bar.component'
import { ProductsPageSectionServicesTable } from './products-page-section-services-table/products-page-section-services-table.component'
import { useProductsPageSectionServices } from './products-page-section-services.hook'

export const ProductsPageSectionServices: React.FC = () => {
  const { isLoaded, isLoading } = useProductsPageSectionServices()

  if (!isLoaded && isLoading) {
    return <PageLoader />
  }

  return (
    <>
      <ProductsPageSectionServicesTopBar />
      <ProductsPageSectionServicesTable />
    </>
  )
}
