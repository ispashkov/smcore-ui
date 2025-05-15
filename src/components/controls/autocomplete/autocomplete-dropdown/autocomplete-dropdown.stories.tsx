import { ComponentMeta, ComponentStory } from '@storybook/react'

import { AutocompleteDropdown } from './autocomplete-dropdown.component'

export default {
  component: AutocompleteDropdown,
} as ComponentMeta<typeof AutocompleteDropdown>

const Template: ComponentStory<typeof AutocompleteDropdown> = args => (
  <AutocompleteDropdown isOpen>
    <li>menu item 1</li>
    <li>menu item 2</li>
    <li>menu item 3</li>
    <li>menu item 4</li>
    <li>menu item 5</li>
  </AutocompleteDropdown>
)

export const Default = Template.bind({})
