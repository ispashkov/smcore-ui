import * as React from 'react'
import { Tag } from 'antd'
import { PresetColorTypes } from 'antd/lib/_util/colors'

import { ProductsTagEvents, ProductsTagI } from './products-tag.types'
import './products-tag.styles.less'

interface Props extends ProductsTagI, ProductsTagEvents {
  isSelected?: boolean
}

export const ProductsTag: React.FC<Props> = props => {
  const { id, title, isSelected } = props
  const { onSelect, onReset } = props

  const onClickHandler = React.useCallback((): void => {
    onSelect(id)
  }, [id, onSelect])

  const color = PresetColorTypes[Math.floor(Math.random() * PresetColorTypes.length)]

  return (
    <Tag
      className="products-tag"
      color={color}
      onClick={onClickHandler}
      onClose={onReset}
      closable={isSelected}
      visible={true}
    >
      {title}
    </Tag>
  )
}
