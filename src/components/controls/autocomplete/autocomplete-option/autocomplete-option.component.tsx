import * as React from 'react'

import { AutocompleteOptionDataItem, AutocompleteOptionProps } from './autocomplete-option.types'
import './autocomplete-option.styles.less'

const AutocompleteOptionInternal = <Option extends AutocompleteOptionDataItem>(
  props: AutocompleteOptionProps<Option>,
  ref: React.Ref<HTMLLIElement>
) => {
  const { label, isSelected, isHighlighted, ...restProps } = props

  return (
    <li className="ant-dropdown-menu-item ant-dropdown-menu-item-only-child" ref={ref} {...restProps}>
      <span className="ant-dropdown-menu-title-content">{label}</span>
    </li>
  )
}

export const AutocompleteOption = React.forwardRef(AutocompleteOptionInternal) as typeof AutocompleteOptionInternal
