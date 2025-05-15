import React from 'react'
import { DefaultOptionType } from 'antd/lib/select'
import { Button, Form, FormInstance, Input, Row, Col, Radio, Select, Space } from 'antd'

import { genServicesInitialValues, genServicesRadioOptions } from './products-subscriptions-form.utils'
import { castStringToBoolean } from '../products-services-form/product-services-form.utils'
import './products-subscriptions-form.styles.less'
import { ProductsSubscriptionsFormValue } from './products-subscriptions-form.types'

interface Props {
  form: FormInstance<ProductsSubscriptionsFormValue>
  onFinish: (values: ProductsSubscriptionsFormValue) => void
  submitText: string
  directionsOptions?: DefaultOptionType[]
  studiosOptions?: DefaultOptionType[]
  exercisesOptions?: DefaultOptionType[]
}

export const ProductSubscriptionForm: React.FC<Props> = ({
  form,
  onFinish,
  submitText,
  directionsOptions,
  studiosOptions,
  exercisesOptions,
}) => {
  const hasStudioLimitation = Form.useWatch('hasStudioLimitation', form)
  const hasDirectionLimitation = Form.useWatch('hasDirectionLimitation', form)
  const hasTypeLimitation = Form.useWatch('hasTypeLimitation', form)

  return (
    <Form
      form={form}
      name="serviceCreate"
      labelCol={{ span: 24 }}
      wrapperCol={{ span: 24 }}
      onFinish={onFinish}
      autoComplete="off"
      layout="vertical"
      initialValues={genServicesInitialValues()}
    >
      <Row justify="start">
        <Col span={24}>
          <Form.Item label="Название" name="name" rules={[{ required: true, message: 'Введите название абонемента' }]}>
            <Input placeholder="Название абонемента" />
          </Form.Item>
        </Col>
      </Row>
      <Row justify="start" gutter={16}>
        <Col span={8}>
          <Form.Item
            label="Кол-во занятий"
            name="visits"
            rules={[{ required: true, message: 'Введите кол-во занятий' }]}
          >
            <Input placeholder="Кол-во занятий" suffix="шт" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Срок действия"
            name="validityDays"
            rules={[{ required: true, message: 'Введите срок действия' }]}
          >
            <Input placeholder="Срок действия" suffix="дней" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="Стоимость" name="cost" rules={[{ required: true, message: 'Введите стоимость' }]}>
            <Input placeholder="Стоимость" suffix="₽" />
          </Form.Item>
        </Col>
      </Row>
      <Row justify="start" gutter={16}>
        <Col span={8}>
          <Form.Item
            label="Автоактивация"
            name="activationDays"
            rules={[{ required: true, message: 'Введите срок автоактивации' }]}
          >
            <Input placeholder="Автоактивация" suffix="дней" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Заморозка"
            name="freezingDays"
            rules={[{ required: true, message: 'Введите срок заморозки' }]}
          >
            <Input placeholder="Заморозка" suffix="дней" />
          </Form.Item>
        </Col>
      </Row>
      <Row justify="start" gutter={16}>
        <Col span={8}>
          <Form.Item label="Студии" name="hasStudioLimitation">
            <Space direction="vertical" size="middle" className="space">
              <Radio.Group
                options={genServicesRadioOptions()}
                className="radioWrp"
                name="hasStudioLimitation"
                value={castStringToBoolean(form.getFieldValue('hasStudioLimitation'))}
              />
            </Space>
          </Form.Item>
          <Form.Item name="availableStudios">
            <Select
              placeholder="Студии"
              disabled={!castStringToBoolean(hasStudioLimitation)}
              options={studiosOptions}
              mode="multiple"
              labelInValue
            />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="Направления" name="hasDirectionLimitation">
            <Space direction="vertical" size="middle" className="space">
              <Radio.Group
                options={genServicesRadioOptions()}
                name="hasDirectionLimitation"
                className="radioWrp"
                value={castStringToBoolean(form.getFieldValue('hasDirectionLimitation'))}
              />
            </Space>
          </Form.Item>
          <Form.Item name="availableDirections">
            <Select
              placeholder="Направления"
              disabled={!castStringToBoolean(hasDirectionLimitation)}
              options={directionsOptions}
              mode="multiple"
              labelInValue
            />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="Тип занятий" name="hasTypeLimitation">
            <Space direction="vertical" size="middle" className="space">
              <Radio.Group
                options={genServicesRadioOptions()}
                name="hasTypeLimitation"
                className="radioWrp"
                value={castStringToBoolean(form.getFieldValue('hasTypeLimitation'))}
              />
            </Space>
          </Form.Item>
          <Form.Item name="availableTypes">
            <Select
              placeholder="Тип занятий"
              disabled={!castStringToBoolean(hasTypeLimitation)}
              options={exercisesOptions}
              mode="multiple"
              labelInValue
            />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          {submitText}
        </Button>
      </Form.Item>
    </Form>
  )
}
