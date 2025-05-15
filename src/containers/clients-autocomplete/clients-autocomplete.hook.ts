import * as React from 'react'
import { Form } from 'antd'
import { AxiosResponse } from 'axios'

import { api } from '../../api/api'
import { Pagination } from '../../api/types/api.types'
import { ClientsApi } from '../../api/types/clients-api.types'
import { isDef, Nullable } from '../../types/lang.types'
import { mapClientsToClientsAutocompleteOptionDataItems } from '../../mapping/clients.mapping'
import { ClientsAutocompleteOptionDataItem } from '../../components/clients/clients-autocomplete/clients-autocomplete-option/clients-autocomplete-option.types'
import { ClientsAutocompleteProps } from './clients-autocomplete.types'

export function useClientsAutocomplete<FormValues>(props: ClientsAutocompleteProps<FormValues>) {
  const { form, name } = props

  const value = Form.useWatch(name, form)

  const [clients, setClients] = React.useState<Nullable<ClientsApi.Client[]>>(null)
  const [loading, setLoading] = React.useState<boolean>(false)

  const options = React.useMemo(() => mapClientsToClientsAutocompleteOptionDataItems(clients), [clients])

  const onChangeHandler = React.useCallback(
    (value?: string): void => {
      form.setFieldValue(name, value)
    },
    [form, name]
  )

  const onSelectHandler = React.useCallback(
    (option: Nullable<ClientsAutocompleteOptionDataItem>): void => {
      if (isDef(option)) {
        form.setFieldValue(name, option.phone)
      }
    },
    [form, name]
  )

  const onSearchHandler = React.useCallback((value?: string): void => {
    setLoading(true)

    api.clientsService
      .fetchAll({ phone: value, size: 10 })
      .then((response: AxiosResponse<Pagination<ClientsApi.Client>>): void => setClients(response?.data.content))
      .catch(error => console.log(error))
      .finally(() => setLoading(false))
  }, [])

  return {
    value,
    options,
    loading,
    onChangeHandler,
    onSearchHandler,
    onSelectHandler,
  }
}
