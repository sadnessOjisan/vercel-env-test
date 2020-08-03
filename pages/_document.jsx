import * as React from "react";
import Document, { Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    console.log("[_document.jsx] process.env", process.env);
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
