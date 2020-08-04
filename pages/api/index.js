export default (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(
    JSON.stringify({
      NODE_ENV: process.env.NODE_ENV,
      OREORE_NODE_ENV: process.env.OREORE_NODE_ENV || "",
    })
  );
};
