import { AppModalBaseProps } from '../../../types/modal.types'

export interface ModalConfirmProps extends AppModalBaseProps {
  type: ModalConfirmType
  title: string
  description: string
  loading?: boolean
  onSubmit: () => void
  submitText?: string
  cancelText?: string
}

export type ModalConfirmType = 'error' | 'warning' | 'info' | 'success'
