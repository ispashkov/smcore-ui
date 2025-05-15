import * as React from 'react'
import { useDispatch } from 'react-redux'

import { ModalConfirm } from '../../../components/modals/modal-confirm/modal-confirm.component'
import { modalActions } from '../../../store/common/modal/modal.slice'
import { AppModalBaseProps } from '../../../types/modal.types'

export const ScheduleManagementPageModalError: React.FC<AppModalBaseProps> = () => {
  const dispatch = useDispatch()

  const onCancelHandler = React.useCallback((): void => {
    dispatch(modalActions.closeLast())
  }, [dispatch])

  return (
    <ModalConfirm
      type="error"
      title="Удаление невозможно"
      description="Сначала необходимо удалить активные записи на данное направление"
      onSubmit={onCancelHandler}
      onCancel={onCancelHandler}
    />
  )
}
