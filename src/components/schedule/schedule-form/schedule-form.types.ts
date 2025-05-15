import { FormInstance } from 'antd'
import { DefaultOptionType } from 'antd/lib/select'
import { Moment } from 'moment'

import { Days } from '../../../types/days.types'
import { InputTimeRangeValue } from '../../controls/input-time-range/input-time-range.types'

export type ScheduleFormProps = ScheduleFormBaseProps & ScheduleFormOptionsProps & ScheduleFormEventsProps

export interface ScheduleFormBaseProps {
  form: FormInstance<ScheduleFormValues>
  loading: boolean
}

export interface ScheduleFormOptionsProps {
  directionsOptions?: DefaultOptionType[]
  exercisesTypesOptions?: DefaultOptionType[]
  studiosRoomsOptions?: DefaultOptionType[]
  trainersOptions?: DefaultOptionType[]
}

export interface ScheduleFormEventsProps {
  onFieldsChange: (isValid: boolean) => void
}

export interface ScheduleFormSlot {
  time: InputTimeRangeValue
  room: string
  trainers: string[]
}

export type ScheduleFormSlotsMap = {
  [Day in Days]?: ScheduleFormSlot[]
}

export type ScheduleFormValues = ScheduleFormValuesBase<Moment>

export type ScheduleFormValuesDTO = ScheduleFormValuesBase<string>

interface ScheduleFormValuesBase<Time> {
  direction: number
  type: number
  slots: ScheduleFormSlotsMap
  date: [Time | null, Time | null]
}
