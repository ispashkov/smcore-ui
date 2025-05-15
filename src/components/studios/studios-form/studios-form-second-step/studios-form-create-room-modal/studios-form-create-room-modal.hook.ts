import { Form } from 'antd'
import { useEffect } from 'react'

import { StudiosCreateRoomFormTypes } from '../../studios-form-types'
import { isDef, Nullable } from '../../../../../types/lang.types'
import { genRoomInitialValues } from './studios-form-create-room-modal.utils'

export function useCreateRoomModal(editedRoom?: Nullable<StudiosCreateRoomFormTypes>) {
  const [form] = Form.useForm<StudiosCreateRoomFormTypes>()

  useEffect(() => {
    if (isDef(editedRoom)) {
      form.setFieldsValue(editedRoom)
    } else {
      form.setFieldsValue(genRoomInitialValues())
    }
  }, [editedRoom, form])

  return { form }
}
