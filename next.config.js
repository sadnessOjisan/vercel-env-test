console.log("[next.config.js] process.env.NODE_ENV", process.env.NODE_ENV);
console.log(
  "[next.config.js] process.env.OREORE_NODE_ENV",
  process.env.OREORE_NODE_ENV
);

module.exports = {
  env: {
    customKey: "my-value",
  },
};
