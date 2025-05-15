import React from 'react'
import { Modal, Form, Input, Select, Row, Col, InputNumber, Button } from 'antd'
import { DefaultOptionType } from 'antd/lib/select'

import { useCreateRoomModal } from './studios-form-create-room-modal.hook'
import { genRoomInitialValues } from './studios-form-create-room-modal.utils'
import { StudiosCreateRoomFormTypes } from '../../studios-form-types'
import { Nullable } from '../../../../../types/lang.types'

interface Props {
  open: boolean
  onOk: (values: StudiosCreateRoomFormTypes) => void
  onCancel: () => void
  directionsOptions?: DefaultOptionType[]
  editedRoom?: Nullable<StudiosCreateRoomFormTypes>
}

export const StudiosFormCreateRoomModalComponent: React.FC<Props> = ({
  open,
  onOk,
  onCancel,
  directionsOptions,
  editedRoom,
}) => {
  const { form } = useCreateRoomModal(editedRoom)
  const title = editedRoom ? 'Редактировать зал' : 'Добавить зал'
  const btnTitle = editedRoom ? 'Редактировать' : 'Добавить'

  const onSubmitForm = (values: StudiosCreateRoomFormTypes) => {
    form.resetFields()
    onOk(values)
  }

  return (
    <Modal title={title} open={open} onCancel={onCancel} cancelText="Отмена" okText="Добавить" footer={false}>
      <Form
        form={form}
        name="serviceCreate"
        labelCol={{ span: 15 }}
        wrapperCol={{ span: 24 }}
        onFinish={onSubmitForm}
        autoComplete="off"
        layout="vertical"
        initialValues={genRoomInitialValues()}
      >
        <Row justify="start">
          <Col span={24}>
            <Form.Item label="Название" name="name" rules={[{ required: true, message: 'Введите название зала' }]}>
              <Input placeholder="Название зала" />
            </Form.Item>
          </Col>
        </Row>
        <Row justify="start">
          <Col span={24}>
            <Form.Item
              label="Вместимость (количество человек)"
              name="totalCapacity"
              rules={[{ required: true, message: 'Введите вместимость зала' }]}
            >
              <InputNumber
                placeholder="Вместимость"
                min={1}
                max={200}
                defaultValue={1}
                style={{ width: '100%' }}
                controls={false}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row justify="start">
          <Col span={24}>
            <Form.Item
              label="Направления"
              name="directionsIds"
              rules={[{ required: true, message: 'Выберите направления зала' }]}
            >
              <Select labelInValue mode="multiple" placeholder="Выбрать" options={directionsOptions} />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            {btnTitle}
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  )
}
