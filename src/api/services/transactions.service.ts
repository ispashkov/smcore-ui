import { AxiosResponse } from 'axios'

import { HttpConnector } from '../connectors/http.connector'
import { Nullable } from '../../types/lang.types'
import { TransactionsApi } from '../types/transactions-api.types'
import { Pagination } from '../types/api.types'

export class TransactionsService {
  constructor(private readonly httpConnector: HttpConnector) {}

  public fetchAll = (
    params: Nullable<Partial<TransactionsApi.TransactionsFetchAllParams>>
  ): Promise<AxiosResponse<Pagination<TransactionsApi.Transaction>>> => {
    return this.httpConnector.get('/transactions', { params })
  }

  public create = (data: TransactionsApi.TransactionDTO): Promise<AxiosResponse<TransactionsApi.Transaction>> => {
    return this.httpConnector.post('/transactions', data)
  }

  public paid = (id: string): Promise<AxiosResponse<TransactionsApi.Transaction>> => {
    return this.httpConnector.put(`/transactions/${id}/paid`)
  }
}
