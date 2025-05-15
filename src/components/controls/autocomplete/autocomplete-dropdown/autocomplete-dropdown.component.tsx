import * as React from 'react'

import { AutocompleteDropdownProps } from './autocomplete-dropdown.types'
import './autocomplete-dropdown.styles.less'

const AutocompleteDropdownInternal = (props: AutocompleteDropdownProps, ref: React.Ref<HTMLDivElement>) => {
  const { children } = props
  const { isOpen } = props

  return (
    <div className="ant-dropdown autocomplete-dropdown" ref={ref}>
      {isOpen ? children : null}
    </div>
  )
}

export const AutocompleteDropdown = React.forwardRef(
  AutocompleteDropdownInternal
) as typeof AutocompleteDropdownInternal
