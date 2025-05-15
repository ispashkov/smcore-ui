import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ExercisesGroupWaitingClientsList } from './exercises-group-waiting-clients-list.component'
import { exercisesGroupWaitingClientsListMock } from './exercises-group-waiting-clients-list.mock'

export default {
  component: ExercisesGroupWaitingClientsList,
} as ComponentMeta<typeof ExercisesGroupWaitingClientsList>

const Template: ComponentStory<typeof ExercisesGroupWaitingClientsList> = args => (
  <ExercisesGroupWaitingClientsList {...args} />
)

export const Default = Template.bind({})
Default.args = {
  clients: exercisesGroupWaitingClientsListMock,
}
