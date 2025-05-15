import * as React from 'react'
import { Button, Modal } from 'antd'
import { clsx } from 'clsx'

import { ModalConfirmProps } from './modal-confirm.types'
import { genModalConfirmIcon } from './modal-confirm.utils'

export const ModalConfirm: React.FC<ModalConfirmProps> = props => {
  const { type, title, description } = props
  const { loading = false, submitText = 'Ок', cancelText = 'Отмена' } = props
  const { onSubmit, onCancel } = props

  const Icon = React.useMemo(() => genModalConfirmIcon(type), [type])

  return (
    <Modal
      className={clsx('ant-modal-confirm', {
        'ant-modal-confirm-warning': type === 'warning',
        'ant-modal-confirm-error': type === 'error',
        'ant-modal-confirm-info': type === 'info',
        'ant-modal-confirm-success': type === 'success',
      })}
      width={400}
      title={null}
      footer={null}
      closable={false}
      open
      onCancel={onCancel}
    >
      <div className="ant-modal-confirm-body-wrapper">
        <div className="ant-modal-confirm-body">
          <Icon />

          <span className="ant-modal-confirm-title">{title}</span>

          <div className="ant-modal-confirm-content">{description}</div>
        </div>

        <div className="ant-modal-confirm-btns">
          <Button onClick={onCancel} loading={loading}>
            {cancelText}
          </Button>

          <Button type="primary" color="primary" onClick={onSubmit} loading={loading}>
            {submitText}
          </Button>
        </div>
      </div>
    </Modal>
  )
}
