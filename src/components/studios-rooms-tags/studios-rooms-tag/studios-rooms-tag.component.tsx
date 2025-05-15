import * as React from 'react'
import { Tag } from 'antd'

import { StudiosRoomsTagActions, StudiosRoomsTagI } from './studios-rooms-tag.types'
import './studios-rooms-tag.styles.less'

interface Props extends StudiosRoomsTagI, StudiosRoomsTagActions {
  isSelected?: boolean
}

export const StudiosRoomsTag: React.FC<Props> = props => {
  const { id, title, color, isSelected } = props
  const { onSelect, onReset } = props

  const onClickHandler = React.useCallback((): void => {
    onSelect(id)
  }, [id, onSelect])

  return (
    <Tag
      className="studios-rooms-tag"
      color={color.toLowerCase()}
      onClick={onClickHandler}
      onClose={onReset}
      closable={isSelected}
      visible={true}
    >
      {title}
    </Tag>
  )
}
