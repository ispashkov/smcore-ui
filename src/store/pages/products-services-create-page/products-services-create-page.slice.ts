import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit'

import { Nullable } from '../../../types/lang.types'
import { Pagination } from '../../../api/types/api.types'
import { ServiceFormValues } from '../../../components/products/products-services-form/product-services-form.types'
import { StudiosApi } from '../../../api/types/studios-api.types'
import { ExercisesDirectionsApi } from '../../../api/types/exercises-directions-api.types'
import { ExercisesTypesApi } from '../../../api/types/exercises-types-api.types'

export interface ServicesCreatePageState {
  studios: Nullable<Pagination<StudiosApi.Studio>>
  directions: Nullable<Pagination<ExercisesDirectionsApi.ExerciseDirection>>
  exercises: Nullable<Pagination<ExercisesTypesApi.ExerciseType>>
  isLoading: boolean
  isLoaded: boolean
  error: Nullable<Error>
}

const initialState: ServicesCreatePageState = {
  studios: null,
  directions: null,
  exercises: null,
  isLoading: false,
  isLoaded: false,
  error: null,
}

export const { actions: productsServicesCreatePageActions, reducer: productsServicesCreatePageReducer } = createSlice({
  name: '@@product-services-create-page',
  initialState,
  reducers: {
    createService: (state: Draft<ServicesCreatePageState>, _: PayloadAction<ServiceFormValues>) => {
      state.isLoading = true
    },
    createServiceSuccess: (state: Draft<ServicesCreatePageState>) => {
      state.isLoading = false
    },
    createServiceError: (state: Draft<ServicesCreatePageState>, action: PayloadAction<Error>) => {
      state.error = action.payload
    },
    fetchAllStudios: (state: Draft<ServicesCreatePageState>) => {
      state.isLoading = true
    },
    fetchAllStudiosSuccess: (
      state: Draft<ServicesCreatePageState>,
      action: PayloadAction<Nullable<Pagination<StudiosApi.Studio>>>
    ) => {
      state.studios = action.payload
      state.isLoading = false
      state.isLoaded = true
    },
    fetchStudiosError: (state: Draft<ServicesCreatePageState>, action: PayloadAction<Error>) => {
      state.isLoading = false
      state.isLoaded = true
      state.error = action.payload
    },
    fetchAllDirections: (state: Draft<ServicesCreatePageState>) => {
      state.isLoading = true
    },
    fetchAllDirectionsSuccess: (
      state: Draft<ServicesCreatePageState>,
      action: PayloadAction<Nullable<Pagination<ExercisesDirectionsApi.ExerciseDirection>>>
    ) => {
      state.directions = action.payload
      state.isLoading = false
      state.isLoaded = true
    },
    fetchDirectionsError: (state: Draft<ServicesCreatePageState>, action: PayloadAction<Error>) => {
      state.isLoading = false
      state.isLoaded = true
      state.error = action.payload
    },
    fetchAllExercises: (state: Draft<ServicesCreatePageState>) => {
      state.isLoading = true
    },
    fetchAllExercisesSuccess: (
      state: Draft<ServicesCreatePageState>,
      action: PayloadAction<Nullable<Pagination<ExercisesTypesApi.ExerciseType>>>
    ) => {
      state.exercises = action.payload
      state.isLoading = false
      state.isLoaded = true
    },
    fetchExercisesError: (state: Draft<ServicesCreatePageState>, action: PayloadAction<Error>) => {
      state.isLoading = false
      state.isLoaded = true
      state.error = action.payload
    },
    reset: () => initialState,
  },
})
