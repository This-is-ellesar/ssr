import { pathResolve, setESBuildPlugins } from "../heplers";
// types
import { BuildOptions } from "esbuild";

const mode = process.env.MODE || "dev";
const isDev = mode === "dev";
const isProd = mode === "prod";

const esBuildconfig: BuildOptions = {
  outdir: pathResolve("dist"),
  entryPoints: [pathResolve("client", "src", "index.tsx")],
  entryNames: "[dir]/bundle.[name]-[hash]",
  bundle: true,
  allowOverwrite: true,
  minify: isProd,
  sourcemap: isDev,
  tsconfig: pathResolve("tsconfig.json"),
  loader: {
    ".png": "file",
  },
  plugins: setESBuildPlugins(isDev),
};

export default esBuildconfig;
