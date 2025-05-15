import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit'

import { Nullable } from '../../../types/lang.types'
import { Pagination } from '../../../api/types/api.types'
import { StudiosApi } from '../../../api/types/studios-api.types'
import { ExercisesDirectionsApi } from '../../../api/types/exercises-directions-api.types'
import { ExercisesTypesApi } from '../../../api/types/exercises-types-api.types'
import { ProductsSubscriptionsApi } from '../../../api/types/products-subscriptions-api.types'
import {
  ProductSubscriptionEditPageDataSuccessPayload,
  ProductSubscriptionEditPageUpdatePayload,
} from './products-subscriptions-edit-page.types'

export interface ProductsSubscriptionsEditPageSlice {
  subscription: Nullable<ProductsSubscriptionsApi.ProductSubscription>
  studios: Nullable<Pagination<StudiosApi.Studio>>
  directions: Nullable<Pagination<ExercisesDirectionsApi.ExerciseDirection>>
  exercises: Nullable<Pagination<ExercisesTypesApi.ExerciseType>>
  isLoading: boolean
  isLoaded: boolean
  error: Nullable<Error>
}

const initialState: ProductsSubscriptionsEditPageSlice = {
  subscription: null,
  studios: null,
  directions: null,
  exercises: null,
  isLoading: false,
  isLoaded: false,
  error: null,
}

export const { actions: productSubscriptionsEditPageActions, reducer: productsSubscriptionsEditPageReducer } =
  createSlice({
    name: '@@productSubscriptions-edit-page',
    initialState,
    reducers: {
      fetchPageData: (state: Draft<ProductsSubscriptionsEditPageSlice>, _: PayloadAction<string>) => {
        state.isLoading = true
      },
      fetchPageDataSuccess: (
        state: Draft<ProductsSubscriptionsEditPageSlice>,
        action: PayloadAction<ProductSubscriptionEditPageDataSuccessPayload>
      ) => {
        const { subscription, studios, exercises, directions } = action.payload

        state.subscription = subscription
        state.studios = studios
        state.exercises = exercises
        state.directions = directions
        state.isLoading = false
        state.isLoaded = true
      },
      fetchPageDataError: (state: Draft<ProductsSubscriptionsEditPageSlice>, action: PayloadAction<Error>) => {
        state.isLoading = false
        state.error = action.payload
      },
      updateSubscription: (
        state: Draft<ProductsSubscriptionsEditPageSlice>,
        _: PayloadAction<ProductSubscriptionEditPageUpdatePayload>
      ) => {
        state.isLoading = true
      },
      updateSubscriptionSuccess: (state: Draft<ProductsSubscriptionsEditPageSlice>) => {
        state.isLoading = false
      },
      updateSubscriptionError: (state: Draft<ProductsSubscriptionsEditPageSlice>, action: PayloadAction<Error>) => {
        state.error = action.payload
      },
      reset: () => initialState,
    },
  })
