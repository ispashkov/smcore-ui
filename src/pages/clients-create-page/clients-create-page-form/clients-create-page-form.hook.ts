import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form } from 'antd'

import { ClientsFormValues, ClientsFormValuesDTO } from '../../../components/clients/clients-form/clients-form.types'
import {
  getClientsCreatePageCategoryOptions,
  getClientsCreatePageIsCreating,
  getClientsCreatePageIsLoading,
} from '../../../store/pages/clients-create-page/clients-create-page.selectors'
import { clientsCreatePageActions } from '../../../store/pages/clients-create-page/clients-create-page.slice'

export function useClientsCreatePageForm() {
  const [form] = Form.useForm<ClientsFormValues>()

  const dispatch = useDispatch()

  const isLoading = useSelector(getClientsCreatePageIsLoading)
  const isCreating = useSelector(getClientsCreatePageIsCreating)
  const categoriesOptions = useSelector(getClientsCreatePageCategoryOptions)

  const onFinishHandler = React.useCallback(
    (values: ClientsFormValuesDTO): void => {
      dispatch(clientsCreatePageActions.createClient(values))
    },
    [dispatch]
  )

  return {
    form,
    isLoading,
    isCreating,
    categoriesOptions,
    onFinishHandler,
  }
}
