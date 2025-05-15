import * as React from 'react'
import { useHistory } from 'react-router-dom'
import { Col, Row, Tabs } from 'antd'

import { formatProductsPageSectionName } from '../../../format/text.format'
import { genProductsPagePath } from '../../../format/path.format'
import { validateStrEnumValue } from '../../../utils/enum.utils'
import { isDef } from '../../../types/lang.types'
import { useProductsPageParams } from '../products-page-hooks/products-page-params.hook'
import { ProductsPageSection } from '../products-page.types'

export const ProductsPageMenu: React.FC = () => {
  const { push } = useHistory()

  const { section } = useProductsPageParams()

  const onChangeHandler = React.useCallback(
    (value: string) => {
      const section = validateStrEnumValue<ProductsPageSection>(ProductsPageSection, value)

      if (isDef(section)) {
        push(genProductsPagePath(section))
      }
    },
    [push]
  )

  return (
    <Row justify="center" align="middle">
      <Col span={24}>
        <Tabs activeKey={section} onChange={onChangeHandler}>
          <Tabs.TabPane
            tab={formatProductsPageSectionName(ProductsPageSection.GROUP_SUBSCRIPTIONS)}
            key={ProductsPageSection.GROUP_SUBSCRIPTIONS}
          />
          <Tabs.TabPane
            tab={formatProductsPageSectionName(ProductsPageSection.INDIVIDUAL_SUBSCRIPTIONS)}
            key={ProductsPageSection.INDIVIDUAL_SUBSCRIPTIONS}
          />
          <Tabs.TabPane
            tab={formatProductsPageSectionName(ProductsPageSection.SERVICES)}
            key={ProductsPageSection.SERVICES}
          />
        </Tabs>
      </Col>
    </Row>
  )
}
