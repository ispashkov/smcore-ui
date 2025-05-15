import * as React from 'react'
import { Form, Input, Button, FormInstance } from 'antd'

import { ImageUploader } from '../../image-uploader/image-uploader.component'
import { DirectionsFormValues } from './directions-form.types'
import { isDef, NString } from '../../../types/lang.types'

interface Props {
  form: FormInstance<DirectionsFormValues>
  submitText: string
  onFinish: (values: DirectionsFormValues) => void
}

export const DirectionsForm: React.FC<Props> = props => {
  const { form, submitText, onFinish } = props

  const photo = Form.useWatch('photo', form)

  const onChangeImageHandler = React.useCallback(
    (photo: NString): void => {
      if (isDef(photo)) {
        const formValues = form.getFieldsValue()

        form.setFieldsValue({
          ...formValues,
          photo,
        })
      }
    },
    [form]
  )

  return (
    <Form
      form={form}
      name="userCreate"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      onFinish={onFinish}
      autoComplete="off"
      layout="vertical"
    >
      <Form.Item name="photo" className="avatar_item">
        <ImageUploader image={photo} onChange={onChangeImageHandler} />
      </Form.Item>

      <Form.Item label="Название" name="name" rules={[{ required: true, message: 'Введите название' }]}>
        <Input placeholder="Название" />
      </Form.Item>

      <Form.Item
        label="Что взять с собой"
        name="whatToTake"
        rules={[{ required: true, message: 'Укажите что нужно взять с собой' }]}
      >
        <Input.TextArea maxLength={100} style={{ height: 60 }} placeholder="Что взять с собой" />
      </Form.Item>

      <Form.Item
        label="Описание"
        name="description"
        rules={[{ required: true, message: 'Необходимо оставить описание' }]}
      >
        <Input.TextArea maxLength={100} style={{ height: 60 }} placeholder="Описание направления" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          {submitText}
        </Button>
      </Form.Item>
    </Form>
  )
}
