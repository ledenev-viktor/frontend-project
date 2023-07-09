// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import { Button, ButtonSize, ThemeButton } from "./button";

const meta = {
  title: "Shared/Button",
  component: Button,
  args: {
    children: "this text",
  },
  argTypes: {
    size: {
      options: [ButtonSize.M, ButtonSize.L, ButtonSize.XL],
      control: { type: "select" }, // Automatically inferred when 'options' is defined
    },
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

export const Background: Story = {
  render: (args) => <Button {...args} />,
};
Background.args = {
  children: "text",
  theme: ThemeButton.BACKGROUND,
};

export const BackgroundInverted: Story = {
  render: (args) => <Button {...args} />,
};
BackgroundInverted.args = {
  children: "text",
  theme: ThemeButton.BACKGROUND_INVERTED,
};

// export const Square: Story = {
//   render: (args) => <Button {...args} />,
// };
// Square.args = {
//   children: "<",
//   theme: ThemeButton.BACKGROUND,
//   square: true,
//   // size: select('size', SIZES, 'm'),
// };

export const Square: Story = {
  render: (args) => {
    return <Button {...args} />;
  },
  args: {
    children: "<",
    size: ButtonSize.M,
    square: true,
  },
};
