import * as React from 'react'

import { NString } from '../../../types/lang.types'
import { ProductsTag } from '../products-tag/products-tag.component'
import { ProductsTagI, ProductsTagEvents } from '../products-tag/products-tag.types'

interface Props extends ProductsTagEvents {
  className?: string
  tags: ProductsTagI[]
  selectedId?: NString
}

export const ProductsTagsBar: React.FC<Props> = props => {
  const { tags, selectedId } = props
  const { onSelect, onReset } = props

  return (
    <>
      {tags.map(tag => (
        <ProductsTag
          key={tag.id}
          id={tag.id}
          title={tag.title}
          isSelected={tag.id === selectedId}
          onSelect={onSelect}
          onReset={onReset}
        />
      ))}
    </>
  )
}
