import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Autocomplete } from './autocomplete.component'
import { AutocompleteOptionBaseListMock } from './autocomplete.mock'

export default {
  component: Autocomplete,
} as ComponentMeta<typeof Autocomplete>

const Template: ComponentStory<typeof Autocomplete> = args => <Autocomplete {...args} />

export const Empty = Template.bind({})
Empty.args = {}

export const WithData = Template.bind({})
WithData.args = {
  options: AutocompleteOptionBaseListMock,
}

export const Loading = Template.bind({})
Loading.args = {
  ...WithData.args,
  loading: true,
}
