import { ClientsAutocompleteOptionDataItem } from './clients-autocomplete-option/clients-autocomplete-option.types'

export function genClientsAutocompleteItemToString(item: ClientsAutocompleteOptionDataItem | null): string {
  return item ? item.phone : ''
}

export function genClientsAutocompleteNormalizedValue(value: string): string {
  return value?.replace(/\D/g, '')
}
