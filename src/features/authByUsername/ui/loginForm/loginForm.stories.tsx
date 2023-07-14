import type { Meta, StoryObj } from "@storybook/react";

import { LoginForm } from "./loginForm";

const meta = {
  title: "Features/LoginForm",
  component: LoginForm,
  args: {},
  argTypes: {},
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {
  render: (args) => <LoginForm {...args} />,
};
Primary.args = {};
