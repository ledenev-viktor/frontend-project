import type { Decorator, Preview, StoryFn } from "@storybook/react";
import "../../src/app/styles/index.scss";
import React from "react";
import { Theme } from "../../src/app/providers/themeProviders";
import { globalDecorators } from "./decorators";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Глобальные темы для компонентов",
    defaultValue: "LIGHT",
    toolbar: {
      title: "Theme",
      icon: "circlehollow",
      items: ["DARK", "LIGHT"],
      dynamicTitle: true,
    },
  },
  // locale: {
  //   description: "Internationalization locale",
  //   defaultValue: "ru",
  //   toolbar: {
  //     icon: "globe",
  //     items: [
  //       { value: "en", right: "🇺🇸", title: "English" },
  //       { value: "ru", right: "ru", title: "Russian" },
  //     ],
  //   },
  // },
};

export const decorators = globalDecorators;
