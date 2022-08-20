import ESbuild from "esbuild";
import config from "./esbuild-config";

ESbuild.build(config).catch(console.log);
