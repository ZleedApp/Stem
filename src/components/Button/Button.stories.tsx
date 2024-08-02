import type {Meta, StoryObj, Preview} from '@storybook/react';

import {Info, Command} from 'lucide-react';

import Button from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#F9F9FF',
        },
        {
          name: 'dark',
          value: '#0F172A',
        },
      ],
    },
  },
  argTypes: {
    style: { control: 'select' },
    size: { control: 'select' },
    label: { control: 'text' },
    icon: { control: 'function' },
    iconOnLeft: { control: 'boolean' },
    color: { control: 'select' },
  },
  args: {
    label: 'Button',
    style: 'full',
    icon: Command,
    iconOnLeft: false,
    size: 32,
    color: 'primary'
  },
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
    style: 'outlined',
    icon: Info,
    color: 'red'
  },
};

export default meta;