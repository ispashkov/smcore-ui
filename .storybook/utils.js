import capitalize from 'lodash/capitalize'

export function genStoryName(name) {
  return name.split('-').map(capitalize).join('')
}
