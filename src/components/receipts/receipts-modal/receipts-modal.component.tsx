import * as React from 'react'
import { Modal } from 'antd'

import { isDefAndNotEmpty } from '../../../types/lang.types'
import { PageEmpty } from '../../page/page-empty/page-empty.component'
import { ReceiptsList } from '../receipts-list/receipts-list.component'
import { ReceiptsModalProps } from './receipts-modal.types'
import './receipts-modal.styles.less'

export const ReceiptsModal: React.FC<ReceiptsModalProps> = props => {
  const { title, receipts } = props
  const { onCancel } = props

  return (
    <Modal className="receipts-modal" title={title} width={704} open={true} footer={null} onCancel={onCancel}>
      {isDefAndNotEmpty(receipts) ? <ReceiptsList receipts={receipts} /> : <PageEmpty description="Чеки не найдены" />}
    </Modal>
  )
}
