import { AxiosResponse } from 'axios'

import { Nullable } from '../../types/lang.types'
import { HttpConnector } from '../connectors/http.connector'
import { Pagination, PaginationParamsDTO } from '../types/api.types'
import { ClientsSubscriptionsApi } from '../types/clients-subscriptions-api.types'

export class ClientsSubscriptionsService {
  constructor(private readonly httpConnector: HttpConnector) {}

  public fetchAll = (
    clientId: string,
    params?: Nullable<Partial<PaginationParamsDTO>>
  ): Promise<AxiosResponse<Pagination<ClientsSubscriptionsApi.ClientSubscription>>> => {
    return this.httpConnector.get<Pagination<ClientsSubscriptionsApi.ClientSubscription>>(
      `/clients/${clientId}/subscriptions`,
      { params }
    )
  }

  public hold = (
    clientId: string,
    subscriptionId: string,
    data: ClientsSubscriptionsApi.ClientSubscriptionHoldDTO
  ): Promise<AxiosResponse<ClientsSubscriptionsApi.ClientSubscription>> => {
    return this.httpConnector.put(`/clients/${clientId}/subscriptions/${subscriptionId}/hold`, data)
  }

  public resume = (
    clientId: string,
    subscriptionId: string
  ): Promise<AxiosResponse<ClientsSubscriptionsApi.ClientSubscription>> => {
    return this.httpConnector.delete(`/clients/${clientId}/subscriptions/${subscriptionId}/hold`)
  }

  public refund = (
    clientId: string,
    subscriptionId: string
  ): Promise<AxiosResponse<ClientsSubscriptionsApi.ClientSubscription>> => {
    return this.httpConnector.put(`/clients/${clientId}/subscriptions/${subscriptionId}/refund`)
  }
}
