import * as React from 'react'

import { ExercisesGroupWaitingClient } from '../exercises-group-waiting-client/exercises-group-waiting-client.component'
import { ExercisesGroupWaitingClientsListProps } from './exercises-group-waiting-clients-list.types'
import './exercises-group-waiting-clients-list.styles.less'

export const ExercisesGroupWaitingClientsList: React.FC<ExercisesGroupWaitingClientsListProps> = props => {
  const { clients, onBook } = props

  return (
    <div className="exercises-group-waiting-clients-list">
      {clients.map(client => (
        <ExercisesGroupWaitingClient
          key={client.id}
          id={client.id}
          clientId={client.clientId}
          name={client.name}
          phone={client.phone}
          photo={client.photo}
          onBook={onBook}
        />
      ))}
    </div>
  )
}
