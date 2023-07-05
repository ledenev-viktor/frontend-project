import webpack, { RuleSetRule } from "webpack";
import { BuildPaths } from "../build/types/config";
import path from "path";
import { buildCssLoaders } from "../build/loaders/buildCssLoaders";

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    entry: "",
    build: "",
    html: "",
    src: path.resolve(__dirname, "..", "..", "src"),
  };
  config.resolve?.modules?.push(paths.src);
  config.resolve?.extensions?.push(".ts", ".tsx");
  config.module?.rules?.push(buildCssLoaders(true));

  const imageRule = config?.module?.rules?.find((rule) => {
    if (typeof rule !== "string" && rule.test instanceof RegExp) {
      return rule.test.test(".svg");
    }
  });
  if (typeof imageRule !== "string") {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    imageRule!.exclude = /\.svg$/;
  }

  config?.module?.rules?.push({
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  });

  return config;
};
