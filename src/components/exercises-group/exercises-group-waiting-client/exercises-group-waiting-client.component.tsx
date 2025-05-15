import * as React from 'react'
import { Button } from 'antd'
import { TeamOutlined } from '@ant-design/icons'
import { clsx } from 'clsx'

import { ClientsInfo } from '../../clients/clients-info/clients-info.component'
import { ExercisesGroupWaitingClientProps } from './exercises-group-waiting-client.types'
import './exercises-group-waiting-client.styles.less'

export const ExercisesGroupWaitingClient: React.FC<ExercisesGroupWaitingClientProps> = props => {
  const { className } = props
  const { phone, photo, name } = props
  const { onBook } = props

  const onBookHandler = React.useCallback((): void => {
    onBook(phone)
  }, [onBook, phone])

  return (
    <div className={clsx('exercises-group-waiting-client', className)}>
      <ClientsInfo name={name} phone={phone} photo={photo} />

      <Button type="primary" icon={<TeamOutlined />} onClick={onBookHandler}>
        Записать гостя
      </Button>
    </div>
  )
}
