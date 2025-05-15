import { genClientsEditPageBookingsSelectors } from '../clients-edit-page-bookings-base/clients-edit-page-bookings-base.selectors'

export const {
  getIsLoaded: getClientsEditPageBookingsHistoryIsLoaded,
  getIsLoading: getClientsEditPageBookingsHistoryIsLoading,
  getTableDataItems: getClientsEditPageBookingsHistoryTableDataItems,
  getTotalElements: getClientsEditPageBookingsHistoryTotalElements,
  getReceiptsById: getClientsEditPageBookingsHistoryReceiptsById,
} = genClientsEditPageBookingsSelectors('clientsEditPageBookingsHistory')
