import * as React from 'react'

export interface AutocompleteDropdownBaseProps {
  isOpen?: boolean
}

export type AutocompleteDropdownProps = React.PropsWithChildren<AutocompleteDropdownBaseProps>
