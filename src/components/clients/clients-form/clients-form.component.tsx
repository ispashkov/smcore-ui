import * as React from 'react'
import { Form, Input, Select, Button, DatePicker, FormInstance, Row, Col } from 'antd'
import { DefaultOptionType } from 'antd/lib/select'
import { MaskedInput } from 'antd-mask-input'

import { PHONE_MASK } from '../../../types/masks.types'
import { isDef, NString } from '../../../types/lang.types'
import { genDefaultDateFormat } from '../../../format/date.format'
import { ImageUploader } from '../../image-uploader/image-uploader.component'
import { genClientSexOptions, genClientsFormValuesDTO } from './clients-form.utils'
import { ClientsFormValues, ClientsFormValuesDTO } from './clients-form.types'
import { ClientSex } from '../../../types/clients.types'

interface Props {
  form: FormInstance<ClientsFormValues>
  categoriesOptions?: DefaultOptionType[]
  isLoading?: boolean
  isSaving?: boolean
  onSubmit: (values: ClientsFormValuesDTO) => void
}

export const ClientsForm: React.FC<Props> = props => {
  const { form, categoriesOptions, onSubmit } = props
  const { isLoading = false, isSaving = false } = props

  const photo = Form.useWatch('photo', form)

  const clientsSexOptions = React.useMemo(genClientSexOptions, [])

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
    (values: ClientsFormValues): void => {
      const clientsFormValuesDTO = genClientsFormValuesDTO(values)
      onSubmit(clientsFormValuesDTO)
    },
    [onSubmit]
  )

  return (
    <Form
      form={form}
      labelCol={{ span: 24 }}
      wrapperCol={{ span: 24 }}
      onFinish={onFinishHandler}
      disabled={isLoading}
      autoComplete="off"
      layout="vertical"
      initialValues={{
        sex: ClientSex.U,
      }}
    >
      <Form.Item name="photo" className="avatar_item">
        <ImageUploader image={photo} onChange={onChangeImageHandler} disabled={isLoading || isSaving} />
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

      <Row justify="start" gutter={16}>
        <Col span={8}>
          <Form.Item label="Дата рождения" name="birthDate">
            <DatePicker style={{ width: '100%' }} placeholder="Дата рождения" format={genDefaultDateFormat()} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="Пол" name="sex">
            <Select placeholder="Пол клиента" options={clientsSexOptions} loading={isLoading} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="Email" name="email">
            <Input placeholder="Email" />
          </Form.Item>
        </Col>
      </Row>

      <Row justify="start" gutter={16}>
        <Col span={8}>
          <Form.Item label="Номер телефона" name="phone">
            <MaskedInput placeholder="Номер телефона" mask={PHONE_MASK} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="Номер карты лояльности" name="loyaltyCard">
            <Input placeholder="Номер карты лояльности" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="Депозит" name="deposit">
            <Input placeholder="Депозит" suffix="₽" />
          </Form.Item>
        </Col>
      </Row>

      <Row justify="start" gutter={16}>
        <Col span={12}>
          <Form.Item label="Источник привлечения" name="source">
            <Select placeholder="Источник привлечения" loading={isLoading} disabled />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="Категория клиента" name="clientCategoryId">
            <Select placeholder="Категория" options={categoriesOptions} loading={isLoading} />
          </Form.Item>
        </Col>
      </Row>

      <Row justify="start" gutter={16}>
        <Col span={24}>
          <Form.Item label="Комментарий о клиенте" name="comment">
            <Input.TextArea maxLength={100} style={{ height: 60 }} placeholder="Комментарий о клиенте" />
          </Form.Item>
        </Col>
      </Row>

      <Button htmlType="submit" type="primary" disabled={isLoading || isSaving} loading={isSaving}>
        Сохранить
      </Button>
    </Form>
  )
}
