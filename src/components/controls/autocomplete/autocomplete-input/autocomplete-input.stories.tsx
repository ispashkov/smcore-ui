import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { AutocompleteInput } from './autocomplete-input.component'

export default {
  component: AutocompleteInput,
} as ComponentMeta<typeof AutocompleteInput>

const Template: ComponentStory<typeof AutocompleteInput> = args => <AutocompleteInput {...args} />

export const Default = Template.bind({})

export const Loading = Template.bind({})
Loading.args = {
  ...Default.args,
}
