import type { Meta, StoryObj } from "@storybook/react";

import { PageError } from "./pageError";

const meta = {
  title: "wigets/PageError",
  component: PageError,
  args: {},
} satisfies Meta<typeof PageError>;

export default meta;

type Story = StoryObj<typeof PageError>;

export const Primary: Story = {
  render: () => <PageError />,
};
