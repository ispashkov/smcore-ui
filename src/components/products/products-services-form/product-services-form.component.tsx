import React from 'react'
import { DefaultOptionType } from 'antd/lib/select'
import { Button, Form, FormInstance, Input, Row, Col, Radio, Select, Space } from 'antd'

import { castStringToBoolean, genServicesInitialValues, genServicesRadioOptions } from './product-services-form.utils'
import { ServiceFormValues } from './product-services-form.types'
import './product-services.styles.less'

interface Props {
  form: FormInstance<ServiceFormValues>
  onFinish: (values: ServiceFormValues) => void
  submitText: string
  directionsOptions?: DefaultOptionType[]
  studiosOptions?: DefaultOptionType[]
  exercisesOptions?: DefaultOptionType[]
}

export const ProductServicesForm: React.FC<Props> = ({
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
      labelCol={{ span: 15 }}
      wrapperCol={{ span: 24 }}
      onFinish={onFinish}
      autoComplete="off"
      layout="vertical"
      initialValues={genServicesInitialValues()}
    >
      <Row justify="start">
        <Col span={24}>
          <Form.Item label="Название" name="name" rules={[{ required: true, message: 'Введите название услуги' }]}>
            <Input placeholder="Название услуги" />
          </Form.Item>
        </Col>
      </Row>
      <Row justify="start" gutter={16}>
        <Col span={12}>
          <Form.Item label="Стоимость" name="cost" rules={[{ required: true, message: 'Введите стоимость' }]}>
            <Input placeholder="Стоимость" suffix="₽" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Стоимость пробного"
            name="trialCost"
            rules={[{ required: true, message: 'Введите стоимость пробного' }]}
          >
            <Input placeholder="Стоимость пробного" suffix="₽" />
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
