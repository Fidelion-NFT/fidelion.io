import fs from "fs/promises";
import glob from "glob";
import sharp from "sharp";

// options is optional
glob("public/story/**/*.png", {}, function (er, files) {
  files.forEach((file) => {
    sharp(file)
      .webp({ quality: 80 })
      .resize({ width: 1280, withoutEnlargement: true })
      .toFile(file + "_", async (err, info) => {
        console.log(err, info);

        await fs.unlink(file);

        await fs.rename(file + "_", file);
      });
  });
});
