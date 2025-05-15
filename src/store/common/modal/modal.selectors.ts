import { AppState } from '../../app.store'
import { Nullable } from '../../../types/lang.types'
import { AppModalQueueItem } from '../../../types/modal.types'

export const getActiveModal = (state: AppState): Nullable<AppModalQueueItem> => state.modal.activeModal
