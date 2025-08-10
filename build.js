const esbuild = require("esbuild");
const copyFiles = require("copyfiles");

async function build() {
  await esbuild.build({
    entryPoints: ["background.js", "content-script.js", "injection-script.js", "popup.js"],
    outdir: "dist",
    bundle: true,
    minify: false,
    sourcemap: true,
    platform: "browser",
  }),
    copyFiles(["popup.html", "popup.css", "manifest.json", "assets/**/*", "dist"], { up: 0 }, () =>
      console.log("Copied static files to dist/")
    );
}

build().catch((err) => {
  console.error(err);
  process.exit(1);
});
