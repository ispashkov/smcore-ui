import { AppModalBaseProps } from '../../../types/modal.types'
import { Nullable } from '../../../types/lang.types'
import { ExercisesGroupWaitingClient } from '../exercises-group-waiting-client/exercises-group-waiting-client.types'

export interface ExercisesGroupWaitingClientsModalProps extends AppModalBaseProps {
  clients: Nullable<ExercisesGroupWaitingClient[]>
  loading?: boolean
  onSearch: (value: string) => void
  onBook: (phone: string) => void
}
