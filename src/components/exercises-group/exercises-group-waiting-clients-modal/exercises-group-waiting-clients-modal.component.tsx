import * as React from 'react'
import { Modal } from 'antd'

import { isDefAndNotEmpty } from '../../../types/lang.types'
import { Search } from '../../controls/search/search.component'
import { PageEmpty } from '../../page/page-empty/page-empty.component'
import { PageLoader } from '../../page/page-loader/page-loader.component'
import { ExercisesGroupWaitingClientsList } from '../exercises-group-waiting-clients-list/exercises-group-waiting-clients-list.component'
import { ExercisesGroupWaitingClientsModalProps } from './exercises-group-waiting-clients-modal.types'
import './exercises-group-waiting-clients-modal.styles.less'

export const ExercisesGroupWaitingClientsModal: React.FC<ExercisesGroupWaitingClientsModalProps> = props => {
  const { clients, loading = false } = props
  const { onSearch, onBook, onCancel } = props

  return (
    <Modal
      className="exercises-group-waiting-clients-modal"
      title="Список ожидания"
      open={true}
      footer={null}
      onCancel={onCancel}
    >
      <Search
        className="exercises-group-waiting-clients-modal__search"
        placeholder="Поиск по ФИО, номеру телефона"
        onChange={onSearch}
      />

      {loading ? (
        <PageLoader className="exercises-group-waiting-clients-modal__loader" />
      ) : (
        <>
          {isDefAndNotEmpty(clients) ? (
            <ExercisesGroupWaitingClientsList clients={clients} onBook={onBook} />
          ) : (
            <PageEmpty description="Клиенты не найдены" />
          )}
        </>
      )}
    </Modal>
  )
}
