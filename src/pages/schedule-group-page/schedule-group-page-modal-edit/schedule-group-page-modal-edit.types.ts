import { AppModalBaseProps } from '../../../types/modal.types'

export interface ScheduleGroupPageModalEditProps extends AppModalBaseProps {
  scheduleId: string
  studioRoomId: string
  studioOffset: number
}
