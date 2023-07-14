import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "./input";

const meta = {
  title: "Shared/Input",
  component: Input,
  args: {
    value: "this text",
    placeholder: "Enter name",
  },
  argTypes: {},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  render: (args) => <Input {...args} />,
};
Primary.args = {
  value: "Text",
  placeholder: "Введите текст",
};
