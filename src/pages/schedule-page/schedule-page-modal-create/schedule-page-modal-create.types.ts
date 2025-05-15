import { AppModalBaseProps } from '../../../types/modal.types'

export interface SchedulePageModalCreateProps extends AppModalBaseProps {
  studioId: string
  studioOffset: number
  studioRoomId: string
}
