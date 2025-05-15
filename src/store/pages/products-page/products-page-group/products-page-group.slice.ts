import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit'

import { Nullable } from '../../../../types/lang.types'
import { Pagination } from '../../../../api/types/api.types'
import { ProductsSubscriptionsApi } from '../../../../api/types/products-subscriptions-api.types'
import { ProductsPageQueryParams } from '../../../../pages/products-page/products-page.types'

export interface ProductsPageGroupState {
  subscriptions: Nullable<Pagination<ProductsSubscriptionsApi.ProductSubscription>>
  isLoading: boolean
  isLoaded: boolean
  error: Nullable<Error>
}

const initialState: ProductsPageGroupState = {
  subscriptions: null,
  isLoading: false,
  isLoaded: false,
  error: null,
}

export const { actions: productsPageGroupActions, reducer: productsPageGroupReducer } = createSlice({
  name: '@@products-page-group',
  initialState,
  reducers: {
    fetchAllSubscriptions: (state: Draft<ProductsPageGroupState>, _: PayloadAction<ProductsPageQueryParams>) => {
      state.isLoading = true
    },
    fetchAllSubscriptionsSuccess: (
      state: Draft<ProductsPageGroupState>,
      action: PayloadAction<Nullable<Pagination<ProductsSubscriptionsApi.ProductSubscription>>>
    ) => {
      state.subscriptions = action.payload
      state.isLoading = false
      state.isLoaded = true
    },
    fetchAllSubscriptionsError: (state: Draft<ProductsPageGroupState>, action: PayloadAction<Error>) => {
      state.isLoading = false
      state.isLoaded = true
      state.error = action.payload
    },
    removeSubscription: (state: Draft<ProductsPageGroupState>, _: PayloadAction<string>) => {
      state.isLoading = true
    },
    removeSubscriptionSuccess: (state: Draft<ProductsPageGroupState>) => {
      state.isLoading = false
    },
    removeSubscriptionError: (state: Draft<ProductsPageGroupState>, action: PayloadAction<Error>) => {
      state.error = action.payload
    },
    reset: () => initialState,
  },
})
