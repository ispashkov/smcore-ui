import { NString } from '../../../types/lang.types'

export interface ClientsInfoProps extends ClientsInfo {
  className?: string
}

export interface ClientsInfo {
  name: string
  phone: string
  photo: NString
}
