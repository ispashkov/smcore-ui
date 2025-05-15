import * as React from 'react'
import { Badge } from 'antd'

interface Props {
  isVisitConfirmed: boolean
  isCanceled: boolean
}

export const ClientsBookingsTableHistoryStatus: React.FC<Props> = props => {
  const { isCanceled, isVisitConfirmed } = props

  if (isCanceled) {
    return <Badge status="error" text="Отменено" />
  }

  if (isVisitConfirmed) {
    return <Badge status="success" text="Посетил" />
  }

  return <Badge status="default" text="Не пришел" />
}
