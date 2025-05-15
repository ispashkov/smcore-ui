import { DefaultOptionType } from 'antd/lib/select'
import { Moment } from 'moment'
import { UploadFile } from 'antd/es/upload/interface'

//import { WorkTime } from '../../../api/types/api.types'

export interface StudiosFormTypes {
  name: string
  country: string
  city: string
  address: string
  description: string
  mainPhoto: string
  photos: UploadFile[]
  orgId: DefaultOptionType
  workTime: Moment[]
  minRate: number
  rooms: StudiosCreateRoomFormTypes[]
  girlsOnly: boolean
}

export interface StudiosCreateRoomFormTypes {
  id?: string
  name: string
  totalCapacity: number
  mainPhoto?: string
  directionsIds: DefaultOptionType[]
}
