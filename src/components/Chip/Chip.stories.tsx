import type {Meta, StoryObj} from '@storybook/react';

import { Gamepad2 } from 'lucide-react';

import Chip from './Chip';

const meta: Meta<typeof Chip> = {
  component: Chip,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    icon: { control: 'function' },
  },
  args: {
    label: 'Chip'
  }
};

type Story = StoryObj<typeof Chip>;

export const WithoutIcon: Story = {
  args: {
    label: 'Minecraft'
  },
};

export const WithIcon: Story = {
  args: {
    label: 'Gaming',
    icon: Gamepad2,
  },
};

export default meta;