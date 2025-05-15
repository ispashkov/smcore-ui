import * as React from 'react'

import { isDef, Nullable } from '../../../../types/lang.types'
import { AppModalQueueItem } from '../../../../types/modal.types'
import { genAppModalComponent } from '../../../../utils/modal.utils'

interface Props {
  activeModal: Nullable<AppModalQueueItem>
}

export const AppLayoutModalController: React.FC<Props> = props => {
  const { activeModal } = props

  if (isDef(activeModal)) {
    const Modal = genAppModalComponent(activeModal.modal)

    if (isDef(Modal)) {
      return <Modal {...activeModal.props} />
    }
  }

  return null
}
