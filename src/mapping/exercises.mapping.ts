import { DefaultOptionType } from 'antd/lib/select'
import moment from 'moment'

import { ExercisesApi } from '../api/types/exercises-api.types'
import {
  ExercisesFormValues,
  ExercisesFormValuesDTO,
} from '../components/exercises/exercises-form/exercises-form.types'
import { ExercisesTableDataItem } from '../components/exercises/exercises-table/exercises-table.types'
import { ExercisesGroupBookingsTableDataItem } from '../components/exercises-group/exercises-group-bookings-table/exercises-group-bookings-table.types'
import { ExercisesGroupBookingFormValues } from '../components/exercises-group/exercises-group-booking-form/exercises-group-booking-form.types'
import { isDef, isDefAndNotEmpty, NNumber, Nullable } from '../types/lang.types'
import { ScheduleGroupPageExercise } from '../pages/schedule-group-page/schedule-group-page.types'
import { genDefaultTimeFormat } from '../format/date.format'
import {
  mapColoredDictionaryItemToEntityItem,
  mapDictionaryItemsListToEntityItemsList,
  mapDictionaryItemToEntityItem,
  mapPaymentTypeToApi,
  mapPaymentTypeToClient,
} from './api.mapping'

export function genExercisesCreateDTO(
  studioRoomId: string,
  values: Nullable<ExercisesFormValuesDTO>
): Nullable<ExercisesApi.ExercisesCreateDTO> {
  if (isDef(values)) {
    const { direction, type, time, trainers } = values
    const [timeFrom, timeTo] = time

    if (isDef(timeFrom) && isDef(timeTo)) {
      return {
        direction: direction,
        type: type,
        timeFrom,
        timeTo,
        trainers,
        room: studioRoomId,
      }
    }
  }

  return null
}

export function genExercisesUpdateDTO(
  values: Nullable<ExercisesFormValuesDTO>,
  studioRoomId: string,
  dateOfStart: string,
  dateOfEnd: string
): Nullable<ExercisesApi.ExerciseUpdateDTO> {
  if (isDef(values)) {
    const { time, trainers } = values
    const [timeFrom, timeTo] = time

    if (isDef(timeFrom) && isDef(timeTo)) {
      const dateFrom = dateOfStart + timeFrom.substring(dateOfStart.length)
      const dateTo = dateOfEnd + timeTo.substring(dateOfEnd.length)

      if (moment(dateFrom).isValid() && moment(dateTo).isValid()) {
        return {
          timeFrom: dateFrom,
          timeTo: dateTo,
          room: studioRoomId,
          trainers,
        }
      }
    }
  }

  return null
}

export function mapExercisesToExercisesTableDataItems(
  exercises: Nullable<ExercisesApi.Exercise[]>
): ExercisesTableDataItem[] | undefined {
  if (isDefAndNotEmpty(exercises)) {
    return exercises.reduce<ExercisesTableDataItem[]>((acc, exercise) => {
      const { timeFrom, timeTo } = exercise

      const studiosRoom = mapColoredDictionaryItemToEntityItem(exercise.room)

      if (isDef(timeFrom) && isDef(timeTo) && isDef(studiosRoom)) {
        acc.push({
          id: exercise.id,
          timeFrom,
          timeTo,
          direction: mapDictionaryItemToEntityItem(exercise.direction),
          type: mapDictionaryItemToEntityItem(exercise.type),
          trainers: mapDictionaryItemsListToEntityItemsList(exercise.trainers),
          studiosRoom,
          clientsCounts: exercise.clientsCount,
          maxClientsCount: exercise.maxClientsCount,
        })
      } else {
        console.error('Invalid exercise timeFrom or timeTo', exercise)
      }

      return acc
    }, [])
  }
}

export function mapExerciseToScheduleGroupPageExercise(
  exercise: Nullable<ExercisesApi.Exercise>
): Nullable<ScheduleGroupPageExercise> {
  if (isDef(exercise)) {
    const { timeFrom, timeTo } = exercise

    const direction = mapDictionaryItemToEntityItem(exercise.direction)
    const type = mapDictionaryItemToEntityItem(exercise.type)
    const studiosRoom = mapColoredDictionaryItemToEntityItem(exercise.room)
    const trainers = mapDictionaryItemsListToEntityItemsList(exercise.trainers)

    /**
     * @todo Trainers check should be added after API is implemented
     */
    if (isDef(direction) && isDef(type) && isDef(trainers) && isDef(studiosRoom))
      return {
        id: exercise.id,
        timeFrom,
        timeTo,
        direction,
        type,
        trainers,
        studiosRoom,
      }
  }

  return null
}

export function mapExercisesBookingsToExercisesGroupBookingsTableDataItems(
  exerciseBookings: Nullable<ExercisesApi.ExerciseBooking[]>
): ExercisesGroupBookingsTableDataItem[] | undefined {
  if (isDefAndNotEmpty(exerciseBookings)) {
    return exerciseBookings.reduce<ExercisesGroupBookingsTableDataItem[]>((acc, exerciseBooking) => {
      const { id, client, visitConfirmed, spot } = exerciseBooking
      const { firstName, lastName, photo, phone } = client

      const paymentType = mapPaymentTypeToClient(exerciseBooking.paymentType)

      if (isDef(paymentType)) {
        acc.push({
          id,
          paymentType,
          visitConfirmed,
          placement: spot,
          phone,
          photo,
          firstName,
          lastName,
        })
      }

      return acc
    }, [])
  }
}

export function mapExercisesSpotsToOptions(
  exercisesSpots: Nullable<ExercisesApi.ExerciseSpot[]>
): DefaultOptionType[] | undefined {
  if (isDefAndNotEmpty(exercisesSpots)) {
    return exercisesSpots.map(
      (exercisesSpot: ExercisesApi.ExerciseSpot): DefaultOptionType => ({
        value: exercisesSpot,
        label: exercisesSpot,
      })
    )
  }
}

export function genExerciseBookingCreateDTO(
  values: ExercisesGroupBookingFormValues
): Nullable<ExercisesApi.ExerciseBookingCreateDTO> {
  const { phone, place } = values
  const paymentType = mapPaymentTypeToApi(values.paymentType)

  if (isDef(paymentType)) {
    return {
      phone,
      paymentType,
      spot: place,
    }
  }

  return null
}

export function genExerciseFormValues(
  exercise: Nullable<ExercisesApi.Exercise>,
  studioOffset: NNumber
): Nullable<ExercisesFormValues> {
  if (isDef(exercise) && isDef(studioOffset)) {
    const { direction, type, trainers, timeFrom, timeTo } = exercise

    if (isDef(direction) && isDef(trainers) && isDef(type)) {
      return {
        direction: direction.id,
        trainers: trainers.map(trainer => trainer.id),
        type: type.id,
        time: [
          moment(timeFrom).utcOffset(studioOffset, false).format(genDefaultTimeFormat()),
          moment(timeTo).utcOffset(studioOffset, false).format(genDefaultTimeFormat()),
        ],
      }
    }
  }

  return null
}
