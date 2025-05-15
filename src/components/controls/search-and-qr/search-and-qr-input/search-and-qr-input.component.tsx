import * as React from 'react'
import { Input, InputRef } from 'antd'

import { AutocompleteInputProps } from '../../autocomplete/autocomplete-input/autocomplete-input.types'

const SearchAndQrInputInternal = (props: AutocompleteInputProps, ref: React.Ref<InputRef>) => {
  const { value, placeholder, disabled, onChange } = props

  return (
    <Input size="large" ref={ref} value={value} placeholder={placeholder} disabled={disabled} onChange={onChange} />
  )
}

export const SearchAndQrInput = React.forwardRef(SearchAndQrInputInternal) as typeof SearchAndQrInputInternal
