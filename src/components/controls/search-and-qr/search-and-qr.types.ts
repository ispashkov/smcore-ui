import * as React from 'react'

import { Nullable } from '../../../types/lang.types'
import {
  AutocompleteOptionDataItem,
  AutocompleteOptionProps,
} from '../autocomplete/autocomplete-option/autocomplete-option.types'

export interface SearchAndQrProps<Option extends AutocompleteOptionDataItem> {
  className?: string
  value?: string
  placeholder?: string
  options?: Nullable<Option[]>
  loading?: boolean
  onChange?: (value: string) => void
  onInputChange?: (value: string) => void
  onSelect?: (option: Nullable<Option>) => void
  OptionComponent?: React.FC<AutocompleteOptionProps<Option>>
}
