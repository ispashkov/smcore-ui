import { AxiosResponse } from 'axios'

import { Nullable } from '../../types/lang.types'
import { HttpConnector } from '../connectors/http.connector'
import { ClientsBookingsApi } from '../types/clients-bookings-api.types'
import { Pagination, PaginationParamsDTO } from '../types/api.types'

export class ClientsBookingsService {
  constructor(private readonly httpConnector: HttpConnector) {}

  public fetchAllActive = (
    clientId: string,
    params?: Nullable<Partial<PaginationParamsDTO>>
  ): Promise<AxiosResponse<Pagination<ClientsBookingsApi.ClientBooking>>> => {
    return this.httpConnector.get<Pagination<ClientsBookingsApi.ClientBooking>>(
      `/clients/${clientId}/bookings/active`,
      { params }
    )
  }

  public fetchAllPast = (
    clientId: string,
    params?: Nullable<Partial<PaginationParamsDTO>>
  ): Promise<AxiosResponse<Pagination<ClientsBookingsApi.ClientBooking>>> => {
    return this.httpConnector.get<Pagination<ClientsBookingsApi.ClientBooking>>(`/clients/${clientId}/bookings/past`, {
      params,
    })
  }
}
