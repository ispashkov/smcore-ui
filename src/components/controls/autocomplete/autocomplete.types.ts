import * as React from 'react'

import { Nullable } from '../../../types/lang.types'
import {
  AutocompleteOptionDataItem,
  AutocompleteOptionProps,
  AutocompleteOptionSlug,
} from './autocomplete-option/autocomplete-option.types'
import { AutocompleteInputProps } from './autocomplete-input/autocomplete-input.types'
import { AutocompleteDropdownProps } from './autocomplete-dropdown/autocomplete-dropdown.types'
import { AutocompleteOptionsListProps } from './autocomplete-options-list/autocomplete-options-list.types'

export interface AutocompleteProps<Option extends AutocompleteOptionDataItem> {
  className?: string
  value?: string
  defaultValue?: string
  options?: Nullable<Option[]>
  onInputChange?: (value: string) => void
  onChange?: (value: string) => void
  onSelect?: (option: Nullable<Option>) => void
  itemToStringFn?: (item: Option | null) => string
  selectedSlug?: AutocompleteOptionSlug
  selectedOption?: Option
  delayTime?: number
  disabled?: boolean
  loading?: boolean
  placeholder?: string
  InputComponent?: React.FC<AutocompleteInputProps>
  DropdownComponent?: React.FC<AutocompleteDropdownProps>
  OptionsListComponent?: React.FC<AutocompleteOptionsListProps<Option>>
  OptionComponent?: React.FC<AutocompleteOptionProps<Option>>
}
