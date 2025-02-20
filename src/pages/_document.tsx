import { LoadingApp } from "@/components";
import { Html, Head, Main, NextScript } from "next/document";
import { Suspense } from "react";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-body-tertiary">
        <div id="app" className="">
          <Suspense fallback={<LoadingApp />}>
            <Main />
            <NextScript />
          </Suspense>
        </div>
      </body>
    </Html>
  );
}
