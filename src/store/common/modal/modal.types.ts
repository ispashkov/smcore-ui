import { AppModal, AppModalBaseProps } from '../../../types/modal.types'
import { SchedulePageModalCreateProps } from '../../../pages/schedule-page/schedule-page-modal-create/schedule-page-modal-create.types'
import { SchedulePageModalConfirmProps } from '../../../pages/schedule-page/schedule-page-modal-confirm/schedule-page-modal-confirm.types'
import { ScheduleManagementPageModalCreateProps } from '../../../pages/schedule-management-page/schedule-management-page-modal-create/schedule-management-page-modal-create.types'
import { ScheduleManagementPageModalEditProps } from '../../../pages/schedule-management-page/schedule-management-page-modal-edit/schedule-management-page-modal-edit.types'
import { ScheduleManagementPageModalConfirmProps } from '../../../pages/schedule-management-page/schedule-management-page-modal-confirm/schedule-management-page-modal-confirm.types'
import { ScheduleGroupPageModalBookingProps } from '../../../pages/schedule-group-page/schedule-group-page-modal-booking/schedule-group-page-modal-booking.types'
import { ScheduleGroupPageModalEditProps } from '../../../pages/schedule-group-page/schedule-group-page-modal-edit/schedule-group-page-modal-edit.types'
import { ScheduleGroupPageModalWaitingProps } from '../../../pages/schedule-group-page/schedule-group-page-modal-waiting/schedule-group-page-modal-waiting.types'
import { TransactionsPageReceiptsModalProps } from '../../../pages/transactions-page/transactions-page-receipts-modal/transactions-page-receipts-modal.types'
import { TransactionsCreatePageModalProductsProps } from '../../../pages/transactions-create-page/transactions-create-page-modal-products/transactions-create-page-modal-products.types'
import { TransactionsCreatePageModalConfirmProps } from '../../../pages/transactions-create-page/transactions-create-page-modal-confirm/transactions-create-page-modal-confirm.types'
import { ClientsEditPageBookingsActiveReceiptsModalProps } from '../../../pages/clients-edit-page/clients-edit-page-bookings-active-receipts-modal/clients-edit-page-bookings-active-receipts-modal.types'
import { ClientsEditPageBookingsHistoryReceiptsModalProps } from '../../../pages/clients-edit-page/clients-edit-page-bookings-history-receipts-modal/clients-edit-page-bookings-history-receipts-modal.types'
import { ClientsEditPageSubscriptionsPauseModalProps } from '../../../pages/clients-edit-page/clients-edit-page-subscriptions-pause-modal/clients-edit-page-subscriptions-pause-modal.types'
import { ClientsEditPagePurchasesReceiptsModalProps } from '../../../pages/clients-edit-page/clients-edit-page-purchases-receipts-modal/clients-edit-page-purchases-receipts-modal.types'

interface ModalShowPayloadBase<Modal extends AppModal, Props extends AppModalBaseProps = AppModalBaseProps> {
  modal: Modal
  props?: Props
}

export type ModalShowPayload =
  // region ---- schedule page
  | ModalShowPayloadBase<AppModal.SCHEDULE_PAGE_MODAL_CREATE, SchedulePageModalCreateProps>
  | ModalShowPayloadBase<AppModal.SCHEDULE_PAGE_MODAL_CONFIRM, SchedulePageModalConfirmProps>
  | ModalShowPayloadBase<AppModal.SCHEDULE_PAGE_MODAL_ERROR>
  // endregion

  // region ---- schedule management page
  | ModalShowPayloadBase<AppModal.SCHEDULE_MANAGEMENT_PAGE_MODAL_CREATE, ScheduleManagementPageModalCreateProps>
  | ModalShowPayloadBase<AppModal.SCHEDULE_MANAGEMENT_PAGE_MODAL_EDIT, ScheduleManagementPageModalEditProps>
  | ModalShowPayloadBase<AppModal.SCHEDULE_MANAGEMENT_PAGE_MODAL_CONFIRM, ScheduleManagementPageModalConfirmProps>
  | ModalShowPayloadBase<AppModal.SCHEDULE_MANAGEMENT_PAGE_MODAL_ERROR>
  // endregion

  // region ---- schedule group page
  | ModalShowPayloadBase<AppModal.SCHEDULE_GROUP_PAGE_MODAL_BOOKING, ScheduleGroupPageModalBookingProps>
  | ModalShowPayloadBase<AppModal.SCHEDULE_GROUP_PAGE_MODAL_EDIT, ScheduleGroupPageModalEditProps>
  | ModalShowPayloadBase<AppModal.SCHEDULE_GROUP_PAGE_MODAL_WAITING, ScheduleGroupPageModalWaitingProps>
  // endregion

  // region ---- transactions page
  | ModalShowPayloadBase<AppModal.TRANSACTIONS_PAGE_RECEIPTS_MODAL, TransactionsPageReceiptsModalProps>
  // endregion

  // region ---- transactions create page
  | ModalShowPayloadBase<AppModal.TRANSACTIONS_CREATE_PAGE_MODAL_PRODUCTS, TransactionsCreatePageModalProductsProps>
  | ModalShowPayloadBase<AppModal.TRANSACTIONS_CREATE_PAGE_MODAL_CONFIRM, TransactionsCreatePageModalConfirmProps>
  // endregion

  // region ---- clients edit page page
  | ModalShowPayloadBase<
      AppModal.CLIENTS_EDIT_PAGE_BOOKINGS_ACTIVE_RECEIPTS_MODAL,
      ClientsEditPageBookingsActiveReceiptsModalProps
    >
  | ModalShowPayloadBase<
      AppModal.CLIENTS_EDIT_PAGE_BOOKINGS_HISTORY_RECEIPTS_MODAL,
      ClientsEditPageBookingsHistoryReceiptsModalProps
    >
  | ModalShowPayloadBase<
      AppModal.CLIENTS_EDIT_PAGE_SUBSCRIPTIONS_PAUSE_MODAL,
      ClientsEditPageSubscriptionsPauseModalProps
    >
  | ModalShowPayloadBase<
      AppModal.CLIENTS_EDIT_PAGE_SUBSCRIPTIONS_RECEIPTS_MODAL,
      ClientsEditPageSubscriptionsPauseModalProps
    >
  | ModalShowPayloadBase<
      AppModal.CLIENTS_EDIT_PAGE_PURCHASES_RECEIPTS_MODAL,
      ClientsEditPagePurchasesReceiptsModalProps
    >
