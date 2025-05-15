import { FormInstance } from 'antd'
import { Rule } from 'antd/lib/form'
import { Store } from 'rc-field-form/lib/interface'
import moment from 'moment'

import { genDefaultTimeFormat } from '../../../format/date.format'
import { validateStrEnumValue } from '../../../utils/enum.utils'
import { isDef, isDefAndNotEmpty, Nullable } from '../../../types/lang.types'
import { Days } from '../../../types/days.types'
import {
  ScheduleFormSlot,
  ScheduleFormSlotsMap,
  ScheduleFormValues,
  ScheduleFormValuesDTO,
} from './schedule-form.types'

export function genScheduleFormDirectionValidationRules(): Rule[] {
  return [{ required: true, message: 'Выберите направление' }]
}

export function genScheduleFormTypeValidationRules(): Rule[] {
  return [{ required: true, message: 'Выберите тип тренировки' }]
}

export function genScheduleFormDateValidationRules(): Rule[] {
  return [{ required: true, message: 'Выберите дату начала и окончания' }]
}

function genScheduleFormSlotInitialValues(): Store[] {
  return [
    {
      time: [null, null],
      room: null,
      trainers: [],
    },
  ]
}

export function genScheduleFormInitialValues(): Store {
  return {
    direction: null,
    type: null,
    slots: {
      [Days.MONDAY]: genScheduleFormSlotInitialValues(),
      [Days.TUESDAY]: genScheduleFormSlotInitialValues(),
      [Days.WEDNESDAY]: genScheduleFormSlotInitialValues(),
      [Days.THURSDAY]: genScheduleFormSlotInitialValues(),
      [Days.FRIDAY]: genScheduleFormSlotInitialValues(),
      [Days.SATURDAY]: genScheduleFormSlotInitialValues(),
      [Days.SUNDAY]: genScheduleFormSlotInitialValues(),
    },
    date: [null, null],
  }
}

export function genScheduleFormValuesDTO(values: ScheduleFormValues, studioOffset: number): ScheduleFormValuesDTO {
  const { direction, type, date, slots } = values
  const [dateFrom, dateTo] = date

  return {
    direction,
    type,
    slots: genScheduleFormSlotsDTO(slots, studioOffset),
    date: [
      isDef(dateFrom) ? dateFrom.utcOffset(studioOffset, true).format('YYYY-MM-DD') : null,
      isDef(dateTo) ? dateTo.utcOffset(studioOffset, true).format('YYYY-MM-DD') : null,
    ],
  }
}

function genScheduleFormSlotsDTO(slots: ScheduleFormSlotsMap, studioOffset: number): ScheduleFormSlotsMap {
  return Object.entries(slots).reduce<ScheduleFormSlotsMap>((acc, [key]) => {
    const day = validateStrEnumValue<Days>(Days, key)

    if (isDef(day)) {
      const values = slots[day]?.reduce<ScheduleFormSlot[]>((acc, slot) => {
        const scheduleFormSlotDTO = genScheduleFormSlotDTO(slot, studioOffset)

        if (isDef(scheduleFormSlotDTO)) {
          acc.push(scheduleFormSlotDTO)
        }

        return acc
      }, [])

      if (isDefAndNotEmpty(values)) {
        acc[day] = values
      }
    }

    return acc
  }, {})
}

function genScheduleFormSlotDTO(slot: ScheduleFormSlot, studioOffset: number): Nullable<ScheduleFormSlot> {
  const { time, room, trainers } = slot
  const [timeFrom, timeTo] = time

  if (isDef(timeFrom) && isDef(timeTo) && isDef(room) && isDefAndNotEmpty(trainers)) {
    return {
      time: [
        moment(timeFrom, genDefaultTimeFormat()).utcOffset(studioOffset, true).format('HH:mm'),
        moment(timeTo, genDefaultTimeFormat()).utcOffset(studioOffset, true).format('HH:mm'),
      ],
      room,
      trainers,
    }
  }

  return null
}

export function genScheduleFormIsValid(form: FormInstance<ScheduleFormValues>): boolean {
  const directionIsValid = !isDefAndNotEmpty(form.getFieldError('direction'))
  const typeIsValid = !isDefAndNotEmpty(form.getFieldError('type'))
  const dateIsValid = !isDefAndNotEmpty(form.getFieldError('date'))
  const slotsIsValid = isValidScheduleFormSlot(form.getFieldValue('slots'))

  return directionIsValid && typeIsValid && dateIsValid && slotsIsValid
}

export function isValidScheduleFormSlot(slots: Nullable<ScheduleFormSlotsMap>): boolean {
  if (isDef(slots)) {
    const slotsMap = Object.entries(slots).reduce<ScheduleFormSlotsMap>((acc, [key]) => {
      const day = validateStrEnumValue<Days>(Days, key)

      if (isDef(day)) {
        const values = slots[day]?.reduce<ScheduleFormSlot[]>((acc, slot) => {
          if (!isEmptyScheduleFormSlot(slot)) {
            acc.push(slot)
          }

          return acc
        }, [])

        if (isDefAndNotEmpty(values)) {
          acc[day] = values
        }
      }

      return acc
    }, {})

    return isDefAndNotEmpty(Object.keys(slotsMap))
  }

  return false
}

function isEmptyScheduleFormSlot(slot: ScheduleFormSlot): boolean {
  const { time, room, trainers } = slot

  if (isDef(time)) {
    const [timeFrom, timeTo] = time

    return !isDef(timeFrom) || !isDef(timeTo) || !isDef(room) || !isDefAndNotEmpty(trainers)
  }

  return true
}
