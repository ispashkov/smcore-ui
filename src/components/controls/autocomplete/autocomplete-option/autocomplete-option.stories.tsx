import { ComponentMeta, ComponentStory } from '@storybook/react'

import { AutocompleteOption } from './autocomplete-option.component'

export default {
  component: AutocompleteOption,
} as ComponentMeta<typeof AutocompleteOption>

const Template: ComponentStory<typeof AutocompleteOption> = args => <AutocompleteOption {...args} />

export const Default = Template.bind({})
Default.args = {}
