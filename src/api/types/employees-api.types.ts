import { NNumber, NString, Nullable } from '../../types/lang.types'
import { DictionaryItem, PaginationParamsDTO } from './api.types'

export namespace EmployeesApi {
  export interface Employee {
    id: string
    userId: string
    email: string
    firstName: string
    lastName: string
    middleName: string
    photo: string
    phone: string
    birthDate: string
    position: Nullable<DictionaryItem<number>>
    organisation: Nullable<DictionaryItem>
    studios: Nullable<DictionaryItem[]>
  }

  export interface EmployeeCreateDTO {
    email: string
    groupId: string
    groupName: string
    firstName: string
    lastName: string
    middleName: string
    photo: string
    phone: string
    birthDate: string
    position: {
      id: NNumber
    }
    organisation: {
      id: NString
    }
    studios: string[]
  }

  export interface EmployeeUpdateDTO {
    id: string
    userId: string
    email: string
    groupId: string
    groupName: string
    firstName: string
    lastName: string
    middleName: string
    photo: string
    phone: string
    birthDate: string
    position: {
      id: NNumber
    }
    organisation: {
      id: NString
    }
    studios: string[]
  }

  export interface EmployeesFetchAllParams extends PaginationParamsDTO {
    name: string
    position: string
    studio: string
  }
}
