import * as React from 'react'
import { Button, Form, FormInstance, Select, Space } from 'antd'
import { MinusOutlined } from '@ant-design/icons'
import { DefaultOptionType } from 'antd/lib/select'

import { Days } from '../../../../types/days.types'
import { isDefAndNotEmpty } from '../../../../types/lang.types'
import { InputTimeRange } from '../../../controls/input-time-range/input-time-range.component'
import { InputTimeRangeValue } from '../../../controls/input-time-range/input-time-range.types'
import { ScheduleFormSlot, ScheduleFormValues } from '../schedule-form.types'
import {
  genExercisesFormSlotItemRoomValidationRules,
  genExercisesFormSlotItemTrainersValidationRules,
  genScheduleFormSlotItemTimeValidationRules,
} from './schedule-form-slot-item.utils'
import './schedule-form-slot-item.styles.less'

interface Props {
  form: FormInstance<ScheduleFormValues>
  day: Days
  loading: boolean
  name: number
  studiosRoomsOptions?: DefaultOptionType[]
  trainersOptions?: DefaultOptionType[]
  onRemove: (index: number) => void
}

export const ScheduleFormSlotItem: React.FC<Props> = props => {
  const { form, name, day, loading, studiosRoomsOptions, trainersOptions } = props
  const { onRemove } = props

  const timeValidationRules = React.useMemo(genScheduleFormSlotItemTimeValidationRules, [])
  const roomValidationRules = React.useMemo(genExercisesFormSlotItemRoomValidationRules, [])
  const trainersValidationRules = React.useMemo(genExercisesFormSlotItemTrainersValidationRules, [])

  const onRemoveHandler = React.useCallback((): void => {
    onRemove(name)
  }, [name, onRemove])

  const onChangeTimeHandler = React.useCallback(
    (value: InputTimeRangeValue): void => {
      const values = form.getFieldsValue()
      const slotsByDay = values.slots[day]

      if (isDefAndNotEmpty(slotsByDay)) {
        const daysSlots = slotsByDay.map((slot: ScheduleFormSlot, index: number): ScheduleFormSlot => {
          return index === name ? { ...slot, time: value } : slot
        })

        form.setFieldsValue({
          ...values,
          slots: {
            ...values.slots,
            [day]: daysSlots,
          },
        })
      }
    },
    [day, form, name]
  )

  return (
    <Space className="schedule-form-slot-item">
      <Form.Item className="schedule-form-slot-item__form-item" rules={timeValidationRules}>
        <InputTimeRange
          value={form.getFieldValue(['slots', day, name, 'time'])}
          placeholder={['Начало', 'Конец']}
          onChange={onChangeTimeHandler}
        />
      </Form.Item>

      <Form.Item className="schedule-form-slot-item__form-item" name={[name, 'room']} rules={roomValidationRules}>
        <Select placeholder="Зал" options={studiosRoomsOptions} disabled={loading} loading={loading} />
      </Form.Item>

      <Form.Item
        className="schedule-form-slot-item__form-item"
        name={[name, 'trainers']}
        rules={trainersValidationRules}
      >
        <Select placeholder="Тренеры" options={trainersOptions} disabled={loading} loading={loading} mode="multiple" />
      </Form.Item>

      <Form.Item className="schedule-form-slot-item__form-item">
        <Button icon={<MinusOutlined />} size="middle" danger onClick={onRemoveHandler} />
      </Form.Item>
    </Space>
  )
}
