import React from "react";

export default function App({ Component, pageProps }) {
  console.log("[app.jsx] process.env", process.env);
  return <Component {...pageProps} />;
}
