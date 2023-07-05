import React, { FC } from "react";
import type { StoryContext } from "@storybook/react";
import { Theme } from "../../src/app/providers/themeProviders";
import { BrowserRouter } from "react-router-dom";

const getTheme = (themeName: string) => {
  return Theme[themeName];
};

export const ThemeDecorator = (Story: FC, context: StoryContext) => {
  const theme = getTheme(context.globals.theme);
  return (
    <div className={`app ${theme}`}>
      <Story />
    </div>
  );
};

export const RounterDecorator = (Story: FC) => {
  return (
    <BrowserRouter>
      <Story />
    </BrowserRouter>
  );
};

export const globalDecorators = [RounterDecorator, ThemeDecorator];
