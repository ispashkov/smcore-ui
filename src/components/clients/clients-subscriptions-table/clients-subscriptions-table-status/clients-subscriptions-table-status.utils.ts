import { PresetStatusColorType } from 'antd/lib/_util/colors'

import { ClientSubscriptionStatus } from '../../../../types/clients-subscriptions.types'

export function mapClientSubscriptionStatusToPresetStatusColorType(
  status: ClientSubscriptionStatus
): PresetStatusColorType {
  switch (status) {
    case ClientSubscriptionStatus.ACTIVE:
      return 'success'
    case ClientSubscriptionStatus.NEW:
      return 'warning'
    case ClientSubscriptionStatus.EXPIRED:
      return 'error'
    case ClientSubscriptionStatus.REFUNDED:
    case ClientSubscriptionStatus.HOLD:
      return 'default'
  }
}
