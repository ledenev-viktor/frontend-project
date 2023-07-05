import type { Meta, StoryObj } from "@storybook/react";

import { Navbar } from "./navbar";

const meta = {
  title: "wigets/Navbar",
  component: Navbar,
  args: {},
} satisfies Meta<typeof Navbar>;

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Primary: Story = {
  render: () => <Navbar />,
};
