import * as React from 'react'

import { Autocomplete } from '../../controls/autocomplete/autocomplete.component'
import { ClientsAutocompleteInput } from './clients-autocomplete-input/clients-autocomplete-input.component'
import { ClientsAutocompleteOption } from './clients-autocomplete-option/clients-autocomplete-option.component'
import { genClientsAutocompleteItemToString, genClientsAutocompleteNormalizedValue } from './clients-autocomplete.utils'
import { ClientsAutocompleteProps } from './clients-autocomplete.types'

export const ClientsAutocomplete: React.FC<ClientsAutocompleteProps> = props => {
  const { className } = props
  const { value, defaultValue, options } = props
  const { disabled, loading } = props
  const { onInputChange, onChange, onSelect } = props

  const onInputChangeHandler = React.useCallback(
    (value: string): void => {
      const phone = genClientsAutocompleteNormalizedValue(value)
      onInputChange?.(phone)
    },
    [onInputChange]
  )

  return (
    <Autocomplete
      className={className}
      value={value}
      defaultValue={defaultValue}
      options={options}
      onChange={onChange}
      onInputChange={onInputChangeHandler}
      onSelect={onSelect}
      loading={loading}
      disabled={disabled}
      itemToStringFn={genClientsAutocompleteItemToString}
      InputComponent={ClientsAutocompleteInput}
      OptionComponent={ClientsAutocompleteOption}
    />
  )
}
