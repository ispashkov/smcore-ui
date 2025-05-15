import * as React from 'react'

import { ReceiptsModal } from '../../../components/receipts/receipts-modal/receipts-modal.component'
import { ClientsEditPageSubscriptionsReceiptsModalProps } from './clients-edit-page-subscriptions-receipts-modal.types'
import { useClientsEditPageSubscriptionsReceiptsModal } from './clients-edit-page-subscriptions-receipts-modal.hook'

export const ClientsEditPageSubscriptionsReceiptsModal: React.FC<
  ClientsEditPageSubscriptionsReceiptsModalProps
> = props => {
  const { subscriptionId } = props

  const { receipts, onCancelHandler } = useClientsEditPageSubscriptionsReceiptsModal(subscriptionId)

  return <ReceiptsModal title="Чеки от абонемента" receipts={receipts} onCancel={onCancelHandler} />
}
