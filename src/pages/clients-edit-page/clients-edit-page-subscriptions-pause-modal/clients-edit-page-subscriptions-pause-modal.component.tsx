import * as React from 'react'

import { ClientsSubscriptionsPauseModal } from '../../../components/clients/clients-subscriptions-pause-modal/clients-subscriptions-pause-modal.component'
import { useClientsEditPageSubscriptionsPauseModal } from './clients-edit-page-subscriptions-pause-modal.hook'
import { ClientsEditPageSubscriptionsPauseModalProps } from './clients-edit-page-subscriptions-pause-modal.types'

export const ClientsEditPageSubscriptionsPauseModal: React.FC<ClientsEditPageSubscriptionsPauseModalProps> = props => {
  const { clientId, subscriptionId } = props

  const { form, isLoading, onSubmitHandler, onCancelHandler } = useClientsEditPageSubscriptionsPauseModal(
    clientId,
    subscriptionId
  )

  return (
    <ClientsSubscriptionsPauseModal
      form={form}
      isLoading={isLoading}
      onSubmit={onSubmitHandler}
      onCancel={onCancelHandler}
    />
  )
}
