import type { Meta, StoryObj } from "@storybook/react";

import AboutPage from "./aboutPage";

const meta = {
  title: "pages/AboutPage",
  component: AboutPage,
  args: {},
} satisfies Meta<typeof AboutPage>;

export default meta;

type Story = StoryObj<typeof AboutPage>;

export const Primary: Story = {
  render: () => <AboutPage />,
};
