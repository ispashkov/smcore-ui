import { TablePaginationConfig } from 'antd'

import { EntityItem } from '../../../../types/lang.types'
import { PaymentType } from '../../../../types/payment.types'

export interface ClientsBookingsTableBaseProps {
  data: ClientsBookingsTableBaseDataItem[]
  pagination?: TablePaginationConfig
  loading?: boolean
  onChangePage: (page: number, pageSize: number) => void
  onChangePageSize: (pageSize: number) => void
}

export interface ClientsBookingsTableBaseDataItem {
  id: string
  createDate: string
  exerciseId: string
  exerciseDirection: EntityItem<number>
  studio: EntityItem<string>
  paymentType: PaymentType
  visitConfirmed: boolean
  canceled: boolean
}
