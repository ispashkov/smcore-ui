import { genClientsEditPageBookingsSelectors } from '../clients-edit-page-bookings-base/clients-edit-page-bookings-base.selectors'

export const {
  getIsLoaded: getClientsEditPageBookingsActiveIsLoaded,
  getIsLoading: getClientsEditPageBookingsActiveIsLoading,
  getTableDataItems: getClientsEditPageBookingsActiveTableDataItems,
  getTotalElements: getClientsEditPageBookingsActiveTotalElements,
  getReceiptsById: getClientsEditPageBookingsActiveReceiptsById,
} = genClientsEditPageBookingsSelectors('clientsEditPageBookingsActive')
