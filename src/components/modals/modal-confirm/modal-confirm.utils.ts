import * as React from 'react'
import {
  ExclamationCircleOutlined,
  CloseCircleOutlined,
  InfoCircleOutlined,
  CheckCircleOutlined,
} from '@ant-design/icons'

import { ModalConfirmType } from './modal-confirm.types'

export function genModalConfirmIcon(type: ModalConfirmType): React.FC {
  switch (type) {
    case 'warning':
      return ExclamationCircleOutlined
    case 'error':
      return CloseCircleOutlined
    case 'info':
      return InfoCircleOutlined
    case 'success':
      return CheckCircleOutlined
  }
}
