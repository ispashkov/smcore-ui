import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ClientsAutocomplete } from './clients-autocomplete.component'
import { AutocompleteOptionBaseListMock } from './clients-autocomplete.mock'

export default {
  component: ClientsAutocomplete,
} as ComponentMeta<typeof ClientsAutocomplete>

const Template: ComponentStory<typeof ClientsAutocomplete> = args => <ClientsAutocomplete {...args} />

export const Default = Template.bind({})
Default.args = {
  options: AutocompleteOptionBaseListMock,
}
