import type { Meta, StoryObj } from '@storybook/react';

import { ChevronButton } from './index';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'components/buttons/ChevronButton',
  component: ChevronButton,
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof ChevronButton>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {}
};

