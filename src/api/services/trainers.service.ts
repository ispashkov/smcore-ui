import { AxiosResponse } from 'axios'

import { Nullable } from '../../types/lang.types'
import { HttpConnector } from '../connectors/http.connector'
import { TrainersApi } from '../types/trainers-api.types'
import { Pagination } from '../types/api.types'

export class TrainersService {
  constructor(private readonly httpConnector: HttpConnector) {}

  public fetchAll = (
    params: Nullable<Partial<TrainersApi.TrainerFetchAllParams>>
  ): Promise<AxiosResponse<Pagination<TrainersApi.Trainer>>> => {
    return this.httpConnector.get<Pagination<TrainersApi.Trainer>>('/employees/trainers', { params })
  }
}
