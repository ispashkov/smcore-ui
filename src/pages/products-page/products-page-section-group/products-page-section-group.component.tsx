import * as React from 'react'

import { PageLoader } from '../../../components/page/page-loader/page-loader.component'
import { ProductsPageSectionGroupTopBar } from './products-page-section-group-top-bar/products-page-section-group-top-bar.component'
import { ProductsPageSectionGroupTable } from './products-page-section-group-table/products-page-section-group-table.component'
import { useProductsPageSectionGroup } from './products-page-section-group.hook'

export const ProductsPageSectionGroup: React.FC = () => {
  const { isLoaded, isLoading } = useProductsPageSectionGroup()

  if (!isLoaded && isLoading) {
    return <PageLoader />
  }

  return (
    <>
      <ProductsPageSectionGroupTopBar />
      <ProductsPageSectionGroupTable />
    </>
  )
}
