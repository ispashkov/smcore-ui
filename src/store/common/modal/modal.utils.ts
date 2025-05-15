import { Draft, PayloadAction } from '@reduxjs/toolkit'

import { AppModal, AppModalQueueItem } from '../../../types/modal.types'
import { isDef } from '../../../types/lang.types'
import { ModalState } from './modal.slice'
import { ModalShowPayload } from './modal.types'

export function show(state: Draft<ModalState>, action: PayloadAction<ModalShowPayload>): void {
  const { activeModal } = state
  const { modal, props } = action.payload

  if (!isDef(activeModal) || activeModal.modal !== modal) {
    if (isDef(activeModal)) {
      addToQueue(state, activeModal)
    }

    state.activeModal = { modal, props }
  }
}

export function close(state: Draft<ModalState>, action: PayloadAction<AppModal>): void {
  if (isDef(state.activeModal) && state.activeModal.modal === action.payload) {
    state.activeModal = null
    showNext(state)
  } else if (!removeFromQueue(state, action.payload)) {
    console.error('Unable to close modal: ', action.payload)
  }
}

export function closeLast(state: Draft<ModalState>): void {
  state.activeModal = null
  showNext(state)
}

export function replaceAll(state: Draft<ModalState>, action: PayloadAction<ModalShowPayload>): void {
  state.modalsQueue = null
  state.activeModal = action.payload
}

function showNext(state: Draft<ModalState>): void {
  const queueItem = isDef(state.modalsQueue) ? state.modalsQueue.shift() : null

  if (isDef(queueItem)) {
    state.activeModal = queueItem
  }
}

function addToQueue(state: Draft<ModalState>, queueItem: AppModalQueueItem): void {
  if (!isDef(state.modalsQueue)) {
    state.modalsQueue = [queueItem]
  } else if (isNotExist(state, queueItem)) {
    state.modalsQueue.push(queueItem)
  }
}

function isNotExist(state: Draft<ModalState>, queueItem: AppModalQueueItem): boolean {
  const { modalsQueue } = state
  return isDef(modalsQueue) && !modalsQueue.find(item => item.modal === queueItem.modal)
}

function removeFromQueue(state: Draft<ModalState>, modal: AppModal): boolean {
  const index = getModalIndex(state, modal)
  if (index !== -1) {
    const queue = state.modalsQueue!.slice()
    queue.splice(index, 1)
    state.modalsQueue = queue.length ? queue : null
    return true
  }

  console.error('Unable to remove modal from queue: ', modal)

  return false
}

function getModalIndex(state: Draft<ModalState>, modal: AppModal): number {
  return isDef(state.modalsQueue) ? state.modalsQueue.findIndex(item => item.modal === modal) : -1
}
