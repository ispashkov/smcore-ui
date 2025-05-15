import { AutocompleteOptionDataItem } from '../autocomplete-option/autocomplete-option.types'
import { AutocompleteOptionsListContentProps } from './autocomplete-options-list-content/autocomplete-options-list-content.types'

export type AutocompleteOptionsListProps<Option extends AutocompleteOptionDataItem> = AutocompleteOptionsListBaseProps &
  AutocompleteOptionsListContentProps<Option>

export interface AutocompleteOptionsListBaseProps {
  loading?: boolean
}
