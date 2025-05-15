import { AxiosResponse } from 'axios'

import { HttpConnector } from '../connectors/http.connector'
import { Pagination, PaginationParamsDTO } from '../types/api.types'
import { StudiosRoomsApi } from '../types/studios-rooms-api.types'
import { Nullable } from '../../types/lang.types'

export class StudiosRoomsService {
  constructor(private readonly httpConnector: HttpConnector) {}

  public create = (
    studioId: string,
    data: StudiosRoomsApi.StudioRoomDTO
  ): Promise<AxiosResponse<Pagination<StudiosRoomsApi.StudioRoom>>> => {
    return this.httpConnector.put<Pagination<StudiosRoomsApi.StudioRoom>>(`/studios/${studioId}/rooms`, data)
  }

  public fetchAll = (
    studioId: string,
    params?: Nullable<Partial<PaginationParamsDTO>>
  ): Promise<AxiosResponse<Pagination<StudiosRoomsApi.StudioRoom>>> => {
    return this.httpConnector.get<Pagination<StudiosRoomsApi.StudioRoom>>(`/studios/${studioId}/rooms`, { params })
  }

  public fetchById = (studioId: string, roomId: string): Promise<AxiosResponse<StudiosRoomsApi.StudioRoom>> => {
    return this.httpConnector.get<StudiosRoomsApi.StudioRoom>(`/studios/${studioId}/rooms/${roomId}`)
  }

  public update = (
    studioId: string,
    roomId: string,
    data: StudiosRoomsApi.StudioRoomDTO
  ): Promise<AxiosResponse<StudiosRoomsApi.StudioRoom>> => {
    return this.httpConnector.patch<StudiosRoomsApi.StudioRoom>(`/studios/${studioId}/rooms/${roomId}`, data)
  }

  public remove = (studioId: string, roomId: string): Promise<void> => {
    return this.httpConnector.delete(`/studios/${studioId}/rooms/${roomId}`)
  }
}
