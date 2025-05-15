import { ClientsBookingsTableBaseProps } from '../clients-bookings-table-base/clients-bookings-table-base.types'
import { ClientsBookingsTableHistoryActionsEvents } from './clients-bookings-table-history-actions/clients-bookings-table-history-actions.types'

export type ClientsBookingsTableActiveProps = ClientsBookingsTableBaseProps & ClientsBookingsTableHistoryEvents

export type ClientsBookingsTableHistoryEvents = ClientsBookingsTableHistoryActionsEvents
