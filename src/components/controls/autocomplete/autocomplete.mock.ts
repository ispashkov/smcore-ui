import { AutocompleteOptionDataItem } from './autocomplete-option/autocomplete-option.types'

export const AutocompleteOptionBaseListMock: AutocompleteOptionDataItem[] = [
  'Иван Иванов',
  'Петр Петров',
  'Федр Федоров',
].map(
  (it): AutocompleteOptionDataItem => ({
    slug: it,
    label: it,
  })
)
