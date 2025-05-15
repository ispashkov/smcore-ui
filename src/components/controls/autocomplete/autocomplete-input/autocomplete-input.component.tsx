import * as React from 'react'
import { Input, InputRef } from 'antd'

import { AutocompleteInputProps } from './autocomplete-input.types'

const AutocompleteInputInternal = (props: AutocompleteInputProps, ref: React.Ref<InputRef>) => {
  const { value, placeholder, disabled, onChange } = props

  return <Input ref={ref} value={value} placeholder={placeholder} onChange={onChange} disabled={disabled} />
}

export const AutocompleteInput = React.forwardRef(AutocompleteInputInternal)
