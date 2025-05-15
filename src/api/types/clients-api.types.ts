import { NNumber, NString, Nullable } from '../../types/lang.types'
import { ColoredDictionaryItem, PaginationParamsDTO } from './api.types'

export namespace ClientsApi {
  export enum ClientSex {
    U = 'U',
    F = 'F',
    M = 'M',
  }

  export interface Client {
    id: string
    email: string
    firstName: string
    lastName: string
    middleName: NString
    sex: ClientSex
    photo: NString
    phone: string
    birthDate: NString
    withCard: boolean
    registrationDate: string
    lastLogin: string
    lastVisit: string
    deposit: number
    source: string
    loyaltyCard: string
    comment: NString
    clientCategory: Nullable<ColoredDictionaryItem<number>>
  }

  export interface ClientDTO {
    email: string
    firstName: string
    lastName: string
    middleName: NString
    sex: ClientSex
    photo: NString
    phone: string
    birthDate: NString
    loyaltyCard: string
    deposit: number
    source: string
    comment: NString
    clientCategoryId: NNumber
  }

  export interface ClientsFetchAllParams extends PaginationParamsDTO {
    phone: NString
  }
}
