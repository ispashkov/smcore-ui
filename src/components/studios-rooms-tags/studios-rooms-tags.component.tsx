import * as React from 'react'

import { NString } from '../../types/lang.types'
import { StudiosRoomsTag } from './studios-rooms-tag/studios-rooms-tag.component'
import { StudiosRoomsTagActions, StudiosRoomsTagI } from './studios-rooms-tag/studios-rooms-tag.types'

interface Props extends StudiosRoomsTagActions {
  className?: string
  tags: StudiosRoomsTagI[]
  selectedId?: NString
}

export const StudiosRoomsTags: React.FC<Props> = props => {
  const { tags, selectedId } = props
  const { onSelect, onReset } = props

  return (
    <>
      {tags.map(tag => (
        <StudiosRoomsTag
          key={tag.id}
          id={tag.id}
          title={tag.title}
          isSelected={tag.id === selectedId}
          onSelect={onSelect}
          onReset={onReset}
          color={tag.color}
        />
      ))}
    </>
  )
}
