import { ClientsAutocompleteOptionDataItem } from './clients-autocomplete-option/clients-autocomplete-option.types'

export const AutocompleteOptionBaseListMock: ClientsAutocompleteOptionDataItem[] = [
  {
    name: 'Иван Иванов',
    phone: '+7(999)-999-99-99',
  },
  {
    name: 'Петр Петров',
    phone: '+7(888)-888-88-88',
  },
  {
    name: 'Федр Федоров',
    phone: '+7(777)-777-77-77',
  },
].map(
  (it): ClientsAutocompleteOptionDataItem => ({
    slug: it.phone,
    label: it.name,
    phone: it.phone,
  })
)
