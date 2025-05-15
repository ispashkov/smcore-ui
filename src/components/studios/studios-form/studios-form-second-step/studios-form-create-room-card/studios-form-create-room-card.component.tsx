import React from 'react'
import { Card, Col, Button, Row, Typography, Space } from 'antd'
import { CloseOutlined, EditOutlined } from '@ant-design/icons'

import { StudiosCreateRoomFormTypes } from '../../studios-form-types'

const { Text } = Typography

interface Props {
  room: StudiosCreateRoomFormTypes
  onRemoveRoom: (room: StudiosCreateRoomFormTypes) => (e: React.MouseEvent<HTMLElement, MouseEvent>) => void
  onEditRoom: (room: StudiosCreateRoomFormTypes) => (e: React.MouseEvent<HTMLElement, MouseEvent>) => void
}

export const StudiosFormCreateRoomCardComponent: React.FC<Props> = ({ room, onRemoveRoom, onEditRoom }) => {
  const { directionsIds, totalCapacity } = room
  const directions = directionsIds.map(direction => direction.label)
  return (
    <Card title={room.name} bordered={false} style={{ width: '100%' }}>
      <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
        <Row justify="start">
          <Col span={3}>
            <Text strong>Направления:</Text>
          </Col>
          <Col span={8}>
            <Text>{directions.join(',')}</Text>
          </Col>
        </Row>
        <Row justify="start">
          <Col span={3}>
            <Text strong>Вместимость:</Text>
          </Col>
          <Col span={8}>
            <Text>{totalCapacity} человек</Text>
          </Col>
        </Row>
        <Row justify="start" gutter={16}>
          <Col span={8}>
            <Space direction="horizontal" size="middle" style={{ display: 'flex' }}>
              <Button icon={<EditOutlined />} onClick={onEditRoom(room)}>
                Изменить
              </Button>
              <Button danger icon={<CloseOutlined />} onClick={onRemoveRoom(room)}>
                Удалить
              </Button>
            </Space>
          </Col>
        </Row>
      </Space>
    </Card>
  )
}
