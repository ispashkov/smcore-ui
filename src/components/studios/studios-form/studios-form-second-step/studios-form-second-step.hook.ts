import { useEffect, useState } from 'react'
import { FormInstance } from 'antd'
import { nanoid } from 'nanoid'

import { StudiosCreateRoomFormTypes, StudiosFormTypes } from '../studios-form-types'
import { StudiosRoomsApi } from '../../../../api/types/studios-rooms-api.types'
import { isDefAndNotEmpty, Nullable } from '../../../../types/lang.types'

export function useStudiosFormSecondStep(form: FormInstance<StudiosFormTypes>) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [rooms, setRooms] = useState<StudiosCreateRoomFormTypes[]>([])
  const [editedRoom, setEditedRoom] = useState<Nullable<StudiosCreateRoomFormTypes>>(null)

  useEffect(() => {
    if (!isDefAndNotEmpty(rooms)) {
      setRooms(form.getFieldValue('rooms'))
    }
  }, [rooms, form])

  const onOpenModal = () => {
    setIsModalOpen(true)
  }

  const onModalCancel = () => {
    setIsModalOpen(false)
    setEditedRoom(null)
  }

  const onModalConfirm = (values: StudiosCreateRoomFormTypes) => {
    const existedRooms = form.getFieldValue('rooms')

    let updatedRooms: StudiosCreateRoomFormTypes[]
    if (editedRoom) {
      const filteredRooms = existedRooms.filter((room: StudiosRoomsApi.StudioRoomDTO) => room.id !== editedRoom.id)
      updatedRooms = [...filteredRooms, values]
    } else {
      const room = {
        id: nanoid(),
        ...values,
      }
      updatedRooms = [...existedRooms, room]
    }

    form.setFieldValue('rooms', updatedRooms)
    setRooms(updatedRooms)
    setEditedRoom(null)
    onModalCancel()
  }

  const onRemoveRoom = (id: string) => {
    const existedRooms = form.getFieldValue('rooms')

    const filteredRooms = existedRooms.filter((room: StudiosRoomsApi.StudioRoomDTO) => room.id !== id)

    setRooms(filteredRooms)

    form.setFieldValue('rooms', filteredRooms)
  }

  const onEditRoom = (values: StudiosCreateRoomFormTypes) => () => {
    setEditedRoom(values)
    onOpenModal()
  }

  return {
    rooms,
    editedRoom,
    isModalOpen,
    onOpenModal,
    onModalConfirm,
    onModalCancel,
    onRemoveRoom,
    onEditRoom,
  }
}
