import { DefaultOptionType } from 'antd/lib/select'
import moment from 'moment'

import { EmployeesApi } from '../api/types/employees-api.types'
import { EmployeesTableRow } from '../components/employees/employees-table/employees-table.types'
import {
  EmployeesFormValues,
  EmployeesFormValuesDTO,
} from '../components/employees/employees-form/employees-form.types'
import { formatFullName } from '../format/text.format'
import { isDef, isDefAndNotEmpty, Nullable } from '../types/lang.types'

export function mapEmployeesToOptions(employees: Nullable<EmployeesApi.Employee[]>): DefaultOptionType[] | undefined {
  if (isDefAndNotEmpty(employees)) {
    return employees.map((employee: EmployeesApi.Employee): DefaultOptionType => {
      const { firstName, lastName } = employee

      const fullName = formatFullName(firstName, lastName)

      return {
        /**
         * @todo Why we can't send ID to API?
         */
        value: fullName,
        label: fullName,
      }
    })
  }
}

export function mapEmployeesToEmployeesTableRowList(
  employees: Nullable<EmployeesApi.Employee[]>
): Nullable<EmployeesTableRow[]> {
  if (isDefAndNotEmpty(employees)) {
    return employees.map(
      (employee: EmployeesApi.Employee): EmployeesTableRow => ({
        id: employee.id,
        firstName: employee.firstName,
        middleName: employee.middleName,
        lastName: employee.lastName,
        birthDate: employee.birthDate,
        photo: employee.photo,
        phone: employee.phone,
        email: employee.email,
        studiosCount: employee.studios?.length,
        franchise: employee.organisation?.name,
        position: employee.position?.name,
      })
    )
  }

  return null
}

export function genEmployeeCreateDTO(values: EmployeesFormValuesDTO): EmployeesApi.EmployeeCreateDTO {
  return {
    firstName: values.firstName,
    middleName: values.middleName,
    lastName: values.lastName,
    birthDate: values.birthDate,
    photo: values.photo,
    phone: values.phone,
    email: values.email,
    position: { id: values.position },
    organisation: { id: values.organisation },
    /**
     * @todo Should be passed from form values
     */
    groupId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
    groupName: 'Manager',
    studios: [],
  }
}

export function genEmployeeFormValues(employee: Nullable<EmployeesApi.Employee>): Nullable<EmployeesFormValues> {
  if (isDef(employee)) {
    return {
      firstName: employee.firstName,
      middleName: employee.middleName,
      lastName: employee.lastName,
      birthDate: moment(employee.birthDate),
      photo: employee.photo,
      phone: employee.phone,
      email: employee.email,
      position: employee.position?.id,
      organisation: employee.organisation?.id,
    }
  }

  return null
}

export function genEmployeeUpdateDTO(
  values: Nullable<EmployeesFormValuesDTO>,
  employee: Nullable<EmployeesApi.Employee>
): Nullable<EmployeesApi.EmployeeUpdateDTO> {
  if (isDef(values) && isDef(employee)) {
    return {
      id: employee.id,
      userId: employee.userId,
      firstName: values.firstName,
      middleName: values.middleName,
      lastName: values.lastName,
      birthDate: values.birthDate,
      photo: values.photo,
      phone: values.phone,
      email: values.email,
      position: { id: values.position },
      organisation: { id: values.organisation },
      /**
       * @todo Should be passed from form values
       */
      groupId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
      groupName: 'Manager',
      studios: [],
    }
  }

  return null
}
