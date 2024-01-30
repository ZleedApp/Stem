import type {Meta, StoryObj} from '@storybook/react';

import Button from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'label' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Regular: Story = {
  args: {
    label: 'Button',
  },
};

export const Outlined: Story = {
  args: {
    label: 'Button',
  },
};