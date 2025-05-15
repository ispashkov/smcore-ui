import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit'

import { Nullable } from '../../../../types/lang.types'
import { ClientsEditPageSubscriptionsPauseModalPausePayload } from './clients-edit-page-subscriptions-pause-modal.types'

export interface ClientsEditPageSubscriptionsPauseModalState {
  isLoading: boolean
  error: Nullable<Error>
}

const initialState: ClientsEditPageSubscriptionsPauseModalState = {
  isLoading: false,
  error: null,
}

export const {
  actions: clientsEditPageSubscriptionsPauseModalActions,
  reducer: clientsEditPageSubscriptionsPauseModalReducer,
} = createSlice({
  name: '@@clients-edit-page-subscriptions-pause-modal',
  initialState,
  reducers: {
    pause: (
      state: Draft<ClientsEditPageSubscriptionsPauseModalState>,
      _action: PayloadAction<ClientsEditPageSubscriptionsPauseModalPausePayload>
    ) => {
      state.isLoading = true
    },
    pauseSuccess: (state: Draft<ClientsEditPageSubscriptionsPauseModalState>) => {
      state.isLoading = false
    },
    pauseError: (state: Draft<ClientsEditPageSubscriptionsPauseModalState>, action: PayloadAction<Error>) => {
      state.error = action.payload
      state.isLoading = false
    },

    reset: () => initialState,
  },
})
