import { NNumber, NString } from '../../../types/lang.types'
import { PaymentType } from '../../../types/payment.types'
import { TableCellVisitEvents } from '../../table-cells/table-cell-visit/table-cell-visit.types'
import { ExercisesGroupBookingsTableActionsEvents } from './exercises-group-bookings-table-actions/exercises-group-bookings-table-actions.types'

export interface ExercisesGroupBookingsTableDataItem {
  // region --- booking
  id: string
  paymentType: PaymentType
  visitConfirmed: boolean
  placement: NNumber
  // endregion

  // region --- client
  firstName: NString
  lastName: NString
  photo: NString
  phone: string
  // endregion
}

export type ExercisesGroupBookingsTableEvents = TableCellVisitEvents & ExercisesGroupBookingsTableActionsEvents
