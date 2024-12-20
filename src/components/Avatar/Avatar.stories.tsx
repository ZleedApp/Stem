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

export const Clear: Story = {
  args: {
    outline: false,
  },
};

export const Live: Story = {
  args: {
    outline: true,
    style: "live",
  },
};

export const Rediff: Story = {
  args: {
    outline: true,
    style: "rediff",
  },
};

export const Offline: Story = {
  args: {
    outline: true,
    style: "offline",
  },
};

export default meta;
