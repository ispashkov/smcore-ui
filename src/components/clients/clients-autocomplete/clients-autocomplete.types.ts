import { AutocompleteProps } from '../../controls/autocomplete/autocomplete.types'
import { ClientsAutocompleteOptionDataItem } from './clients-autocomplete-option/clients-autocomplete-option.types'

export type ClientsAutocompleteProps = Pick<
  AutocompleteProps<ClientsAutocompleteOptionDataItem>,
  | 'value'
  | 'defaultValue'
  | 'options'
  | 'onChange'
  | 'onInputChange'
  | 'onSelect'
  | 'className'
  | 'loading'
  | 'disabled'
>
