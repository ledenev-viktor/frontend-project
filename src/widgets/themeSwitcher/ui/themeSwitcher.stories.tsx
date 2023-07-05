import type { Meta, StoryObj } from "@storybook/react";

import { ThemeSwitcher } from "./themeSwitcher";

const meta = {
  title: "wigets/ThemeSwitcher",
  component: ThemeSwitcher,
  args: {},
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;

type Story = StoryObj<typeof ThemeSwitcher>;

export const Primary: Story = {
  render: () => <ThemeSwitcher />,
};
