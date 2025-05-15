import { ClientsInfo } from '../../clients/clients-info/clients-info.types'

export interface ExercisesGroupWaitingClientProps extends ExercisesGroupWaitingClient {
  className?: string
  onBook: (clientId: string) => void
}

export interface ExercisesGroupWaitingClient extends ClientsInfo {
  id: string
  clientId: string
}
