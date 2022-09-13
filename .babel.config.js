module.exports = (api) => {
  api.cache.using(() => `${process.env.NODE_ENV}_${process.env.APP_ENV}`);

  return {
    plugins: [
      [
        "module-resolver",
        {
          root: ["."],
          alias: {
            "@": "./src",
          },
        },
      ],
    ],
  };
};
