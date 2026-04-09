import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve(process.cwd());
const assetsDir = path.join(root, "assets");
const outDir = path.join(assetsDir, "optimized");

const inputs = [
  { name: "slider1", file: "slider1.jpg" },
  { name: "slider2", file: "slider2.jpg" }
];

const widths = [800, 1200, 1600];

async function ensureCleanDir(dir) {
  await fs.mkdir(dir, { recursive: true });
  const entries = await fs.readdir(dir);
  await Promise.all(entries.map((e) => fs.unlink(path.join(dir, e))));
}

function outName(base, width, ext) {
  return `${base}-${width}.${ext}`;
}

async function buildOne({ name, file }) {
  const inputPath = path.join(assetsDir, file);
  const img = sharp(inputPath, { failOnError: false });

  for (const w of widths) {
    const resized = img.clone().resize({
      width: w,
      withoutEnlargement: true
    });

    await resized
      .clone()
      .webp({ quality: 72, effort: 5 })
      .toFile(path.join(outDir, outName(name, w, "webp")));

    await resized
      .clone()
      .avif({ quality: 45, effort: 5 })
      .toFile(path.join(outDir, outName(name, w, "avif")));
  }
}

async function main() {
  await ensureCleanDir(outDir);
  await Promise.all(inputs.map(buildOne));
  console.log(`OK: imágenes optimizadas en ${path.relative(root, outDir)}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

