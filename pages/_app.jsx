import React from "react";

export default function App({ Component, pageProps }) {
  console.log("[app.jsx] process.env.customKey", process.env.customKey);
  console.log(
    "[app.jsx] process.env.undefiendedKey",
    process.env.undefiendedKey
  );
  console.log("[app.jsx] process.env.NODE_ENV", process.env.NODE_ENV);
  console.log(
    "[app.jsx] JSON.parse(process.env.NODE_ENV)",
    JSON.parse(process.env.NODE_ENV)
  );
  return <Component {...pageProps} />;
}
