import * as React from 'react'
import { Form, Input, Select, Button, FormInstance } from 'antd'
import { DefaultOptionType } from 'antd/lib/select'
import { MaskedInput } from 'antd-mask-input'

import { PHONE_MASK } from '../../../types/masks.types'
import { useFranchisesForm } from './franchises-form.hook'
import { FranchisesFormValues } from './franchises-form.types'

interface Props {
  form: FormInstance<FranchisesFormValues>
  customersOptions?: DefaultOptionType[]
  submitText: string
  onFinish: (values: FranchisesFormValues) => void
}

export const FranchisesForm: React.FC<Props> = props => {
  const { form, submitText, customersOptions, onFinish } = props

  const { phoneValidationRules, emailValidationRules, customerNameValidationRules } = useFranchisesForm()

  return (
    <Form
      form={form}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      onFinish={onFinish}
      autoComplete="off"
      layout="vertical"
    >
      <Form.Item
        label="Название франшизы"
        name="name"
        rules={[{ required: true, message: 'Введите название франшизы' }]}
      >
        <Input placeholder="Название франшизы" />
      </Form.Item>

      <Form.Item label="ФИО владельца" name="customerName" rules={customerNameValidationRules}>
        <Select placeholder="ФИО владельца" options={customersOptions} />
      </Form.Item>

      <Form.Item label="Номер телефона" name="phone" rules={phoneValidationRules}>
        <MaskedInput placeholder="Номер телефона" mask={PHONE_MASK} />
      </Form.Item>

      <Form.Item label="Email" name="email" rules={emailValidationRules}>
        <Input placeholder="Email" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          {submitText}
        </Button>
      </Form.Item>
    </Form>
  )
}
