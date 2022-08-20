import ESbuild from "esbuild";
import { resolve } from "path";

ESbuild.build({
  platform: "node",
  bundle: true,
  loader: {
    ".png": "file",
  },
  entryPoints: [resolve(__dirname, "..", "..", "server", "src", "index.tsx")],
  outdir: resolve(__dirname, "..", "..", "dist"),
});
