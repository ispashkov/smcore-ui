import * as React from 'react'
import { Typography } from 'antd'

import { ProductsPageMenu } from './products-page-menu/products-page-menu.component'
import { ProductsPageSectionGroup } from './products-page-section-group/products-page-section-group.component'
import { ProductsPageSectionIndividual } from './products-page-section-individual/products-page-section-individual.component'
import { ProductsPageSectionServices } from './products-page-section-services/products-page-section-services.component'
import { useProductsPage } from './products-page.hook'
import { ProductsPageSection } from './products-page.types'

export const ProductsPage: React.FC = () => {
  const { section } = useProductsPage()

  return (
    <>
      <Typography.Title level={2}>Абонементы и услуги</Typography.Title>
      <ProductsPageMenu />
      {section === ProductsPageSection.GROUP_SUBSCRIPTIONS && <ProductsPageSectionGroup />}
      {section === ProductsPageSection.INDIVIDUAL_SUBSCRIPTIONS && <ProductsPageSectionIndividual />}
      {section === ProductsPageSection.SERVICES && <ProductsPageSectionServices />}
    </>
  )
}
