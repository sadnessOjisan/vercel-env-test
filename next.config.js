console.log("[next.config.js] process.env.NODE_ENV", process.env.NODE_ENV);
console.log(
  "[next.config.js] process.env.OREORE_NODE_ENV",
  process.env.OREORE_NODE_ENV
);
console.log(
  "[next.config.js] process.env.NEXT_PUBLIC_SET_FROM_CONSOLE",
  process.env.NEXT_PUBLIC_SET_FROM_CONSOLE
);
console.log(
  "[next.config.js] process.env.NEXT_PUBLIC_UNSET_FROM_CONSOLE",
  process.env.NEXT_PUBLIC_UNSET_FROM_CONSOLE
);

module.exports = {
  env: {
    customKey: "my-value",
  },
};
