import { useCombobox, UseComboboxState, UseComboboxStateChange, UseComboboxStateChangeOptions } from 'downshift'
import { useKey } from 'react-use'

import { useDebouncedCallback } from '../../../hooks/use-debounce-callback.hook'
import { AutocompleteProps } from './autocomplete.types'
import { AutocompleteOptionDataItem } from './autocomplete-option/autocomplete-option.types'
import { useControlled } from '../../../hooks/use-controlled.hook'
import { isDef } from '../../../types/lang.types'

type UseAutocompleteProps<Option extends AutocompleteOptionDataItem> = Pick<
  AutocompleteProps<Option>,
  'value' | 'defaultValue' | 'options' | 'onChange' | 'onSelect' | 'onInputChange' | 'delayTime' | 'itemToStringFn'
>

export function useAutocomplete<Option extends AutocompleteOptionDataItem>(props: UseAutocompleteProps<Option>) {
  const { value: valueProp, defaultValue, options, delayTime = 300 } = props
  const { itemToStringFn } = props
  const { onChange, onInputChange, onSelect } = props

  const [value] = useControlled({
    controlled: valueProp,
    default: defaultValue,
  })
  const onInputChangeHandler = (value: string): void => {
    onInputChange?.(value)
  }

  const onInputChangeDebounced = useDebouncedCallback(onInputChangeHandler, delayTime)

  const { inputValue, selectedItem, isOpen, closeMenu, getMenuProps, highlightedIndex, getItemProps, getInputProps } =
    useCombobox<Option>({
      inputValue: value,
      items: options || [],
      itemToString: itemToStringFn,
      stateReducer: (
        state: UseComboboxState<Option>,
        actionAndChanges: UseComboboxStateChangeOptions<Option>
      ): Partial<UseComboboxState<Option>> => {
        const { type, changes } = actionAndChanges
        const { inputValue } = changes

        switch (type) {
          case useCombobox.stateChangeTypes.InputChange:
            if (inputValue?.length) {
              return changes
            }

            return {
              ...changes,
              selectedItem: null,
            }
          default:
            return changes
        }
      },
      onStateChange: (changes: UseComboboxStateChange<Option>): void => {
        const { type, inputValue, selectedItem } = changes

        if (type === useCombobox.stateChangeTypes.InputChange && isDef(inputValue)) {
          onInputChangeDebounced(inputValue)
          onChange?.(inputValue)
        }

        if (type === useCombobox.stateChangeTypes.ItemClick) {
          onSelect?.(selectedItem)
        }
      },
    })

  useKey('Escape', closeMenu)

  return {
    isOpen,
    inputValue,
    selectedItem,
    highlightedIndex,
    getMenuProps,
    getItemProps,
    getInputProps,
  }
}
