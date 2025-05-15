import {
  ColoredDictionaryItem,
  DictionaryItem,
  PaymentType as APIPaymentType,
  TimeLimitation as APITimeLimitation,
} from '../api/types/api.types'
import { ColoredEntityItem, EntityItem, isDef, Nullable } from '../types/lang.types'
import { isStrEnumValue, validateStrEnumValue } from '../utils/enum.utils'
import { PaymentType } from '../types/payment.types'
import { TimeLimitation } from '../types/time-limitation.types'

export function mapDictionaryItemToEntityItem<T>(dictionaryItem: Nullable<DictionaryItem<T>>): Nullable<EntityItem<T>> {
  if (isDef(dictionaryItem)) {
    return {
      id: dictionaryItem.id,
      title: dictionaryItem.name,
    }
  }

  return null
}

export function mapColoredDictionaryItemToEntityItem<T>(
  coloredItem: Nullable<ColoredDictionaryItem<T>>
): Nullable<ColoredEntityItem<T>> {
  if (isDef(coloredItem)) {
    return {
      id: coloredItem.id,
      title: coloredItem.name,
      color: coloredItem.color,
    }
  }

  return null
}

export function mapDictionaryItemsListToEntityItemsList<T>(
  dictionaryItemsList: Nullable<DictionaryItem<T>[]>
): Nullable<EntityItem<T>[]> {
  if (isDef(dictionaryItemsList)) {
    return dictionaryItemsList.reduce<EntityItem<T>[]>((acc, it) => {
      const entityItem = mapDictionaryItemToEntityItem(it)

      if (isDef(entityItem)) {
        acc.push(entityItem)
      }

      return acc
    }, [])
  }

  return null
}

export function mapEnumValueToEntityItem<T>(obj: object, value: any): Nullable<EntityItem<string>> {
  if (isDef(value) && isStrEnumValue<T>(obj, value)) {
    return {
      id: String(value),
      title: String(value),
    }
  }

  return null
}

export function mapPaymentTypeToClient(value: APIPaymentType): Nullable<PaymentType> {
  return validateStrEnumValue<PaymentType>(PaymentType, value)
}

export function mapPaymentTypeToApi(value: PaymentType): Nullable<APIPaymentType> {
  return validateStrEnumValue<APIPaymentType>(APIPaymentType, value)
}

export function mapTimeLimitationToClient(value: APITimeLimitation): Nullable<TimeLimitation> {
  return validateStrEnumValue<TimeLimitation>(TimeLimitation, value)
}

export function mapTimeLimitationToApi(value: TimeLimitation): Nullable<APITimeLimitation> {
  return validateStrEnumValue<APITimeLimitation>(APITimeLimitation, value)
}
