import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit'

import { Nullable } from '../../../types/lang.types'
import { Pagination } from '../../../api/types/api.types'
import { ExercisesDirectionsApi } from '../../../api/types/exercises-directions-api.types'
import { DirectionsPageParams } from '../../../pages/directions-page/directions-page.types'

export interface DirectionsPageState {
  directions: Nullable<Pagination<ExercisesDirectionsApi.ExerciseDirection>>
  isLoading: boolean
  isLoaded: boolean
  error: Nullable<Error>
}

const initialState: DirectionsPageState = {
  directions: null,
  isLoading: false,
  isLoaded: false,
  error: null,
}

export const { actions: directionsPageActions, reducer: directionsPageReducer } = createSlice({
  name: '@@directions-page',
  initialState,
  reducers: {
    fetchAllDirections: (state: Draft<DirectionsPageState>, _: PayloadAction<DirectionsPageParams>) => {
      state.isLoading = true
    },
    fetchAllDirectionsSuccess: (
      state: Draft<DirectionsPageState>,
      action: PayloadAction<Nullable<Pagination<ExercisesDirectionsApi.ExerciseDirection>>>
    ) => {
      state.directions = action.payload
      state.isLoading = false
      state.isLoaded = true
    },
    fetchAllDirectionsError: (state: Draft<DirectionsPageState>, action: PayloadAction<Error>) => {
      state.isLoading = false
      state.isLoaded = true
      state.error = action.payload
    },
    removeDirection: (state: Draft<DirectionsPageState>, _: PayloadAction<number>) => {
      state.isLoading = true
    },
    removeDirectionSuccess: (state: Draft<DirectionsPageState>) => {
      state.isLoading = false
    },
    removeDirectionError: (state: Draft<DirectionsPageState>, action: PayloadAction<Error>) => {
      state.error = action.payload
    },
    reset: () => initialState,
  },
})
