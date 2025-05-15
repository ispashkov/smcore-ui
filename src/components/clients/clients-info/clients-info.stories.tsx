import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ClientsInfo } from './clients-info.component'

export default {
  component: ClientsInfo,
} as ComponentMeta<typeof ClientsInfo>

const Template: ComponentStory<typeof ClientsInfo> = args => <ClientsInfo {...args} />

export const Default = Template.bind({})
Default.args = {
  name: 'Антонина Христорождественская',
  phone: '+7 995 099 95 59',
}
