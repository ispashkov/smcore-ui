import { ComponentMeta, ComponentStory } from '@storybook/react'

import { ClientsSearch } from './clients-search.component'

export default {
  component: ClientsSearch,
} as ComponentMeta<typeof ClientsSearch>

const Template: ComponentStory<typeof ClientsSearch> = args => <ClientsSearch {...args} />

export const Default = Template.bind({})
Default.args = {}
