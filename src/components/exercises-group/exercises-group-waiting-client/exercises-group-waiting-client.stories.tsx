import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ExercisesGroupWaitingClient } from './exercises-group-waiting-client.component'

export default {
  component: ExercisesGroupWaitingClient,
} as ComponentMeta<typeof ExercisesGroupWaitingClient>

const Template: ComponentStory<typeof ExercisesGroupWaitingClient> = args => <ExercisesGroupWaitingClient {...args} />

export const Default = Template.bind({})
Default.args = {
  name: 'Антонина Христорождественская',
  phone: '+7 995 099 95 59',
}
