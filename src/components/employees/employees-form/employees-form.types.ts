import { Moment } from 'moment'

import { NNumber, NString } from '../../../types/lang.types'

export interface EmployeesFormValuesBase<BirthDate> {
  firstName: string
  middleName: string
  lastName: string
  birthDate: BirthDate
  photo: string
  phone: string
  email: string
  organisation: NString
  position: NNumber
}

export type EmployeesFormValues = EmployeesFormValuesBase<Moment>

export type EmployeesFormValuesDTO = EmployeesFormValuesBase<string>
