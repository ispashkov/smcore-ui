import { PresetStatusColorType } from 'antd/lib/_util/colors'

import { TransactionStatus } from '../../../../types/transactions.types'

export function mapTransactionStatusToPresetStatusColorType(status: TransactionStatus): PresetStatusColorType {
  switch (status) {
    case TransactionStatus.PAID:
      return 'success'
    case TransactionStatus.UNPAID:
      return 'warning'
    case TransactionStatus.REFUND:
      return 'error'
  }
}
