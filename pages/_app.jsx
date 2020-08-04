import React, { useEffect } from "react";

export default function _app({ Component, pageProps }) {
  console.log("[_app.jsx] process.env.customKey", process.env.customKey);
  console.log(
    "[_app.jsx] process.env.undefiendedKey",
    process.env.undefiendedKey
  );
  console.log("[_app.jsx] process.env.NODE_ENV", process.env.NODE_ENV);
  console.log(
    "[_app.jsx] process.env.OREORE_NODE_ENV",
    process.env.OREORE_NODE_ENV
  );
  console.log(
    "[_app.jsx] process.env.NEXT_PUBLIC_SET_FROM_CONSOLE",
    process.env.NEXT_PUBLIC_SET_FROM_CONSOLE
  );
  console.log(
    "[_app.jsx] process.env.NEXT_PUBLIC_UNSET_FROM_CONSOLE",
    process.env.NEXT_PUBLIC_UNSET_FROM_CONSOLE
  );

  useEffect(() => {
    console.log(
      "[_app.jsx]<useEffect> process.env.NODE_ENV",
      process.env.NODE_ENV
    );
  }, []);

  return <Component {...pageProps} />;
}
