import glob from "glob";
import sharp from "sharp";

// options is optional
glob("public/story/**/*.png", {}, function (er, files) {
  files.forEach((file) => {
    sharp(file)
      .webp({ quality: 80 })
      .toFile(file + "_", (err, info) => {
        console.log(err, info);
      });
  });
});
