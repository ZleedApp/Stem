import { Meta, StoryObj } from "@storybook/react";
import StatusBadge from "./StatusBadge";

const meta: Meta<typeof StatusBadge> = {
  component: StatusBadge,
  tags: ["autodocs"],
  args: {
    style: "live",
  },
};

type Story = StoryObj<typeof StatusBadge>;

export const Live: Story = {
  args: {
    style: "live",
  },
};

export const Rediff: Story = {
  args: {
    style: "rediff",
  },
};

export const Offline: Story = {
  args: {
    style: "offline",
  },
};

export default meta;
