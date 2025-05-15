import moment from 'moment'

import {
  ScheduleFormSlot,
  ScheduleFormSlotsMap,
  ScheduleFormValues,
  ScheduleFormValuesDTO,
} from '../components/schedule/schedule-form/schedule-form.types'
import {
  ScheduleTableDataItem,
  ScheduleTableDataItemTimeSlot,
} from '../components/schedule/schedule-table/schedule-table.types'
import { ExercisesTimetableApi } from '../api/types/exercises-timetable-api.types'
import { Days as DaysApi } from '../api/types/api.types'
import { validateStrEnumValue } from '../utils/enum.utils'
import { isDef, isDefAndNotEmpty, Nullable } from '../types/lang.types'
import {
  mapColoredDictionaryItemToEntityItem,
  mapDictionaryItemsListToEntityItemsList,
  mapDictionaryItemToEntityItem,
} from './api.mapping'
import { Days } from '../types/days.types'

export function genExercisesTimetableDTO(
  values: Nullable<ScheduleFormValuesDTO>
): Nullable<ExercisesTimetableApi.ExercisesTimetableDTO> {
  if (isDef(values)) {
    const { date } = values
    const [dateFrom, dateTo] = date

    if (isDef(dateFrom) && isDef(dateTo)) {
      return {
        direction: values.direction,
        type: values.type,
        timeslots: genExercisesTimetableSlotsMapDTO(values.slots),
        dateFrom,
        dateTo,
      }
    }
  }

  return null
}

function genExercisesTimetableSlotsMapDTO(
  slots: ScheduleFormSlotsMap
): ExercisesTimetableApi.ExercisesTimetableSlotsMapDTO {
  return Object.keys(slots).reduce<ExercisesTimetableApi.ExercisesTimetableSlotsMapDTO>(
    (acc: ExercisesTimetableApi.ExercisesTimetableSlotsMapDTO, key: string) => {
      const day = validateStrEnumValue<DaysApi>(DaysApi, key)

      if (isDef(day)) {
        const values = slots[day]?.reduce<ExercisesTimetableApi.ExercisesTimetableSlotDTO[]>((acc, slot) => {
          const exercisesTimetableSlotDTO = genExercisesTimetableSlotDTO(slot)

          if (isDef(exercisesTimetableSlotDTO)) {
            acc.push(exercisesTimetableSlotDTO)
          }

          return acc
        }, [])

        if (isDefAndNotEmpty(values)) {
          acc[day] = values
        }
      }

      return acc
    },
    {}
  )
}

function genExercisesTimetableSlotDTO(
  slot: ScheduleFormSlot
): Nullable<ExercisesTimetableApi.ExercisesTimetableSlotDTO> {
  const { time, room, trainers } = slot
  const [timeFrom, timeTo] = time

  if (isDef(timeFrom) && isDef(timeTo) && isDef(room) && isDef(trainers)) {
    return {
      timeFrom,
      timeTo,
      room,
      trainers,
    }
  }

  return null
}

export function mapExercisesTimetableToScheduleTableDataItems(
  exercisesTimetable: Nullable<ExercisesTimetableApi.ExercisesTimetable[]>
): ScheduleTableDataItem[] | undefined {
  if (isDefAndNotEmpty(exercisesTimetable)) {
    return exercisesTimetable.reduce<ScheduleTableDataItem[]>((acc, exercisesTimetableItem) => {
      const { id, direction, type, room, timeslots, dateFrom, dateTo, trainers } = exercisesTimetableItem

      if (
        isDef(direction) &&
        isDef(type) &&
        isDef(timeslots) &&
        isDef(dateFrom) &&
        isDef(dateTo) &&
        isDefAndNotEmpty(trainers)
      ) {
        const directionEntity = mapDictionaryItemToEntityItem(direction)
        const typeEntity = mapDictionaryItemToEntityItem(type)
        const roomEntity = mapColoredDictionaryItemToEntityItem(room)
        const trainersEntities = mapDictionaryItemsListToEntityItemsList(trainers)
        const days = genDaysFromExercisesTimetableTimeslotsMap(timeslots)
        const timeslotsList = genTimeslotsFromExercisesTimetableTimeslotsMap(timeslots)

        if (
          isDef(directionEntity) &&
          isDef(typeEntity) &&
          isDefAndNotEmpty(days) &&
          isDefAndNotEmpty(timeslotsList) &&
          isDef(roomEntity) &&
          isDefAndNotEmpty(trainersEntities)
        ) {
          const scheduleTableDataItem: ScheduleTableDataItem = {
            id,
            direction: directionEntity,
            type: typeEntity,
            trainers: trainersEntities,
            studiosRoom: roomEntity,
            days,
            timeslots: timeslotsList,
            dateFrom,
            dateTo,
          }

          acc.push(scheduleTableDataItem)
        }
      }

      return acc
    }, [])
  }
}

