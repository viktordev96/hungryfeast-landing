import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve(process.cwd());
const assetsDir = path.join(root, "assets");
const optimizedDir = path.join(assetsDir, "optimized");
const iconsDir = path.join(root, "icons");

const inputPath = path.join(assetsDir, "logo.png");

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function writeWebAssets() {
  await ensureDir(optimizedDir);

  const base = sharp(inputPath, { failOnError: false });
  const widths = [160, 240, 400];

  for (const w of widths) {
    const resized = base.clone().resize({ width: w, withoutEnlargement: true });
    await resized
      .clone()
      .webp({ quality: 80, effort: 5 })
      .toFile(path.join(optimizedDir, `logo-${w}.webp`));
    await resized
      .clone()
      .avif({ quality: 50, effort: 5 })
      .toFile(path.join(optimizedDir, `logo-${w}.avif`));
  }
}

async function cleanIconsDir() {
  await ensureDir(iconsDir);
  const entries = await fs.readdir(iconsDir);
  await Promise.all(entries.map((e) => fs.unlink(path.join(iconsDir, e))));
}

async function writeIcons() {
  await cleanIconsDir();

  const base = sharp(inputPath, { failOnError: false }).flatten({ background: "#0b0b0b" });

  const writePng = async (name, size) => {
    await base
      .clone()
      .resize({ width: size, height: size, fit: "cover", position: "centre" })
      .png({ compressionLevel: 9 })
      .toFile(path.join(iconsDir, name));
  };

  await writePng("favicon-16.png", 16);
  await writePng("favicon-32.png", 32);
  await writePng("apple-touch-icon.png", 180);
  await writePng("android-chrome-192.png", 192);
  await writePng("android-chrome-512.png", 512);
}

async function writeManifest() {
  const manifest = {
    name: "Hungry Feast",
    short_name: "Hungry Feast",
    start_url: ".",
    display: "standalone",
    background_color: "#0b0b0b",
    theme_color: "#0b0b0b",
    icons: [
      { src: "icons/android-chrome-192.png", sizes: "192x192", type: "image/png" },
      { src: "icons/android-chrome-512.png", sizes: "512x512", type: "image/png" }
    ]
  };

  await fs.writeFile(path.join(root, "site.webmanifest"), JSON.stringify(manifest, null, 2) + "\n", "utf8");
}

async function main() {
  await writeWebAssets();
  await writeIcons();
  await writeManifest();
  console.log("OK: logo optimizado + favicons + manifest generados");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

