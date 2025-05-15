import { ColoredDictionaryItem, Days, DictionaryItem } from './api.types'
import { NString, Nullable } from '../../types/lang.types'

export namespace ExercisesTimetableApi {
  export interface ExercisesTimetableSlotDTO {
    timeFrom: string
    timeTo: string
    room: string
    trainers: string[]
  }

  export type ExercisesTimetableSlotsMapDTO = {
    [Day in Days]?: ExercisesTimetableSlotDTO[]
  }

  export interface ExercisesTimetableDTO {
    direction: number
    type: number
    dateFrom: string
    dateTo: string
    timeslots: ExercisesTimetableSlotsMapDTO
  }

  export interface ExercisesTimetableSlot {
    timeFrom: NString
    timeTo: NString
    trainers: string[]
    room: string
  }

  export type ExercisesTimetableSlotsMap = {
    [Day in Days]?: ExercisesTimetableSlot[]
  }

  export interface ExercisesTimetable {
    id: string
    direction: Nullable<DictionaryItem<number>>
    type: Nullable<DictionaryItem<number>>
    room: Nullable<ColoredDictionaryItem>
    timeslots: Nullable<ExercisesTimetableSlotsMap>
    dateFrom: NString
    dateTo: NString
    trainers: Nullable<DictionaryItem[]>
  }

  export interface ExercisesTimetableFetchAllParams {
    studioId: string
    roomId: NString
  }
}
