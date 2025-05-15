import * as React from 'react'
import { UseComboboxGetItemPropsOptions } from 'downshift'

import { Nullable } from '../../../../../types/lang.types'
import {
  AutocompleteOptionDataItem,
  AutocompleteOptionProps,
} from '../../autocomplete-option/autocomplete-option.types'

export interface AutocompleteOptionsListContentProps<Option extends AutocompleteOptionDataItem> {
  options?: Nullable<Option[]>
  selectedItem: Option | null
  highlightedIndex: number
  getItemProps: (options: UseComboboxGetItemPropsOptions<Option>) => React.LiHTMLAttributes<HTMLLIElement>
  OptionComponent: React.FC<AutocompleteOptionProps<Option>>
}
