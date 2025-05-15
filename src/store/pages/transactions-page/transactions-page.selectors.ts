import { createSelector } from '@reduxjs/toolkit'

import {
  mapTransactionsReceiptsToReceiptsListItemDataList,
  mapTransactionsToTransactionsTableDataItemsList,
} from '../../../mapping/transactions.mapping'
import { AppState } from '../../app.store'
import { Dict, isDef, isDefAndNotEmpty } from '../../../types/lang.types'
import { TransactionsApi } from '../../../api/types/transactions-api.types'

const getTransactionsInternal = (state: AppState) => state.transactionsPage.transactions
const getTransactionIdInternal = (state: AppState, id: string) => id

export const getTransactionsPageIsLoading = (state: AppState) => state.transactionsPage.isLoading
export const getTransactionsPageIsLoaded = (state: AppState) => state.transactionsPage.isLoaded

export const getTransactionsPageTableItemsList = createSelector(getTransactionsInternal, transactions =>
  mapTransactionsToTransactionsTableDataItemsList(transactions?.content)
)

export const getTransactionsPageTableTotalElements = createSelector(
  getTransactionsInternal,
  transactions => transactions?.totalElements
)

const getTransactionsMapByIdInternal = createSelector(getTransactionsInternal, transactions => {
  if (isDef(transactions)) {
    const { content } = transactions

    if (isDefAndNotEmpty(content)) {
      return content.reduce<Dict<TransactionsApi.Transaction>>((acc, transaction) => {
        acc[transaction.id] = transaction

        return acc
      }, {})
    }
  }

  return null
})

const getTransactionsById = createSelector(
  getTransactionsMapByIdInternal,
  getTransactionIdInternal,
  (transactionsMap, transactionId) => {
    if (isDef(transactionsMap)) {
      return transactionsMap[transactionId]
    }

    return null
  }
)

export const getTransactionPageReceiptsByTransactionId = createSelector([getTransactionsById], transaction => {
  if (isDef(transaction)) {
    return mapTransactionsReceiptsToReceiptsListItemDataList(transaction.receipts)
  }

  return null
})
