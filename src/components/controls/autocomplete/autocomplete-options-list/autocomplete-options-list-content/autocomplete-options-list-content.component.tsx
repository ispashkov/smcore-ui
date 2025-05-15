import * as React from 'react'

import { isDefAndNotEmpty } from '../../../../../types/lang.types'
import { AutocompleteEmpty } from '../../autocomplete-empty/autocomplete-empty.component'
import { AutocompleteOptionDataItem } from '../../autocomplete-option/autocomplete-option.types'
import { AutocompleteOptionsListContentProps } from './autocomplete-options-list-content.types'

export const AutocompleteOptionsListContent = <Option extends AutocompleteOptionDataItem>(
  props: AutocompleteOptionsListContentProps<Option>
) => {
  const { options, selectedItem, highlightedIndex, getItemProps } = props
  const { OptionComponent } = props

  if (isDefAndNotEmpty(options)) {
    return (
      <>
        {options.map((item: Option, index: number) => {
          const key = `${item.slug}_${index}`
          const isSelected = item.slug === selectedItem?.slug
          const isHighlighted = index === highlightedIndex
          const itemProps = getItemProps({
            index,
            item,
          })

          return (
            <OptionComponent key={key} isSelected={isSelected} isHighlighted={isHighlighted} {...item} {...itemProps} />
          )
        })}
      </>
    )
  }

  return <AutocompleteEmpty />
}
