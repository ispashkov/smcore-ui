import * as React from 'react'
import { Form, Input, Select, Button, DatePicker, FormInstance } from 'antd'
import { DefaultOptionType } from 'antd/lib/select'
import { MaskedInput } from 'antd-mask-input'

import { isDef, NString } from '../../../types/lang.types'
import { PHONE_MASK } from '../../../types/masks.types'
import { ImageUploader } from '../../image-uploader/image-uploader.component'
import { useEmployeesForm } from './employees-form.hook'
import { genEmployeesUpdateFormValuesDTO } from './employees-form.utils'
import { EmployeesFormValues, EmployeesFormValuesDTO } from './employees-form.types'

interface Props {
  form: FormInstance<EmployeesFormValues>
  submitText: string
  positionsOptions?: DefaultOptionType[]
  franchisesOptions?: DefaultOptionType[]
  onFinish: (values: EmployeesFormValuesDTO) => void
}

export const EmployeesForm: React.FC<Props> = props => {
  const { form, submitText, franchisesOptions, positionsOptions, onFinish } = props

  const photo = Form.useWatch('photo', form)

  const { emailValidationRules, phoneValidationRules } = useEmployeesForm()

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

  const onFinishHandler = React.useCallback(
    (values: EmployeesFormValues): void => {
      const employeesFormValuesDTO = genEmployeesUpdateFormValuesDTO(values)
      onFinish(employeesFormValuesDTO)
    },
    [onFinish]
  )

  return (
    <Form
      form={form}
      name="userCreate"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      onFinish={onFinishHandler}
      autoComplete="off"
      layout="vertical"
    >
      <Form.Item name="photo" className="avatar_item">
        <ImageUploader image={photo} onChange={onChangeImageHandler} />
      </Form.Item>

      <Form.Item label="Фамилия" name="lastName" rules={[{ required: true, message: 'Введите фамилию' }]}>
        <Input placeholder="Фамилия" />
      </Form.Item>

      <Form.Item label="Имя" name="firstName" rules={[{ required: true, message: 'Введите имя' }]}>
        <Input placeholder="Имя" />
      </Form.Item>

      <Form.Item label="Отчество" name="middleName">
        <Input placeholder="Отчество" />
      </Form.Item>

      <Form.Item label="Дата рождения" name="birthDate" rules={[{ required: true, message: 'Введите дату рождения' }]}>
        <DatePicker style={{ width: '100%' }} placeholder="Дата рождения" />
      </Form.Item>

      <Form.Item label="Номер телефона" name="phone" rules={phoneValidationRules}>
        <MaskedInput placeholder="Номер телефона" mask={PHONE_MASK} />
      </Form.Item>

      <Form.Item label="Email" name="email" rules={emailValidationRules}>
        <Input placeholder="Email" />
      </Form.Item>

      <Form.Item label="Должность" name="position">
        <Select placeholder="Должность" options={positionsOptions} />
      </Form.Item>

      <Form.Item label="Грейд" name="grade">
        <Select placeholder="Грейд" />
      </Form.Item>

      <Form.Item label="Франшиза" name="organisation">
        <Select placeholder="Франшиза" options={franchisesOptions} />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          {submitText}
        </Button>
      </Form.Item>
    </Form>
  )
}
