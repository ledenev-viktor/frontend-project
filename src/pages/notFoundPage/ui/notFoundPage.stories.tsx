import type { Meta, StoryObj } from "@storybook/react";

import NotFoundPage from "./notFoundPage";

const meta = {
  title: "pages/NotFoundPage",
  component: NotFoundPage,
  args: {},
} satisfies Meta<typeof NotFoundPage>;

export default meta;

type Story = StoryObj<typeof NotFoundPage>;

export const Primary: Story = {
  render: () => <NotFoundPage />,
};
