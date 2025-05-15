import * as React from 'react'
import { AxiosResponse } from 'axios'
import { useHistory } from 'react-router-dom'

import { api } from '../../api/api'
import { isDef, Nullable } from '../../types/lang.types'
import { SearchApi } from '../../api/types/search-api.types'
import { genClientsEditPagePath } from '../../format/path.format'
import { mapSearchItemsToClientsAutocompleteOptionDataItems } from '../../mapping/search.mapping'
import { ClientsAutocompleteOptionDataItem } from '../../components/clients/clients-autocomplete/clients-autocomplete-option/clients-autocomplete-option.types'

export function useClientsSearch() {
  const { push } = useHistory()

  const [response, setResponse] = React.useState<Nullable<AxiosResponse<SearchApi.SearchItem[]>>>(null)
  const [loading, setLoading] = React.useState<boolean>(false)

  const options = React.useMemo(
    () => mapSearchItemsToClientsAutocompleteOptionDataItems(response?.data),
    [response?.data]
  )

  const onInputChangeHandler = React.useCallback((value: string): void => {
    setLoading(true)

    api.searchService
      .fetchClients({ q: value })
      .then(setResponse)
      .finally(() => setLoading(false))
  }, [])

  const onSelectHandler = React.useCallback(
    (option: Nullable<ClientsAutocompleteOptionDataItem>): void => {
      if (isDef(option)) {
        push(genClientsEditPagePath({ id: option.slug }))
      }
    },
    [push]
  )

  return {
    options,
    loading,

    onInputChangeHandler,
    onSelectHandler,
  }
}