function genDaysFromExercisesTimetableTimeslotsMap(
  exercisesTimetableSlotsMap: Nullable<ExercisesTimetableApi.ExercisesTimetableSlotsMap>
): Nullable<Days[]> {
  if (isDef(exercisesTimetableSlotsMap)) {
    return Object.entries(exercisesTimetableSlotsMap).reduce<Days[]>((acc, [key, slots]) => {
      const day = validateStrEnumValue<Days>(Days, key)

      if (isDef(day) && isDefAndNotEmpty(slots)) {
        acc.push(day)
      }

      return acc
    }, [])
  }

  return null
}

function genTimeslotsFromExercisesTimetableTimeslotsMap(
  exercisesTimetableSlotsMap: Nullable<ExercisesTimetableApi.ExercisesTimetableSlotsMap>
): Nullable<ScheduleTableDataItemTimeSlot[]> {
  if (isDef(exercisesTimetableSlotsMap)) {
    const timeslotsSet = Object.entries(exercisesTimetableSlotsMap).reduce<Map<string, ScheduleTableDataItemTimeSlot>>(
      (acc, [key, slots]) => {
        const day = validateStrEnumValue<Days>(Days, key)

        if (isDef(day) && isDefAndNotEmpty(slots)) {
          slots.forEach(slot => {
            const { timeFrom, timeTo } = slot

            if (isDef(timeFrom) && isDef(timeTo)) {
              acc.set(`${timeFrom}-${timeTo}`, {
                timeFrom,
                timeTo,
              })
            }
          })
        }

        return acc
      },
      new Map()
    )

    return Array.from(timeslotsSet.values())
  }

  return null
}

export function genScheduleFormValues(
  exerciseTimetable: Nullable<ExercisesTimetableApi.ExercisesTimetable>
): Nullable<ScheduleFormValues> {
  if (isDef(exerciseTimetable)) {
    const { direction, type, dateTo, dateFrom, timeslots } = exerciseTimetable

    const directionId = direction?.id
    const typeId = type?.id

    if (isDef(directionId) && isDef(typeId) && isDef(dateFrom) && isDef(dateTo)) {
      const slots = genScheduleFormValuesSlotsMap(timeslots)

      if (isDef(slots)) {
        return {
          direction: directionId,
          type: typeId,
          slots,
          date: [moment(dateFrom), moment(dateTo)],
        }
      }
    }
  }

  return null
}

function genScheduleFormValuesSlotsMap(
  slots: Nullable<ExercisesTimetableApi.ExercisesTimetableSlotsMap>
): Nullable<ScheduleFormSlotsMap> {
  if (isDef(slots)) {
    return Object.keys(slots).reduce<ScheduleFormSlotsMap>((acc, key) => {
      const day = validateStrEnumValue<Days>(Days, key)

      if (isDef(day)) {
        const values = slots[day]?.reduce<ScheduleFormSlot[]>((acc, slot) => {
          const scheduleFormValuesSlot = genScheduleFormValuesSlot(slot)

          if (isDef(scheduleFormValuesSlot)) {
            acc.push(scheduleFormValuesSlot)
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

  return null
}

function genScheduleFormValuesSlot(
  slot: Nullable<ExercisesTimetableApi.ExercisesTimetableSlot>
): Nullable<ScheduleFormSlot> {
  if (isDef(slot)) {
    const { timeFrom, timeTo, trainers, room } = slot

    if (isDef(timeFrom) && isDef(timeTo)) {
      return {
        time: [timeFrom, timeTo],
        room,
        trainers,
      }
    }
  }

  return null
}
