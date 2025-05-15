import * as React from 'react'

import { ClientsAutocomplete } from '../../components/clients/clients-autocomplete/clients-autocomplete.component'
import { useClientsAutocomplete } from './clients-autocomplete.hook'
import { ClientsAutocompleteProps } from './clients-autocomplete.types'

export const ClientsAutocompleteContainer = <Form,>(props: ClientsAutocompleteProps<Form>) => {
  const { className } = props
  const { form, name = 'phone', disabled } = props

  const { value, options, loading, onChangeHandler, onSearchHandler, onSelectHandler } = useClientsAutocomplete({
    name,
    form,
  })

  return (
    <ClientsAutocomplete
      className={className}
      value={value}
      options={options}
      loading={loading}
      disabled={disabled}
      onChange={onChangeHandler}
      onInputChange={onSearchHandler}
      onSelect={onSelectHandler}
    />
  )
}
