import * as React from 'react'

export type AutocompleteOptionProps<Option extends AutocompleteOptionDataItem> = AutocompleteOptionBaseProps & Option

export interface AutocompleteOptionBaseProps extends React.LiHTMLAttributes<HTMLLIElement> {
  isSelected: boolean
  isHighlighted: boolean
}

export interface AutocompleteOptionDataItem {
  slug: AutocompleteOptionSlug
  label: string
}

export type AutocompleteOptionSlug = string
