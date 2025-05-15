import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ExercisesGroupWaitingClientsModal } from './exercises-group-waiting-clients-modal.component'
import { exercisesGroupWaitingClientsListMock } from '../exercises-group-waiting-clients-list/exercises-group-waiting-clients-list.mock'

export default {
  component: ExercisesGroupWaitingClientsModal,
} as ComponentMeta<typeof ExercisesGroupWaitingClientsModal>

const Template: ComponentStory<typeof ExercisesGroupWaitingClientsModal> = args => (
  <ExercisesGroupWaitingClientsModal {...args} />
)

export const Default = Template.bind({})
Default.args = {
  clients: exercisesGroupWaitingClientsListMock,
}
