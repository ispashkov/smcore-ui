import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit'

import { ProductsApi } from '../../../../api/types/products-api.types'
import { Countable, isDefAndNotEmpty, Nullable } from '../../../../types/lang.types'
import { TransactionsCreatePageTableChangeAmountPayload } from './transactions-create-page-table.types'

export interface TransactionsCreatePageTableState {
  products: Nullable<Countable<ProductsApi.Product>[]>
}

const initialState: TransactionsCreatePageTableState = {
  products: null,
}

export const { actions: transactionsCreatePageTableActions, reducer: transactionsCreatePageTableReducer } = createSlice(
  {
    name: '@@transactions-create-page-table',
    initialState,
    reducers: {
      addProduct: (
        state: Draft<TransactionsCreatePageTableState>,
        action: PayloadAction<Countable<ProductsApi.Product>>
      ) => {
        if (isDefAndNotEmpty(state.products)) {
          state.products.push(action.payload)
        } else {
          state.products = [action.payload]
        }
      },
      removeProduct: (state: Draft<TransactionsCreatePageTableState>, action: PayloadAction<string>) => {
        state.products = state.products?.filter(product => product.entity.id !== action.payload)
      },

      changeAmount: (
        state: Draft<TransactionsCreatePageTableState>,
        action: PayloadAction<TransactionsCreatePageTableChangeAmountPayload>
      ) => {
        const { productId, amount } = action.payload

        state.products = state.products?.map(product => {
          if (product.entity.id === productId) {
            return { ...product, count: amount }
          }

          return product
        })
      },

      reset: () => initialState,
    },
  }
)
