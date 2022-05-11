module.exports = {
  apps: [
    {
      name: "cms",
      exec_mode: "cluster",
      instances: "max",
      script: "serve.js",
    },
  ],
};
