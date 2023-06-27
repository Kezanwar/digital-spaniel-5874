import type { Meta, StoryObj } from '@storybook/react';

import { CapableSection } from './index';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'components/sections/CapableSection',
  component: CapableSection,
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof CapableSection>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {}
};

