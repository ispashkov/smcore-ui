import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form } from 'antd'

import { isDef } from '../../../types/lang.types'
import { ClientsFormValues, ClientsFormValuesDTO } from '../../../components/clients/clients-form/clients-form.types'
import { getClientsEditPageCommonClientsFormValues } from '../../../store/pages/clients-edit-page/clients-edit-page-common/clients-edit-page-common.selectors'
import {
  getClientsEditPageOverviewCategoryOptions,
  getClientsEditPageOverviewIsLoaded,
  getClientsEditPageOverviewIsLoading,
  getClientsEditPageOverviewIsUpdating,
} from '../../../store/pages/clients-edit-page/clients-edit-page-overview/clients-edit-page-overview.selectors'
import { clientsEditPageOverviewActions } from '../../../store/pages/clients-edit-page/clients-edit-page-overview/clients-edit-page-overview.slice'
import { useClientsEditPageParams } from '../clients-edit-page-hooks/clients-edit-page-params.hook'

export function useClientsEditPageOverview() {
  const [form] = Form.useForm<ClientsFormValues>()

  const { id } = useClientsEditPageParams()

  const dispatch = useDispatch()

  const clientsFormValues = useSelector(getClientsEditPageCommonClientsFormValues)
  const categoriesOptions = useSelector(getClientsEditPageOverviewCategoryOptions)

  const isLoaded = useSelector(getClientsEditPageOverviewIsLoaded)
  const isLoading = useSelector(getClientsEditPageOverviewIsLoading)
  const isUpdating = useSelector(getClientsEditPageOverviewIsUpdating)

  React.useEffect(() => {
    dispatch(clientsEditPageOverviewActions.fetchClientsCategories())

    return () => {
      dispatch(clientsEditPageOverviewActions.reset())
    }
  }, [dispatch])

  React.useEffect((): void => {
    if (isDef(clientsFormValues)) {
      form.setFieldsValue(clientsFormValues)
    }
  }, [form, clientsFormValues])

  const onFinishHandler = React.useCallback(
    (clientsFormValues: ClientsFormValuesDTO): void => {
      dispatch(
        clientsEditPageOverviewActions.updateClient({
          clientId: id,
          clientsFormValues,
        })
      )
    },
    [dispatch, id]
  )

  return {
    form,
    categoriesOptions,

    isLoaded,
    isLoading,
    isUpdating,

    onFinishHandler,
  }
}
