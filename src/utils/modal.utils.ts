import * as React from 'react'

import { AppModal } from '../types/modal.types'
import { SchedulePageModalCreate } from '../pages/schedule-page/schedule-page-modal-create/schedule-page-modal-create.component'
import { SchedulePageModalError } from '../pages/schedule-page/schedule-page-modal-error/schedule-page-modal-error.component'
import { SchedulePageModalConfirm } from '../pages/schedule-page/schedule-page-modal-confirm/schedule-page-modal-confirm.component'
import { ScheduleManagementPageModalCreate } from '../pages/schedule-management-page/schedule-management-page-modal-create/schedule-management-page-modal-create.component'
import { ScheduleManagementPageModalEdit } from '../pages/schedule-management-page/schedule-management-page-modal-edit/schedule-management-page-modal-edit.component'
import { ScheduleManagementPageModalConfirm } from '../pages/schedule-management-page/schedule-management-page-modal-confirm/schedule-management-page-modal-confirm.component'
import { ScheduleManagementPageModalError } from '../pages/schedule-management-page/schedule-management-page-modal-error/schedule-management-page-modal-error.component'
import { ScheduleGroupPageModalBooking } from '../pages/schedule-group-page/schedule-group-page-modal-booking/schedule-group-page-modal-booking.component'
import { ScheduleGroupPageModalEdit } from '../pages/schedule-group-page/schedule-group-page-modal-edit/schedule-group-page-modal-edit.component'
import { ScheduleGroupPageModalWaiting } from '../pages/schedule-group-page/schedule-group-page-modal-waiting/schedule-group-page-modal-waiting.component'
import { TransactionsPageReceiptsModal } from '../pages/transactions-page/transactions-page-receipts-modal/transactions-page-receipts-modal.component'
import { TransactionsCreatePageModalProducts } from '../pages/transactions-create-page/transactions-create-page-modal-products/transactions-create-page-modal-products.component'
import { TransactionsCreatePageModalConfirm } from '../pages/transactions-create-page/transactions-create-page-modal-confirm/transactions-create-page-modal-confirm.component'
import { ClientsEditPageBookingsActiveReceiptsModal } from '../pages/clients-edit-page/clients-edit-page-bookings-active-receipts-modal/clients-edit-page-bookings-active-receipts-modal.component'
import { ClientsEditPageBookingsHistoryReceiptsModal } from '../pages/clients-edit-page/clients-edit-page-bookings-history-receipts-modal/clients-edit-page-bookings-history-receipts-modal.component'
import { ClientsEditPageSubscriptionsPauseModal } from '../pages/clients-edit-page/clients-edit-page-subscriptions-pause-modal/clients-edit-page-subscriptions-pause-modal.component'
import { ClientsEditPageSubscriptionsReceiptsModal } from '../pages/clients-edit-page/clients-edit-page-subscriptions-receipts-modal/clients-edit-page-subscriptions-receipts-modal.component'
import { ClientsEditPagePurchasesReceiptsModal } from '../pages/clients-edit-page/clients-edit-page-purchases-receipts-modal/clients-edit-page-purchases-receipts-modal.component'

export function genAppModalComponent(modal: AppModal): React.FC<any> {
  switch (modal) {
    // region ---- schedule page
    case AppModal.SCHEDULE_PAGE_MODAL_CREATE:
      return SchedulePageModalCreate
    case AppModal.SCHEDULE_PAGE_MODAL_CONFIRM:
      return SchedulePageModalConfirm
    case AppModal.SCHEDULE_PAGE_MODAL_ERROR:
      return SchedulePageModalError
    // endregion

    // region ---- schedule management page
    case AppModal.SCHEDULE_MANAGEMENT_PAGE_MODAL_CREATE:
      return ScheduleManagementPageModalCreate
    case AppModal.SCHEDULE_MANAGEMENT_PAGE_MODAL_EDIT:
      return ScheduleManagementPageModalEdit
    case AppModal.SCHEDULE_MANAGEMENT_PAGE_MODAL_CONFIRM:
      return ScheduleManagementPageModalConfirm
    case AppModal.SCHEDULE_MANAGEMENT_PAGE_MODAL_ERROR:
      return ScheduleManagementPageModalError
    // endregion

    // region ---- schedule group page
    case AppModal.SCHEDULE_GROUP_PAGE_MODAL_BOOKING:
      return ScheduleGroupPageModalBooking
    case AppModal.SCHEDULE_GROUP_PAGE_MODAL_EDIT:
      return ScheduleGroupPageModalEdit
    case AppModal.SCHEDULE_GROUP_PAGE_MODAL_WAITING:
      return ScheduleGroupPageModalWaiting
    // endregion

    // region ---- transactions page
    case AppModal.TRANSACTIONS_PAGE_RECEIPTS_MODAL:
      return TransactionsPageReceiptsModal
    // endregion

    // region ---- transactions create page
    case AppModal.TRANSACTIONS_CREATE_PAGE_MODAL_PRODUCTS:
      return TransactionsCreatePageModalProducts
    case AppModal.TRANSACTIONS_CREATE_PAGE_MODAL_CONFIRM:
      return TransactionsCreatePageModalConfirm
    // endregion

    // region ---- clients edit page page
    case AppModal.CLIENTS_EDIT_PAGE_BOOKINGS_ACTIVE_RECEIPTS_MODAL:
      return ClientsEditPageBookingsActiveReceiptsModal
    case AppModal.CLIENTS_EDIT_PAGE_BOOKINGS_HISTORY_RECEIPTS_MODAL:
      return ClientsEditPageBookingsHistoryReceiptsModal
    case AppModal.CLIENTS_EDIT_PAGE_SUBSCRIPTIONS_PAUSE_MODAL:
      return ClientsEditPageSubscriptionsPauseModal
    case AppModal.CLIENTS_EDIT_PAGE_SUBSCRIPTIONS_RECEIPTS_MODAL:
      return ClientsEditPageSubscriptionsReceiptsModal
    case AppModal.CLIENTS_EDIT_PAGE_PURCHASES_RECEIPTS_MODAL:
      return ClientsEditPagePurchasesReceiptsModal
    // endregion
  }
}
