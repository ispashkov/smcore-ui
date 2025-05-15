import * as React from 'react'

import { formatText } from '../../../../format/text.format'
import { ClientsAutocompleteOptionProps } from './clients-autocomplete-option.types'
import './clients-autocomplete-option.styles.less'

export const ClientsAutocompleteOptionInternal = (
  props: ClientsAutocompleteOptionProps,
  ref: React.Ref<HTMLLIElement>
) => {
  const { label, phone, isSelected, isHighlighted, ...restProps } = props

  return (
    <li
      className="ant-dropdown-menu-item ant-dropdown-menu-item-only-child clients-autocomplete-option"
      ref={ref}
      {...restProps}
    >
      <span className="ant-dropdown-menu-title-content clients-autocomplete-option__phone">{formatText(phone)}</span>
      <span className="ant-dropdown-menu-title-content">{formatText(label)}</span>
    </li>
  )
}

export const ClientsAutocompleteOption = React.forwardRef(
  ClientsAutocompleteOptionInternal
) as typeof ClientsAutocompleteOptionInternal
