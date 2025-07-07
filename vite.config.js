import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";
import fs from "fs";
import path from "path";

function getInputFiles() {
  const dir = path.resolve(__dirname);
  const files = fs.readdirSync(dir);
  const input = {};

  files.forEach((file) => {
    if (
      file.endsWith(".js") &&
      !file.includes("node_modules") &&
      !file.startsWith("vite.config") &&
      file !== "package.json" &&
      file !== "package-lock.json" &&
      file !== "README.md"
    ) {
      const name = path.parse(file).name;
      input[name] = file;
    }
  });

  return input;
}

export default defineConfig({
  plugins: [
    viteStaticCopy({
      targets: [
        { src: "popup.html", dest: "" },
        { src: "popup.css", dest: "" },
        { src: "assets/*", dest: "assets" },
        { src: "manifest.json", dest: "." },
      ],
    }),
  ],
  build: {
    rollupOptions: {
      input: getInputFiles(),
      output: {
        entryFileNames: "[name].js",
      },
    },
    outDir: "dist",
    emptyOutDir: true,
  },
});
