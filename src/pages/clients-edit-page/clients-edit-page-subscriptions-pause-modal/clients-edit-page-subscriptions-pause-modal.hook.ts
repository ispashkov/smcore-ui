import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form } from 'antd'

import { ClientsSubscriptionsPauseFormValues } from '../../../components/clients/clients-subscriptions-pause-form/clients-subscriptions-pause-form.types'
import { getClientsEditPageSubscriptionsPauseModalIsLoading } from '../../../store/pages/clients-edit-page/clients-edit-page-subscriptions-pause-modal/clients-edit-page-subscriptions-pause-modal.selectors'
import { clientsEditPageSubscriptionsPauseModalActions } from '../../../store/pages/clients-edit-page/clients-edit-page-subscriptions-pause-modal/clients-edit-page-subscriptions-pause-modal.slice'
import { modalActions } from '../../../store/common/modal/modal.slice'

export function useClientsEditPageSubscriptionsPauseModal(clientId: string, subscriptionId: string) {
  const [form] = Form.useForm<ClientsSubscriptionsPauseFormValues>()

  const dispatch = useDispatch()

  const isLoading = useSelector(getClientsEditPageSubscriptionsPauseModalIsLoading)

  React.useEffect(() => {
    return () => {
      dispatch(clientsEditPageSubscriptionsPauseModalActions.reset())
    }
  }, [dispatch])

  const onSubmitHandler = React.useCallback(
    (clientsSubscriptionsPauseFormValues: ClientsSubscriptionsPauseFormValues): void => {
      dispatch(
        clientsEditPageSubscriptionsPauseModalActions.pause({
          clientId,
          subscriptionId,
          clientsSubscriptionsPauseFormValues,
        })
      )
    },
    [clientId, dispatch, subscriptionId]
  )

  const onCancelHandler = React.useCallback((): void => {
    dispatch(modalActions.closeLast())
  }, [dispatch])

  return {
    form,
    isLoading,
    onSubmitHandler,
    onCancelHandler,
  }
}
