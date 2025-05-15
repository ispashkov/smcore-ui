import { createSelector } from '@reduxjs/toolkit'

import { AppState } from '../../../app.store'
import { isDefAndNotEmpty } from '../../../../types/lang.types'
import { mapCountableProductsToTransactionsProductsTableDataItem } from '../../../../mapping/products.mapping'

export const getTransactionsCreatePageTableProducts = (state: AppState) =>
  state.transactionsCreatePage.transactionsCreatePageTable.products

export const getTransactionsCreatePageTableProductsTableDataItems = createSelector(
  getTransactionsCreatePageTableProducts,
  products => mapCountableProductsToTransactionsProductsTableDataItem(products)
)

export const getTransactionsCreatePageTotal = createSelector(getTransactionsCreatePageTableProducts, products => {
  if (isDefAndNotEmpty(products)) {
    return products.reduce<number>((acc, product) => {
      const productTotalCost = product.entity.cost * product.count

      return acc + productTotalCost
    }, 0)
  }
  return 0
})
