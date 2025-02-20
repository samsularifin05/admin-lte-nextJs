import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-body-tertiary">
        <div id="app" className="">
          <Main />
          <NextScript />
        </div>
      </body>
    </Html>
  );
}
