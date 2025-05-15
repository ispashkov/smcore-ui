import { DefaultOptionType } from 'antd/lib/select'

import { Nullable } from '../../../types/lang.types'

export interface ServiceFormValues {
  id?: string
  name: string
  cost: number
  trialCost: number
  hasStudioLimitation: boolean | string
  availableStudios: Nullable<DefaultOptionType> | Nullable<DefaultOptionType[] | string[]>
  hasDirectionLimitation: boolean | string
  availableDirections: Nullable<DefaultOptionType> | Nullable<DefaultOptionType[] | string[]>
  hasTypeLimitation: boolean | string
  availableTypes: Nullable<DefaultOptionType> | Nullable<DefaultOptionType[] | string[]>
  timeLimitation: 'NONE'
}
