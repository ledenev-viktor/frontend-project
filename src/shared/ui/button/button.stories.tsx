// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import { Button, ThemeButton } from "./button";

const meta = {
  title: "Shared/Button",
  component: Button,
  args: {
    children: "this text",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => <Button>Text</Button>,
};
export const Clear: Story = {
  render: () => <Button children={"Text"} theme={ThemeButton.CLEAR} />,
};
export const Outline: Story = {
  render: (args) => <Button {...args} />,
};
Outline.args = {
  children: "Text++",
  theme: ThemeButton.OUTLINE,
};
