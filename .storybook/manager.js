import { addons } from '@storybook/addons'
import { genStoryName } from './utils'

addons.setConfig({
  sidebar: {
    renderLabel: ({ name, type }) => (type === 'story' ? name : genStoryName(name)),
  },
})
