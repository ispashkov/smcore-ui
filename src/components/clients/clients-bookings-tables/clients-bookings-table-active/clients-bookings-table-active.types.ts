import { ClientsBookingsTableBaseProps } from '../clients-bookings-table-base/clients-bookings-table-base.types'
import { ClientsBookingsTableActiveVisitEvents } from './clients-bookings-table-active-visit/clients-bookings-table-active-visit.types'
import { ClientsBookingsTableActiveActionsEvents } from './clients-bookings-table-active-actions/clients-bookings-table-active-actions.types'

export type ClientsBookingsTableActiveProps = ClientsBookingsTableBaseProps & ClientsBookingsTableActiveEvents

export type ClientsBookingsTableActiveEvents = ClientsBookingsTableActiveVisitEvents &
  ClientsBookingsTableActiveActionsEvents
