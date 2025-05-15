import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit'

import { Nullable } from '../../../types/lang.types'
import { Pagination } from '../../../api/types/api.types'
import { StudiosApi } from '../../../api/types/studios-api.types'
import { ExercisesDirectionsApi } from '../../../api/types/exercises-directions-api.types'
import { ExercisesTypesApi } from '../../../api/types/exercises-types-api.types'
import { ProductsSubscriptionsFormValue } from '../../../components/products/products-subscriptions-form/products-subscriptions-form.types'

export interface SubscriptionsCreatePageState {
  studios: Nullable<Pagination<StudiosApi.Studio>>
  directions: Nullable<Pagination<ExercisesDirectionsApi.ExerciseDirection>>
  exercises: Nullable<Pagination<ExercisesTypesApi.ExerciseType>>
  isLoading: boolean
  isLoaded: boolean
  error: Nullable<Error>
}

const initialState: SubscriptionsCreatePageState = {
  studios: null,
  directions: null,
  exercises: null,
  isLoading: false,
  isLoaded: false,
  error: null,
}

export const { actions: productsSubscriptionsCreatePageActions, reducer: productsSubscriptionsCreatePageReducer } =
  createSlice({
    name: '@@product-subscriptions-create-page',
    initialState,
    reducers: {
      createSubscription: (
        state: Draft<SubscriptionsCreatePageState>,
        _: PayloadAction<ProductsSubscriptionsFormValue>
      ) => {
        state.isLoading = true
      },
      createSubscriptionSuccess: (state: Draft<SubscriptionsCreatePageState>) => {
        state.isLoading = false
      },
      createSubscriptionError: (state: Draft<SubscriptionsCreatePageState>, action: PayloadAction<Error>) => {
        state.error = action.payload
      },
      fetchAllStudios: (state: Draft<SubscriptionsCreatePageState>) => {
        state.isLoading = true
      },
      fetchAllStudiosSuccess: (
        state: Draft<SubscriptionsCreatePageState>,
        action: PayloadAction<Nullable<Pagination<StudiosApi.Studio>>>
      ) => {
        state.studios = action.payload
        state.isLoading = false
        state.isLoaded = true
      },
      fetchStudiosError: (state: Draft<SubscriptionsCreatePageState>, action: PayloadAction<Error>) => {
        state.isLoading = false
        state.isLoaded = true
        state.error = action.payload
      },
      fetchAllDirections: (state: Draft<SubscriptionsCreatePageState>) => {
        state.isLoading = true
      },
      fetchAllDirectionsSuccess: (
        state: Draft<SubscriptionsCreatePageState>,
        action: PayloadAction<Nullable<Pagination<ExercisesDirectionsApi.ExerciseDirection>>>
      ) => {
        state.directions = action.payload
        state.isLoading = false
        state.isLoaded = true
      },
      fetchDirectionsError: (state: Draft<SubscriptionsCreatePageState>, action: PayloadAction<Error>) => {
        state.isLoading = false
        state.isLoaded = true
        state.error = action.payload
      },
      fetchAllExercises: (state: Draft<SubscriptionsCreatePageState>) => {
        state.isLoading = true
      },
      fetchAllExercisesSuccess: (
        state: Draft<SubscriptionsCreatePageState>,
        action: PayloadAction<Nullable<Pagination<ExercisesTypesApi.ExerciseType>>>
      ) => {
        state.exercises = action.payload
        state.isLoading = false
        state.isLoaded = true
      },
      fetchExercisesError: (state: Draft<SubscriptionsCreatePageState>, action: PayloadAction<Error>) => {
        state.isLoading = false
        state.isLoaded = true
        state.error = action.payload
      },
      reset: () => initialState,
    },
  })
