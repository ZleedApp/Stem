import { Meta, StoryObj } from "@storybook/react";
import Avatar from "./Avatar";

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {
    src: { control: "text" },
    outline: { control: "boolean" },
  },
  args: {
    size: 32,
  },
};

type Story = StoryObj<typeof Avatar>;

export const Regular: Story = {
  args: {
    outline: false,
  },
};

export const Outlined: Story = {
  args: {
    outline: true,
  },
};

export default meta;
