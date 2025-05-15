import * as React from 'react'

export interface AutocompleteInputBaseProps {
  value?: string
  placeholder?: string
  disabled?: boolean
  onChange: React.ChangeEventHandler
}

export type AutocompleteInputProps = AutocompleteInputBaseProps
