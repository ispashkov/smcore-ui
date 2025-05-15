import { ExercisesGroupWaitingClient } from '../exercises-group-waiting-client/exercises-group-waiting-client.types'

export interface ExercisesGroupWaitingClientsListProps {
  clients: ExercisesGroupWaitingClient[]
  onBook: (phone: string) => void
}
