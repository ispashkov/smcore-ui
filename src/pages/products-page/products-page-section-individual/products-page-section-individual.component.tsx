import * as React from 'react'

import { PageLoader } from '../../../components/page/page-loader/page-loader.component'
import { ProductsPageSectionIndividualTopBar } from './products-page-section-individual-top-bar/products-page-section-individual-top-bar.component'
import { ProductsPageSectionIndividualTable } from './products-page-section-individual-table/products-page-section-individual-table.component'
import { useProductsPageSectionIndividual } from './products-page-section-individual.hook'

export const ProductsPageSectionIndividual: React.FC = () => {
  const { isLoaded, isLoading } = useProductsPageSectionIndividual()

  if (!isLoaded && isLoading) {
    return <PageLoader />
  }

  return (
    <>
      <ProductsPageSectionIndividualTopBar />
      <ProductsPageSectionIndividualTable />
    </>
  )
}
