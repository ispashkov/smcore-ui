import * as React from 'react'
import { Form, InputNumber } from 'antd'

import { ClientsSubscriptionsPauseFormProps } from './clients-subscriptions-pause-form.types'
import './clients-subscriptions-pause-form.styles.less'

export const ClientsSubscriptionsPauseForm: React.FC<ClientsSubscriptionsPauseFormProps> = props => {
  const { form, isLoading = false } = props

  return (
    <Form form={form} disabled={isLoading} autoComplete="off" layout="vertical">
      <Form.Item label="На сколько дней заморозить абонемент?" name="freezingDays">
        <InputNumber className="clients-subscriptions-pause-form__freezingDays" placeholder="Количество дней" min={1} />
      </Form.Item>
    </Form>
  )
}
