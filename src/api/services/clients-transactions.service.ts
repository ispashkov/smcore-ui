import { AxiosResponse } from 'axios'

import { Nullable } from '../../types/lang.types'
import { HttpConnector } from '../connectors/http.connector'
import { Pagination, PaginationParamsDTO } from '../types/api.types'
import { TransactionsApi } from '../types/transactions-api.types'

export class ClientsTransactionsService {
  constructor(private readonly httpConnector: HttpConnector) {}

  public fetchAll = (
    clientId: string,
    params?: Nullable<Partial<PaginationParamsDTO>>
  ): Promise<AxiosResponse<Pagination<TransactionsApi.Transaction>>> => {
    return this.httpConnector.get<Pagination<TransactionsApi.Transaction>>(`/clients/${clientId}/transactions`, {
      params,
    })
  }
}
