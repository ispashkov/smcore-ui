import * as React from 'react'
import { Form, Radio } from 'antd'

import { formatPaymentMethod } from '../../../format/text.format'
import { ClientsAutocompleteContainer } from '../../../containers/clients-autocomplete/clients-autocomplete.container'
import { useTransactionsForm } from './transactions-form.hook'
import { TransactionsFormProps } from './transactions-form.types'
import './transactions-form.styles.less'

export const TransactionsForm: React.FC<TransactionsFormProps> = props => {
  const { form } = props

  const { paymentMethods, paymentMethodValidationRules, phoneValidationRules } = useTransactionsForm()

  return (
    <Form form={form} layout="vertical">
      <div className="transactions-form-fields">
        <Form.Item label="Номер телефона" name="phone" rules={phoneValidationRules}>
          <ClientsAutocompleteContainer form={form} name="phone" />
        </Form.Item>

        <Form.Item
          className="transactions-form-fields__paymentMethods"
          label="Способ оплаты"
          name="paymentMethod"
          rules={paymentMethodValidationRules}
        >
          <Radio.Group>
            {paymentMethods.map(paymentMethod => (
              <Radio.Button key={paymentMethod} value={paymentMethod}>
                {formatPaymentMethod(paymentMethod)}
              </Radio.Button>
            ))}
          </Radio.Group>
        </Form.Item>
      </div>
    </Form>
  )
}
