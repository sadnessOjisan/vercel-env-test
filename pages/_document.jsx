import * as React from "react";
import Document, { Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    console.log("[_document.jsx] process.env.NODE_ENV", process.env.NODE_ENV);
    console.log(
      "[_document.jsx] process.env.OREORE_NODE_ENV",
      process.env.OREORE_NODE_ENV
    );
    console.log(
      "[_document.jsx] process.env.NEXT_PUBLIC_SET_FROM_CONSOLE",
      process.env.NEXT_PUBLIC_SET_FROM_CONSOLE
    );
    console.log(
      "[_document.jsx] process.env.NEXT_PUBLIC_UNSET_FROM_CONSOLE",
      process.env.NEXT_PUBLIC_UNSET_FROM_CONSOLE
    );
    return (
      <html>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
