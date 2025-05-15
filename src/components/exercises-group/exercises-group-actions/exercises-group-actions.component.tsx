import * as React from 'react'
import { clsx } from 'clsx'
import { Button } from 'antd'
import { TeamOutlined } from '@ant-design/icons'

import { isDefAndMoreThenZero, NNumber } from '../../../types/lang.types'
import './exercises-group-actions.styles.less'

interface Props {
  className?: string
  clientsInWaitList: NNumber
  onBooking: () => void
  onWaitingList: () => void
}

export const ExercisesGroupActions: React.FC<Props> = props => {
  const { className } = props
  const { clientsInWaitList } = props
  const { onBooking, onWaitingList } = props

  return (
    <div className={clsx('exercises-group-actions', className)}>
      <Button type="primary" icon={<TeamOutlined />} onClick={onBooking}>
        Записать гостя
      </Button>

      <Button ghost icon={<TeamOutlined />} onClick={onWaitingList} disabled={!isDefAndMoreThenZero(clientsInWaitList)}>
        {`Список ожидания (${clientsInWaitList || 0})}`}
      </Button>
    </div>
  )
}
