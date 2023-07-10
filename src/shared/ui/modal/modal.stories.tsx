import type { Meta, StoryObj } from "@storybook/react";

import { Modal } from "./modal";

const meta = {
  title: "Shared/Modal",
  component: Modal,
  args: {
    children: "this text",
  },
  argTypes: {},
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
  render: (args) => {
    return <Modal {...args} />;
  },
  args: {
    isOpend: true,
    children: "modal text",
  },
};
