import * as React from 'react'
import { Button } from 'antd'
import { BarcodeOutlined } from '@ant-design/icons'

import { Search } from '../../../controls/search/search.component'
import './transactions-products-modal-search.styles.less'

interface Props {
  onChange?: (value: string) => void
}

export const TransactionsProductsModalSearch: React.FC<Props> = props => {
  const { onChange } = props

  return (
    <div className="transactions-products-modal-search">
      <Search
        placeholder="Поиск по ФИО, номеру телефона, емайл, названию товара, номер карты лояльности"
        onChange={onChange}
      />

      <Button icon={<BarcodeOutlined />} type="primary" size="large">
        Штрих - код
      </Button>
    </div>
  )
}
