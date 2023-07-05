import type { Meta, StoryObj } from "@storybook/react";

import MainPage from "./mainPage";

const meta = {
  title: "pages/MainPage",
  component: MainPage,
  args: {},
} satisfies Meta<typeof MainPage>;

export default meta;

type Story = StoryObj<typeof MainPage>;

export const Primary: Story = {
  render: () => <MainPage />,
};
