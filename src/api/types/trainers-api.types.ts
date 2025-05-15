import { DictionaryItem, PaginationParamsDTO } from './api.types'
import { NString } from '../../types/lang.types'

export namespace TrainersApi {
  export interface Trainer {
    id: string
    userId: string
    email: string
    firstName: string
    lastName: string
    middleName: NString
    photo: string
    phone: string
    birthDate: string
    position: DictionaryItem
    organisation: DictionaryItem
    studios: DictionaryItem[]
    exerciseDirections: DictionaryItem[]
    types: unknown[]
  }

  export interface TrainerFetchAllParams extends PaginationParamsDTO {}
}
