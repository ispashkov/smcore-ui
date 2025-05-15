import { Nullable } from '../../../types/lang.types'
import { AppModalBaseProps } from '../../../types/modal.types'
import { ReceiptsListItemData } from '../receipts-list/receipts-list-item/receipts-list-item.types'

export interface ReceiptsModalProps extends AppModalBaseProps {
  title: string
  receipts: Nullable<ReceiptsListItemData[]>
}
