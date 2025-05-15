import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit'

import { Nullable } from '../../../../types/lang.types'
import { Pagination } from '../../../../api/types/api.types'
import { ClientsSubscriptionsApi } from '../../../../api/types/clients-subscriptions-api.types'
import {
  ClientsEditPageSubscriptionsFetchSubscriptionsPayload,
  ClientsEditPageSubscriptionsRefundClientSubscriptionPayload,
  ClientsEditPageSubscriptionsResumeClientSubscriptionPayload,
} from './clients-edit-page-subscriptions.types'

export interface ClientsEditPageSubscriptionsState {
  clientsSubscriptions: Nullable<Pagination<ClientsSubscriptionsApi.ClientSubscription>>
  isLoading: boolean
  isLoaded: boolean
  error: Nullable<Error>
}

const initialState: ClientsEditPageSubscriptionsState = {
  clientsSubscriptions: null,
  isLoading: false,
  isLoaded: false,
  error: null,
}

export const { actions: clientsEditPageSubscriptionsActions, reducer: clientsEditPageSubscriptionsReducer } =
  createSlice({
    name: '@@clients-edit-page-subscriptions',
    initialState,
    reducers: {
      fetchClientsSubscriptions: (
        state: Draft<ClientsEditPageSubscriptionsState>,
        _action: PayloadAction<ClientsEditPageSubscriptionsFetchSubscriptionsPayload>
      ) => {
        state.isLoading = true
      },
      fetchClientsSubscriptionsSuccess: (
        state: Draft<ClientsEditPageSubscriptionsState>,
        action: PayloadAction<Nullable<Pagination<ClientsSubscriptionsApi.ClientSubscription>>>
      ) => {
        state.clientsSubscriptions = action.payload
        state.isLoading = false
        state.isLoaded = true
      },
      fetchClientsSubscriptionsError: (
        state: Draft<ClientsEditPageSubscriptionsState>,
        action: PayloadAction<Error>
      ) => {
        state.error = action.payload
        state.isLoading = false
        state.isLoaded = true
      },

      resumeClientSubscription: (
        state: Draft<ClientsEditPageSubscriptionsState>,
        _action: PayloadAction<ClientsEditPageSubscriptionsResumeClientSubscriptionPayload>
      ) => {
        state.isLoading = true
      },
      resumeClientSubscriptionSuccess: (state: Draft<ClientsEditPageSubscriptionsState>) => {
        state.isLoading = false
      },
      resumeClientSubscriptionError: (
        state: Draft<ClientsEditPageSubscriptionsState>,
        action: PayloadAction<Error>
      ) => {
        state.error = action.payload
        state.isLoading = false
      },

      refundClientSubscription: (
        state: Draft<ClientsEditPageSubscriptionsState>,
        _action: PayloadAction<ClientsEditPageSubscriptionsRefundClientSubscriptionPayload>
      ) => {
        state.isLoading = true
      },
      refundClientSubscriptionSuccess: (state: Draft<ClientsEditPageSubscriptionsState>) => {
        state.isLoading = false
      },
      refundClientSubscriptionError: (
        state: Draft<ClientsEditPageSubscriptionsState>,
        action: PayloadAction<Error>
      ) => {
        state.error = action.payload
        state.isLoading = false
      },

      reset: () => initialState,
    },
  })
