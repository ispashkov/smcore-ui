import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ReceiptsList } from './receipts-list.component'
import { receiptsListMock } from './receipts-list.mock'

export default {
  component: ReceiptsList,
} as ComponentMeta<typeof ReceiptsList>

const Template: ComponentStory<typeof ReceiptsList> = args => <ReceiptsList {...args} />

export const Default = Template.bind({})
Default.args = {
  receipts: receiptsListMock,
}
