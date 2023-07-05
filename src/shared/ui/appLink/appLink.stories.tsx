import type { Meta, StoryObj } from "@storybook/react";

import { AppLink, AppLinkTheme } from "./appLink";

const meta = {
  title: "Shared/AppLink",
  component: AppLink,
  args: {
    children: "this text",
  },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
  render: (args) => <AppLink {...args} />,
};
Primary.args = {
  children: "text",
  theme: AppLinkTheme.PRIMARY,
  to: "#",
};

export const Secondary: Story = {
  render: (args) => <AppLink {...args} />,
};
Secondary.args = {
  children: "Text++",
  theme: AppLinkTheme.SECONDARY,
  to: "#",
};
