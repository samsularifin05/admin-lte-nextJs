// }

import dynamic from "next/dynamic";
// const Layout = dynamic(() => import("@/components/themes"));
import "@/styles/index.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Suspense } from "react";
import { findMenuByPath, LoadingApp } from "@/components";
import AdminLayout from "@/layouts/adminLayout";
import PublicLayout from "@/layouts/publicLayouts";
import { useRouter } from "next/router";
import menu from "@/components/themes/sidebar/menu";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const isAdminPage = router.pathname.startsWith("/admin");

  const Layout = isAdminPage ? AdminLayout : PublicLayout;

  const activeMenu = findMenuByPath(menu, router.pathname);

  return (
    <Layout>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>{`${activeMenu?.title ?? "App"} Admin Template`}</title>
      </Head>

      <Suspense fallback={<LoadingApp />}>
        <Component {...pageProps} />
      </Suspense>
    </Layout>
  );
}
