import { DefaultOptionType } from 'antd/lib/select'
import moment from 'moment'
import { UploadFile } from 'antd/es/upload/interface'

import { StudiosApi } from '../api/types/studios-api.types'
import { AppLayoutTopBarStudio } from '../components/layouts/app-layout/app-layout-top-bar/app-layout-top-bar.types'
import { isDef, isDefAndNotEmpty, Nullable } from '../types/lang.types'
import { StudiosTableRow } from '../components/studios/studios-table/studios-table.types'
import { StudiosCreateRoomFormTypes, StudiosFormTypes } from '../components/studios/studios-form/studios-form-types'
import { Days } from '../api/types/api.types'
import { genDefaultTimeFormat } from '../format/date.format'

export function mapStudiosToAppLayoutTopBarStudios(
  studios: Nullable<StudiosApi.Studio[]>
): Nullable<AppLayoutTopBarStudio[]> {
  if (isDefAndNotEmpty(studios)) {
    return studios.reduce<AppLayoutTopBarStudio[]>((acc, studio) => {
      if (isDef(studio.offset)) {
        acc.push({
          id: studio.id,
          title: studio.name,
          offset: studio.offset,
        })
      }

      return acc
    }, [])
  }

  return null
}

export function mapStudiosToOptions(directions: Nullable<StudiosApi.Studio[]>): DefaultOptionType[] | undefined {
  if (isDefAndNotEmpty(directions)) {
    return directions.map(
      (direction: StudiosApi.Studio): DefaultOptionType => ({
        value: direction.id,
        label: direction.name,
      })
    )
  }
}

export function mapStudiosToStudiosTableRowList(studios: Nullable<StudiosApi.Studio[]>): Nullable<StudiosTableRow[]> {
  if (isDefAndNotEmpty(studios)) {
    return studios.map(
      (studio: StudiosApi.Studio): StudiosTableRow => ({
        id: studio.id,
        name: studio.name,
        country: studio.country,
        city: studio.city,
        address: studio.address,
        description: studio.description,
        schedule: studio.schedule,
        mainPhoto: studio.mainPhoto,
        offset: studio.offset,
        organization: studio.organization?.name,
        rooms: studio.rooms?.length,
        directions: studio.directions,
        directionsCount: studio.directionsCount,
        photos: studio.photos,
        workTime: studio.workTime,
      })
    )
  }
}

export function mapStudiosCitiesToOptions(cities: Nullable<string[]>): DefaultOptionType[] | undefined {
  if (isDefAndNotEmpty(cities)) {
    return cities.map(
      (city: string): DefaultOptionType => ({
        value: city,
        label: city,
      })
    )
  }
}

export function mapStudiosCountriesToOptions(countries: Nullable<string[]>): DefaultOptionType[] | undefined {
  if (isDefAndNotEmpty(countries)) {
    return countries.map(
      (country: string): DefaultOptionType => ({
        value: country,
        label: country,
      })
    )
  }
}

export function genStudiosDTO(values: Nullable<StudiosFormTypes>): Nullable<StudiosApi.StudioCreateDTO> {
  if (isDef(values)) {
    const photos = values.photos.map(file => file.response)
    return {
      ...values,
      orgId: values.orgId.value as string,
      minRate: values.minRate * 100,
      girlsOnly: values.girlsOnly,
      workTime: {
        days: {
          from: Days.FRIDAY,
          to: Days.FRIDAY,
        },
        time: {
          from: values?.workTime[0].format(genDefaultTimeFormat()),
          to: values?.workTime[1].format(genDefaultTimeFormat()),
        },
      },
      rooms: values.rooms.map(room => {
        return {
          ...room,
          directionsIds: room.directionsIds.map(direction => direction.value) as string[],
          rates: [],
        }
      }),
      photos: values.photos.map(file => file.response),
      mainPhoto: photos[0],
    }
  }
}

export function genStudiosFormValues(values: Nullable<StudiosApi.Studio>): Nullable<StudiosFormTypes> {
  if (isDef(values)) {
    return {
      ...values,
      orgId: { label: values?.organization?.name, value: values?.organization?.id },
      photos: values?.photos?.map((photo, index) => ({
        uid: String(index),
        name: `Photo${index}`,
        status: 'done',
        response: photo,
        url: photo,
      })) as UploadFile[],
      minRate: values.minRate / 100,
      workTime: [
        moment(values?.workTime?.time.from, genDefaultTimeFormat()),
        moment(values?.workTime?.time.to, genDefaultTimeFormat()),
      ],
      girlsOnly: values?.girlsOnly,
      rooms: values?.rooms?.map(room => {
        return {
          ...room,
          directionsIds: room?.directions?.map(direction => ({ label: direction.name, value: direction.id })),
        }
      }) as StudiosCreateRoomFormTypes[],
    }
  }
}
