import type { Meta, StoryObj } from '@storybook/react';

import { CustomLink } from './index';
import { ColouredBG } from './CustomLink.decorators';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'components/buttons/CustomLink',
  component: CustomLink,
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof CustomLink>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Branded: Story = {
  args: {
    variant: 'branded',
    to: '/',
    children: 'Home'
  }
};

export const White: Story = {
  args: {
    variant: 'white',
    to: '/',
    children: 'Home'
  },
  decorators: [ColouredBG]
};
