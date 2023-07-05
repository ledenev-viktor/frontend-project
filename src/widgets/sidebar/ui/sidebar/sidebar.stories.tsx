import type { Meta, StoryObj } from "@storybook/react";

import { Sidebar } from "./sidebar";

const meta = {
  title: "wigets/Sidebar",
  component: Sidebar,
  args: {},
} satisfies Meta<typeof Sidebar>;

export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Primary: Story = {
  render: () => <Sidebar />,
};
