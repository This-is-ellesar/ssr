import { Plugin } from "esbuild";
import { rm } from "fs/promises";

// Стандартная схема плагина
export const CleanPlugin: Plugin = {
  name: "CleanPlugin",
  setup(build) {
    // Вызываем хук в плагине
    build.onStart(async () => {
      try {
        // Достаем конечную директорию из конфига
        const outDir: string | undefined = build.initialOptions.outdir;

        // Удаляем директорию перед тем, как собрать приложение
        if (outDir)
          await rm(outDir, { recursive: true }).catch(() => {
            return;
          });
      } catch (error) {
        console.error(error);
      }
    });
  },
};
