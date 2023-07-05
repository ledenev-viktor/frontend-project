import type { Meta, StoryObj } from "@storybook/react";

import { Loader } from "./loader";

const meta = {
  title: "Shared/Loader",
  component: Loader,
  args: {
    children: "this text",
  },
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof Loader>;

export const Primary: Story = {
  render: (args) => <Loader {...args} />,
};
Primary.args = {};

export const Secondary: Story = {
  render: (args) => <Loader {...args} />,
};
Secondary.args = {};
