import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit'

import { DirectionsFormValues } from '../../../components/directions/directions-form/directions-form.types'
import { Nullable } from '../../../types/lang.types'

export interface DirectionsCreatePageState {
  isLoading: boolean
  isLoaded: boolean
  error: Nullable<Error>
}

const initialState: DirectionsCreatePageState = {
  isLoading: false,
  isLoaded: false,
  error: null,
}

export const { actions: directionsCreatePageActions, reducer: directionsCreatePageReducer } = createSlice({
  name: '@@directions-create-page',
  initialState,
  reducers: {
    createDirection: (state: Draft<DirectionsCreatePageState>, _: PayloadAction<DirectionsFormValues>) => {
      state.isLoading = true
    },
    createDirectionSuccess: (state: Draft<DirectionsCreatePageState>) => {
      state.isLoading = false
    },
    createDirectionError: (state: Draft<DirectionsCreatePageState>, action: PayloadAction<Error>) => {
      state.error = action.payload
    },
    reset: () => initialState,
  },
})
