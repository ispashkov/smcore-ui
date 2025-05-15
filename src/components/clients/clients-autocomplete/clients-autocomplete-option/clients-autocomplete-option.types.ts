import {
  AutocompleteOptionDataItem,
  AutocompleteOptionProps,
} from '../../../controls/autocomplete/autocomplete-option/autocomplete-option.types'

export type ClientsAutocompleteOptionProps = AutocompleteOptionProps<ClientsAutocompleteOptionDataItem>

export interface ClientsAutocompleteOptionDataItem extends AutocompleteOptionDataItem {
  phone: string
}
