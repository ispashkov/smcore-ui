import * as React from 'react'
import { Button, Form, Modal } from 'antd'

import { ClientsSubscriptionsPauseForm } from '../clients-subscriptions-pause-form/clients-subscriptions-pause-form.component'
import { ClientsSubscriptionsPauseModalProps } from './clients-subscriptions-pause-modal.types'

export const ClientsSubscriptionsPauseModal: React.FC<ClientsSubscriptionsPauseModalProps> = props => {
  const { form, isLoading = false } = props
  const { onCancel, onSubmit } = props

  const freezingDays = Form.useWatch('freezingDays', form)

  const onSubmitHandler = React.useCallback((): void => {
    const values = form.getFieldsValue()
    onSubmit(values)
  }, [form, onSubmit])

  const isValid = freezingDays >= 1

  return (
    <Modal
      title="Заморозка абонемента"
      onCancel={onCancel}
      open={true}
      footer={
        <Button type="primary" loading={isLoading} onClick={onSubmitHandler} disabled={!isValid}>
          Заморозить
        </Button>
      }
    >
      <ClientsSubscriptionsPauseForm form={form} isLoading={isLoading} />
    </Modal>
  )
}
