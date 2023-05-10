import { PageMain } from './PageMain'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof PageMain> = {
    title: 'Pages/PageMain',
    component: PageMain,
    argTypes: {},
    parameters: {
        layout: 'fullscreen'
    },
}
export default meta

type Story = StoryObj<typeof PageMain>

export const Empty: Story = {
    args: {}
}
