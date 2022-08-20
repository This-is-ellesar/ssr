import { Plugin } from "esbuild";
import { resolve } from "path";
// plugins
import { CleanPlugin } from "../plugins/CleanPlugin";

export const pathResolve = (...arg: string[]): string => {
  return resolve(__dirname, "..", "..", ...arg);
};

export const setESBuildPlugins = (isDev: boolean): Plugin[] => {
  const plugins: Plugin[] = [];

  if (!isDev) {
    plugins.push(CleanPlugin);
  }

  return plugins;
};
