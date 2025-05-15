import * as React from 'react'
import { Typography } from 'antd'

import { formatPluralized } from '../../../../format/text.format'
import { ClientSubscriptionStatus } from '../../../../types/clients-subscriptions.types'
import { genClientsSubscriptionsTableVisitsTextType } from './clients-subscriptions-table-visits.utils'

interface Props {
  left: number
  total: number
  status: ClientSubscriptionStatus
}

export const ClientsSubscriptionsTableVisits: React.FC<Props> = props => {
  const { left, total } = props
  const { status } = props

  const text = `${left} из ${formatPluralized(total, ['занятия', 'занятий', 'занятий'])}`
  const type = genClientsSubscriptionsTableVisitsTextType(status)

  return (
    <Typography.Text type={type} strong>
      {text}
    </Typography.Text>
  )
}
