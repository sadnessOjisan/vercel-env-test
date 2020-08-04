import React, { useEffect } from "react";

export default function App({ Component, pageProps }) {
  console.log("[app.jsx] process.env.customKey", process.env.customKey);
  console.log(
    "[app.jsx] process.env.undefiendedKey",
    process.env.undefiendedKey
  );
  console.log("[app.jsx] process.env.NODE_ENV", process.env.NODE_ENV);
  console.log(
    "[app.jsx] process.env.OREORE_NODE_ENV",
    process.env.OREORE_NODE_ENV
  );

  useEffect(() => {
    console.log(
      "[app.jsx]<useEffect> process.env.NODE_ENV",
      process.env.NODE_ENV
    );
  }, []);

  return <Component {...pageProps} />;
}
