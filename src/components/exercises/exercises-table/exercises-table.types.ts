import { ColoredEntityItem, EntityItem, Nullable } from '../../../types/lang.types'
import { ExercisesTableActionsEvents } from './exercises-table-actions/exercises-table-actions.types'
import { ExercisesTableDirectionEvents } from './exercises-table-direction/exercises-table-direction.types'

export interface ExercisesTableDataItem {
  id: string
  timeFrom: string
  timeTo: string
  direction: Nullable<EntityItem<number>>
  trainers: Nullable<EntityItem<string>[]>
  type: Nullable<EntityItem<number>>
  clientsCounts: number
  maxClientsCount: number
  studiosRoom: ColoredEntityItem<string>
}

export interface ExercisesTableEvents extends ExercisesTableActionsEvents, ExercisesTableDirectionEvents {}
