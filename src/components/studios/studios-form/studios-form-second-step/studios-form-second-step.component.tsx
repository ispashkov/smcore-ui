import React from 'react'
import { Button, Form, FormInstance, Typography, Space, Modal } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons'
import { DefaultOptionType } from 'antd/lib/select'

import { useStudiosFormSecondStep } from './studios-form-second-step.hook'
import { StudiosFormCreateRoomModalComponent } from './studios-form-create-room-modal/studios-form-create-room-modal.component'
import { StudiosCreateRoomFormTypes, StudiosFormTypes } from '../studios-form-types'
import { StudiosFormCreateRoomCardComponent } from './studios-form-create-room-card/studios-form-create-room-card.component'

const { confirm } = Modal

interface Props {
  form: FormInstance<StudiosFormTypes>
  directionsOptions?: DefaultOptionType[]
}

export const StudiosFormSecondStepComponent: React.FC<Props> = ({ form, directionsOptions }) => {
  const { isModalOpen, rooms, editedRoom, onModalConfirm, onOpenModal, onModalCancel, onRemoveRoom, onEditRoom } =
    useStudiosFormSecondStep(form)
  const onRemoveHandler = React.useCallback(
    (room: StudiosCreateRoomFormTypes) => () => {
      const { name, id } = room

      confirm({
        title: `Подтвердите удаление зала ${name}`,
        icon: <ExclamationCircleOutlined />,
        content: `Вы уверены что хотите удалить зал: ${name}`,
        onOk: () => {
          onRemoveRoom(id!)
        },
        onCancel: () => {
          console.log('cancel')
        },
      })
    },
    [onRemoveRoom]
  )

  return (
    <div>
      <Typography.Title level={2}>Залы и направления</Typography.Title>
      <Form.Item>
        <Button onClick={onOpenModal}>Добавить зал</Button>
      </Form.Item>
      <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
        {rooms.map((room: StudiosCreateRoomFormTypes) => {
          return (
            <StudiosFormCreateRoomCardComponent
              room={room}
              onRemoveRoom={onRemoveHandler}
              key={room.id}
              onEditRoom={onEditRoom}
            />
          )
        })}
      </Space>
      <StudiosFormCreateRoomModalComponent
        editedRoom={editedRoom}
        open={isModalOpen}
        onOk={onModalConfirm}
        onCancel={onModalCancel}
        directionsOptions={directionsOptions}
      />
    </div>
  )
}
