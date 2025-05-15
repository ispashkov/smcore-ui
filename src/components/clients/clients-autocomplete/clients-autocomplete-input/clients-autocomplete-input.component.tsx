import * as React from 'react'
import { InputRef } from 'antd'

import { AutocompleteInputProps } from '../../../controls/autocomplete/autocomplete-input/autocomplete-input.types'
import { AutocompleteInput } from '../../../controls/autocomplete/autocomplete-input/autocomplete-input.component'

const ClientsAutocompleteInputInternal = (props: AutocompleteInputProps, ref: React.Ref<InputRef>) => {
  const { value, placeholder, disabled, onChange } = props

  return <AutocompleteInput value={value} placeholder={placeholder} disabled={disabled} onChange={onChange} ref={ref} />
}

export const ClientsAutocompleteInput = React.forwardRef(
  ClientsAutocompleteInputInternal
) as typeof ClientsAutocompleteInputInternal
