import { isDef, isDefAndNotEmpty, Nullable } from '../types/lang.types'
import { SearchApi } from '../api/types/search-api.types'
import { ClientsAutocompleteOptionDataItem } from '../components/clients/clients-autocomplete/clients-autocomplete-option/clients-autocomplete-option.types'

export function mapSearchItemsToClientsAutocompleteOptionDataItems(
  data: Nullable<SearchApi.SearchItem[]>
): Nullable<ClientsAutocompleteOptionDataItem[]> {
  if (isDefAndNotEmpty(data)) {
    return data.reduce<ClientsAutocompleteOptionDataItem[]>((acc, it) => {
      if (isDef(it)) {
        const clientsAutocompleteOptionDataItem: ClientsAutocompleteOptionDataItem = {
          slug: it.id,
          label: it.details,
          phone: it.label,
        }

        acc.push(clientsAutocompleteOptionDataItem)
      }

      return acc
    }, [])
  }

  return null
}
