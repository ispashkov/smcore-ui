import * as React from 'react'

import { AutocompleteLoader } from '../autocomplete-loader/autocomplete-loader.component'
import { AutocompleteOptionDataItem } from '../autocomplete-option/autocomplete-option.types'
import { AutocompleteOptionsListContent } from './autocomplete-options-list-content/autocomplete-options-list-content.component'
import { AutocompleteOptionsListProps } from './autocomplete-options-list.types'

export const AutocompleteOptionsList = <Option extends AutocompleteOptionDataItem>(
  props: AutocompleteOptionsListProps<Option>
) => {
  const { options, selectedItem, highlightedIndex, getItemProps } = props
  const { loading } = props
  const { OptionComponent } = props

  return (
    <ul className="ant-dropdown-menu ant-dropdown-menu-root ant-dropdown-menu-vertical ant-dropdown-menu-dark">
      {loading ? (
        <AutocompleteLoader />
      ) : (
        <AutocompleteOptionsListContent
          options={options}
          selectedItem={selectedItem}
          highlightedIndex={highlightedIndex}
          getItemProps={getItemProps}
          OptionComponent={OptionComponent}
        />
      )}
    </ul>
  )
}
