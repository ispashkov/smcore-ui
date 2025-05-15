import { createSelector } from '@reduxjs/toolkit'

import { AppState } from '../../../app.store'
import {
  mapTransactionsReceiptsToReceiptsListItemDataList,
  mapTransactionsToClientsTransactionsTableDataItems,
} from '../../../../mapping/transactions.mapping'
import { Dict, isDef, isDefAndNotEmpty } from '../../../../types/lang.types'
import { TransactionsApi } from '../../../../api/types/transactions-api.types'

const getClientsTransactionsInternal = (state: AppState) => state.clientsEditPage.clientsEditPagePurchases.transactions
const getTransactionIdInternal = (state: AppState, id: string) => id

export const getClientsEditPagePurchasesIsLoaded = (state: AppState) =>
  state.clientsEditPage.clientsEditPagePurchases.isLoaded
export const getClientsEditPagePurchasesIsLoading = (state: AppState) =>
  state.clientsEditPage.clientsEditPagePurchases.isLoading

export const getClientsEditPagePurchasesTableDataItems = createSelector(getClientsTransactionsInternal, transactions =>
  mapTransactionsToClientsTransactionsTableDataItems(transactions?.content)
)

export const getClientsEditPagePurchasesTotalElements = createSelector(
  getClientsTransactionsInternal,
  transactions => transactions?.totalElements
)

const getTransactionsMapByIdInternal = createSelector(getClientsTransactionsInternal, transactions => {
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

export const getClientsEditPageReceiptsByTransactionId = createSelector([getTransactionsById], transaction => {
  if (isDef(transaction)) {
    return mapTransactionsReceiptsToReceiptsListItemDataList(transaction.receipts)
  }

  return null
})
