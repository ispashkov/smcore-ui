import * as React from 'react'

import { isDef, NString } from '../../../../types/lang.types'
import { ClientSubscriptionStatus } from '../../../../types/clients-subscriptions.types'
import { TableCellText } from '../../../table-cells/table-cell-text/table-cell-text.component'
import { formatDateToHumanize } from '../../../../format/date.format'

interface Props {
  className?: string
  activationDate: NString
  autoActivationDate: NString
  expirationDate: NString
  status: ClientSubscriptionStatus
}

export const ClientsSubscriptionsTableActivation: React.FC<Props> = props => {
  const { autoActivationDate, expirationDate } = props
  const { status } = props

  if (status === ClientSubscriptionStatus.EXPIRED) {
    return <TableCellText text="Требует активации" />
  }

  if (status === ClientSubscriptionStatus.NEW && isDef(autoActivationDate)) {
    const text = `Активируется автоматически ${formatDateToHumanize(autoActivationDate)}`
    return <TableCellText text={text} />
  }

  if (status === ClientSubscriptionStatus.ACTIVE && isDef(expirationDate)) {
    const text = `Действует до ${formatDateToHumanize(expirationDate)}`
    return <TableCellText text={text} />
  }

  return <TableCellText text="Действие приостановлено" />
}
