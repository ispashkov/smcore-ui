import { DefaultOptionType } from 'antd/lib/select'

import { StudiosRoomsApi } from '../api/types/studios-rooms-api.types'
import { isDefAndNotEmpty, Nullable } from '../types/lang.types'
import { StudiosRoomsTagI } from '../components/studios-rooms-tags/studios-rooms-tag/studios-rooms-tag.types'

export function mapStudiosRoomsToOptions(
  studiosRooms: Nullable<StudiosRoomsApi.StudioRoom[]>
): DefaultOptionType[] | undefined {
  if (isDefAndNotEmpty(studiosRooms)) {
    return studiosRooms.map((studioRoom: StudiosRoomsApi.StudioRoom) => ({
      value: studioRoom.id,
      label: studioRoom.name,
    }))
  }
}

export function mapStudiosRoomsToTags(
  studiosRooms: Nullable<StudiosRoomsApi.StudioRoom[]>
): Nullable<StudiosRoomsTagI[]> {
  if (isDefAndNotEmpty(studiosRooms)) {
    return studiosRooms.map((studioRoom: StudiosRoomsApi.StudioRoom) => ({
      id: studioRoom.id,
      title: studioRoom.name,
      color: studioRoom.color,
    }))
  }

  return null
}
