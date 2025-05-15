import * as React from 'react'
import { Badge } from 'antd'

import { ClientSubscriptionStatus } from '../../../../types/clients-subscriptions.types'
import { formatClientSubscriptionStatus } from '../../../../format/text.format'
import { mapClientSubscriptionStatusToPresetStatusColorType } from './clients-subscriptions-table-status.utils'

interface Props {
  value: ClientSubscriptionStatus
}

export const ClientsSubscriptionsTableStatus: React.FC<Props> = props => {
  const { value } = props

  const status = mapClientSubscriptionStatusToPresetStatusColorType(value)
  const text = formatClientSubscriptionStatus(value)

  return <Badge status={status} text={text} />
}
