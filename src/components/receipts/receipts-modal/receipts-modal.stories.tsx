import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ReceiptsModal } from './receipts-modal.component'
import { receiptsListMock } from '../receipts-list/receipts-list.mock'

export default {
  component: ReceiptsModal,
} as ComponentMeta<typeof ReceiptsModal>

const Template: ComponentStory<typeof ReceiptsModal> = args => <ReceiptsModal {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Чеки',
  receipts: receiptsListMock,
}
