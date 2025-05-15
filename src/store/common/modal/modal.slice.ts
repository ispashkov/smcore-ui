import { createSlice } from '@reduxjs/toolkit'

import { Nullable } from '../../../types/lang.types'
import { AppModalQueueItem } from '../../../types/modal.types'
import { show, close, closeLast, replaceAll } from './modal.utils'

export interface ModalState {
  activeModal: Nullable<AppModalQueueItem>
  modalsQueue: Nullable<AppModalQueueItem[]>
}

export const initialState: ModalState = {
  activeModal: null,
  modalsQueue: null,
}

export const { actions: modalActions, reducer: modalReducer } = createSlice({
  name: '@@modal',
  initialState,
  reducers: {
    show,
    close,
    closeLast,
    replaceAll,
  },
})
