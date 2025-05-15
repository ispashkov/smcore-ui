import * as React from 'react'
import { clsx } from 'clsx'

import { AutocompleteInput } from './autocomplete-input/autocomplete-input.component'
import { AutocompleteDropdown } from './autocomplete-dropdown/autocomplete-dropdown.component'
import { AutocompleteOption } from './autocomplete-option/autocomplete-option.component'
import { AutocompleteOptionsList } from './autocomplete-options-list/autocomplete-options-list.component'
import { genAutocompleteItemToString } from './autocomplete.utils'
import { useAutocomplete } from './autocomplete.hook'
import { AutocompleteOptionDataItem } from './autocomplete-option/autocomplete-option.types'
import { AutocompleteProps } from './autocomplete.types'
import './autocomplete.styles.less'

export const Autocomplete = <Option extends AutocompleteOptionDataItem>(props: AutocompleteProps<Option>) => {
  const { className } = props
  const { value, defaultValue, options } = props
  const { delayTime, disabled = false, loading = false, placeholder = 'Введите значение для поиска' } = props
  const { itemToStringFn = genAutocompleteItemToString } = props
  const { onChange, onInputChange, onSelect } = props
  const {
    InputComponent = AutocompleteInput,
    DropdownComponent = AutocompleteDropdown,
    OptionsListComponent = AutocompleteOptionsList,
    OptionComponent = AutocompleteOption,
  } = props

  const { isOpen, inputValue, selectedItem, highlightedIndex, getMenuProps, getItemProps, getInputProps } =
    useAutocomplete<Option>({
      value,
      defaultValue,
      options,
      delayTime,
      itemToStringFn,
      onInputChange,
      onChange,
      onSelect,
    })

  return (
    <div className={clsx('autocomplete', className)}>
      <InputComponent {...getInputProps({ value: inputValue, disabled, placeholder })} />
      <DropdownComponent isOpen={isOpen} {...getMenuProps()}>
        <OptionsListComponent
          options={options}
          loading={loading}
          selectedItem={selectedItem}
          highlightedIndex={highlightedIndex}
          getItemProps={getItemProps}
          OptionComponent={OptionComponent}
        />
      </DropdownComponent>
    </div>
  )
}
