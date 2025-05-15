import { AutocompleteOptionDataItem } from './autocomplete-option/autocomplete-option.types'

export function genAutocompleteItemToString<Option extends AutocompleteOptionDataItem>(item: Option | null): string {
  return item ? item.label : ''
}
