import { Nullable } from '../../types/lang.types'
import { DictionaryItem, TimeLimitation } from './api.types'

export namespace ProductsServicesApi {
  export enum ProductServiceType {
    INDIVIDUAL = 'INDIVIDUAL',
    GROUP = 'GROUP',
  }

  export interface ProductService {
    id: string
    name: string
    cost: number
    trialCost: number
    hasStudioLimitation: boolean | string
    availableStudios: Nullable<DictionaryItem[]>
    hasDirectionLimitation: boolean | string
    availableDirections: Nullable<DictionaryItem[]>
    hasTypeLimitation: boolean | string
    availableTypes: Nullable<DictionaryItem[]>
    timeLimitation: TimeLimitation
    type: ProductServiceType
  }

  export interface ProductServiceDTO {
    name: string
    cost: number
    trialCost: number
    hasStudioLimitation: boolean
    availableStudios: string[] | number[]
    hasDirectionLimitation: boolean
    availableDirections: string[] | number[]
    hasTypeLimitation: boolean
    availableTypes: string[] | number[]
    timeLimitation: TimeLimitation
  }

  export interface ProductEditDTO {
    id: string
    name: string
    cost: number
    trialCost: number
    hasStudioLimitation: boolean
    availableStudios: Nullable<number[] | string[]>
    hasDirectionLimitation: boolean
    availableDirections: Nullable<number[] | string[]>
    hasTypeLimitation: boolean
    availableTypes: Nullable<number[] | string[]>
    timeLimitation: TimeLimitation
  }

  export interface ProductCreateDTO {
    name: string
    cost: number
    trialCost: number
    hasStudioLimitation: boolean
    availableStudios: Nullable<number | string>[]
    hasDirectionLimitation: boolean
    availableDirections: Nullable<number | string>[]
    hasTypeLimitation: boolean
    availableTypes: Nullable<number[]> | Nullable<string[]>
    timeLimitation: TimeLimitation
  }
}
