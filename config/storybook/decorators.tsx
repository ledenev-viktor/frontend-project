import React, { FC } from "react";
import type { StoryContext } from "@storybook/react";
import { Theme } from "../../src/app/providers/themeProviders";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "../../src/app/providers/themeProviders";

const getTheme = (themeName: string) => {
  return Theme[themeName];
};

export const ThemeDecorator = (Story: FC, context: StoryContext) => {
  const theme = getTheme(context.globals.theme);
  return (
    <ThemeProvider initialTheme={theme}>
      <div className={`app ${theme}`}>
        <Story />
      </div>
    </ThemeProvider>
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
