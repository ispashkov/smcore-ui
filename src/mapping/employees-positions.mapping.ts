import { DefaultOptionType } from 'antd/lib/select'

import { isDefAndNotEmpty, Nullable } from '../types/lang.types'
import { EmployeesPositionsApi } from '../api/types/employees-positions-api.types'

export function mapEmployeesPositionsToOptions(
  employeesPositions: Nullable<EmployeesPositionsApi.EmployeePosition[]>
): DefaultOptionType[] | undefined {
  if (isDefAndNotEmpty(employeesPositions)) {
    return employeesPositions.map(
      (employeePosition: EmployeesPositionsApi.EmployeePosition): DefaultOptionType => ({
        value: employeePosition.id,
        label: employeePosition.name,
      })
    )
  }
}
