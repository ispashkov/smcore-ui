import { Moment } from 'moment'

import { ClientSex } from '../../../types/clients.types'
import { NNumber, NString, Nullable } from '../../../types/lang.types'

export interface ClientsFormValuesBase<BirthDate> {
  email: string
  firstName: string
  lastName: string
  middleName: NString
  sex: ClientSex
  photo: NString
  phone: string
  birthDate: Nullable<BirthDate>
  loyaltyCard: string
  deposit: number
  source: string
  comment: NString
  clientCategoryId: NNumber
}

export type ClientsFormValues = ClientsFormValuesBase<Moment>

export type ClientsFormValuesDTO = ClientsFormValuesBase<string>
