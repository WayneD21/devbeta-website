import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import removeConsole from "vite-plugin-remove-console";
import obfuscatorPlugin from "vite-plugin-javascript-obfuscator";

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd());
  const BASE_URL_FE = env.VITE_FE_BASE || '/';

  if (command == "serve") {
    return {
      server: {
        host: [
          "0.0.0.0" // Lắng nghe trên tất cả các giao diện mạng
          // "localhost",
        ],
        port: 5174 // Cổng tùy chọn (mặc định là 5173)
        // allowedHosts:["hcodesupport.zapto.org"],
      },
      css: {
        devSourcemap: false
      },
      plugins: [react()]
    };
  }
  else{
    return {
      base: BASE_URL_FE,
      build: {
        outDir: "dist/user",
        emptyOutDir: true,
        esbuild: {
          drop: ["console", "debugger"]
        }
      },
      plugins: [
        react(),
        removeConsole(),
        obfuscatorPlugin({
          options: {
            apply: "build",
            identifierNamesGenerator: "hexadecimal",
            renameGlobals: true,
            transformObjectKeys: true,
            stringArray: true,
            stringArrayThreshold: 1,
            simplify: true,
            deadCodeInjection: true,
            splitStrings: true,
            disableConsoleOutput: true
          }
        })
      ],
    };
  }
});
