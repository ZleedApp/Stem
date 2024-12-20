import { Meta, StoryObj, Preview } from "@storybook/react";
import Thumbnail from "./Thumbnail";

const meta: Meta<typeof Thumbnail> = {
  component: Thumbnail,
  tags: ["autodocs"],
  argTypes: {
    channel_name: { control: "text" },
    channel_avatar: { control: "text" },
    title: { control: "text" },
    viewers: { control: "number" },
    preview: { control: "text" },
  },
  args: {
    channel_name: "Channel Name",
    channel_avatar: "",
    title: "Stream title: Can't think of anything!",
    viewers: 42,
    preview: "",
    type: "live",
  },
};

type Story = StoryObj<typeof Thumbnail>;

export const Live: Story = {
  args: {
    channel_name: "Channel Name",
    channel_avatar: "",
    title: "Stream title: Can't think of anything!",
    viewers: 42,
    preview: "",
    type: "live",
  },
};

export const Rediff: Story = {
  args: {
    channel_name: "Channel Name",
    channel_avatar: "",
    title: "Stream title: Can't think of anything!",
    viewers: 42,
    preview: "",
    type: "rediff",
  },
};

export const Offline: Story = {
  args: {
    channel_name: "Channel Name",
    channel_avatar: "",
    title: "Stream title: Can't think of anything!",
    viewers: 42,
    preview: "",
    type: "offline",
  },
};

export default meta;
