import type {Meta, StoryObj} from '@storybook/react';

import {Info, Command} from 'lucide-react';

import Button from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    outlined: { control: 'boolean' },
    icon: { control: 'function' },
    color: { control: 'select' },
  },
  args: {
    label: 'Button',
    outlined: false,
    icon: Command,
    color: 'primary'
  }
};

type Story = StoryObj<typeof Button>;

export const Regular: Story = {
  args: {
    label: 'Button',
    icon: Info,
    color: 'primary'
  },
};

export const Outlined: Story = {
  args: {
    label: 'Button',
    outlined: true,
    icon: Info,
    color: 'red'
  },
};

export default meta;